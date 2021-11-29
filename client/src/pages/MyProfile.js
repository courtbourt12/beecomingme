import React from "react";
import { Link } from "react-router-dom";
import AddGoalForm from "../components/AddGoalForm";
import Card from "react-bootstrap/Card";
import "../scss/MyProfile.scss";

export default function MyProfile() {
  return (
    <div>
      <h1>My Profile</h1>
      <h2 className="username">Displays Username</h2>

      <h2 className="addGoalTitle">
      <span>Goals: </span>
        <AddGoalForm />
      </h2>
      <Card className="homeCard">
        <Card.Header as={Link} to="/mygoaldisplay">Title of Goal</Card.Header>
        <Card.Body>
          <Card.Title>Goal Description</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
