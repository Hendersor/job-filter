import React from "react";

const Tag = ({ tag, displayTags }) => {
  const getNameTag = (tag) => {
    displayTags(tag);
  };
  return (
    <div
      onClick={() => getNameTag(tag)}
      className="px-2 w-auto h-10 flex justify-center items-center text-center cursor-pointer text-[#5BA4A4] bg-[#EEF6F6] font-bold rounded hover:text-white hover:bg-[#5BA4A4]"
    >
      <div>{tag}</div>
    </div>
  );
};

export { Tag };
