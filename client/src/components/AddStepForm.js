import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../scss/MyGoalDisplay.scss";

export default function AddStepForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        <form className="addStepForm">
          <input
            name="addStepTitle"
            id="addStepTitle"
            placeholder="Title*"
            type="text"
          />
          <input
            name="addStepDescription"
            id="addStepDescription"
            placeholder="Description*"
            type="text"
          />
          <br />
          <label name="dueDate">Due Date</label>
          <input name="dueDate" id="dueDate" type="date" />
          <br />
          <select>
            <option value="1">Not Started</option>
            <option value="2">In Progress</option>
            <option value="3">Complete</option>
          </select>
          <br />
          <div className="buttonDiv">
            <Button variant="outline-dark" onClick={handleClose}>
              Close
            </Button>
            <Button
              className="addStep"
              variant="outline-dark"
              onClick={handleClose}
            >
              Add Step
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
