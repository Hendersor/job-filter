import React, { createContext } from "react";
import "../styles/tailwind.css";
import { JobProvider } from "../context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Favorites } from "./Favorites";
import { Home } from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <JobProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </JobProvider>
    </BrowserRouter>
  );
};

export { App };
