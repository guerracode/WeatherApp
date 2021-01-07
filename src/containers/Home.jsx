import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import WeatherData from '../components/WeatherData';
import SearchBar from '../components/SearchBar';

import '../styles/containers/Home.css';

const Home = () => {
  const [search, setSearch] = useState({ search: false });
  
  return (
    <main className="main-container">
      {search.search ? (
        <SearchBar setState={setSearch} />
      ) : (
        <SideBar setState={setSearch} />
      )}
      <WeatherData />
    </main>
  );
};
export default Home;
