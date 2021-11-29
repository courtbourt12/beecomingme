import { React, useState } from "react";
// import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import { useMutation } from '@apollo/client';
import Modal from "react-bootstrap/Modal";
// import { useHistory } from 'react-router-dom';
// import { ADD_GOAL } from '../utils/mutations';

export default function AddGoalForm() {

// Handling modal open and close functions.

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

// Handling form input.

const [ inputTitle, setInputTitle] = useState('');
const [ inputDescription, setInputDescription] = useState('');

// const [addGoal, { error }] = useMutation(ADD_GOAL) 
const newGoal = [];

const handleSubmit = (event) => {
  event.preventDefault();

  // props.onSubmit({
  //   title: inputTitle,
  //   description: inputDescription,
  // });

  setInputTitle('');
  setInputDescription('');
  handleClose();
  console.log(newGoal)
};


const handleTitleChange = (e) => {
  const newTitle = setInputTitle(e.target.value);
  newGoal.push(newTitle)
};

const handleDescriptionChange = (e) => {
  const newDescription = setInputDescription(e.target.value);
  newGoal.push(newDescription)
};

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
            value= {inputTitle}
            placeholder="Title*"
            type="text"
            onChange={handleTitleChange}
          />
          <input
            name="addGoalDescription"
            id="addGoalDescription"
            value= {inputDescription}
            placeholder="Description*"
            type="text"
            onChange={handleDescriptionChange}
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
              onClick={handleSubmit}
            >
              Add Goal
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
