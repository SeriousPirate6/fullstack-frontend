import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const OnInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/users", user);
    navigate("/");
  };

  return (
    <div className={"container"}>
      <div className="row">
        <div
          className={
            "col-md-6 offset-md-3 border-primary rounded p-4 mt-2 shadow"
          }
        >
          <h2 className={"text-center m-4"}>Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className={"mb-3"}>
              <label htmlFor={"Name"} className={"form-label"}>
                Name
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter your name"}
                name={"name"}
                value={name}
                onChange={(e) => OnInputChange(e)}
              />
            </div>
            <div className={"mb-3"}>
              <label htmlFor={"Username"} className={"form-label"}>
                Username
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter your username"}
                name={"username"}
                value={username}
                onChange={(e) => OnInputChange(e)}
              />
            </div>
            <div className={"mb-3"}>
              <label htmlFor={"Email"} className={"form-label"}>
                Email
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter your email"}
                name={"email"}
                value={email}
                onChange={(e) => OnInputChange(e)}
              />
            </div>
            <button type={"submit"} className={"btn btn-success"}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
