import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/loginForm/loginForm";
import RegisterForm from "./components/registerForm/registerForm";
import ContractorProfile from "./components/ContractorProfile/ContractorProfile";
import Home from "./components/home/home";
import "./App.css";

export default function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      setUser({ ...user });
    } catch (error) {}
  }, []);

  return (
    <React.Fragment>
      <NavBar user={user} />
      <Switch className="App">
        <Route path="/ContractorProfile/:id" component={ContractorProfile} />
        <Route path="/register" component={RegisterForm}></Route>
        <Route path="/login" component={LoginForm}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </React.Fragment>
  );
}
