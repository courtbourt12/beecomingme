import React from 'react';

export default function SplashPage() {

    return (
        <div>
            <main>
            <section className="home">
                <h1 className= "home">Welcome to the hive</h1>
                <div className="carousel">
                    <h1>Rotating Motivational message</h1>
                    <p>API call here</p>
                </div>
                <div className="heading">
                    <p>Did someone invite you to be their accountability partner?</p>
                    <p>Register for an account here to help them out</p>
                </div>
                <footer>
                    <p>Beecome one of us!</p>
                    <a href="#register">Register</a>
                    <br/>
                    <a href="#login">Login</a>
                </footer>
            </section>
        </main>
        </div>
    );
}