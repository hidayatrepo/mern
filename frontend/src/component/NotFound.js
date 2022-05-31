import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {

  componentDidMount() {
    document.title = "Not Found";
  }

  render() {
    return (
      <div>
        <div className="mt-5">
          <center>
            <h1 className="margin_top_200">404</h1>
            <h5>Page Not Found</h5>
            <br />
            <Link to="/">
              <button className="btn btn-primary">Kembali Beranda</button>
            </Link>
          </center>
        </div>
      </div>
    );
  }
}
