import React from 'react';
import '../styles/home.css';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import SelectOption from '../components/SelectBox';
import SearchInput from '../components/SearchBox';

function HomePage() {
  const [data, setData] = useState([]);
  const [countryList, setCountryList] = useState([]);

  // https://restcountries.eu/rest/v2/all

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setCountryList(data);
      });
  }, []);

  return (
    <div className="container">
      <div className="query-bar">
        <SearchInput data={data} setCountryList={setCountryList} />
        <SelectOption data={data} setCountryList={setCountryList} />
      </div>

      <div className="card-list">
        {countryList.map((item) => (
          <React.Fragment key={item.name.common}>
            <Card country={item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
