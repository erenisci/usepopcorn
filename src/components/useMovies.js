import { useState, useEffect } from 'react';

export const useMovies = query => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const searchTO = setTimeout(() => {
      const fetchMovies = async () => {
        try {
          setIsLoading(true);
          setError('');

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) {
            throw new Error('Something went wrong with fetching movies!');
          }

          const data = await res.json();
          if (data.Response === 'False') {
            throw new Error('Movie not found!');
          }

          setMovies(data.Search);
          setError('');
        } catch (err) {
          if (err.name !== 'AbortError') {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      };

      if (query.length < 3) {
        setMovies([]);
        setError('');
        return;
      }

      fetchMovies();
    }, 500);

    return () => {
      clearTimeout(searchTO);
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
};
