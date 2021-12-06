import React, {useState} from 'react';

const carsOrderContext = React.createContext({
    //storing the cars from firebase
    cars: [],
    order: [],
    initializeCars: () =>{},
    addCarToOrder: ()  =>{},
    removeCarFromOrder:()=>{},
    viewedCar: 'none'
});

export const CarsOrderContextProvider = (props) => {

}