import "./product-card.css";
import { NavigationLink } from "../callToAction/navigation-link";

export const ProductCard = (props) => {
  const { image, name, price } = props;

  return (
    <div id="card" style={{ backgroundImage: `url(${image})` }}>
      <div id="car-info-container">
        <h1 className="carInfo">{name}</h1>
        <h2 className="carInfo">{price}</h2>
        <div id ="button-container">
          <NavigationLink type="Primary" text="Learn More"/>
        </div>
      </div>
    </div>
  );
};
