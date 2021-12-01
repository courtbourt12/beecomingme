import React, { useState, useEffect } from 'react';
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
 
export default function LoginForm() {
  // Handling modal open and close functions.
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
 
  const [login, { error }] = useMutation(LOGIN_USER);
 
  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);
 
 
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
    try {
      const { data } = await login({
        variables: { ...userFormData },
      });
      localStorage.setItem("user", JSON.stringify(data.login));
      window.location.assign('/myprofile');
      handleClose();
      // Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    // clear form values
    setUserFormData({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <Button variant="dark" size="lg" active onClick = {handleShow}>
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
        <Form className= "loginForm" noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Alert
            dismissible
            onClose={() => setShowAlert(false)}
            show={showAlert}
            variant="danger"
          >
            Something went wrong with your login credentials!
          </Alert>
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="input"
              placeholder="Your email"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
            <Form.Control.Feedback type="invalid">
              Email is required!
            </Form.Control.Feedback>
          </Form.Group>
 
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
            <Form.Control.Feedback type="invalid">
              Password is required!
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            variant="outline-dark"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            disabled={!(userFormData.email && userFormData.password)}
            type="submit"
            variant="outline-dark"
          >
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
};
