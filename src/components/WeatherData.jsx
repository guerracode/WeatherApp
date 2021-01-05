/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import DayCard from './DayCard';
import HightlightsCard from './HightlightsCard';

import '../styles/components/WeatherData.css';

const WeatherData = () => (
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
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
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

export default WeatherData;
