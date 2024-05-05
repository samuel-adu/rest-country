import { Link, useParams } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';

import '../styles/details.css';

function Details({ data }) {
  const param = useParams();

  const currentCountry = data.find(
    (item) => item.alpha3Code.toLowerCase() === param.id.toLowerCase()
  );

  if (!currentCountry) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="container">
      <Link to="/" className="btn btn-primary back-btn">
        <FaArrowLeftLong />
        <span>back</span>
      </Link>
      <div className="row current-country">
        <img
          src={currentCountry.flag}
          alt={`flag of ${currentCountry.name}`}
          className="flag"
        />

        <div className="col">
          <h2 className="current-country-name">{currentCountry.name}</h2>

          <div className="row">
            <div className="col">
              <p>
                Native Name:<span>{currentCountry.nativeName}</span>
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
                <span>{currentCountry.topLevelDomain[0]}</span>
              </p>
              <p>
                Currencies:
                <span>{currentCountry.currencies[0].name}</span>
              </p>
              <p>
                Languages:
                {currentCountry.languages &&
                  currentCountry.languages.map((language) => (
                    <span>{language.name}</span>
                  ))}
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
