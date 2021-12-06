import "./product-card.css";
import { Link, useHistory } from "react-router-dom";

export const ProductCard = (props) => {
  const { image, name, price, id } = props;

  const history = useHistory();

  return (
    <div id="card" style={{ backgroundImage: `url(${image})` }} onClick={()=>{history.push(`/car/${id}`)}}>
      <div id="car-info-container">
        <h1 className="carInfo">{name}</h1>
        <h2 className="carInfo">{price}</h2>
        <div id="button-container">
          <Link
            className="link"
            to={`/car/${id}`}
            style={{ textDecoration: "none" }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};
