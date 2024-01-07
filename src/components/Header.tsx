import React from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { HiOutlinePower } from "react-icons/hi2";
const Header: React.FC = () => {
  return (
    <header className="h-14 top-0 left-0 flex justify-between items-center text-lg md:ml-60">
      <div className="h-full bg-gray-300 w-full flex justify-between items-center px-5 text-gray-700">
        <HiMiniBars3 className="text-gray-700 hover:text-gray-400 duration-300" />
        <div
          className="flex gap-2 items-center hover:text-gray-400 duration-300 hover:cursor-pointer"
          onClick={() => alert("Logged out")}
        >
          <HiOutlinePower />
          <p>Logout</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
