import React, { Component } from "react";
import Navbar from "./NavigasiBar";
// import $ from "jquery";

export default class About extends Component {
  
  componentDidMount() {
    document.title = "About";
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h4 className="mt-4">About</h4>
        </div>
      </div>
    );
  }
}
