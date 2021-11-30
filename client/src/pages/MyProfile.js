import React from "react";
import { Link } from "react-router-dom";
import DisplayGoalForm from "../components/AddGoalForm";
import Card from "react-bootstrap/Card";
import "../scss/MyProfile.scss";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

// Performing user query.
export default function MyProfile() {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  const userId = savedUser._id;
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { user_id: userId }
  });

  const userData = data?.user.goals || {};

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1 className="username">{data.user.username}'s Profile</h1>
        <h2 className="addGoalTitle">
          <span>Goals: </span>
          <DisplayGoalForm />
        </h2>
        {userData.map((goal) => {
          return (
            <Card className="homeCard">
              <Card.Header as={Link} to={`/mygoaldisplay/?id=${goal._id}`}>
                {goal.title}
              </Card.Header>
              <Card.Body>
                <Card.Title>{goal.description}</Card.Title>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    );
  }
}