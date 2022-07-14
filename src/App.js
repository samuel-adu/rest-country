import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const card = data.map((country) => {
    return <Card key={country.numericCode} country={country} />;
  });

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="card-list container">{card}</main>
    </div>
  );
}

export default App;
