import { ShoppingCart } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import './componentCss/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">shop</Link>
        <Link to="/cart">
          <ShoppingCart className="shoppingCartIcon" size={32} />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
