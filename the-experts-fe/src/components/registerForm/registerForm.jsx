import React, { useState } from "react";

export default function RegisterForm() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(user);
    // make a post request with the contractor object to ebraheem
    fetch("/replace-me", {
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
        <h1>Signup</h1>

        <form onSubmit={handleSubmit} className="reg-form">
          <input
            type="text"
            placeholder="Enter first name..."
            value={user.firstName}
            name="firstName"
            onChange={handleChange}
            required
            minLength="3"
          />
          <input
            type="text"
            placeholder="Enter last name..."
            value={user.lastName}
            name="lastName"
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
            value={user.password}
            name="password"
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
