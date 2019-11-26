import React from "react";
import Contractor from "../contractor/contractor";

export default function Contractors({ contractors }) {
  if (contractors) {
    return (
      <React.Fragment>
        <div className="contractors-list">
          {contractors.map(c => (
            <Contractor contractor={c} key={c.id} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
