import React from "react";

const UsersDetails = ({ user, refetch }) => {
  const { email, status } = user;

  const makeAnAdmin = () => {
    fetch(
      `http://localhost:5000/user/admin/${email}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        console.log("response", res);

        return res.json();
      })
      .then((data) => {
        console.log(data);
        refetch();
      });
  };

  return (
    <section>
      <div className="flex justify-between">
        <h1>{email}</h1>
        <div>
          <td>
            {status !== "admin" && (
              <button className="btn btn-xs" onClick={makeAnAdmin}>
               Make Admin
              </button>
            )}
          </td>
          <td>
            <button className="btn btn-secondary">delete</button>
          </td>
        </div>
      </div>
    </section>
  );
};



export default UsersDetails;







