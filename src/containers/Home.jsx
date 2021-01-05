import React from 'react';
import SideBar from '../components/SideBar';
import WeatherData from '../components/WeatherData';

import '../styles/containers/Home.css';

const Home = () => (
  <main className="main-container">
    <SideBar />
    <WeatherData />
  </main>
);
export default Home;
