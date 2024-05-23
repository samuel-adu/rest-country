import { useState } from 'react';

function SelectBox({ setCountryList, data }) {
  const [region, setRegion] = useState('');

  function handleChange(event) {
    const { value } = event.target;
    setRegion(value);
    if (value) {
      setCountryList(
        data.filter((item) => item.region.toLowerCase() === value)
      );
    }
  }

  return (
    <select
      className="form-control select-box"
      name="region"
      value={region}
      onChange={handleChange}
    >
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="asia">Asia</option>
      <option value="americas">America</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}

export default SelectBox;
