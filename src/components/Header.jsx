import React from "react";
import { useNavigate, useLocation } from "react-router";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleNavigate = (path) => {
    navigate(path);
    setActiveLink(path);
  };

  return (
    <section className="w-full h-40 bg-[darkCyan] bg-[url('https://res.cloudinary.com/dwdz4mn27/image/upload/v1684532111/bg-header-desktop_kczt74.svg')] bg-cover bg-no-repeat bg-center relative flex justify-center">
      <div className="h-20 w-3/5 bg-white absolute top-[100px] rounded-md shadow-lg"></div>
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
