import data from "./data.json";

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
