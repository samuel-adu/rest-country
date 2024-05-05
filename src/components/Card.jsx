import { Link } from 'react-router-dom';
import '../styles/card.css';

function Card({ country }) {
  const { name, flag, population, region, capital, alpha3Code } = country;

  return (
    <Link to={`/${alpha3Code}`}>
      <div className="card">
        <img className="card-img" src={flag} alt="" />

        <div className="card-desc">
          <p className="card-heading">{name}</p>

          <p>
            <span className="card-key">Population: </span>
            {population}
          </p>
          <p>
            <span className="card-key">Region: </span>
            {region}
          </p>
          <p>
            <span className="card-key">Capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
