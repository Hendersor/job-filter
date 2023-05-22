import React from "react";
import { Tag } from "./Tag";

const Job = () => {
  return (
    <div className="w-10/12 h-28 my-3 flex shadow-xl bg-white rounded-xl">
      <div className="w-2/4 h-full flex">
        <figure className="flex justify-center items-center ml-7">
          <img
            className="w-20"
            src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1684532111/photosnap_hpydlw.svg"
            alt=""
          />
        </figure>

        <div className="flex flex-col justify-center items-start ml-5 text-base">
          <p className="text-[#5BA4A4] font-bold">Photosnap</p>
          <h1 className="text-[#2C3A3A] font-[700] text-lg hover:text-[#5BA4A4] cursor-pointer">
            Senior Frontend Developer
          </h1>
          <div className="w-60 flex justify-between text-[#7B8E8E] text-sm font-medium">
            <p>1d ago</p>
            <p>Full Time</p>
            <p>USA only</p>
          </div>
        </div>
      </div>
      <div className="w-3/4 h-full flex justify-evenly items-center">
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>
    </div>
  );
};

export { Job };
