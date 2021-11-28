import React from "react";
import AddGoalForm from "../components/AddGoalForm";
import Card from 'react-bootstrap/Card';

export default function Profile() {
  return (
    <div>
      <h1>My Profile</h1>
      <h2 className="username">Displays Username</h2>
      <AddGoalForm />
      <h2>Goals:</h2>
      <Card>
        <Card.Header>Username of goal owner</Card.Header>
        <Card.Body>
          <Card.Title>Title of Goal</Card.Title>
          <Card.Text>
          Goal Description
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
