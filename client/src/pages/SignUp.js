import React from 'react';

export default function SignUpForm() {
  return (
    <div>
      <form action="submit" >
        Register
        <br/>
        <input name="email" id="email" placeholder="Email"/>
        <br/>
        <input name="first_name" id="first_name" placeholder="First name"/>
        <br/>
        <input name=" last_name" id="last_name" placeholder="Last name"/>
        <br/>
        <input name="dob" id="dob" placeholder='DOB MMDDYYYY'/>
        <br/>
        <input name="username" id="username" placeholder="Username"/>
        <br/>
        <input name="password" id="password" placeholder="Password"/>
        <br/>
        <input type="submit" value="Register"/>
      </form>
    </div>
  )
};