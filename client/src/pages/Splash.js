import React from "react";

export default function Splash() {
  return (
    <div>
      <main>
        <section className="home">
          <h1 className="home">Welcome to the hive</h1>
          <div className="carousel">
            <h1>Rotating Motivational message</h1>
            <p>API call here</p>
          </div>
          <div className="heading">
            <p>Did someone invite you to be their accountability partner?</p>
            <p>Sign up for an account here to help them out</p>
          </div>
          <footer>
            <p>Beecome one of us!</p>
            <a href="#signUp">Sign Up</a>
            <br />
            <a href="#login">Login</a>
          </footer>
        </section>
      </main>
      <div>
        <h1>Goal</h1>
        <div className="goalContainer">
          <h3 className="goalTitle">Title of Goal</h3>
          <p className="goalDescription">Goal Description</p>
          <ul className="stepsContainer">
            <h3>Steps:</h3>
            <ul>
              <h4 className="stepTitle">Step Title</h4>
              <p className="stepDescription">Step Description</p>
              <h4>Comment:</h4>
              <span className="commentUsername">Username: </span>
              <span className="commentBody">Comment</span>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
