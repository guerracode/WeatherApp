import React from 'react';

import '../styles/components/DayCard.css';

const DayCard = ({ date, icon, start, end }) => (
  <article className="dayCard-container">
    <p className="dayCard__title">{date}</p>
    <img src={icon} alt="weather icon" />
    <div className="dayCard__degrees">
      <p className="degrees__left">{`${start}°C`}</p>
      <p className="degrees__right">{`${end}°C`}</p>
    </div>
  </article>
);

export default DayCard;
