import React, { useState } from 'react';
import '../styles/home.css';
import Card from '../components/Card';
import SelectInput from '../components/SelectInput';
import SearchInput from '../components/SearchInput';
import { useDataContext } from '../hooks/useDataContext';

function HomePage() {
  const { data, countryList, setCountryList } = useDataContext();
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  function handleSearch(event) {
    const searchQuery = event.target.value;
    setRegion('');
    setCountry(searchQuery);
    const searchResult = searchQuery
      ? data.filter((item) =>
          item.name.common.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : data;
    setCountryList(searchResult);
  }

  function handleFilter(event) {
    const selectedOption = event.target.value;
    setCountry('');
    setRegion(selectedOption);
    const filteredList = selectedOption
      ? data.filter(
          (country) => country.region.toLowerCase() === selectedOption
        )
      : data;
    setCountryList(filteredList);
  }

  return (
    <div className="home-page">
      <div className="query-bar">
        <SearchInput country={country} handleSearch={handleSearch} />
        <SelectInput region={region} handleFilter={handleFilter} />
      </div>

      <section className="card-list">
        {countryList.map((item) => (
          <React.Fragment key={item.name.common}>
            <Card country={item} />
          </React.Fragment>
        ))}
      </section>
    </div>
  );
}

export default HomePage;
