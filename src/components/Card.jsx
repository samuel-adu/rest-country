import React from 'react';
import '../styles/card.css';

function Card({ country }) {
  return (
    <div className="card">
      <img className="card-img" src={country.flag} alt="" />

      <div className="card-desc">
        <p>{country.name}</p>
        <p>
          <span>Population: </span>
          {country.population}
        </p>
        <p>
          <span>Region: </span>
          {country.region}
        </p>
        <p>
          <span>Capital: </span>
          {country.capital}
        </p>
      </div>
    </div>
  );
}

export default Card;
