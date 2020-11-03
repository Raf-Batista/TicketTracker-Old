import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="container text-center mt-5 home">
            <h1>
                <span className="mb-3">
                    Welcome to Ticket Tracker
                </span>
                <span>
                    Keep track of tickets you create and mark off completed tickets for your various projects
                </span>
            </h1>
            <div className="account-links mt-5">
                <Link to="/signup">Create an account</Link>
                <Link to="login">Login</Link>
            </div>
        </div>
    )
}

export default Home
