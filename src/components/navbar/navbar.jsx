import "./navbar.css";

import logo from "../../assets/navbar/car-logo.png";
import { useHistory, NavLink } from "react-router-dom";

export const NavBar = () => {

  const history = useHistory();

  return (
    <div id="nav-bar-container">
      <div id="nav-wrapper">
        <img src={logo} id="logo" alt="ling's cars logo" onClick={()=>history.push("/")}/>
        <div id="nav-button-container">
          <NavLink className="nav-link" to="/">Showroom </NavLink>
          <a className="nav-link">Login</a>
        </div>
      </div>
    </div>
  );
};
