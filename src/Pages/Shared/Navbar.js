import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/" className="  text-xl uppercase">
          Manufacture
        </Link>
      </div>
      <div>
        <ul className="flex">
          <li>
            <Link to="/home" className="mx-2">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="mx-2">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact" className="mx-2" href="/">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <Link to="/login">LOGIN</Link>
      </div>
    </div>
  );
};

export default Navbar;
