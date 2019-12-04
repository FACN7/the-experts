import React, { useState } from "react";
import "../../../public/css/form.css";

export default function ContractorForm() {
  const [contractor, setContractor] = useState({ name: "", job: "" });

  const handleSubmit = e => {
    e.preventDefault();

    // make a post request with the contractor object to ebraheem
    fetch("/addContractor", {
      method: "POST",
      body: JSON.stringify(contractor),
      headers: {
        "Content-Type": "application/json"
      }
    }).catch(err => console.log(err));
    // redirect to another page
  };
  const handleChange = ({ currentTarget: input }) => {
    setContractor({ ...contractor, [input.name]: input.value });
  };

  return (
    <React.Fragment>
      <div className="form-container">
        <h1>Join Us</h1>

        <form onSubmit={handleSubmit} className="reg-form">
          <input
            type="text"
            placeholder="Name"
            value={contractor.name}
            name="name"
            onChange={handleChange}
            required
            minLength="3"
          />

          <input
            type="text"
            placeholder="Job"
            value={contractor.job}
            name="job"
            onChange={handleChange}
            required
            minLength="3"
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
