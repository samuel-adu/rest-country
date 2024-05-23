import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import '../styles/details.css';
import Button from '../components/Button';

function Details() {
  const [currentCountry, setCurrentCountry] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => setCurrentCountry(data[0]));
  }, [name]);

  if (!currentCountry) {
    return (
      <div className="container">
        <p>Loading</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Button path={'..'} className="back-btn">
        <FaArrowLeftLong />
        <span>back</span>
      </Button>

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
                    <Fragment key={country}>
                      <Button path={`/${country}`}>{country}</Button>
                    </Fragment>
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
