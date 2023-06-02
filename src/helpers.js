import data from "./data.json";
import { useState } from "react";

export const useLocalStorage = (itemName, initialValue) => {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveFavorite = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };
  return [item, saveFavorite];
};

export const setFavorites = (id, jobs, saveFavorite) => {
  const getFavoriteJob = data.find((job) => job.id === id);
  const findSameJob = jobs.some((j) => j.id === getFavoriteJob.id);
  if (!findSameJob) {
    const updateJobs = [...jobs, getFavoriteJob];
    saveFavorite(updateJobs);
  } else {
    const indexJob = jobs.indexOf(getFavoriteJob);
    const newFavList = [...jobs];

    newFavList.splice(indexJob, 1);
    saveFavorite(newFavList);
  }
};
