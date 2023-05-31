import React, { useContext, useEffect } from "react";
import { JobsContext } from "../context";
import { Job } from "./Job";
import data from "../data.json";

const JobList = () => {
  const { jobList, setJobList } = useContext(JobsContext);
  const { tags, setTags } = useContext(JobsContext);
  const { favoriteJobs, setFavoriteJobs } = useContext(JobsContext);

  useEffect(() => {
    const filteredList = filterJobs();
    setJobList(filteredList);
  }, [tags]);

  const displayTags = (tag) => {
    if (!tags.includes(tag)) {
      const updateTags = [...tags, tag];
      setTags(updateTags);
    }
    const filteredJobs = filterJobs();
    setJobList(filteredJobs);
  };

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

  useEffect(() => {
    console.log(favoriteJobs);
  }, [favoriteJobs]);

  const setFavorites = (id) => {
    const getFavoriteJob = data.find((job) => job.id === id);
    const findSameJob = favoriteJobs.some((j) => j.id === getFavoriteJob.id);
    if (!findSameJob) {
      const updateJobs = [...favoriteJobs, getFavoriteJob];
      setFavoriteJobs(updateJobs);
    }
  };

  return (
    <section className="w-full h-[200vh] flex flex-col self-center justify-start items-center py-10 ">
      {jobList.map((job) => (
        <Job
          key={job.id}
          id={job.id}
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
          displayTags={displayTags}
          setFavorites={setFavorites}
        />
      ))}
    </section>
  );
};

export { JobList };
