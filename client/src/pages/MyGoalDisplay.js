import React from "react";
import AddStepForm from "../components/AddStepForm";
import AddFriendForm from "../components/AddFriendForm";
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

  
  export default function MyGoalDisplay() {
  return (
    <div>
      <h1>Goal</h1>
      <div className="goalContainer">
        <h3 className="goalTitle">Title of Goal -----------> !</h3>
        <p className="goalDescription">Goal Description</p>
        <div className="friendsContainer">
          <h3>Friends: + -</h3>
          <AddFriendForm />
          <ul>
            <p className="friends">Friend -</p>
          </ul>
        </div>
        <div className="stepsContainer">
        <h3>Steps</h3>
       
          <AddStepForm />
        <ul>
          <Card className="text-center">
            <Card.Header>Step Title</Card.Header>
            <Card.Body>
              <Card.Title>Due Date</Card.Title>
              <Card.Text>
                Step Description
              </Card.Text>
              <Button variant="primary">Not Started</Button>
              <Button variant="warning">In Progress</Button>
              <Button variant="success">Complete</Button>
            </Card.Body>
            <Card.Footer className="text-muted">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Comments</Accordion.Header>
                <Accordion.Body>
                <Card style={{ width: '18rem' }}>
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
