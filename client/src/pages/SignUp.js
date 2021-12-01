import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

export default function SignUp() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    dob: "",
  });
 
  const [addUser] = useMutation(ADD_USER);
 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const AddUser = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { inputUser: { ...userData } },
      });
      console.log("data addUser ",data.addUser)
      localStorage.setItem("user", JSON.stringify(data.addUser));
      window.location.assign('/myprofile');
      handleClose();
    } catch (error) {
      console.error(error);
    }

    // clear form values
    setUserData({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    dob: "",
    });
  };
 
  return (
    <div>
      <Button variant="dark" size="lg" active onClick={handleShow}>
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
        <Form className="addUserForm" onSubmit={AddUser}>
          <Form.Group>
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              type="input"
              name="username"
              id="addUsername"
              value={userData.username}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Username is required!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="addPassword"
              value={userData.password}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Password is required!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="addEmail"
              value={userData.email}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Email is required!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="firstName">First Name</Form.Label>
            <Form.Control
              type="input"
              name="first_name"
              id="addFirstName"
              value={userData.first_name}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              First name is required!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="lastName">Last Name</Form.Label>
            <Form.Control
              type="input"
              name="last_name"
              id="addLastName"
              value={userData.last_name}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Last name is required!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="dob">Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              id="addDob"
              value={userData.dob}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Date of birth is required!
            </Form.Control.Feedback>
          </Form.Group>

          <div className="buttonDiv">
            <Button variant="outline-dark" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-dark" type="submit">
              Sign Up
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

