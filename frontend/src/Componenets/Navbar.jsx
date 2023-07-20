import React from "react";
import "../navbar.css"; // We'll create this CSS file in the next step
import Login from "./Login";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <a href={<Login />}>Home</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
        <li>
          <a href="#signup">Signup</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
