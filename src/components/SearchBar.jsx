import React from 'react';

import '../styles/components/SearchBar.css';

const SearchBar = () => (
  <section className="searchBar-container">
    <div className="searchBar__exit-button">
      <button type="button">X</button>
    </div>
    <div className="searchBar__input-container">
      <input type="text" placeholder="search location" />
      <button type="button">Search</button>
    </div>
  </section>
);

export default SearchBar;
