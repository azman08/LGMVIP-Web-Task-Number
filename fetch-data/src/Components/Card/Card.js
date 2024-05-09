import React from "react";
import Loader from "../Loader/Loader.jsx";

const Users = ({ loading, users }) => {
  return loading ? (
    <div id="main">
      <Loader />
    </div>
  ) : (
    <div id="main">
      {users.map((user) => (
        <div className="project column3">
          {console.log(user)}
          <div className="profile">
            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
            <h1 className="name">
              {user.first_name} {user.last_name}
            </h1>
            <p className="email">{user.email}</p>
            <p> USER ID : {user.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
