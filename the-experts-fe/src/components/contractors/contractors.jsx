import React from "react";
import Contractor from "../contractor/contractor";
import { Link } from 'react-router-dom';

export default function Contractors({ contractors }) {
  if (contractors) {
    return (
      <React.Fragment>
        <div className="contractors-list">
          {contractors.map(c => (
            <Link  key={c.id} to={{ pathname:`/ContractorProfile` ,state:{contractor:c}} }>
            <Contractor contractor={c}  />
           </Link>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
