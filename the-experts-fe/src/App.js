import React, { useState, useEffect } from "react";
import "./App.css";
import Select from "./components/select/select";
import Contractors from "./components/contractors/contractors";

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
    fetch(`/contractor-results/${jobValue}`)
      .then(res => res.text())
      .then(res => {
        if (jobValue) {
          setSelectedContractors(JSON.parse(res));
        } else {
          setSelectedContractors([]);
        }
      });
  }, [jobValue]);

  const handleSelect = job => {
    setJobValue(job);
  };

  return (
    <div className="App">
      <Select options={jobsArray} onSelect={handleSelect}></Select>
      <div>
        {selectedContractors.length > 0 && (
          <Contractors contractors={selectedContractors} />
        )}
      </div>
    </div>
  );
}
