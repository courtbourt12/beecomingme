import React, { useState, useEffect } from "react";

export default function Splash() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        console.log(data.length)
        const index = Math.floor(Math.random()*data.length)
        setData(data[index].text);
      })
      .catch((error) => {
          console.error("Error fetching data:, " + error);
          console.log(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <div>
      <main>
        <section className="home">
          <h1 className="home">Welcome to the hive</h1>
          <div className="carousel">
            <h1>{data}</h1>
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

