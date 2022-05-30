import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <section>
      <h1 className="text-xl text-center text-blue-700 font-extrabold uppercase my-2">
        My Profile info
      </h1>
      <div class="card max-w-2xl mx-auto  shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{user?.displayName}</h2>
          <p>{user?.email}</p>
          <div>
            <h1 className="uppercase text-2xl mb-2 underline">Add more Info</h1>
            <input
              type="text"
              placeholder="Your address"
              class="input my-2 input-bordered p-3 input-sm w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Your Phone number"
              class="input my-2 input-bordered p-3 input-sm w-full max-w-xs"
            />
            <button className="px-8 py-2 rounded-md bg-orange-600 hover:bg-orange-800 text-xl text-white font-bold block">
              SAVE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
