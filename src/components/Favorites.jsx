import React from "react";
import { Header } from "./Header";
import "../styles/tailwind.css";
import { JobListFavorites } from "./JobListFavorites";

const Favorites = () => {
  return (
    <main className="w-full h-[auto] bg-[#EFFAFA] flex flex-col">
      <Header />
      <h1>Favoritos</h1>

      <JobListFavorites />
    </main>
  );
};

export { Favorites };
