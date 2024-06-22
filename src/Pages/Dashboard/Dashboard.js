import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <section className="dashboard-container max-w-screen-2xl mx-auto gap-2 grid">
      <div className="mx-auto text-xl">
        <ul className="text-orange-600 font-bold bg-gray-900  min-h-screen p-4">
          <li className="mb-2 ">
            <button className="btn btn-primary w-full ">
              <Link to="/dashboard">MY PROFILE</Link>
            </button>
          </li>
          <li className="mb-2 ">
            {!admin && (
              <button className="btn btn-primary w-full">
                <Link to="myOrder">MY ORDER</Link>
              </button>
            )}
          </li>
          <li className="mb-2 ">
            {!admin && (
              <button className="btn btn-primary w-full">
                <Link to="/dashboard/addReview">ADD REVIEW</Link>
              </button>
            )}
          </li>
          <li className="mb-2 ">
            {admin && (
              <button className="btn btn-primary w-full">
                <Link to="/dashboard/allUser">ALL USER</Link>
              </button>
            )}
          </li>
        </ul>
      </div>
      <div>
        <div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
