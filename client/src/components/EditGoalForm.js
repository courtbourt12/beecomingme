import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function EditGoalForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="editGoalDiv">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        className="bi bi-pencil-square editGoalButton"
        viewBox="0 0 16 16"
        placeholder="Edit Goal"
        onClick={handleShow}
      >
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path
          fill-rule="evenodd"
          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
        />
      </svg>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
        backdrop="static"
        keyboard={false}
      >
        <form className="editGoalForm">
          <input
            name="editGoalForm"
            id="editGoalForm"
            placeholder="GoalTitle"
            type="text"
          />
          <input
            name="editGoalDescription"
            id="editGoalDescription"
            placeholder="GoalDescription"
            type="text"
          />
          <br />
          <div className="buttonDiv">
            <Button variant="outline-dark" onClick={handleClose}>
              Close
            </Button>
            <Button
              className="editGoal"
              variant="outline-dark"
              onClick={handleClose}
            >
              Edit Goal
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
