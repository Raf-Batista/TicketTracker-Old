import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';

import React from 'react'

const App = () => {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
        <Footer />
      </Router>

    </div>
  )
}

export default App

