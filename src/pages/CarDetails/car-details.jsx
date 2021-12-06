import "./car-details.css";
import CarsContext from "../../context/carsOrderContext";
import { useParams, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";

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
      <div id="details-page-container">
        <div
          className="overview"
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

        <div id="features-container">
          <div className="feature-wrapper">
            <FaRegCheckCircle className="feature-icon" />
            <p className="features-text">{car.Feature1?.stringValue}</p>
          </div>
          <div className="feature-wrapper">
            <FaRegCompass className="feature-icon" />
            <p className="features-text">{car.Feature2?.stringValue}</p>
          </div>
          <div className="feature-wrapper">
            <FaRegSmile className="feature-icon" />
            <p className="features-text">{car.Feature3?.stringValue}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Error finding car.</p>;
  }
};
