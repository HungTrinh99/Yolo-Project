import React, { Component } from "react";
import "./App.css";
import Input from "./Component/Input/Input";
import Home from "./Component/Home";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Home />
      </div>
    );
  }
}
