import React, {useState} from 'react';

const carsOrderContext = React.createContext({
    //storing the cars from firebase
    cars: [],
    order: [],
});

export const CarsOrderContextProvider = (props) => {
    
}