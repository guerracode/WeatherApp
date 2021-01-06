/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import DayCard from './DayCard';
import HightlightsCard from './HightlightsCard';

import '../styles/components/WeatherData.css';

const weatherIcon = require.context('../assets/images', true, /.png$/);

const WeatherData = () => {
  const { weather } = useContext(AppContext);
  const weatherData = weather.consolidated_weather;

  return (
    <section className="data__container">
      <div className="data__type-container">
        <button className="type__celsius-button" type="button">
          °C
        </button>
        <button className="type__fahrenheit-button" type="button">
          °F
        </button>
      </div>
      <div className="data__days-container">
        {weatherData.slice(0, 5).map((data) => (
          <DayCard
            date={data.applicable_date}
            icon={
              weatherIcon(
                `./${data.weather_state_name.split(' ').join('')}.png`
              ).default
            }
            start={Math.trunc(data.min_temp)}
            end={Math.trunc(data.max_temp)}
          />
        ))}
      </div>
      <div className="data__hightlights-container">
        <h2 className="days__title">Today's Hightlights</h2>
        <div className="hightlights__card-container">
          <HightlightsCard />
          <HightlightsCard />
          <HightlightsCard />
          <HightlightsCard />
        </div>
      </div>
      <div className="data__footer-container">
        <p className="footer__text">by guerracode</p>
      </div>
    </section>
  );
};

export default WeatherData;
