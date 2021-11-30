import { React, useState } from "react";
// import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useMutation } from "@apollo/client";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// import { useHistory } from 'react-router-dom';
import { ADD_GOAL } from "../utils/mutations";

export default function DisplayGoalForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const userID = user._id
  const [goalData, setGoalData] = useState({
    title: "",
    description: ""
  });
  
  const [addGoal, { data, loading, error }] = useMutation(ADD_GOAL);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGoalData({ ...goalData, [name]: value});
  };
 
  // handleInputChange({user: userID});
  const AddGoal = async (event) => {
    event.preventDefault();
    try {
      const toMutate = {
       ...goalData,
        user: userID
      }

      const { data } = await addGoal({
        variables: { inputGoal: {...toMutate} },
        });
        
      handleClose();
      
    } catch (error) {
      console.error(error);
    }

    // clear form values
    setGoalData({
      user: "",
      title: "",
      description: "",
    });
  }

  // Handling form input for the modal.
    return (
      <div>
        <Button
          className="addGoalButton"
          placeholder="Add Goal"
          variant="outline-dark"
          onClick={handleShow}
        >
          +
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          centered
          backdrop="static"
          keyboard={false}
        >
          <Form className="addGoalForm" onSubmit={AddGoal}>
            <Form.Group>
            <Form.Label htmlFor="title">Goal Title</Form.Label>
            <Form.Control
              type="input"
              name="title"
              id="addGoalTitle"
              value={goalData.title}
              onChange={handleInputChange}
              required
            />
          <Form.Control.Feedback type="invalid">
              Goal title is required!
          </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="description">Goal Description</Form.Label>
            <Form.Control
              name="description"
              id="addGoalDescription"
              value={goalData.description}
              type="input"
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Goal description is required!
            </Form.Control.Feedback>
          </Form.Group>
          {/* <Form.Group>
          <Form.Label htmlFor="description">Add a Friend by Username</Form.Label>
            <Form.Control
              name="addFriend"
              id="addFriend"
              type="text"
            />
            </Form.Group> */}
            <div className="buttonDiv">
              <Button variant="outline-dark" onClick={handleClose}>
                Close
              </Button>
              <Button
                className="addGoal"
                variant="outline-dark"
                type="submit"
              >
                Add Goal
              </Button>
            </div>
         </Form>
        </Modal>
      </div>
    );
  }

