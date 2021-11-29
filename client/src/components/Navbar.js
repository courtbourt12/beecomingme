import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
// import SignUpForm from "./Register";
// import LoginForm from "../pages/Login";

import Auth from "../utils/auth";

const AppNavbar = () => {
  // set modal display state
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand >Beecoming Me</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/mygoals">My Goals</Nav.Link>
            <Nav.Link as={Link} to="/">Friends' Goals</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item >Edit Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={Auth.logout}>Logout</NavDropdown.Item>
              <NavDropdown.Item >Delete Account</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default AppNavbar;

      // <Navbar bg="dark" variant="dark" expand="lg">
      //   <Container fluid>
      //     <Navbar.Brand as={Link} to="/">
      //       Google Books Search
      //     </Navbar.Brand>
      //     <Navbar.Toggle aria-controls="navbar" />
      //     <Navbar.Collapse id="navbar">
      //       <Nav className="ml-auto">
      //         <Nav.Link as={Link} to="/">
      //           Search For Books
      //         </Nav.Link>
      //         {/* if user is logged in show saved books and logout */}
      //         {Auth.loggedIn() ? (
      //           <>
      //             <Nav.Link as={Link} to="/saved">
      //               See Your Books
      //             </Nav.Link>
      //             <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
      //           </>
      //         ) : (
      //           <Nav.Link onClick={() => setShowModal(true)}>
      //             Login/Sign Up
      //           </Nav.Link>
      //         )}
      //       </Nav>
      //     </Navbar.Collapse>
      //   </Container>
      // </Navbar>
      // {/* set modal data up */}
      // <Modal
      //   size="lg"
      //   show={showModal}
      //   onHide={() => setShowModal(false)}
      //   aria-labelledby="signup-modal"
      // >
      //   {/* tab container to do either signup or login component */}
      //   <Tab.Container defaultActiveKey="login">
      //     <Modal.Header closeButton>
      //       <Modal.Title id="signup-modal">
      //         <Nav variant="pills">
      //           <Nav.Item>
      //             <Nav.Link eventKey="login">Login</Nav.Link>
      //           </Nav.Item>
      //           <Nav.Item>
      //             <Nav.Link eventKey="signup">Sign Up</Nav.Link>
      //           </Nav.Item>
      //         </Nav>
      //       </Modal.Title>
      //     </Modal.Header>
      //     <Modal.Body>
      //       <Tab.Content>
      //         <Tab.Pane eventKey="login">
      //           <LoginForm handleModalClose={() => setShowModal(false)} />
      //         </Tab.Pane>
      //         <Tab.Pane eventKey="signup">
      //           <SignUpForm handleModalClose={() => setShowModal(false)} />
      //         </Tab.Pane>
      //       </Tab.Content>
      //     </Modal.Body>
      //   </Tab.Container>
      // </Modal>