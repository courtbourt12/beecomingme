import React from "react";
import AddStepForm from "../components/AddStepForm";
import AddFriendForm from "../components/AddFriendForm";

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
          <h3>Steps: + -</h3>
          <AddStepForm />

          <ul>
            <h4 className="stepTitle">Step Title -</h4>
            <p className="stepDescription">Step Description</p>
            <h4>Comments: -</h4>
            <span className="commentUsername">Username: </span>
            <span className="commentBody">Comment</span>
          </ul>
        </div>
      </div>
    </div>
  );
}
