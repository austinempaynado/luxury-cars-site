import "./product-card.css";
import { CallToAction } from "../callToAction/callToAction";

export const ProductCard = (props) => {
  const { carImg, name, price } = props;

  return (
    <div id="card" style={{ backgroundImage: `url(${carImg})` }}>
      <div id="car-info-container">
        <h1 className="carInfo">{name}</h1>
        <h2 className="carInfo">{price}</h2>
        <div id ="button-container">
          <CallToAction type="Primary" text="View"/>
          <CallToAction type="Primary" text="Order Now" />
        </div>
      </div>
    </div>
  );
};
