/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import moment from 'moment';
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
        {/* <button className="type__fahrenheit-button" type="button">
          °F
        </button> */}
      </div>
      <div className="data__days-container">
        {weatherData.slice(1, 6).map((data) => (
          <DayCard
            // date={format(new Date(data.applicable_date), 'EEE, d MMM')}
            date={moment(data.applicable_date, 'YYYY/MM/DD').format(
              'ddd, D MMM'
            )}
            // date={format(data.applicable_date, 'E..EEE-d-MMM')}
            icon={
              weatherIcon(
                `./${data.weather_state_name.split(' ').join('')}.png`
              ).default
            }
            start={Math.trunc(data.min_temp)}
            end={Math.trunc(data.max_temp)}
            key={data.id}
          />
        ))}
      </div>
      <div className="data__hightlights-container">
        <h2 className="days__title">Today's Hightlights</h2>
        <div className="hightlights__card-container">
          <HightlightsCard
            title="Wind Status"
            number={weatherData[0].wind_speed}
            type="mph"
          />
          <HightlightsCard
            title="Humidity"
            number={weatherData[0].humidity}
            type="%"
          />
          <HightlightsCard
            title="Visibility"
            number={weatherData[0].visibility}
            type="miles"
          />
          <HightlightsCard
            title="Air Pressure"
            number={weatherData[0].air_pressure}
            type="mb"
          />
        </div>
      </div>
      <div className="data__footer-container">
        <p className="footer__text">by guerracode</p>
      </div>
    </section>
  );
};

export default WeatherData;
