import { React, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AddStepForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="outline-dark" onClick={handleShow}>+</Button>
      <Modal show={show} onHide={handleClose}>
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
          <Button variant="outline-dark" onClick={handleClose}>X</Button>
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
          <Button className = "addStep" variant="outline-dark" onClick={handleClose}>Add Step</Button>
        </form>
      </Modal>
    </div>
  );
}
