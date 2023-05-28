import React, { createContext, useState } from "react";
import data from "./data.json";

const JobsContext = createContext();

const JobProvider = ({ children }) => {
  const [tags, setTags] = useState([]);
  const [jobList, setJobList] = useState(data);

  return (
    <JobsContext.Provider value={{ tags, setTags, jobList, setJobList }}>
      {children}
    </JobsContext.Provider>
  );
};

export { JobProvider, JobsContext };
