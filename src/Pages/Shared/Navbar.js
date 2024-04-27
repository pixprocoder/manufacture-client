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
        <nav className="container flex justify-between items-center py-4 mx-auto">

          {/* Logo */}
          <Link className="text-4xl navbar-brand text-danger" to="/">
            T-service
          </Link>

         {/* Nav Link */}
         <ul className="flex gap-6">
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

            {/* Login Button */}
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
        </nav>
      
    </header>
  );
};

export default Navbar;
