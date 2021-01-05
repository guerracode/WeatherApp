import React from 'react';
import '../styles/components/SideBar.css';

import ShowerImage from '../assets/images/Shower.png';
import MyLocation from '../assets/images/current-location.png';

const SideBar = () => (
  <section className="sideBar-container">
    <div className="sideBar__search-container">
      <button className="sideBar__search-button" type="button">
        Search for places
      </button>
      <button className="sideBar__location-button" type="button">
        <img src={MyLocation} alt="my location" />
      </button>
    </div>
    <div className="sideBar__weather-container">
      <div className="weather__image">
        <img src={ShowerImage} alt="weather representation" />
      </div>
      <div className="weather__stats">
        <h2 className="weather__number">
          15
          <span>°C</span>
        </h2>
        <p className="weather__text">Shower</p>
        <p className="weather__date">Today - Fri. 5 Jun</p>
        <p className="weather__location">
          <span />
          Helisinki
        </p>
      </div>
    </div>
  </section>
);

export default SideBar;
