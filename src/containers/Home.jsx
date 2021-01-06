import React from 'react';
import SideBar from '../components/SideBar';
import WeatherData from '../components/WeatherData';
import SearchBar from '../components/SearchBar';

import '../styles/containers/Home.css';

const Home = () => (
  <main className="main-container">
    <SideBar />
    {/* <SearchBar /> */}
    <WeatherData />
  </main>
);
export default Home;
