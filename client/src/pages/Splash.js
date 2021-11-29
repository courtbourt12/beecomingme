import React, { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../scss/Splash.scss";
import SignUp from "./SignUp"
import Login from "./Login"


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
        console.log(data.length);
        const index = Math.floor(Math.random() * data.length);
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
          <Card className="homeCard">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>{data}</p>
              </blockquote>
            </Card.Body>
          </Card>
          <div className="heading">
            <p>Sign up for an account here to help them out</p>
            <p>Beecome one of us!</p>
          </div>
          <div className="buttonDiv">
            <SignUp />
            <Login />
          </div>
          <div className="hide">
            <h1>Goal</h1>
            <Card className="homeCard">
              <Card.Header>Username of goal owner</Card.Header>
              <Card.Body>
                <Card.Title>Title of Goal</Card.Title>
                <Card.Text>Goal Description</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </section>
        <footer>copyright</footer>
      </main>
    </div>
  );
}
