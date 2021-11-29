import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const newComment = [];

export default function AddCommentForm() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ inputComment, setInputComment] = useState('');

const handleSubmit = (event) => {
  event.preventDefault();
  const newC = inputComment
  
  newComment.push({comment: newC,})
  console.log(newComment)

  setInputComment('');
  handleClose();
};

const handleCommentChange = (e) => {
  setInputComment(e.target.value);
};

  return (
    <>
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
        <form className="addCommentForm">
          <input
            name="addComment"
            id="addComment"
            value= {inputComment}
            placeholder="Comment*"
            type="text"
            onChange= {handleCommentChange}
          />
          <Button onClick = {handleSubmit}>Add Comment</Button>
        </form>
      </Modal>
    </>
  );
}
