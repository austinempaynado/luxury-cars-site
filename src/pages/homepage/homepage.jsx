import { ProductCard } from "../../components/product-card/product-card";
import "./homepage.css";
import { useState, useEffect, useContext } from "react";
import CarsContext from "../../context/carsOrderContext";

export const Homepage = (props) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const globalState = useContext(CarsContext);

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

      const formattedData = data.documents.map((item) => {
        return item.fields;
      });

      // console.log(formattedData);
      setCars(formattedData);
      setLoading(false);
      globalState.initializeCars(formattedData);
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
            className="product-card"
            name={car.Name.stringValue}
            image={car.Image.stringValue}
            price={car.Price.stringValue}
            key={car.Id.stringValue}
            id={car.Id.stringValue}
          />
        ))}
      </div>
      {loading && (
        <div id="ring-container">
          <div className="loading-ring"></div>
        </div>
      )}
    </div>
  );
};
