import React, { useState } from "react";

const CarsContext = React.createContext({
  //storing the cars from firebase API
  cars: [],
  initializeCars: () => {},
});

export const CarsContextProvider = (props) => {
  const [cars, setCars] = useState([]);

  const initializeCars = (carsAPI) => {
    setCars(carsAPI);
  };

  return (
    <CarsContext.Provider
      value={{ cars: cars, initializeCars: initializeCars }}
    >
      {props.children}
    </CarsContext.Provider>
  );
};

export default CarsContext;
