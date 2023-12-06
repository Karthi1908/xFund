import { useMoralisCloudFunction } from 'react-moralis'
import { format } from 'date-fns';
import {  useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import XFundImage from "../../images/XFund.svg";
import UserImage from "../../images/user.png"
import Notification from '../Notification/Notification';
import PaymentDialog from '../Payment/Payment';
import { usdcContractAddress,usdcContractABI, XFundAddress, XFundABI } from '../../contract';
import { useNetwork } from 'wagmi'
import { useWalletClient,useAccount } from "wagmi";
import { ethers } from 'ethers';
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }  
  export default function HomeFeed() {
    const { chain } = useNetwork()
    const { data: walletClient } = useWalletClient()

   const router = useRouter();
    const [XFunds,setXFunds] = useState([{id:123,name:"My Savings",image:XFundImage.src,ownerImage:UserImage.src,username:"Dominic Hackett",startdate:new Date(),amount:100,frequency:"Monthly"}
    ,{id:123,name:"My Savings",image:XFundImage.src,ownerImage:UserImage.src,username:"Dominic Hackett",startdate:new Date(),amount:100,frequency:"Monthly"},{id:123,name:"My Savings",image:XFundImage.src,ownerImage:UserImage.src,username:"Dominic Hackett",startdate:new Date(),amount:100,frequency:"Monthly"},{id:123,name:"My Savings",image:XFundImage.src,ownerImage:UserImage.src,username:"Dominic Hackett",startdate:new Date(),amount:100,frequency:"Monthly"},{id:123,name:"My Savings",image:XFundImage.src,ownerImage:UserImage.src,username:"Dominic Hackett",startdate:new Date(),amount:100,frequency:"Monthly"},{id:123,name:"My Savings",image:XFundImage.src,ownerImage:UserImage.src,username:"Dominic Hackett",startdate:new Date(),amount:100,frequency:"Monthly"}]);
    const [openPaymentDialog, setOpenPaymentDialog] = useState(false);
    const [fund,setFund] = useState()
    const [amount,setAmount] = useState()
    // NOTIFICATIONS functions
    const [notificationTitle, setNotificationTitle] = useState();
    const [notificationDescription, setNotificationDescription] = useState();
    const [dialogType, setDialogType] = useState(1);
    const [show, setShow] = useState(false);
    const close = async () => {
      setShow(false);
    };

    const closePaymentDialog = () => {
      setOpenPaymentDialog(false);
    };
  
    const makePayment = async (fund:number,cycle:number,_amount:number) => {
      if (isNaN(cycle)) {
        setDialogType(2); //Error
        setNotificationTitle("Make Payment");
        setNotificationDescription("You have not entered a cycle.");
        setShow(true);
  
        return;
      }

        if (isNaN(_amount)) {
        setDialogType(2); //Error
        setNotificationTitle("Make Payment");
        setNotificationDescription("You have not entered an amount.");
        setShow(true);
  
        return;
      }


      if (cycle  <= 0) {
        setDialogType(2); //Error
        setNotificationTitle("Make Payment");
        setNotificationDescription("You have not entered a cycle.");
        setShow(true);
  
        return;
      }

        if ( _amount <= 0  ) {
        setDialogType(2); //Error
        setNotificationTitle("Make Payment");
        setNotificationDescription("You have not entered an amount.");
        setShow(true);
  
        return;
      }
      const usdcContract = new ethers.Contract(
        usdcContractAddress,
        usdcContractABI,
        walletClient
      );
      try {


        const amount = ethers.utils.parseUnits(_amount, 18);
        let tx = await usdcContract.callStatic.approve(
         XFundAddress ,
          amount,
          {
            gasLimit: 3000000,
          }
        );
  
        let tx1 = await  usdcContract.approve(
          XFundAddress ,          amount,
          {
            gasLimit: 3000000,
          }
        );
        await tx1.wait();    

              const payContract = new ethers.Contract(
                XFundAddress,
                XFundABI,
                walletClient
               );

               let tx2 = await payContract.callStatic.makePayment(
                fund,cycle,
                {
                  gasLimit: 3000000,
                }
              );
        
              let tx3 = await payContract.callStatic.makePayment(
                fund,cycle,
                  {
                  gasLimit: 3000000,
                }
              );
              await tx3.wait();    
              setDialogType(1); //Success
              setNotificationTitle("Make Payment");
              setNotificationDescription("Payment successfully made.");
              setShow(true); 


           
        

      }
      catch(error)
      {
        if (error.code === "TRANSACTION_REVERTED") {
          console.log("Transaction reverted");
          //let revertReason = ethers.utils.parseRevertReason(error.data);
          setNotificationDescription("Reverted");
        } else if (error.code === "ACTION_REJECTED") {
          setNotificationDescription("Transaction rejected by user");
        } else {
          console.log(error);
          //const errorMessage = ethers.utils.revert(error.reason);
          setNotificationDescription(
            `Transaction failed with error: ${error.reason}`
          );
        }
        setDialogType(2); //Error
        setNotificationTitle("Create XFund");
  
        setShow(true);
      }    
    
  
  }

  function handleClick(fund:number,_amount:number) {
    // insert logic here
    setFund(fund);
    setAmount(_amount)
    setOpenPaymentDialog(true);
  }

    return (
        <div className="px-8 mt-8">
    
      <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {XFunds.map((XFund) => (
          <li key={XFund.id} className="relative shadow-lg rounded-lg">
            <div    className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-my-green overflow-hidden">
              <img crossorigin src={XFund.image} alt="" className="object-cover  group-hover:opacity-75" />
             
            </div>
           
                <div className="flex items-center mt-4 ">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img crossOrigin onClick={() => router.push(`/viewprofile/${XFund.username}`)} className="cursor-pointer ml-2 h-8 w-8 rounded-full" 
                        src={XFund.ownerImage} alt="" />
                      </div>
                      <div className="ml-2 mr-2">
                      <div onClick={() => router.push(`/view/${XFund.id}`)} className="cursor-pointer text-sm font-medium text-gray-900">{XFund.name}</div>

                         </div>
                    </div>
                    <div onClick={() => router.push(`/viewprofile/${XFund.username}`)} className="cursor-pointer mb-2 ml-12 text-sm  text-gray-900">{XFund.username}</div>
                    <div className="cursor-pointer mb-2 ml-12 text-sm  text-gray-900"><span className='text-bold'>Participants: </span>{XFund?.participants ? XFund.participants:12 }</div>

                    <div className="cursor-pointer mb-2 ml-12 text-sm  text-gray-900"><span className='text-bold'>Frequency: </span>{XFund.frequency}</div>
                    <div className="cursor-pointer mb-2 ml-12 text-sm  text-gray-900"><span className='text-bold'>Amount:</span> ${XFund.amount}</div>
                     <div className="ml-12 text-xs text-gray-500"><span className='text-bold'>Start Date:</span> {format(XFund.startdate,"iii do MMM yyyy")}</div>
                    <br />
                    <div> 
            <button
            type="button"
            onClick={()=> handleClick(XFund.id,XFund.amount)}
            className="cursor-pointer ml-12  mb-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-my-blue hover:bg-my-blue-alt6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-my-blue-light"
          >
            Make Payment
          </button>
          </div>
           
          </li>
        ))}
      </ul>
      <PaymentDialog
        open={openPaymentDialog}
        setOpen={closePaymentDialog}
        makePayment={makePayment}
        fund={fund}
        amount={amount}
      />
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