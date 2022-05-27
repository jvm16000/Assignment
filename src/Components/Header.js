import React from 'react'
import YounglabsLogo from "../Images/YoungLabsLogo.png";

const Header = () => {
  return (
    <div>
      <div className='px-20'>
        <nav
          className="navbar grid grid-cols-2 justify-items-stretch md:bg-yellow-300 sm:bg-red-300 lg:bg-blue-300 xl:bg-slate-300 max-h-16
      2xl:bg-white h-30 justify-between"
        >
          <img className="" src={YounglabsLogo}></img>

          <button className=" bg-lime-500 px-3 py-2.5 justify-self-start leading-4 text-white text-xl rounded-md font-semibold ">
            Login
          </button>
        </nav>
      </div>
      <hr className="min-w-full" />
    </div>
  );
}

export default Header

