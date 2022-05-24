import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Home.css";

const Navbar = () => {
  return (
    <div class="navbar ">
      <div>
        <Link to="/" class="btn btn-ghost  text-xl uppercase">
          Manufacture
        </Link>
      </div>
      <div>
        <ul className="flex">
          <li>
            <Link to="/home" class="mx-2">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" class="mx-2">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact" class="mx-2" href="/">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" alt="" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow text-black bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between" href="/">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li>
              <a href="/">Settings</a>
            </li>
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
