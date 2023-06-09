import React from "react";
import "../styles/tailwind.css";
import { Header } from "./Header";
import { JobList } from "./JobList";

const Home = () => {
  return (
    <main className="w-full h-auto bg-[#EFFAFA] flex flex-col ">
      <Header />
      <JobList />
    </main>
  );
};

export { Home };
