import React, { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../scss/Splash.scss";
import SignUp from "./SignUp";
import Login from "./Login";

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
          <Card
            className="homeCard"
            style={{
              borderColor: "black",
            }}
          >
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>{data}</p>
              </blockquote>
            </Card.Body>
          </Card>
          <Card
            className="signUpSection"
            style={{
              width: "24rem",
              backgroundColor: "rgba(245, 206, 78, 0.5)",
              borderColor: "black",
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontWeight: "bolder" }}>
                Beecome one of us!
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{ fontWeight: "bolder" }}
              >
                Sign up for an account here to help them out
              </Card.Subtitle>
              <Card.Text>
                <div className="buttonDiv">
                  <SignUp />
                  <Login />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </section>
        <Card
          className="footer"
          body
          style={{
            backgroundColor: "rgba(245, 206, 78, 0.5)",
            borderColor: "black",
          }}
        >
          Copyright Information
        </Card>
      </main>
    </div>
  );
}