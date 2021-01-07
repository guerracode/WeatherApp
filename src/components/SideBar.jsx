import React, { useContext } from 'react';
import moment from 'moment';
import AppContext from '../context/AppContext';
import '../styles/components/SideBar.css';

import MyLocation from '../assets/images/current-location.png';

const weatherIcon = require.context('../assets/images', true, /.png$/);

const SideBar = (props) => {
  const { weather, yourLocation } = useContext(AppContext);
  const weatherData = weather.consolidated_weather;
  const icon = weatherIcon(
    `./${weatherData[0].weather_state_name.split(' ').join('')}.png`
  ).default;

  const handleClick = () => {
    props.setState({ search: true });
  };

  const handleYourLocation = () => {
    yourLocation();
  };

  return (
    <section className="sideBar-container">
      <div className="sideBar__search-container">
        <button
          className="sideBar__search-button"
          type="button"
          onClick={handleClick}
        >
          Search for places
        </button>
        <button
          className="sideBar__location-button"
          type="button"
          onClick={handleYourLocation}
        >
          <img src={MyLocation} alt="my location" />
        </button>
      </div>
      <div className="sideBar__weather-container">
        <div className="weather__image">
          <img src={icon} alt="weather representation" />
        </div>
        <div className="weather__stats">
          <h2 className="weather__number">
            {Math.trunc(weatherData[0].the_temp)}
            <span>°C</span>
          </h2>
          <p className="weather__text">{weatherData[0].weather_state_name}</p>
          <p className="weather__date">
            {`Today - ${moment(
              weatherData[0].applicable_date,
              'YYYY/MM/DD'
            ).format('ddd, D MMM')}`}
          </p>
          <p className="weather__location">
            <span />
            {weather.title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
