import React from "react";
import { Header } from "./Header";
import { JobList } from "./JobList";
import "../styles/tailwind.css";

const Favorites = () => {
  return (
    <main className="w-full h-[auto] bg-[#EFFAFA] flex flex-col">
      <Header />
      <h1>Favoritos</h1>

      <JobList />
    </main>
  );
};

export { Favorites };
