import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../scss/Navbar.scss";
 
const AppNavbar = () => {
 
 const logout = () => {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('user');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
  return (
    <>
      <Navbar className = "theNavbar" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand className="text-white" as={Link} to="/">
            Beecoming Me
          </Navbar.Brand>
          <Navbar.Toggle className="navbar-dark navbar-toggler-icon-light" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-white" as={Link} to="/myprofile">
                My Profile
              </Nav.Link>
              <Nav.Link className="text-white" as={Link} to="/friendgoals">
                Friends' Goals
              </Nav.Link>
              <Nav.Link className="text-white" onClick={logout} to="/">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
 
export default AppNavbar;

