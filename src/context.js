import React, { createContext, useState } from "react";
import data from "./data.json";
import { useLocalStorage } from "./helpers";

const JobsContext = createContext();

const JobProvider = ({ children }) => {
  const [tags, setTags] = useState([]);
  const [jobList, setJobList] = useState(data);
  const [favoriteJobs, setFavoriteJobs] = useState([]);
  const [jobs, saveJobs] = useLocalStorage("JOBS_V1", []);
  const [favoriteIcon, setFavoriteIcon] = useState(false);

  return (
    <JobsContext.Provider
      value={{
        tags,
        setTags,
        jobList,
        setJobList,
        favoriteJobs,
        setFavoriteJobs,
        jobs,
        saveJobs,
        favoriteIcon,
        setFavoriteIcon,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export { JobProvider, JobsContext };
