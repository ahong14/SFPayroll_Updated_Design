import React, { Component } from 'react';
import Home from '../components/Home/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
          <div> 
            <NavBar/>
            <Route exact path = "/" component = {Home}/> 
            <Route exact path = "/Home" component = {Home}/> 
          </div>
      </Router>
    );
  }
}

export default App;

