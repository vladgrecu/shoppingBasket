import React from "react";
import CartIcon from "./CartIcon";

export default function Navbar({ cart }) {
  return (
    <nav
      className="navbar sticky-top navbar-light"
      style={{ backgroundColor: "#e7e7e7" }}
    >
      <a className="navbar-brand" href="/">
        <h3>My Shop</h3>
      </a>
      <ul className="navbar nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item mr-2">Home</li>
        <li className="nav-item mr-2">Favourites</li>
        <li className="nav-item mr-2">About</li>
        <li className="nav-item mr-2">
          <CartIcon cart={cart} />
        </li>
      </ul>
    </nav>
  );
}
