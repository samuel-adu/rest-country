import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Layout from './components/Layout';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Home
                  data={data}
                  filteredData={filteredData}
                  setFilteredData={setFilteredData}
                />
              }
            />
            <Route path=":id" element={<Details data={data} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
