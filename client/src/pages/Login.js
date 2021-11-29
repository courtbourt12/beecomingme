import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Login() {
  // Handling modal open and close functions.

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userFormData, setUserFormData] = useState({ email: "", password: "" });


  const [login] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
console.log("submit success " + userFormData.email + " " + userFormData.password)
    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      console.log(data);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setUserFormData({
      email: "",
      password: "",
    });
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" size="lg" active onClick = {handleShow}>
        Login
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
        backdrop="static"
        keyboard={false}
      >
        <form className="loginForm">
          Sign In
          <br />
          <input
            onChange={handleInputChange}
            name="email"
            id="email"
            placeholder="Email"
            type="email"
            value={userFormData.email}
          />
          <br />
          <input
            onChange={handleInputChange}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={userFormData.password}
          />
          <br />
          <div className="buttonDiv">
            <Button variant="outline-dark" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="outline-dark"
              onClick={handleFormSubmit}
            >
              Login
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};