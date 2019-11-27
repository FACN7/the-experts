import React, { useState, useEffect } from "react";
import Joi from "joi";
import "./registerationForm.css";

export default function RegisterationForm() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

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

  const handleSubmit = e => {
    e.preventDefault();
    const { error, value } = schema.validate({ name, job });
    if (error) {
      console.log(error.details[0].message);
    }

    console.log(value);
  };

  const handleChange = e => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "job") {
      setJob(e.target.value);
    }
  };

  return (
    <React.Fragment>
      <div className="form-container">
        <h1>Hello Form</h1>

        <form onSubmit={handleSubmit} className="reg-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Job"
            value={job}
            name="job"
            onChange={handleChange}
          />
          <div className="form-btn">
            <button type="submit" disabled={false}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
