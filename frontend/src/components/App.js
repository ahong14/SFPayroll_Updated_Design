import React, { Component } from 'react';
import Home from '../components/Home/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Events from '../components/Events/Events';
import Membership from '../components/Membership/Membership';

class App extends Component {
  render() {
    return (
      <Router>
          <div> 
            <NavBar/>
            <Route exact path = "/" component = {Home}/> 
            <Route exact path = "/Home" component = {Home}/>
            <Route exact path = "/Events" component = {Events}/>
            <Route exact path = "/Membership" component = {Membership}/> 
            <Footer/>
          </div>
      </Router>
    );
  }
}

export default App;

