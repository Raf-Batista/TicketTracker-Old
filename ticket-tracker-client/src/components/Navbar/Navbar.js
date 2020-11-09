import React from 'react';
import logout from '../../async/logout';
import { useHistory } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    let history = useHistory();

    const handleClick = () => {
       logout();
       history.push('/');
    }

    return (
        <div className="navigation d-lg-flex justify-content-lg-around p-3">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand home-link" href="/">Ticket Tracker</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Account</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Help</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={handleClick}>Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
