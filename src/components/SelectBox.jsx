function SelectBox({
  handleRegionChange,
  region,
  handleCountrySearch,
  country,
}) {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input
        className="form-control search-box"
        type="text"
        placeholder="Search for a country..."
        name="country"
        value={country}
        onChange={handleCountrySearch}
      />
      <select
        className="form-control select-box"
        name="region"
        value={region}
        onChange={handleRegionChange}
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
