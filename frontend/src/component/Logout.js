import React, { Component } from "react";

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.aksi_logout = this.aksi_logout.bind(this);
    this.state = {};
  }

  componentDidMount() {
    this.aksi_logout();
  }

  aksi_logout() {
    localStorage.removeItem("token");

    const { history } = this.props;
    history.push("/login");
  }

  render() {
    return (
      <div>
        <h1>Logout ...</h1>
      </div>
    );
  }
}
