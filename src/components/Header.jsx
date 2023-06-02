import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router";
import { useState } from "react";
import { FilterTag } from "./FilterTag";
import { JobsContext } from "../context";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleNavigate = (path) => {
    navigate(path);
    setActiveLink(path);
  };

  const { tags, setTags } = useContext(JobsContext);

  const removeTag = (tag) => {
    const tagsFiltered = tags.filter((t) => t !== tag);
    setTags(tagsFiltered);
  };

  const removeAllTags = () => {
    setTags([]);
  };

  return (
    <section className="w-full h-40 bg-[darkCyan] bg-[url('https://res.cloudinary.com/dwdz4mn27/image/upload/v1684532111/bg-header-desktop_kczt74.svg')] bg-cover bg-no-repeat bg-center relative flex justify-center items">
      {activeLink !== "/favorites" && tags.length !== 0 && (
        <div className="flex items-center justify-between	 p-3 self-center min-h-[20] w-3/5 bg-white absolute top-[30px] rounded-md shadow-lg">
          <div className="flex flex-wrap justify-center w-4/5 gap-4 ">
            {tags.map((nameTag) => (
              <FilterTag nameTag={nameTag} removeTag={removeTag} />
            ))}
          </div>
          <p
            className="hover:text-[#5BA4A4]	cursor-pointer"
            onClick={() => removeAllTags()}
          >
            Clear
          </p>
        </div>
      )}

      <div className="w-40 h-10 flex justify-evenly">
        <h1
          onClick={() => handleNavigate("/")}
          className={`text-white font-medium text-lg cursor-pointer ${
            activeLink === "/" ? "active" : ""
          }`}
        >
          Home
        </h1>
        <h1
          onClick={() => handleNavigate("/favorites")}
          className={`text-white font-medium text-lg cursor-pointer ${
            activeLink === "/favorites" ? "active" : ""
          }`}
        >
          Favorites
        </h1>
      </div>
    </section>
  );
};

export { Header };
