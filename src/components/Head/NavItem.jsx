// NavItem.js
import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, children }) => (
  <li className="nav-item active">
    <Link className="nav-link" to={to}>
      {children} <span className="sr-only">(current)</span>
    </Link>
  </li>
);

export default NavItem;
