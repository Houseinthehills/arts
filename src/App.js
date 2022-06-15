import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Nav from "./Components/nav";
import Features from "./Pages/Features";
import Home from "./Pages/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 padding-0">
              <Nav />
              <Header />
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/features" element={<Features />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
