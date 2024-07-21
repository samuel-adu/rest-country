import { Link } from 'react-router-dom';
import '../styles/card.css';

function Card({ country }) {
  const { name, flags, population, region, capital, showCountryDetails } =
    country;
  return (
    <div className="card">
      <div className="card-image">
        <Link
          to={`${name.common}`}
          onClick={showCountryDetails}
          className="link-card"
        >
          <img className="card__img" src={flags.svg} alt={`flag of ${name}`} />
        </Link>
      </div>

      <div className="card-desc">
        <p className="card__heading">{name.common}</p>
        <p className="card__text">
          Population:
          <span>{population.toLocaleString()}</span>
        </p>
        <p className="card__text">
          Region:
          <span>{region}</span>
        </p>
        <p className="card__text">
          Capital:
          <span>{capital}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
