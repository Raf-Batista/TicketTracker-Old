import React, {useEffect, useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import ProjectsContainer from './components/Projects/ProjectsContainer';
import ProjectForm from './components/Projects/ProjectForm';
import Task from './components/Tasks/Task';
import TaskForm from './components/Tasks/TaskForm';
import currentUser from './async/currentUser';

library.add(fab);

const App = () => {
  const [user, setUser] = useState()

  useEffect( async () => {
   setUser(await currentUser()); 
  }, []);

  return (
    <div className="main">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/projects" render={props => <ProjectsContainer {...props} user={user} />} />
          <Route exact path="/users/:id/projects/new" render={props => <ProjectForm {...props}/>} />
          <Route exact path="/projects/:id/tasks" component={Task} />
          <Route exact path="/projects/:id/tasks/new" component={TaskForm} />
        </Switch>
        <Footer />
      </Router>

    </div>
  )
}

export default App

