import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const { id } = useParams();

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className={
              "col-md-6 offset-md-3 border-primary rounded p-4 mt-2 shadow"
            }
          >
            <h2 className="text-center m-4">User Details</h2>
            <div className="card-header">Details of User Id: {user.id}</div>
            <ul className={"list-group list-group-flush"}>
              <li className={"list-group-item"}>
                <b>Name</b>: {user.name}
              </li>
              <li className={"list-group-item"}>
                <b>Username</b>: {user.username}
              </li>
              <li className={"list-group-item"}>
                <b>Email</b>: {user.email}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
