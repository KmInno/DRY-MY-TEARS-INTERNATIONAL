import React from "react";
import "./Header.css";
import logo from "./logo.jpg"; 

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Jengo Arnold Logo" className="logo" />
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
      </nav>

      <div className="header-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;