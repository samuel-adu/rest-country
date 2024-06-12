function SelectInput({ handleFilter, region }) {
  return (
    <select
      className="form-control select-box"
      name="region"
      value={region}
      onChange={handleFilter}
    >
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="asia">Asia</option>
      <option value="americas">Americas</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}

export default SelectInput;
