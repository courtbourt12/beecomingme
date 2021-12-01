import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import { useQuery, useMutation } from "@apollo/client";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { ADD_FRIEND } from "../utils/mutations";
import { QUERY_FRIEND } from "../utils/queries";

export default function AddFriendForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = JSON.parse(localStorage.getItem("user"));
  const userID = user._id;

  let url = window.location.href;
  let goalID = url.substring(url.length - 24, url.length);

  const [friendData, setFriendData] = useState({});

  const [addFriend] = useMutation(ADD_FRIEND);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFriendData({ ...friendData, [name]: value });
  };

  const { loading, data } = useQuery(QUERY_FRIEND, {
    variables: { email: friendData.email },
  });

  const friendUsername = data?.friends?.username;

  // console.log(friendUsername);
  const AddFriend = async (event) => {
    event.preventDefault();
    try {
      const toMutate = {
        username: friendUsername,
        user: userID,
        goal: goalID,
      };

      const { data } = await addFriend({
        variables: { inputFriend: { ...toMutate } },
      });

      handleClose();
    } catch (error) {
      console.error(error);
    }

    // clear form values
    setFriendData({});
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-person-plus addFriendButton"
        viewBox="0 0 16 16"
        placeholder="Add Friend"
        onClick={handleShow}
      >
        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
        <path
          fill-rule="evenodd"
          d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
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
        <Form className="addFriendForm" onSubmit={AddFriend}>
          <Form.Group>
            <Form.Label htmlFor="username">Add a Friend by email</Form.Label>
            <Form.Control
              type="input"
              name="email"
              id="email"
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Friend's username is required!
            </Form.Control.Feedback>
          </Form.Group>

          <div className="buttonDiv">
            <Button variant="outline-dark" onClick={handleClose}>
              Close
            </Button>
            <Button className="addFriend" variant="outline-dark" type="submit">
              Add Friend
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}
