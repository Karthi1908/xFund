'use client' 
import { Fragment,useState ,useEffect} from 'react'
import { Popover, Transition } from '@headlessui/react'
import { PhotoIcon, XMarkIcon,CurrencyDollarIcon } from '@heroicons/react/24/outline'
import XFundImage from "../images/XFund.svg";
import CameraLogo from "../images/camera.png";
import PoweredBy from "../images/powered.png"
import Link from 'next/link'
import Footer from '../components/Footer/Footer'; 
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/navigation";

const navigation = [
  { name: 'Home', href: '/' },
  ]

export default function Home() {
  const router = useRouter();

 
  return (
    <div className=" bg-white ">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-100">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="#">
                      <span className="sr-only">Workflow</span>
                      <CurrencyDollarIcon className="h-8 w-8 my-blue" aria-hidden="true" />

                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <PhotoIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </Link>
                  ))}
                 
                </div>
                 <div className="ml-auto">
              <ConnectButton />
            </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={CameraLogo.src}
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <ConnectButton />
                 
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">XFund</span>{' '}
                <span className="block text-my-blue xl:inline">Decentralized Savings and Investment</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Fostering Community Well-being: Empowering Financial Growth through Transparent Chit Systems - Revolutionizing Savings with Blockchain Innovation!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md ">
                  <button
                    onClick={()=>router.push("/dashboard")}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-my-blue hover:bg-my-blue-light md:py-4 md:text-lg md:px-10"
                  >
                    Dashboard
                  </button>
                </div>
                <div >
                  
                        <img
                        className="h-20 w-auto"
                        src={PoweredBy.src}
                        alt=""
                      />
              
                </div>
               
          </div>
            </div>

          </main>

        </div>

      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-fit sm:h-72 md:h-96 lg:w-full lg:h-3/4"
          src={XFundImage.src}alt=""
        />

      </div>
 <Footer />
    </div>
  )
}
