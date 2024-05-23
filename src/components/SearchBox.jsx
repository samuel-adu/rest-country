import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBox({ data, setCountryList }) {
  const [country, setCountry] = useState('');

  function handleChange(event) {
    setCountry(event.target.value);
    setCountryList(
      data.filter((item) =>
        item.name.common
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <FaSearch className="search-icon" />
      <input
        className="form-control search-box"
        type="text"
        placeholder="Search for a country..."
        value={country}
        name="country"
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchBox;
