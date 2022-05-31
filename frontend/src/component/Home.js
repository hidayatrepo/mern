import React, { Component } from "react";
import Navbar from "./NavigasiBar";
import config from "./../config/config.json";
import hero from './../assets/images/hero.png';
import { Link } from "react-router-dom";
// import $ from "jquery";

export default class Home extends Component {
  componentDidMount() {
    document.title = "Home";
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">

          <div className="row margin_top_100">
            <div className="col-lg-6 display_table">
              <div className="display_table_cell vertical_align_middle">
              <h1><b>App {config.app_name}</b></h1>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
              <Link to="/item/list">
              <button className={'app_color btn mt-4 btn-'+config.app_color}>Lihat Data</button>
              </Link>
              </div>
            </div>
            <div className="col-lg-6">
            <img className="float_right" src={hero} width="100%" alt="hero"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
