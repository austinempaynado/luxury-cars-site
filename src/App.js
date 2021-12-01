import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//temp
import { NavBar } from "./components/navbar/navbar";
import { ProductCard } from "./components/product-card/product-card";
import photo from "./assets/porsche.jpg"
import { Homepage } from "./pages/homepage/homepage";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Switch>
          <Route path="/">
            <Homepage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
