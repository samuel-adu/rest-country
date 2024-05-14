import '../styles/home.css';
import { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SelectBox from '../components/SelectBox';

function HomePage() {
  const [data, setData] = useState([]);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setCountryList(data);
      });
  }, []);

  return (
    <div className="container">
      <SelectBox setData={setData} />
      <CardList countryData={countryList} />
    </div>
  );
}

export default HomePage;
