import React, { useState, useEffect } from "react";
import Joi from "joi";
import "./registerationForm.css";
import { CLIENT_RENEG_LIMIT } from "tls";

export default function RegisterationForm() {
  const [contractor, setContractor] = useState({ name: "", job: "" });
  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .label("Name")
      .required(),

    job: Joi.string()
      .min(3)
      .label("Job")
      .required()
  });

  const validate = () => {
    const { error } = schema.validate(contractor, { abortEarly: false });
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validate();

    setErrors({ ...errors });
    if (errors) return;

    // make a post request with the contractor object to ebraheem
    fetch("/addContractor", {
      method: "POST",
      body:JSON.stringify(contractor),
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch(err => console.log(err))
    // redirect to another page
  };
  const handleChange = ({ currentTarget: input }) => {
    contractor[input.name] = input.value;
    setContractor({ ...contractor });
  };

  return (
    <React.Fragment>
      <div className="form-container">
        <h1>Start Your Journey</h1>

        <form onSubmit={handleSubmit} className="reg-form">
          <input
            type="text"
            placeholder="Name"
            value={contractor.name}
            name="name"
            onChange={handleChange}
          />

          {errors.name && (
            <div className="alert alert-danger">{errors.name}</div>
          )}

          <input
            type="text"
            placeholder="Job"
            value={contractor.job}
            name="job"
            onChange={handleChange}
          />
          {errors.job && <div className="alert alert-danger">{errors.job}</div>}
          <div className="form-btn">
            <button
              type="submit"
              className={validate() ? "btn btn-danger" : "btn btn-success"}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
