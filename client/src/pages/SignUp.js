import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function SignUp() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" size="lg" active onClick = {handleShow}>
        Sign Up
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
        backdrop="static"
        keyboard={false}
      >
        <form action="submit">
          Sign Up
          <br />
          <input name="email" id="email" placeholder="Email" type="email" />
          <br />
          <input
            name="firstName"
            id="firstName"
            placeholder="First Name"
            type="text"
          />
          <br />
          <input
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            type="text"
          />
          <br />
          <input name="dob" id="dob" type="date" />
          <br />
          <input
            name="username"
            id="username"
            placeholder="Username"
            type="text"
          />
          <br />
          <input
            name="password"
            id="password"
            placeholder="Password"
            type="password"
          />
          <br />
          <div className="buttonDiv">
            <Button variant="outline-dark" onClick={handleClose}>
                Close
            </Button>
            <Button
              variant="outline-dark"
              onClick={handleClose}
              as={Link} to="/mygoals"
            >
              Sign Up
            </Button>
          </div>
        </form>
        </Modal>
    </div>
  );
}

