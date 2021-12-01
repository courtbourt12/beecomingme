import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../utils/mutations";

export default function AddCommentForm() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = JSON.parse(localStorage.getItem("user"));
  const userID = user._id

  const [ commentData, setCommentData] = useState({
    username: "",
    description: "",
    user: "",
    goal: "",
    step: ""
  });

  const [newComment] = useMutation(ADD_COMMENT)

  const handleCommentChange = (event) => {
    const { value } = event.target.value;
    console.log("event.target.value: ",event.target.value)
    setCommentData({ value });
  };

  const AddComment = async (e) => {
      e.preventDefault();
      console.log("event.target.value: ",e.target.value)
      try {
        const { data } = await newComment({
          variables: { inputGoal: {...commentData} },
          });
      } catch (err) {
        console.error(err)
      }

    setCommentData({
      username: "",
      description: "",
      user: "",
      goal: "",
      step: ""
    });;
    handleClose();
  };

  return (
    <>
    <Button
        className="addComment"
        placeholder="Add Comment"
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
        <Form className="addCommentForm" onSubmit={ADD_COMMENT}>
          <Form.Group>
            <Form.Label htmlFor="title">{userID.username}</Form.Label>
            <Form.Control
              type="input"
              name="title"
              id="addCommentTitle"
              value={userID._id}
              onChange={handleCommentChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Comment is required!
            </Form.Control.Feedback>
          </Form.Group>
        {/* <form className="">
          <input
            name="addComment"
            id="addComment"
            value= {inputComment}
            placeholder="Comment*"
            type="text"
            onChange= {handleCommentChange}
          /> */}
          <Button onClick = {ADD_COMMENT}>Add Comment</Button>
        </Form>
      </Modal>
    </>
  );
}
