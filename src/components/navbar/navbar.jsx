import "./navbar.css";

import logo from "../../assets/navbar/car-logo.png";

export const NavBar = () => {
  return (
    <div id="nav-bar-container">
      <div id="nav-wrapper">
        <img src={logo} id="logo" />
        <div id="button-container">
          <button className="button">Login</button>
          <button className="button">Cart</button>
        </div>
      </div>
    </div>
  );
};
