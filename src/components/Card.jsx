import { Link } from 'react-router-dom';
import '../styles/card.css';

function Card({
  name,
  flag,
  population,
  region,
  capital,
  cioc,
  showCountryDetails,
  c,
}) {
  return (
    <Link to={`/${cioc}`} onClick={showCountryDetails}>
      <div className="card">
        <img className="card-img" src={flag} alt={`flag of ${name}`} />

        <div className="card-desc">
          <p className="card-heading">{name}</p>
          <p className="card-text">
            Population:
            <span>{population.toLocaleString()}</span>
          </p>
          <p className="card-text">
            Region:
            <span>{region}</span>
          </p>
          <p className="card-text">
            Capital:
            <span>{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
