import { useState, useEffect } from 'react';

function SelectBox() {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  function searchCountry(event) {
    event.preventDefault();
  }

  return (
    <form className="form" onSubmit={searchCountry}>
      <input
        className="form-control search-box"
        type="text"
        placeholder="Search for a country..."
        name="country"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      />
      <select
        className="form-control select-box"
        name="region"
        value={region}
        onChange={(event) => setRegion(event.target.value)}
      >
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="asia">Asia</option>
        <option value="americas">America</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </form>
  );
}

export default SelectBox;
