import React from "react";
import { ISmallBox } from "../interfaces/ISmallBox";

const SmallBox: React.FC<ISmallBox> = ({
  number,
  description,
  link,
  color,
  Icon,
}: ISmallBox) => {
  return (
    <div
      className={`flex md:shrink-2 items-center md:w-1/4 h-full rounded-md 
      md:p-3 p-2 bg-${color}-500 text-white m-1`}
    >
      <div className="w-3/4 z-10">
        <p className="md:text-4xl text-3xl md:font-bold font-semibold">
          {number}
        </p>
        <p className="md:mt-5 mt-2 md:text-xl sm:text-lg">{description}</p>
      </div>
      <span className={`text-6xl text-${color}-600 -ml-5`}>{Icon}</span>
    </div>
  );
};

export default SmallBox;
