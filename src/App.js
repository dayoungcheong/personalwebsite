import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Projects} from './Projects';
import {Homepage} from './Homepage';
import {About} from './About'

class App extends Component {
    render() {
        return (<div>
                  <Router>
                      <React.Fragment>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Route path="/about" component={About}/>
                        <Route path="/projects" component={Projects}/>
                        <Route exact path="/" component={Homepage}/>
                      </React.Fragment>
                  </Router>
                </div>
            );
    }
}

export default App;

