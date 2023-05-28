import React from "react";
import { RxCross2 } from "react-icons/rx";

const FilterTag = ({ nameTag, removeTag }) => {
  const deleteTag = (tag) => {
    removeTag(tag);
  };
  return (
    <div className="w-auto h-10 flex  text-[#5BA4A4] bg-[#EEF6F6] font-bold rounded-lg">
      <div className="self-center mx-1">{nameTag}</div>
      <div className="bg-[#5BA4A4] h-full w-6 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer hover:bg-black">
        <RxCross2
          onClick={() => deleteTag(nameTag)}
          className="stroke-current stroke-1 text-[#EEF6F6] text-xl self-center hover:text-white"
        />
      </div>
    </div>
  );
};

export { FilterTag };
