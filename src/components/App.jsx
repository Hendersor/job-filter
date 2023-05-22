import React from "react";
import "../styles/tailwind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Favorites } from "./Favorites";
import { Home } from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
