import React, { useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

export default function LoginForm(props) {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    user_password: ""
  });
  const [isExist, setIsExist] = useState(true);

  const token = localStorage.getItem("token");
  if (token) {
    props.history.replace("/");
  }
  const handleSubmit = e => {
    e.preventDefault();

    // make a post request with the contractor object to ebraheem
    fetch("/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())  
      .then(res => {
        if (res.isExist===false) {
          setIsExist(false);
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

  return (
    <React.Fragment>
      <div className="form-container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit} className="reg-form">
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
            {!isExist && (
              <div className="isExist-content">
                <p className="isExst-paragraph">
                  Wrong email or password, Please
                  <Link to="/register"> Signup</Link>
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
