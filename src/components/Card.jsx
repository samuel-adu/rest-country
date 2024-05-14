import { Link } from 'react-router-dom';
import '../styles/card.css';

function Card({ country }) {
  const { name, flags, population, region, capital, cca3 } = country;

  return (
    <Link to={`/${cca3}`}>
      <div className="card">
        <img className="card-img" src={flags.svg} alt={`flag of ${name}`} />

        <div className="card-desc">
          <p className="card-heading">{name.common}</p>
          <p className="card-text">
            Population:
            <span>{population.toLocaleString()}</span>
          </p>
          <p className="card-text">
            Continent:
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
