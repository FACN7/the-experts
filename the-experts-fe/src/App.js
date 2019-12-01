import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
<<<<<<< HEAD
import RegisterationForm from "./components/registerationForm/registerationForm";
import ReviewForm from "./components/ReviewSubmit/ReviewSubmit";

=======
>>>>>>> master
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import RegisterForm from "./components/registerForm/registerForm";
import LoginForm from "./components/loginForm/loginForm";

export default function App() {
  return (
    <React.Fragment>
      <NavBar firstParm="Login" secondParam="Register" />
<<<<<<< HEAD
        <Switch className="App">
          <Route path="/register" component={RegisterationForm}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
        <ReviewForm></ReviewForm>
=======
      <Switch className="App">
        <Route path="/register" component={RegisterForm}></Route>
        <Route path="/login" component={LoginForm}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
>>>>>>> master
    </React.Fragment>
  );
}
