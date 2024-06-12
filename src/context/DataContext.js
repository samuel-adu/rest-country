import { useEffect, createContext, useState } from 'react';

const DataContext = createContext();

function DataContextProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}

export { DataContext, DataContextProvider };
