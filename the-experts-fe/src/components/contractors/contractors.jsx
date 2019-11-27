  import React from "react";
  import Contractor from "../contractor/contractor";
  
  export default function Contractors({ contractors }) {
    if (contractors) {
      return (
        <React.Fragment>
          <div className="contractasdors-list">
            {contractors.map(c => (
              <Contractor contractor={c} key={c.id} />
            ))}
          </div>
        </React.Fragment>
      );
    }
  }
