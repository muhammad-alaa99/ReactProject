import React, { Component } from "react";
import Contact from "../Contact";
import About from "./../About";
import Home from "./../Home";
import Portfolio from "./../Portfolio";
import Work from "./../Work";
export default class Index extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <Portfolio />
        <Work />
        <Contact/>
      </div>
    );
  }
}
