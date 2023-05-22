import React from "react";
import { Job } from "./Job";

const JobList = () => {
  return (
    <section className="w-full h-auto flex flex-col self-center justify-evenly items-center py-10">
      <Job />
    </section>
  );
};

export { JobList };
