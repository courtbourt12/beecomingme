import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../scss/MyProfile.scss";
import { useQuery } from "@apollo/client";
import { QUERY_FRIEND_GOALS } from "../utils/queries";

export default function FriendGoals() {
  const savedUsername = JSON.parse(localStorage.getItem("user"));
  const userName = savedUsername.username;

  const { loading, error, data } = useQuery(QUERY_FRIEND_GOALS, {
    variables: { username: userName },
  });
console.log("data ", data)
  const userData = data?.friendGoals || {};
  console.log("userData ", userData, error, userName)
  console.log("loading ", loading);
  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <main>
          <div>
            <h1>Goal</h1>
            {userData.map((goal) => {
              return (
                <Card className="homeCard">
                  <Card.Header>{goal.ownerName}</Card.Header>
                  <Card.Body>
                    <Card.Title as={Link} to={`/goaldisplay/?goalId=${goal._id}&userId=${goal.ownerID}`}>
                      {goal.title}
                    </Card.Title>
                    <Card.Text>{goal.description}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </main>
      </div>
    );
  }
}