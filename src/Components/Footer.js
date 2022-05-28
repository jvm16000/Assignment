import React from 'react'
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineCopyright } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { IoMdCall } from "react-icons/io";
import { FiMail } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="bg-lime-300 grid grid-cols-2 min-h-min pb-2">
      <div className="grid grid-rows-3 justify-center">
        <div className="my-3">
          Your friend, your guide and your partner in the journey of parenting
        </div>
        <div className="flex justify-start my-3">
          <BsFacebook className="w-5 h-5 hover:text-blue-700" />
          <BsInstagram className="w-5 h-5 hover:text-orange-500 ml-14" />
          <BsWhatsapp className="w-5 h-5 hover:text-blue-700 ml-14" />
        </div>
        <div className="flex">
          <AiOutlineCopyright className="mt-1" />
          <p className="pl-2"> 2022 All Rights Reserved. Younglabs</p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="mt-3">
          <p className="text-gray-800 text-lg">Quick links</p>
          <div className="">
            <a
              href="#"
              className="p-1 text-gray-500 hover:text-white flex items-center"
            >
              About
            </a>
            <a
              href="#"
              className="p-1 text-gray-500 hover:text-white flex items-center"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="p-1 text-gray-500 hover:text-white flex items-center"
            >
              Terms and Conditions
            </a>
            <a
              href="#"
              className="p-1 text-gray-500 hover:text-white flex items-center"
            >
              Shipping and delivery
            </a>
            <a
              href="#"
              className="p-1 text-gray-500 hover:text-white flex items-center"
            >
              Return, Refunds and Exchange Policy
            </a>
          </div>
        </div>
        <div className="px-10">
          <div className="grid grid-rows-4 mt-3">
            <div className="text-gray-800 text-lg">Address</div>
            <div className="flex">
              <GoLocation className="w-5 h-5 font-bold " />
              <p className=" text-gray-600 px-2">
                A-39, Sector - 4, Noida -201301
              </p>
            </div>
            <div className="flex">
              <IoMdCall className="w-5 h-5" />
              <p className=" text-gray-600 px-2">( +91) 92890 29696</p>
            </div>
            <div className="flex">
              <FiMail className="h-5 w-5 " />
              <p className=" text-gray-600 px-2 -pt-1">info@younglabs.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer