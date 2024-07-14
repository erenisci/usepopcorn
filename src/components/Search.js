import { useRef } from 'react';

import { useKey } from './useKey';

const Search = ({ query, setQuery }) => {
  const inputElement = useRef(null);

  useKey('Enter', () => {
    if (document.activeElement !== inputElement.current) {
      inputElement.current.focus();
      setQuery('');
    }
  });

  useKey('Escape', () => {
    if (document.activeElement === inputElement.current) {
      inputElement.current.blur();
    }
  });

  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={e => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
};

export default Search;
