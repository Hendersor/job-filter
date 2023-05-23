import React, { useState } from "react";
import data from "../data.json";
import { Job } from "./Job";

const JobList = () => {
  const [jobList, setjobList] = useState(data);
  // const allTags = jobList.map(({ role, level, languages, tools }) => ({
  //   role,
  //   level,
  //   ...languages,
  //   ...tools,
  // }));
  console.log(jobList);
  return (
    <section className="w-full h-[200vh] flex flex-col self-center justify-evenly items-center py-10 ">
      {jobList.map((job, index) => (
        <Job
          key={job.id}
          company={job.company}
          urlImage={job.logo}
          position={job.position}
          location={job.location}
          contract={job.contract}
          postedAt={job.postedAt}
          role={job.role}
          level={job.level}
          languages={job.languages}
          tools={job.tools}
        />
      ))}
    </section>
  );
};

export { JobList };
