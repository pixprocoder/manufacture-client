import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <h1 className="text-5xl text-center">MY DASHBOARD</h1>
          <Outlet />

          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-orange-200 text-base-content">
            <li>
              <Link to="/dashboard">MY PROFILE</Link>
            </li>
            <li>
              <Link to="/dashboard/addReview">Add a review</Link>
            </li>
            <li>
              <Link to="myOrder">My Order</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
