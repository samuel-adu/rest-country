import { FaSearch } from 'react-icons/fa';

function SearchInput({ country, handleSearch }) {
  return (
    <div className="form">
      <FaSearch className="search-icon" />
      <input
        className="form-control search-box"
        type="text"
        placeholder="Search for a country..."
        name="country"
        value={country}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchInput;
