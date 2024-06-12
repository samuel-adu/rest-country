import { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

function DataContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setCountryList(data);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data, countryList, setCountryList }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataContextProvider };
