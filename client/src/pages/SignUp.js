import React from "react";

export default function SignUp() {
  return (
    <div>
      <form action="submit">
        Sign Up
        <br />
        <input name="email" id="email" placeholder="Email" type="email" />
        <br />
        <input
          name="firstName"
          id="firstName"
          placeholder="First Name"
          type="text"
        />
        <br />
        <input
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          type="text"
        />
        <br />
        <input name="dob" id="dob" type="date" />
        <br />
        <input
          name="username"
          id="username"
          placeholder="Username"
          type="text"
        />
        <br />
        <input
          name="password"
          id="password"
          placeholder="Password"
          type="password"
        />
        <br />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}
