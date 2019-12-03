import React, { useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    user_password: ""
  });
  const [isExist, setIsExists] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    // make a post request with the contractor object to ebraheem
    fetch("/signup", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.isExist) {
          setIsExists(true);
        } else {
          localStorage.setItem("token", Cookies.get("jwt"));
          window.location = "/";
        }
      })
      .catch(err => console.log(err));
  };
  const handleChange = ({ currentTarget: input }) => {
    setUser({ ...user, [input.name]: input.value });
  };
  console.log(isExist);
  return (
    <React.Fragment>
      <div className="form-container">
        <h1>Signup</h1>

        <form onSubmit={handleSubmit} className="reg-form">
          <input
            type="text"
            placeholder="Enter first name..."
            value={user.first_name}
            name="first_name"
            onChange={handleChange}
            required
            minLength="3"
          />
          <input
            type="text"
            placeholder="Enter last name..."
            value={user.last_name}
            name="last_name"
            onChange={handleChange}
            required
            minLength="3"
          />
          <input
            type="email"
            placeholder="Enter email..."
            value={user.email}
            name="email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Enter password..."
            value={user.user_password}
            name="user_password"
            onChange={handleChange}
            minLength="8"
            required
          />
          <div className="isExist">
            {isExist && (
              <div className="isExist-content">
                <p className="isExst-paragraph">
                  User with the given email is already exists, Please
                  <Link to="/login"> Signin</Link>
                </p>
              </div>
            )}
          </div>
          <div className="form-btn">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
