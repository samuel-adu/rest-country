import { Link, useParams } from 'react-router-dom';

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
      <Link to="/">back</Link>
      <div>
        <img src="" alt="" />
        <h1>{currentCountry.name}</h1>
        <p>Native Name: {currentCountry.nativeName}</p>
        <p>Population: {currentCountry.population}</p>
        <p>Region: {currentCountry.region}</p>
        <p>Sub Region: {currentCountry.subregion}</p>
        <p>Capital: {currentCountry.capital}</p>

        <p>Top Level Domain: {currentCountry.topLevelDomain[0]}</p>
        <p>Currencies: {currentCountry.currencies[0].name}</p>
        <p>
          Languages:
          {currentCountry.languages &&
            currentCountry.languages.map((language) => (
              <span>{language.name}</span>
            ))}
        </p>
        <p className="border">
          Border Countries:
          {currentCountry.borders
            ? currentCountry.borders.map((country) => (
                <Link to={`/${country}`} key={country}>
                  {country}
                </Link>
              ))
            : ''}
        </p>
      </div>
    </div>
  );
}

export default Details;
