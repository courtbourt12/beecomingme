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
            <h1>Rotating Motivational message</h1>
            <p>{data}</p>
          </div>
          <div className="heading">
            <p>Did someone invite you to be their accountability partner?</p>
            <p>Register for an account here to help them out</p>
          </div>
          <footer>
            <p>Beecome one of us!</p>
            <a href="#register">Register</a>
            <br />
            <a href="#login">Login</a>
            <p>Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a></p>
          </footer>
        </section>
      </main>
    </div>
  );
}
