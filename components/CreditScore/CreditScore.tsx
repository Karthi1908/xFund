import { useMoralisCloudFunction } from 'react-moralis'
import { format } from 'date-fns';
import {  useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import XFundImage from "../../images/XFund.svg";
import UserImage from "../../images/user.png"

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }  
  export default function CreditScore() {
   const router = useRouter();
    const [XFunds,setXFunds] = useState([{id:123,name:"My Savings",image:XFundImage.src,ownerImage:UserImage.src,username:"Dominic Hackett",startdate:new Date(),amount:100,frequency:"Monthly"},{id:123,name:"My Savings",image:XFundImage.src,ownerImage:UserImage.src,username:"Dominic Hackett",startdate:new Date(),amount:100,frequency:"Monthly"},{id:123,name:"My Savings",image:XFundImage.src,ownerImage:UserImage.src,username:"Dominic Hackett",startdate:new Date(),amount:100,frequency:"Monthly"},{id:123,name:"My Savings",image:XFundImage.src,ownerImage:UserImage.src,username:"Dominic Hackett",startdate:new Date(),amount:100,frequency:"Monthly"},{id:123,name:"My Savings",image:XFundImage.src,ownerImage:UserImage.src,username:"Dominic Hackett",startdate:new Date(),amount:100,frequency:"Monthly"},{id:123,name:"My Savings",image:XFundImage.src,ownerImage:UserImage.src,username:"Dominic Hackett",startdate:new Date(),amount:100,frequency:"Monthly"}]);


    return (
        <div className="px-8 mt-8">
    
      <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {XFunds.map((XFund) => (
          <li key={XFund.id} className="relative shadow-lg rounded-lg">
            <div  onClick={() => router.push(`/view/${XFund.id}`)}  className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-my-green overflow-hidden">
              <img crossorigin src={XFund.image} alt="" className="object-cover  group-hover:opacity-75" />
              <button  type="button" className="absolute inset-0 focus:outline-none">
               <span    className="sr-only">View details for {XFund.name}</span>
              </button>
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
           
          </li>
        ))}
      </ul>
      </div>
    )

        }