import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import env from "env2"
// const env = require("env2");
// env("../local.env");


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    console.log(process.env.REACT_APP_testAPI)
    fetch(process.env.REACT_APP_testAPI)
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">;{this.state.apiResponse}</p>
        <p className="App-intro">;{"xxxx"}</p>

      </div>
    );
  }
}

export default App;
