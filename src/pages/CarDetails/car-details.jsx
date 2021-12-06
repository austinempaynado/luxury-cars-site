import "./car-details.css";
import CarsContext from "../../context/carsOrderContext";
import { useParams, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const CarDetailsPage = (props) => {
  const { id } = useParams();

  const [car, setCar] = useState({});

  const globalState = useContext(CarsContext);

  useEffect(() => {
    const car = globalState.cars.find((car) => car.Id.stringValue === id);
    setCar(car);
  }, []);
  if (car) {
    return (
      <div
        className="details-page"
        style={{ backgroundImage: `url(${car.Image?.stringValue})` }}
      >
        <h1 className="details-text" id="car-title">
          {car.Name?.stringValue}
        </h1>
        <h2 className="details-text">{car.Price?.stringValue}</h2>
        <h2 className="details-text" id="overview">
          Overview
        </h2>
        <p className="details-text" id="description">
          {car.Description?.stringValue}
        </p>
      </div>
    );
  } else {
    return <p>Error finding car.</p>;
  }
};
