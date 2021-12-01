import "./product-card.css";

export const ProductCard = (props) => {
  const { carImg, name, price } = props;

  return (
    <div id="card" style={{backgroundImage: `url(${carImg})`}}>
      <div id = "car-info-container">
          <h1 className="carInfo">Porche Taycan</h1>
          <h2 className="carInfo">$79,999 CAD</h2>
      </div>
    </div>
  );
};
