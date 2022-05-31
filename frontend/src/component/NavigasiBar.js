import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import config from "./../config/config.json"

export default class NavigasiBar extends Component {
  constructor(props) {
    super(props);
    this.aksi_logout = this.aksi_logout.bind(this);
    this.state = {};
  }

  aksi_logout() {
    localStorage.removeItem("token");

    const { history } = this.props;
    history.push("/login");
  }

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg={config.app_color} variant="dark" className="app_color">
          <Container>
            <Link to="/" className="navbar-brand">
              {config.app_name}
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/item/list" className="nav-link">
                  Items
                </Link>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </Nav>
              <Nav>
                <Link to="/logout" className="nav-link">
                  Logout
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
