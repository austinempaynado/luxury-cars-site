import { ProductCard } from "../../components/product-card/product-card";
import "./homepage.css";

import carimg from "../../assets/porsche.jpg";

export const Homepage = () => {
  return (
    <div id="home-container">
      <div id="products-list">
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
        <ProductCard
          carImg={carimg}
          name="Porsche Taycan"
          price="$79,999 CAD"
        />
      </div>
    </div>
  );
};
