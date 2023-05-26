import React, { useState } from "react";
import "../styles/tailwind.css";
import { Header } from "./Header";
import { JobList } from "./JobList";

const Home = () => {
  const [tags, setTags] = useState([]);

  const displayTags = (tag) => {
    if (!tags.includes(tag)) {
      const updateTags = [...tags, tag];
      setTags(updateTags);
    }
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
      <JobList displayTags={displayTags} />
    </main>
  );
};

export { Home };
