import { ProductCard } from "../../components/product-card/product-card";
import "./homepage.css";

import carimg from "../../assets/porsche.jpg";
import aventador from "../../assets/aventador.jpg"

export const Homepage = (props) => {
  return (
    <div id="home-container">
      <div id="products-list">
        <ProductCard
          carImg={aventador}
          name = "Lamborghini Aventador"
          price = "$149,999"
        />
        <ProductCard
          carImg={carimg}
          name="Porsche Taycan"
          price="$79,999 CAD"
        />
        <ProductCard
          carImg={carimg}
          name="Porsche Taycan"
          price="$79,999 CAD"
        />
      </div>
    </div>
  );
};
