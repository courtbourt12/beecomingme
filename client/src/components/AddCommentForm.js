import React from "react";

export default function AddCommentForm() {
  return (
    <>
      <button className="addCommentButton" placeholder="Add Comment">
        <form className="addCommentForm">
          <input
            name="addComment"
            id="addComment"
            placeholder="Comment*"
            type="text"
          />
          <input type="submit" value="Add Comment" />
        </form>
      </button>
    </>
  );
}
