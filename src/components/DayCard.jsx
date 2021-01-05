import React from 'react';

import '../styles/components/DayCard.css';

import WeatherIcon from '../assets/images/Sleet.png';

const DayCard = () => (
  <article className="dayCard-container">
    <p className="dayCard__title">Tomorrow</p>
    <img src={WeatherIcon} alt="weather icon" />
    <div className="dayCard__degrees">
      <p className="degrees__left">16°C</p>
      <p className="degrees__right">11°C</p>
    </div>
  </article>
);

export default DayCard;
