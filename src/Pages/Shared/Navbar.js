import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "../../Styles/Style.css";

const Navbar = () => {
  const [user] = useAuthState(auth);
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
          {user && (
            <li>
              <Link to="/dashboard" className="mx-2">
                DASHBOARD
              </Link>
            </li>
          )}
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
        {user ? (
          <Link onClick={() => signOut(auth)} to="/login">
            LOG OUT
          </Link>
        ) : (
          <Link to="/login">LOGIN</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
