import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function AddFriendForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="addFriendDiv">
      <button
        className="addFriendButton"
        placeholder="Add Friend"
        variant="outline-dark"
        onClick={handleShow}
      >
        {" "}
        +
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
        backdrop="static"
        keyboard={false}
      >
        <form className="addFriendForm">
          <input
            name="addFriend"
            id="addFriend"
            placeholder="Friend*"
            type="text"
          />
          <div className="buttonDiv">
            <Button variant="outline-dark" onClick={handleClose}>
              Close
            </Button>
            <Button
              className="addFriend"
              variant="outline-dark"
              onClick={handleClose}
            >
              Add Friend
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
