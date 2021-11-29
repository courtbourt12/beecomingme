import React from "react";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


export default function friendGoals() {
  return (
    <div>
      <main>
          <div>
            <h1>Goal</h1>
            <Card className="homeCard">
              <Card.Header>Username of goal owner</Card.Header>
              <Card.Body>
                <Card.Title as={Link} to="/goaldisplay">Title of Goal</Card.Title>
                <Card.Text>Goal Description</Card.Text>
              </Card.Body>
            </Card>
          </div>
      </main>
    </div>
  );
}