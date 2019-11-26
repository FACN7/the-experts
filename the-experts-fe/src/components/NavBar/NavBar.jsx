
import React from "react";

import "./NavBar.css";

export default function NavBar({firstParm,secondParam}) {
  return (
    <React.Fragment>

<div className="topnav" id="myTopnav">
  
  <a href="/" className="login" >{firstParm}</a>
  <a href="/" className="title" >The Experts</a>
  <a href="/" className="register" >{secondParam}</a>

</div>


    </React.Fragment>
  );
}
