import React from "react";
import AddStepForm from "../components/AddStepForm";
import EditStepForm from "../components/EditStepForm";
import AddFriendForm from "../components/AddFriendForm";
import EditGoalForm from "../components/EditGoalForm";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "../scss/MyGoalDisplay.scss";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { ADD_STEP, ADD_FRIEND, REMOVE_STEP, REMOVE_COMMENT } from "../utils/mutations";

export default function MyGoalDisplay() {
  return (
    <div className="myGoalDisplay">
      <h1>My Goal</h1>
      <div className="goalContainer">
        <h2 className="goalTitle">
          <span>Title of Goal </span>
          <EditGoalForm />
        </h2>
        <p className="goalDescription">Goal Description</p>
        <div className="friendsContainer">
          <h2 className="addFriends">
            <span>Friends </span>
            <AddFriendForm />
          </h2>
          <ul>
            <h5 className="friends">
              Friend{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </h5>
          </ul>
        </div>
        <div className="stepsContainer">
          <h2 className="addSteps">
            <span>Steps: </span>
            <AddStepForm />
          </h2>
          <ul>
            <Card className="homeCard stepStatusCard">
              <Card.Header className="editStep">
                <span>Step Title</span>
                <EditStepForm />
              </Card.Header>
              <Card.Body>
                <Card.Title>Due Date</Card.Title>
                <Card.Text>Step Description</Card.Text>
                <Button variant="primary">Not Started</Button>
                <Button variant="warning">In Progress</Button>
                <Button variant="success">Complete</Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                <Accordion defaultActiveKey="0" className="commentCard" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="commentHeader">
                      Comments
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="singleCommentCard">
                        <ListGroup>
                          <ListGroup.Item>
                            <span className="commentUsername">Username: </span>
                            <span className="commentBody">Comment</span>
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Footer>
            </Card>
          </ul>
        </div>
      </div>
    </div>
  );
}
