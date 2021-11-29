import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function AddGoalForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        <form className="addGoalForm">
          <input
            name="addGoalTitle"
            id="addGoalTitle"
            placeholder="Title*"
            type="text"
          />
          <input
            name="addGoalDescription"
            id="addGoalDescription"
            placeholder="Description*"
            type="text"
          />
          <input
            name="addFriend"
            id="addFriend"
            placeholder="Friend Username"
            type="text"
          />
          <br />
          <div className="buttonDiv">
            <Button variant="outline-dark" onClick={handleClose}>
              Close
            </Button>
            <Button
              className="addGoal"
              variant="outline-dark"
              onClick={handleClose}
            >
              Add Goal
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
