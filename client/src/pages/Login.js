import React from 'react';

export default function Login() {
  return (
    <div>
      <form action="submit">
        Sign In
        <br/>
        <input name="username" id="username" placeholder="Username"/>
        <br/>
        <input name="password" id="password" placeholder="Password"/>
        <br/>
        <input type="submit"/>
      </form>
    </div>
  )
};