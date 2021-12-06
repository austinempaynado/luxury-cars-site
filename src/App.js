import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//temp
import { NavBar } from "./components/navbar/navbar";
import { Homepage } from "./pages/homepage/homepage";
import { CarDetailsPage } from "./pages/CarDetails/car-details";


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>

          <Route path="/car/:id">
            <CarDetailsPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
