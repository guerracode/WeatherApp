import React, { useContext, useRef } from 'react';
import AppContext from '../context/AppContext';

import '../styles/components/SearchBar.css';

const SearchBar = (props) => {
  const { searchLocation, search, newLocation } = useContext(AppContext);
  const searchInput = useRef(null);

  const handleSearch = () => {
    searchLocation(searchInput.current.value);
  };
  const handleNewLocation = (val) => {
    newLocation(val);
    props.setState({ search: false });
  };

  const handleExit = () => {
    props.setState({ search: false });
  };

  return (
    <section className="searchBar-container">
      <div className="searchBar__exit-button">
        <button type="button" onClick={handleExit}>
          X
        </button>
      </div>
      <div className="searchBar__input-container">
        <input
          type="text"
          placeholder="search location"
          ref={searchInput}
          onChange={handleSearch}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="searchBar__results-container">
        {search.length > 0 && (
          <div className="results__buttons-container">
            {search.map((item) => (
              <button
                type="button"
                className="results__button"
                onClick={() => handleNewLocation(item.woeid)}
                key={item.woeid}
              >
                {item.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchBar;
