import React from 'react';

function Details({ item }) {
  return (
    <div>
      <button>back</button>

      <img src="" alt="" />
      <p>{item.name}</p>
      <p>Population: {item.population}</p>
      <p>Region: {item.region}</p>
      <p>Sub Region: {item.subRegion}</p>
      <p>Capital: {item.capital}</p>
      <p>Top Level Domain: {item.topLevelDomain[0]}</p>
      <p>Currencies: {item.currencies[0].name}</p>
      <p>Languages: {item.languages.name}</p>
      <p>Border Countries:{item.borders}</p>
    </div>
  );
}

export default Details;
