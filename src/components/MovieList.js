import Movie from './Movie';

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <ul className='list list-movies'>
      {movies?.map(movie => (
        <Movie
          movie={movie}
          onSelectMovie={onSelectMovie}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
};

export default MovieList;
