import Card from './Card';

function CardList({ filteredData }) {
  return (
    <div className="card-list">
      {filteredData.map((item) => (
        <Card key={item.numericCode} country={item} />
      ))}
    </div>
  );
}

export default CardList;
