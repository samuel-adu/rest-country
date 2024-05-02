import { useEffect, useState } from 'react';
import Card from '../components/Card';
import '../styles/homepage.css';

function Home() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setFilteredData(data);
      });
  }, []);

  function handleSearch(event) {
    setQuery(event.target.value);
    setFilteredData(
      allData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  function handleFilter(event) {
    setSelectedOption(event.target.value);
    setFilteredData(
      allData.filter(
        (item) => item.region.toLowerCase() === event.target.value.toLowerCase()
      )
    );
  }

  const cardDisplay = filteredData.map((item) => {
    return <Card key={item.numericCode} country={item} />;
  });

  return (
    <main className="container">
      <form
        className="form"
        onSubmit={(event) => event.preventDefault()}
        id="search-input"
      >
        <input
          className="form-control"
          type="text"
          placeholder="search for a country"
          name="country"
          value={query}
          onChange={handleSearch}
        />
      </form>

      <form id="select-region" onSubmit={(event) => event.preventDefault()}>
        <select
          className="form-control"
          form="select-region"
          name="region"
          value={selectedOption}
          onChange={handleFilter}
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
          <option value="americas">America</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>

      <div className="card-list">{cardDisplay}</div>
    </main>
  );
}

export default Home;
