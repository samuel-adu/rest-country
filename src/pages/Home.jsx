import { useState } from 'react';
import '../styles/home.css';
import CardList from '../components/CardList';
import SelectBox from '../components/SelectBox';

function HomePage({
  data,
  filteredData,
  setFilteredData,
  handleCardListClick,
}) {
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');

  function filterByRegion(event) {
    const { value } = event.target;
    setRegion(value);
    setFilteredData(
      data.filter((item) => item.region.toLowerCase() === value.toLowerCase())
    );
    setCountry('');
  }

  function findCountryByName(event) {
    const { value } = event.target;
    setCountry(value);
    setFilteredData(
      data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );
    setRegion('');
  }

  return (
    <div className="container">
      <SelectBox
        country={country}
        handleCountrySearch={findCountryByName}
        handleRegionChange={filterByRegion}
        region={region}
      />
      <CardList
        filteredData={filteredData}
        onCardListClick={handleCardListClick}
      />
    </div>
  );
}

export default HomePage;
