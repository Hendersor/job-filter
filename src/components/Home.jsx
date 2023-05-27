import React, { useState, useEffect } from "react";
import "../styles/tailwind.css";
import data from "../data.json";

import { Header } from "./Header";
import { JobList } from "./JobList";

const Home = () => {
  const [tags, setTags] = useState([]);

  const [filteredJobs, setFilteredJobs] = useState([]);

  const [jobList, setjobList] = useState(data);

  useEffect(() => {
    const filteredList = filterJobs();
    setFilteredJobs(filteredList);
    setjobList(filteredList);
  }, [tags]);

  const filterJobs = () => {
    return data.filter((job) => {
      const jobLanguages = job.languages || [];
      const jobTools = job.tools || [];

      if (tags.length === 0) {
        return true;
      }

      const hasSelectedTags = tags.every((tag) => {
        return (
          jobLanguages.includes(tag) ||
          jobTools.includes(tag) ||
          job.role === tag ||
          job.level === tag
        );
      });
      return hasSelectedTags;
    });
  };

  const displayTags = (tag) => {
    if (!tags.includes(tag)) {
      const updateTags = [...tags, tag];
      setTags(updateTags);
    }
    const filteredJobs = filterJobs();
    setFilteredJobs(filteredJobs);
    setjobList(filteredJobs);
  };

  const removeTag = (tag) => {
    const tagsFiltered = tags.filter((t) => t !== tag);
    setTags(tagsFiltered);
  };

  const removeAllTags = () => {
    setTags([]);
  };

  return (
    <main className="w-full h-auto bg-[#EFFAFA] flex flex-col ">
      <Header
        selectedTags={tags}
        removeTag={removeTag}
        removeAllTags={removeAllTags}
      />
      <JobList
        displayTags={displayTags}
        filteredJobs={filteredJobs}
        jobList={jobList}
      />
    </main>
  );
};

export { Home };
