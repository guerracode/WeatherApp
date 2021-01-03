import React from 'react';

const SideBar = () => {
  <div className="sideBar-container">
    <div className="sideBar__search-container">
      <input type="text" />
      <button type="button">o</button>
    </div>
    <div className="sideBar__weather-container">
      <div className="weather__image">
        <img src="" alt="" />
      </div>
      <h2 className="weather__number">
        15
        <span>°C</span>
      </h2>
      <p className="weather__number">Shower</p>
      <p className="weather__date">Today - Fri. 5 Jun</p>
      <p className="weather__location">
        <span />
        Helisnki
      </p>
    </div>
  </div>;
};

export default SideBar;
