import React from "react";

export default function AddGoalForm() {
  return (
    <div>
      <button className="addStepButton" placeholder="Add Step">
        <form className="addStepForm">
          <input
            name="addStepTitle"
            id="addStepTitle"
            placeholder="Title*"
            type="text"
          />
          <input
            name="addStepDescription"
            id="addStepDescription"
            placeholder="Description*"
            type="text"
          />
          <br />
          <label for="dueDate">Due Date</label>
          <input name="dueDate" id="dueDate" type="date" />
          <br />
          <select>
            <option value="1">Not Started</option>
            <option value="2">In Progress</option>
            <option value="3">Complete</option>
          </select>
          <br />
          <input type="submit" value="Add Step" />
        </form>
      </button>
    </div>
  );
}
