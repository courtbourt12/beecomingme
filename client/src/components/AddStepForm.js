import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import { useMutation } from "@apollo/client";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../scss/MyGoalDisplay.scss";
import { ADD_STEP } from "../utils/mutations";

export default function AddStepForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [stepData, setStepData] = useState({
    title: "",
    description: "",
    due:"",
    status:""
  });

  const user = JSON.parse(localStorage.getItem("user"));
  const userID = user._id

  let url = window.location.href;
  let goalID = url.substring(url.length - 24, url.length);
   
  const [addStep] = useMutation(ADD_STEP);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStepData({ ...stepData, [name]: value});
  };

  const AddStep = async (event) => {
    event.preventDefault();
    try {

      const asAString = stepData.status;
      const asAnInteger = parseInt(asAString, 10)
      console.log(typeof asAnInteger)

      const toMutate = {
        title: stepData.title,
        description: stepData.description,
        due: stepData.due,
        status: asAnInteger,
        user: userID,
        goal: goalID
      }
      console.log(toMutate)

      const { data } = await addStep({
        variables: { inputStep: {...toMutate} },
        });
        console.log("the data", data)

      handleClose();

    } catch (error) {
      console.error(error);
    }

    // clear form values
    setStepData({
      title: "",
      description: "",
      due:"",
      status:""
    });
  }

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-plus-square addStepButton"
        viewBox="0 0 16 16"
        placeholder="Add Step"
        onClick={handleShow}
      >
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </svg>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Form className="addStepForm" onSubmit={AddStep}>
          <Form.Group>
          <Form.Label htmlFor="title">Step Title</Form.Label>
          <Form.Control
            type="input"
            name="title"
            id="addStepTitle"
            value={stepData.title}
            onChange={handleInputChange}
            required
          />
        <Form.Control.Feedback type="invalid">
            Step title is required!
        </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="description">Step Description</Form.Label>
          <Form.Control
            name="description"
            id="addStepDescription"
            value={stepData.description}
            type="input"
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Step description is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="due">Due Date</Form.Label>
          <Form.Control
            type="date"
            name="due"
            id="addDue"
            value={stepData.due}
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Due date is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="due">Step Status</Form.Label>
          <select class="form-select" aria-label="Default select example"
           name="status" onChange={handleInputChange}>
            <option selected>Open this select menu</option>
            <option value="1">Not Started</option>
            <option value="2">In Progress</option>
            <option value="3">Complete</option>
          </select>
          {/* <Form.Control
            type="select"
            name="status"
            id="addStatus"
            value={stepData.status}
            onChange={handleInputChange}
            required
          /> */}
          <Form.Control.Feedback type="invalid">
            Status is required!
          </Form.Control.Feedback>
        </Form.Group>
            <Button variant="outline-dark" onClick={handleClose}>
              Close
            </Button>
            <Button
              className="addStep"
              variant="outline-dark"
              type="submit"
            >
              Add Step
            </Button>
        </Form>
      </Modal>
    </div>
  );
}
