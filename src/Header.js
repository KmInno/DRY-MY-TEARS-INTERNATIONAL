import React from "react";
import "./Header.css";
import logo from "./logo.jpg"; 

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Jengo Arnold Logo" className="logo" />
      </div>

      <nav className="nav-menu">
       <ul className="nav-links">
 <li><a href="./">Home</a></li>
 <li><a href="./about">About</a></li>
 <li><a href="./projects">Projects</a></li>
 <li><a href="./services">Services</a></li>
<li><a href="./login"className="login-btn" >login</a></li>
<li><a href="./signup" className="signup-btn" >SignUp</a></li>
       </ul>
      </nav>
    </header>
  );
}

export default Header;