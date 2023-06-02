import React, { useContext } from "react";
import { JobsContext } from "../context";
import { JobFavorite } from "./JobFavorite";
import { setFavorites } from "../helpers";

const JobListFavorites = () => {
  const { favoriteJobs, setFavoriteJobs } = useContext(JobsContext);

  const handleSetFavorites = (id) => {
    setFavorites(id, favoriteJobs, setFavoriteJobs);
  };

  return (
    <section className="w-full h-[200vh] flex flex-col self-center justify-start items-center py-10 ">
      {favoriteJobs.length === 0 && (
        <img
          className="w-50"
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1685315163/undraw_save_to_bookmarks_re_8ajf_ut3bj6.svg"
          alt="image"
        />
      )}
      {favoriteJobs.length !== 0 &&
        favoriteJobs.map((job) => (
          <JobFavorite
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
            handleSetFavorites={handleSetFavorites}
            // displayTags={displayTags}
          />
        ))}
    </section>
  );
};

export { JobListFavorites };
