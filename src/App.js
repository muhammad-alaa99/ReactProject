import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";

import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Index from "./Components/Index";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Work from "./Components/Work";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}
