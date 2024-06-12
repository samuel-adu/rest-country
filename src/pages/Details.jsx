import { useState, useEffect, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import '../styles/details.css';
import Button from '../components/Button';
import { useDataContext } from '../hooks/useDataContext';

function Details() {
  const [currentCountry, setCurrentCountry] = useState(null);
  const { name } = useParams();
  const { data } = useDataContext();

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

  const currencyArray = Object.values(currentCountry.currencies);
  const currency = currencyArray.map((item, index) => (
    <span key={index} className="capitalize">
      {item.name}
    </span>
  ));

  const languageArray = Object.values(currentCountry.languages);
  const language = languageArray.map((language, index) => (
    <span key={index}>
      {`${language}${index === languageArray.length - 1 ? '' : ', '}`}
    </span>
  ));

  function getCountry(code) {
    const country = data.find((item) => item.cca3 === code);
    return country.name.common;
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
                Region:
                <span>{currentCountry.region}</span>
              </p>
              <p>
                Sub Region:
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
              <p>Currencies:{currency}</p>
              <p>Languages:{language}</p>
            </div>
          </div>

          {currentCountry.borders && (
            <div className="col">
              <p className="">Border Countries:</p>
              <div className="border-links">
                {currentCountry.borders
                  ? currentCountry.borders.map((country) => (
                      <Fragment key={country}>
                        <Link to={`/${getCountry(country)}`} className="btn">
                          {getCountry(country)}
                        </Link>
                      </Fragment>
                    ))
                  : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;
