import { useEffect, useState } from 'react';
import Card from './Card';
import '../styles/card.css';

function CardList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const card = data.map((country) => {
    return <Card key={country.numericCode} country={country} />;
  });

  return <div className="card-list">{card}</div>;
}

export default CardList;
