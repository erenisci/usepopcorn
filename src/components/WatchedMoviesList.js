import WatchedMovie from './WatchedMovie';

const WatchedMoviesList = ({ watched, onDeleteWatched }) => {
  return (
    <ul className='list'>
      {watched?.map(movie => (
        <WatchedMovie
          movie={movie}
          onDeleteWatched={onDeleteWatched}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
