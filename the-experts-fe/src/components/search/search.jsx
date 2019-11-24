import React from "react";

import "./search.css";

export default function Search({ onSearch, onSearchClick, value }) {
  return (
    <React.Fragment>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          onChange={e => onSearch(e)}
          value={value}
          className="search-input"
        />
        <button type="submit" className="search-button" onClick={onSearchClick}>
          <i className="fa fa-search "></i>
        </button>
      </div>
    </React.Fragment>
  );
}
