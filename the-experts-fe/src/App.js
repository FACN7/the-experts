import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/loginForm/loginForm";
import RegisterForm from "./components/registerForm/registerForm";
import ContractorProfile from "./components/ContractorProfile/ContractorProfile";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/home";

export default function App() {
  return (
    <React.Fragment>
      <NavBar firstParm="Login" secondParam="Register" />
      <Switch className="App">
        <Route path="/ContractorProfile/:id" component={ContractorProfile} />
        <Route path="/register" component={RegisterForm}></Route>
        <Route path="/login" component={LoginForm}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </React.Fragment>
  );
}
