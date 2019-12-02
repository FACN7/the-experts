import React, { useState } from "react";

export default function LoginForm() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    user_password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();

    // make a post request with the contractor object to ebraheem
    fetch("/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    }).catch(err => console.log(err));
    // redirect to another page
  };
  const handleChange = ({ currentTarget: input }) => {
    user[input.name] = input.value;
    setUser({ ...user });
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
