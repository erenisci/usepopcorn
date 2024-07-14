import { useState, useEffect } from 'react';

export const useLocalStorageState = (initialState, key) => {
  const [value, setValue] = useState(() => {
    const savedWatched = localStorage.getItem(key);
    return savedWatched ? JSON.parse(savedWatched) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
