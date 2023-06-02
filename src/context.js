import React, { createContext, useState } from "react";
import data from "./data.json";
import { useLocalStorage } from "./helpers";

const JobsContext = createContext();

const JobProvider = ({ children }) => {
  const [tags, setTags] = useState([]);
  const [jobList, setJobList] = useState(data);
  const [favoriteJobs, setFavoriteJobs] = useState([]);
  const [favoriteIcon, setFavoriteIcon] = useState(false);
  const [jobs, saveFavorite] = useLocalStorage("JOBS_V1", []);

  return (
    <JobsContext.Provider
      value={{
        tags,
        setTags,
        jobList,
        setJobList,
        favoriteJobs,
        setFavoriteJobs,
        favoriteIcon,
        setFavoriteIcon,
        jobs,
        saveFavorite,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export { JobProvider, JobsContext };
