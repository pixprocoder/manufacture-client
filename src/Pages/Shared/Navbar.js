import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

import "../../App.css";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg  navbar navbar-expand-sm  navbar-dark bg-dark">
        <div className="container nav-container">
          <Link className="text-4xl navbar-brand text-danger" to="/">
            T-service
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>

          <div
            className="collapse navbar-collapse flex flex-col md:flex-row lg:flex-row justify-center items-center lg:justify-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-10">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link active"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blog"
                  className="nav-link active"
                  aria-current="page"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link active"
                  aria-current="page"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="ml-8">
              {!user ? (
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
              ) : (
                <button onClick={logout} className="btn btn-primary">
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
