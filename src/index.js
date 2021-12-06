import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqupadV1pYrHcgZdHYYc0K-Bmr3YHTc-8",
  authDomain: "luxury-cars-284a3.firebaseapp.com",
  databaseURL: "https://luxury-cars-284a3-default-rtdb.firebaseio.com",
  projectId: "luxury-cars-284a3",
  storageBucket: "luxury-cars-284a3.appspot.com",
  messagingSenderId: "221679047264",
  appId: "1:221679047264:web:3252eaec1716ac6f192905"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
