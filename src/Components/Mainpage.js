import React from 'react'   
import { MdAddLocation } from "react-icons/md";
import { MdCake } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendar } from "react-icons/bs";
import AccordianDropdown from './AccordianDropdown';
import Card from './Card';
import Image from "../Images/image.png";


const Mainpage = () => {
  return (
    <div className="px-36   ">
      <div className="flex font-bold text-sky-600 text-[17px]">
        <MdAddLocation className="w-7 h-7 pt-1 px" />
        <p className="px-1">Maths</p>
      </div>
      <div className="font-bold text-slate-600 text-[30px] pb-4">
        MENTAL MATHS
      </div>
      <div className="grid grid-cols-2">
        <div className="grid-rows-3">
          <div className="py-2">
            <p className="text-lg">
              Have Fun with Math! Get rid of your Math phobia. Become a Human
              Calculator yourself and be able to calculate 10-15 times faster
              than before!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex grid-cols-2">
              <MdCake className="text-sky-600 text-2xl" />
              <p className="px-5 text-xl">6 - 8 Years</p>
            </div>
            <div className="flex grid-cols-2">
              <HiOutlineUserGroup className="text-sky-600 text-2xl" />
              <p className="px-5 text-xl">7 - 8 Students</p>
            </div>
            <div className="flex grid-cols-2">
              <AiOutlineClockCircle className="text-sky-600 text-2xl" />
              <p className="px-5 text-xl">60 Mins Per Class</p>
            </div>
            <div className="flex grid-cols-2">
              <BsCalendar className="text-sky-600 text-2xl" />
              <p className="px-5 text-xl">5 Weeks Duration</p>
            </div>
          </div>
          <div className="py-4">
            <Card />
          </div>
        </div>

        <div>
          <img className="max-w-lg mx-5 2xl:mx-40" src={Image}></img>
        </div>
      </div>
      <hr className="" />
      <div>
        <p className="font-bold text-2xl text-slate-700 mb-3">Available Batches</p>
      </div>
      <AccordianDropdown/>
    </div>
  );
}

export default Mainpage;