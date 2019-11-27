import React from "react";
import "./select.css";

/**
 * this component recives an array of options object and render them dynamicly
 * also recives onChange event
 */
export default function Select({ options, onSelect }) {
  return (
    <select className="select" onChange={e => onSelect(e.target.value)}>
      <option value=""></option>
      {options.map(opt => (
        <option key={opt.id} value={opt.value}>
          {opt.value}
       </option>
      ))}
    </select>
  );
}
