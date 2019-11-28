import React, { useState, useEffect } from "react";
import "./App.css";
import Select from "./components/select/select";
import Contractors from "./components/contractors/contractors";
import NavBar from "./components/NavBar/NavBar";
import WhyUs from "./components/WhyUs/WhyUs";
import RegisterationForm from "./components/registerationForm/registerationForm";

export default function App() {
  const [jobsArray, setJobArray] = useState([
    { id: 1, value: "wood-worker" },
    { id: 2, value: "plumber" },
    { id: 3, value: "electric" },
    { id: 4, value: "painter" }
  ]);
  const [jobValue, setJobValue] = useState("");
  const [selectedContractors, setSelectedContractors] = useState([]);

  useEffect(() => {
    if (jobValue) {
      fetch(`/contractor-results/${jobValue}`)
        .then(res => res.json())
        .then(res => {
          if (jobValue) {
            setSelectedContractors(res);
          } else {
            setSelectedContractors([]);
          }
        });
    }
  }, [jobValue]);

  const handleSelect = job => {
    setJobValue(job);
  };

  return (
    <React.Fragment>
      <div className="App">
        <NavBar firstParm="Login" secondParam="Register" />
        <h1 className="page-description">
          Find The Most Wanted <br />
          Professionals <br />
          around
        </h1>

        <Select options={jobsArray} onSelect={handleSelect}></Select>
        <div>
          {jobValue && <Contractors contractors={selectedContractors} />}
        </div>

        <div className="test">
          <WhyUs
            imageSrc="https://icon-library.net/images/filtering-icon/filtering-icon-5.jpg"
            description1="Get filtered data"
            description2="we filter the constructors data to  make sure that you will get the best results"
          />
          <WhyUs
            imageSrc="https://cdn4.iconfinder.com/data/icons/user-interface-color-set/128/support_user_interface_color_b-512.png"
            description1="we Are always here for you "
            description2="if you want to ask or notify us about something just call "
          />
          <WhyUs
            imageSrc="https://cdn3.iconfinder.com/data/icons/miscellaneous-16-solid/128/credible_reliable_Dependable_authentic_credibility_trust-512.png"
            description1="best Value for the money"
            description2="We will grantee that you will get the best service"
          />
        </div>

      </div>
    </React.Fragment>
  );
}
