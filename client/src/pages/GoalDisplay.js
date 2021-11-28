import React from "react";
import AddCommentForm from "../components/AddCommentForm";

export default function GoalDisplay() {
  return (
    <div>
      <h1>Goal</h1>
      <div className="goalContainer">
        <h3 className="goalTitle">Title of Goal</h3>
        <p className="goalDescription">Goal Description</p>
        <div className="friendsContainer">
          <h3>Friends:</h3>
          <ul>
            <p className="friends">Friend</p>
          </ul>
        </div>
        <div className="stepsContainer">
          <h3>Steps:</h3>

          <ul>
            <h4 className="stepTitle">Step Title</h4>
            <p className="stepDescription">Step Description</p>
            <h4>Comments: +</h4>
            <AddCommentForm />
            <span className="commentUsername">Username: </span>
            <span className="commentBody">Comment</span>
          </ul>
        </div>
      </div>
    </div>
  );
}
