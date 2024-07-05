import React from "react";
import "./style.scss";

const Header = () => {
  return (
   <div className="header-container">
    <ul className="header-menu">
        <li>intro</li>
        <li>about</li>
        <li>featured</li>
    </ul>
    <h1 id="header-text">Art objects</h1>
   </div>
  );
};

export default Header;
