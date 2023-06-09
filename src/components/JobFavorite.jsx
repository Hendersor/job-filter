import React, { useState } from "react";
import { Tag } from "./Tag";
import { BsBookmarkFill } from "react-icons/bs";

const JobFavorite = (props) => {
  const {
    company,
    urlImage,
    position,
    location,
    contract,
    postedAt,
    role,
    level,
    languages,
    tools,
    displayTags,
    id,
    handleSetFavorites,
  } = props;

  const allTags = [role, level, ...languages, ...tools];
  const [favorite, setFavorite] = useState(true);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="w-10/12 h-28 my-3 flex shadow-xl bg-white rounded-xl">
      <div className="w-2/4 h-full flex">
        <figure className="flex justify-center items-center ml-7">
          <img className="w-20" src={urlImage} alt="companyLogo" />
        </figure>

        <div className="flex flex-col justify-center items-start ml-5 text-base">
          <p className="text-[#5BA4A4] font-bold">{company}</p>
          <h1 className="text-[#2C3A3A] font-[700] text-lg hover:text-[#5BA4A4] cursor-pointer">
            {position}
          </h1>
          <div className="w-60 flex justify-between text-[#7B8E8E] text-sm font-medium">
            <p>{postedAt}</p>
            <p>{contract}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className="w-3/4 h-full flex justify-evenly items-center">
        {allTags.map((tag) => (
          <Tag tag={tag} displayTags={displayTags} />
        ))}
        <BsBookmarkFill
          className="cursor-pointer"
          onClick={() => {
            handleSetFavorites(id);
            handleFavorite();
          }}
        />
      </div>
    </div>
  );
};

export { JobFavorite };
