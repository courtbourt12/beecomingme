import React from "react";
import { Link } from "react-router-dom";
import DisplayGoalForm from "../components/AddGoalForm";
import Card from "react-bootstrap/Card";
import "../scss/MyProfile.scss";
import { useQuery } from "@apollo/client";
import { QUERY_FRIEND_GOALS } from "../utils/queries";

export default function FriendGoals() {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  const userId = savedUser._id;
  const userName = savedUser.username;

  const { loading, data } = useQuery(QUERY_FRIEND_GOALS, {
    variables: { username: userName },
  });

  console.log("data ", data);

  const friendGoalsData = data?.friendGoals || {};

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>Friends' Goals</h1>
        {friendGoalsData.map((goal) => {
          return (
            <Card className="homeCard">
              <Card.Header as={Link} to={`/goaldisplay/?id=${goal._id}`}>
                {goal.title}
              </Card.Header>
              <Card.Body>
                <Card.Title>{goal.description}</Card.Title>
              </Card.Body>
            </Card>
          );})}
      </div>
    );
  }
}
