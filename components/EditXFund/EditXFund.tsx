import {useForm  } from "react-hook-form";
import {useState,useRef,useEffect} from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid'
import Notification from "../Notification/Notification"
import { Web3Storage, File } from "web3.storage";
import { Database } from "@tableland/sdk";
import { useWalletClient,useAccount } from "wagmi";
import { insertXFund } from "../../tableland/tableland";
//import axios from "axios";
import { format ,parseISO} from 'date-fns';
import { ethers } from 'ethers';
import { XFundAddress,XFundABI } from "../../contract";
import { useNetwork } from 'wagmi'
import { polygonMumbai } from "viem/chains";
import { useSigner } from "../../hooks/useEthersAccounts";

export default function EditXFund() {
  const { address, isConnecting, isDisconnected } = useAccount()
  const { chain } = useNetwork()
  const signer = useSigner();

  const { data: walletClient } = useWalletClient()
  const XFundPicRef = useRef("");
  const [preview, setPreview] = useState('')
  const [selectedFile, setSelectedFile] = useState(undefined)
  const [storage] = useState(
    new Web3Storage({ token: process.env.NEXT_PUBLIC_WEB3_STORAGE_KEY })
  );
 
   // NOTIFICATIONS functions
   const [notificationTitle, setNotificationTitle] = useState();
   const [notificationDescription, setNotificationDescription] = useState();
   const [dialogType, setDialogType] = useState(1);
   const [show, setShow] = useState(false);
   const close = async () => {
 setShow(false);
};
  const filename = useRef()

  const [isSaving,setIsSaving]  = useState(false);
  
  

 
  const handleCloseNotification = () =>
  {
     setOpenNotification(false);
  }


  const XFundPicClicked = (e) => {
    XFundPicRef.current.click(); 
  }; 

  const XFundPicSelected = async (e:any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
  }

  // I've kept this example simple by using the first image instead of multiple
  setSelectedFile(e.target.files[0])
  filename.current = e.target.files[0].name
    
    }

    
  
    
    useEffect(() => {
      if (!selectedFile) {
          setPreview('')
          return
      }
    
      const objectUrl = URL.createObjectURL(selectedFile)
      setPreview(objectUrl)
    
      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
    

  const _handleSubmit = async (data:any,e:any) => {

    if(!selectedFile)
    {
      setNotificationTitle("Create XFund")
      setNotificationDescription("Please select an image.")
      setDialogType(2) //Error
      setShow(true)    
      return 
        
    }

    setIsSaving(true);

    setNotificationTitle("Create XFund")
    setNotificationDescription("Uploading XFund Image.")
    setDialogType(3) //Information
    setShow(true)     
   

  
    try 
    { 
       const cid = await storage.put([new File([selectedFile],filename.current)]);
       setShow(false)
       const imageurl = "https://"+cid+".ipfs.w3s.link/"+filename.current
       const startdate = new Date().getTime()

       setNotificationTitle("Create XFund")
       const contract = new ethers.Contract(XFundAddress, XFundABI, signer);
       
  
       var  participants= data.participants.split('\n'); // Split text into an array of lines
       const amount = ethers.utils.parseUnits(data.amount, 18);

       const tx = await contract.callStatic.newChit(participants, data.cycleCount, data.frequency, data.amount,{ gasLimit: 21000000  });
       const transaction = await contract.newChit(participants, data.cycleCount, data.frequency, data.amount,{ gasLimit: 21000000  });
       await transaction.wait(); // Wait for the transaction to be mined
      // Wait for the event promise to be resolved
      // Access the transaction receipt for more information
    const receipt = await signer.provider.getTransactionReceipt(transaction.hash);

    // Access event data from the receipt (replace 'YourEventName' with your actual event name)
    console.log(receipt)
    const iface = new ethers.utils.Interface(XFundABI);
    const events = iface.parseLog(receipt.logs[0]);
   console.log(events)
    const fundId = events.args.FundId.toNumber();

       console.log(events.args); // Access event arguments

       await insertXFund(fundId,address,data.name,parseInt(data.frequency),startdate,imageurl,parseInt(data.amount),parseInt(data.cycleCount),data.participants)

       setNotificationDescription("XFund Successfully Created")
       setDialogType(1) //Success
       setShow(true)    
       setIsSaving(false)
 
    }catch(error){

      setNotificationTitle("Create XFund")
      setNotificationDescription(error.message)
      setDialogType(2) //Error
      setShow(true)    
      setIsSaving(false)

    }  

  }
  function validateParticipants(value:any){
    console.log(value)

    var rowCount = (value.match(/\n/g) || []).length + 1;
    var linesArray = value.split('\n'); // Split text into an array of lines
 

    if(rowCount < 2)
    return false

    const isValid = linesArray.every((address:any) => {
      return ethers.utils.isAddress(address);
    });

    return isValid
      

  }
  const { register,setValue, formState: { errors }, handleSubmit } = useForm();
  return (
 <div className="px-8 mt-8">

   <form noValidate className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit(_handleSubmit)}>
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Create XFund</h3>
            
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="shadow-sm focus:ring-my-blue focus:border-my-blue block w-full sm:text-sm border-gray-300 rounded-md"
>
                
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="p-2 flex-1 focus:ring-my-blue focus:border-my-blue block w-full min-w-0 rounded-none rounded-md sm:text-sm border-gray-300"
                  {...register("name", { required: true })} 

               />
              </div>
              {errors.name?.type === 'required' && <span className="text-sm text-red-700">Name is required</span>}

            </div>
            <div className="sm:col-span-4">
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                Frequency
              </label>
              <div className="shadow-sm focus:ring-my-blue focus:border-my-blue block w-full sm:text-sm border-gray-300 rounded-md"
>                 <select id="frequency" name="frequency" className="p-2 flex-1 focus:ring-my-blue focus:border-my-blue block w-full min-w-0 rounded-none rounded-md sm:text-sm border-gray-300"
                            {...register("frequency", { required: true})} 

                 >
        <option value="">Select...</option>
        <option value="7">Weekly</option>
        <option value="30">Monthly</option>
      </select>   
             
              </div>
              {errors.frequency?.type === 'required' && <span className="text-sm text-red-700">Frequency is required</span>}

            </div>

            <div className="sm:col-span-4">
              <label htmlFor="name" className="p-2 mb-2 block text-sm font-medium text-gray-700">
                Date
              </label>
              <div className="shadow-sm focus:ring-my-blue focus:border-my-blue block w-full sm:text-sm border-gray-300 rounded-md"
>                   
                
                <input
                  type="datetime-local"
                  name="startdate"
                  id="startdate"
                  autoComplete="startdate"
                  className="p-2 flex-1 focus:ring-my-blue focus:border-my-blue block w-full min-w-0 rounded-none rounded-md sm:text-sm border-gray-300"
                    {...register("startdate", { required: true ,
                      validate: value =>( (new Date(value) instanceof Date && !isNaN(new Date(value).valueOf()))
                    )
                    })} 

                    />
              </div>
              {errors.startdate?.type === 'required' && <span className="text-sm text-red-700">Start date is required</span>}
              {errors.startdate?.type === 'validate' && <span className="text-sm text-red-700">Invalid start date</span>}

            </div>


            <div className="sm:col-span-4">
            <label htmlFor="price" className="mb-2 block text-sm font-medium text-gray-700">
        Amount
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="number"
          name="amount"
          id="amount"
          className="p-2 focus:ring-my-blue focus:border-my-blue block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder="0.00"
          aria-describedby="price-currency"
          {...register("amount", { required: true})} 

        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm" id="price-currency">
            USD
          </span>
        </div>

      </div>
      {errors.amount?.type === 'required' && <span className="text-sm text-red-700">Amount is required</span>}

            </div>


            <div className="sm:col-span-4">
            <label htmlFor="cycleCount" className="mb-2 block text-sm font-medium text-gray-700">
        Cycle Count
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
      
        <input
          type="number"
          name="cycleCount"
          id="cycleCount"
          className="p-2 focus:ring-my-blue focus:border-my-blue block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder="1"
          {...register("cycleCount", { min:1,required: true})} 

        />
       

      </div>
      {errors.cycleCount?.type === 'required' && <span className="text-sm text-red-700">Cycle Count is required</span>}
      {errors.cycleCount?.type === 'min' && <span className="text-sm text-red-700">Cycle Count must be greater than 0</span>}

            </div>
            <div className="sm:col-span-6">
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                  XFund Photo
                </label>
                <div className="mt-1 flex items-center">
                  <span className="h-40 w-40  overflow-hidden bg-gray-100">
                  
                  { preview ? <img
                 className="h-40 w-40 rounded-lg border-my-blue border-2"
                 src={preview}
                 alt=""
               /> : <PhotoIcon  className="h-40 w-40 border-my-blue border-2"/>}
                  </span>
                  <button
                    type="button"
                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-my-blue"
                    onClick={XFundPicClicked}
                  >
                    Change
                  </button>
                  <input type="file"   accept="image/png, image/jpeg"  ref={XFundPicRef} hidden="true" onChange={XFundPicSelected} />

                </div>
              </div>
  

            <div className="sm:col-span-6">
              <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                Participants Address
              </label>
              <div className="mt-1">
                <textarea
                  id="participants"
                  name="participants"
                  rows={3}
                  className="shadow-sm focus:ring-my-blue focus:border-my-blue block w-full h-40 sm:text-sm border border-gray-300 rounded-md"
                  {...register("participants", { required: true ,validate:value =>{return validateParticipants(value)}})} 

                />
              </div>
              {errors.participants?.type === 'required' && <span className="text-sm text-red-700">Participants are required</span>}
              {errors.participants?.type === 'validate' && <span className="text-sm text-red-700">2 or more Participants are required </span>}

            </div>

           
          </div>
        </div>

            </div>

      <div className="pt-5 pb-10">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-my-blue"
          onClick={()=> history.push("/myevents")}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="cursor-pointer ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-my-blue hover:bg-my-blue-alt6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-my-blue-light"
          disabled={isSaving}
          >
            Save
          </button>
        </div>
      </div>
    </form>
    <Notification
        type={dialogType}
        show={show}
        close={close}
        title={notificationTitle}
        description={notificationDescription}
      />
    </div>
  )
}
