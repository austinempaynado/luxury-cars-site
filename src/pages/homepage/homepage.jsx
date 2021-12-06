import { ProductCard } from "../../components/product-card/product-card";
import "./homepage.css";
import { useState, useEffect } from "react";

export const Homepage = (props) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCars();
  }, []);

  //getting cars
  const getCars = async () => {
    try {
      const response = await fetch(
        "https://firestore.googleapis.com/v1/projects/luxury-cars-284a3/databases/(default)/documents/cars/"
      );
      const data = await response.json();
      console.log(data);
      setLoading(false);

      const formattedData = data.documents.map((item) => {
        return item.fields;
      });

      setCars(formattedData);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div id="home-container">
      <div id="products-list">
        {cars.map((car) => (
          <ProductCard
            name={car.Name.stringValue}
            image={car.Image.stringValue}
            price={car.Price.stringValue}
          />
        ))}
      </div>
      {loading && (
        <div id="ring-container">
          <div class="loading-ring"></div>
        </div>
      )}
    </div>
  );
};
