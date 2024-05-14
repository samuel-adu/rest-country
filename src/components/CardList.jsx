import Card from './Card';

function CardList({ countryData }) {
  return (
    <div className="card-list">
      {countryData.map((item) => (
        <Card key={item.numericCode} country={item} />
      ))}
    </div>
  );
}

export default CardList;
