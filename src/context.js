import React, { createContext, useState } from "react";
import data from "./data.json";

const JobsContext = createContext();

const JobProvider = ({ children }) => {
  const [tags, setTags] = useState([]);
  const [jobList, setJobList] = useState(data);
  const [favoriteJobs, setFavoriteJobs] = useState([]);

  return (
    <JobsContext.Provider
      value={{
        tags,
        setTags,
        jobList,
        setJobList,
        favoriteJobs,
        setFavoriteJobs,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export { JobProvider, JobsContext };
