import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import RegisterationForm from "./components/registerationForm/registerationForm";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/home";

export default function App() {
  return (
    <React.Fragment>
      <NavBar firstParm="Login" secondParam="Register" />
        <Switch className="App">
          <Route path="/register" component={RegisterationForm}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
    </React.Fragment>
  );
}
