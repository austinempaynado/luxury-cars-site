import "./navbar.css";

import logo from "../../assets/navbar/car-logo.png";

export const NavBar = () => {
  return (
    <div id="nav-bar-container">
      <div id="nav-wrapper">
        <img src={logo} id="logo" alt="ling's cars logo" />
        <div id="nav-button-container">
          <button className="button">Login</button>
          <button className="button">Cart</button>
        </div>
      </div>
    </div>
  );
};
