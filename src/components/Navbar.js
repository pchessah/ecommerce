import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img
            style={{ height: "70px", width: "60px", borderRadius: "40px" }}
            className="navbar-brand"
            alt="logo"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2F5peb66hd80y01.jpg%3Fwidth%3D1024%26auto%3Dwebp%26s%3Dd89e36f75515ad2e53264e31fc5e26a542bc634e&f=1&nofb=1"
          />
        </Link>
        <ul
          className="navbar-nav align-items-center"
          style={{ color: "black" }}
        >
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Game Crafters
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button
            style={{
              textTransform: "capitalize",
              fontSize: "1.4rem",
              background: "transparent",
              border: "0",
              color: "white",
              borderRadius: "0.5rem",
              padding: "0.2rem 0.5rem",
              cursor: "pointer",
              margin: "0.2rem 0.5rem 0.2rem 0",
              transition: "all 0.5s ease-in-out",
            }}
          >
            <FaShoppingCart />
          </button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
