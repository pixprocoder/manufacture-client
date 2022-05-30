import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UsersDetails from "./UsersDetails";

const Users = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <tbody>
            {users.map((user) => (
              <UsersDetails key={user._id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Users;
