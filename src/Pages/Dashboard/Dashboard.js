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
        <ul className="text-orange-600 font-bold">
          <li className="mb-2 px-4">
            <Link to="/dashboard">MY PROFILE</Link>
          </li>
          <li className="mb-2 px-4">
            {!admin && <Link to="myOrder">MY ORDER</Link>}
          </li>
          <li className="mb-2 px-4">
            {!admin && <Link to="/dashboard/addReview">ADD REVIEW</Link>}
          </li>
          <li className="mb-2 px-4">
            {admin && <Link to="/dashboard/allUser">ALL USER</Link>}
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
