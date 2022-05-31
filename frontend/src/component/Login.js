import React, { Component } from "react";
import config from "./../config/config.json";
import $ from "jquery";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.aksi_login = this.aksi_login.bind(this);
    this.state = {};
  }

  componentDidMount() {
    document.title = "Login";
  }

  aksi_login() {
    var vm = this;
    var username = $('[name="username"]').val();
    var password = $('[name="password"]').val();
    if (username && password) {
      $.ajax({
        url: config.api_url + "auth/login",
        method: "POST",
        data: { username, password },
        cache: false,
        success: function (respone) {
          localStorage.setItem("token", respone.data.token);
          const { history } = vm.props;
          history.push("/");
        },
        error: function (error) {
          alert(error.responseJSON.message);
        },
        timeout: 10000,
      });
    } else {
      alert("Username and Password must be field");
    }
  }

  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-4 container">
              <br />
              <br />
              <h1 align="center">{config.app_name}</h1>
              <br />
              <div className="card shadow p-3 p-5">
                <h4>Login</h4>
                <br />
                <label className="fw-bold pb-2">Username</label>
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  autoComplete="off"
                ></input>
                <br />
                <label className="fw-bold pb-2">Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  autoComplete="off"
                ></input>
                <br />
                <br />
                <button
                  className={"btn btn-"+config.app_color+" btn-lg w-100 app_color"}
                  onClick={this.aksi_login}
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
