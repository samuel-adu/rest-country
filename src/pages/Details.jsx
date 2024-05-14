import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import '../styles/details.css';

function Details() {
  const [currentCountry, setCurrentCountry] = useState(null);
  const { code } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => res.json())
      .then((data) => setCurrentCountry(data[0]));
  }, [code]);

  console.log(currentCountry);
  if (!currentCountry) {
    return (
      <div className="container">
        <p>Loading</p>
      </div>
    );
  }
  console.log(currentCountry.currencies);

  return (
    <div className="container">
      <Link to="/" className="btn btn-primary back-btn">
        <FaArrowLeftLong />
        <span>back</span>
      </Link>
      <div className="row current-country">
        <img
          src={currentCountry.flags.svg}
          alt={`flag of ${currentCountry.name.common}`}
          className="flag"
        />

        <div className="col">
          <h2 className="current-country-name">{currentCountry.name.common}</h2>

          <div className="row">
            <div className="col">
              <p>
                Official Name:<span>{currentCountry.name.official}</span>
              </p>
              <p>
                Population:
                <span>{currentCountry.population.toLocaleString()}</span>
              </p>
              <p>
                Continent:
                <span>{currentCountry.region}</span>
              </p>
              <p>
                Region:
                <span>{currentCountry.subregion}</span>
              </p>
              <p>
                Capital:
                <span>{currentCountry.capital}</span>
              </p>
            </div>

            <div className="col">
              <p>
                Top Level Domain:
                <span>{currentCountry.tld.map((item) => item)}</span>
              </p>
              <p>
                Currencies:
                {/* <span>{currentCountry.currencies.name}</span> */}
              </p>
              <p>
                Languages:
                {/* 
                {currentCountry.languages &&
                  currentCountry.languages.map((language) => (
                    <span>{language.name}</span>
                  ))}
                */}
              </p>
            </div>
          </div>

          <div className="col">
            <p className="border">Border Countries:</p>

            <div className="border-links">
              {currentCountry.borders
                ? currentCountry.borders.map((country) => (
                    <Link
                      to={`/${country}`}
                      key={country}
                      className="btn btn--secondary"
                    >
                      {country}
                    </Link>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
