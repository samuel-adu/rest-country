import React from 'react';
import '../styles/card.css';

function CountryCard({ country }) {
  return (
    <div className="card">
      <img className="card-img" src={country.flag} alt="" />

      <div className="card-desc">
        <p className="card-heading">{country.name}</p>

        <p>
          <span className="card-key">Population: </span>
          {country.population}
        </p>
        <p>
          <span className="card-key">Region: </span>
          {country.region}
        </p>
        <p>
          <span className="card-key">Capital: </span>
          {country.capital}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
