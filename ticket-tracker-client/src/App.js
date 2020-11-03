import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';

library.add(fab);

const App = () => {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </Router>

    </div>
  )
}

export default App

