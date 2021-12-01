import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//temp
import { NavBar } from "./components/navbar/navbar";
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
