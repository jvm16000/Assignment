import React from 'react'   
import { MdAddLocation } from "react-icons/md";
import Image from "../Images/image.png";


const Mainpage = () => {
  return (
    <div className="px-36">
      <div className="flex font-bold text-sky-600 text-[17px]">
        <MdAddLocation className="w-7 h-7 pt-1 px" />
        <p className="px-1">Maths</p>
      </div>
      <div className="font-bold text-slate-600 text-[30px] pb-4">MENTAL MATHS</div>
      <div className="grid grid-cols-2">
        <div className="grid-rows-3">
          <div className='py-2'>
            <p className="text-lg">
              Have Fun with Math! Get rid of your Math phobia. Become a Human
              Calculator yourself and be able to calculate 10-15 times faster
              than before!
            </p>
          </div>
          <div>2</div>
          <div>3</div>
        </div>

        <div>
          <img className="" src={Image}></img>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;