import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.country.flag} alt="" />
      </div>

      <div className="card__desc">
        <h2>{props.country.name}</h2>
        <p>
          <span>Population: </span>
          {props.country.population}
        </p>
        <p>
          <span>Region: </span>
          {props.country.region}
        </p>
        <p>
          <span>Capital: </span>
          {props.country.capital}
        </p>
      </div>
    </div>
  );
}

export default Card;
