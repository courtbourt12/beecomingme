import React from "react";
import AddStepForm from "../components/AddStepForm";
import AddFriendForm from "../components/AddFriendForm";
import EditGoalForm from "../components/EditGoalForm";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "../scss/MyGoalDisplay.scss";

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
            <span>Friends: </span>
            <AddFriendForm />
          </h2>
          <ul>
            <p className="friends">Friend -</p>
          </ul>
        </div>
        <div className="stepsContainer">
          <h2 className="addSteps">
            <span>Steps: </span>
            <AddStepForm />
          </h2>

          <ul>
            <Card className="text-center homeCard">
              <Card.Header>Step Title</Card.Header>
              <Card.Body>
                <Card.Title>Due Date</Card.Title>
                <Card.Text>Step Description</Card.Text>
                <Button variant="primary">Not Started</Button>
                <Button variant="warning">In Progress</Button>
                <Button variant="success">Complete</Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                <Accordion defaultActiveKey="0" className="homeCard" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Comments</Accordion.Header>
                    <Accordion.Body>
                      <Card className="homeCard" style={{ width: "18rem" }}>
                        <ListGroup variant="flush">
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
