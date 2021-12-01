import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//temp
import { NavBar } from "./components/navbar/navbar";
import { ProductCard } from "./components/product-card/product-card";
import photo from "./assets/porsche.jpg" 
function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <div style={{display: "flex"}}>
        <ProductCard carImg={photo}/>
        <ProductCard carImg={photo}/>
        <ProductCard carImg={photo}/>
      </div>

      <Router>
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
