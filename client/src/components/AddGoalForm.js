import React from "react";

export default function AddGoalForm() {
  return (
    <div>
      <button className="addGoalButton" placeholder="Add Goal">
        <form className="addGoalForm">
          <input
            name="addGoalTitle"
            id="addGoalTitle"
            placeholder="Title*"
            type="text"
          />
          <input
            name="addGoalDescription"
            id="addGoalDescription"
            placeholder="Description*"
            type="text"
          />
          <input
            name="addFriend"
            id="addFriend"
            placeholder="Friend Username"
            type="text"
          />
          <br />
          <input type="submit" value="Add Goal" />
        </form>
      </button>
    </div>
  );
}
