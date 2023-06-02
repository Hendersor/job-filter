import { JobsContext } from "./context";
import data from "./data.json";
import { useState, useContext } from "react";

export const useLocalStorage = (itemName, initialValue) => {
  // Look for the object inside the localStorage
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  // Revisa el resultado de la busqueda, el if es para ver si no lo encuentra
  if (!localStorageItem) {
    // Si no lo encuentra entonces le crea un espacio con setItem
    // le da un nombre y el valor a almacenar
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    // Lo almacenado y ya parseado se guarda dentro de una variable
    parsedItem = initialValue;
  } else {
    // Esto es en dado caso de que ya existiera ese objeto en el localStorage
    // y lo que hace es parsearlo y guardarlo dentro de una variable,
    parsedItem = JSON.parse(localStorageItem);
  }

  // Establece como estado el objeto del localStorage
  const [item, setItem] = useState(parsedItem);

  // La funcion para guardar los nuevos objetos
  const saveFavorite = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };
  return [item, saveFavorite];
};

export const setFavorites = (id, favoriteJobs, setFavoriteJobs) => {
  const getFavoriteJob = data.find((job) => job.id === id);
  const findSameJob = favoriteJobs.some((j) => j.id === getFavoriteJob.id);
  if (!findSameJob) {
    const updateJobs = [...favoriteJobs, getFavoriteJob];
    setFavoriteJobs(updateJobs);
  } else {
    const indexJob = favoriteJobs.indexOf(getFavoriteJob);
    const newFavList = [...favoriteJobs];

    newFavList.splice(indexJob, 1);
    setFavoriteJobs(newFavList);
  }
};
