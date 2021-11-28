import React from "react";

export default function AddFriendForm() {
  return (
    <>
      <button className="addFriendButton" placeholder="Add Friend">
        <form className="addFriendForm">
          <input
            name="addFriend"
            id="addFriend"
            placeholder="Friend*"
            type="text"
          />
          <input type="submit" value="Add Friend" />
        </form>
      </button>
    </>
  );
}
