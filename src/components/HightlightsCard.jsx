import React from 'react';

import '../styles/components/HightlightsCard.css';

const HightlightsCard = ({ title, number, type }) => (
  <article className="hightlightsCard__container">
    <h4 className="hightlightsCard__title">{title}</h4>
    <h2 className="hightlightsCard__data">
      {Math.trunc(number)}
      <span>{type}</span>
    </h2>
  </article>
);

export default HightlightsCard;
