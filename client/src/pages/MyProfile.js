import React from "react";
import AddGoalForm from "../components/AddGoalForm";

export default function Profile() {
  return (
    <div>
      <h1>My Profile</h1>
      <h2 className="username">Displays Username</h2>
      <AddGoalForm />
      <h2>Goals:</h2>
      <div className="goalContainer">
        <h3 className="goalTitle">Title of Goal</h3>
        <p className="goalDescription">Goal Description</p>
      </div>
    </div>
  );
}
