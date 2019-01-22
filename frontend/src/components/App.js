import React, { Component } from 'react';
import Home from '../components/Home/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Events from '../components/Events/Events';
import Membership from '../components/Membership/Membership';
import Resources from '../components/Resources/Resources';
import Careers from '../components/Careers/Careers';
import ContactUs from '../components/ContactUs/ContactUs';
import AboutUs from '../components/AboutUs/AboutUs';

class App extends Component {
  render() {
    return (
      <Router>
          <div> 
            <NavBar/>
            <Route exact path = "/" component = {Home}/> 
            <Route exact path = "/Home" component = {Home}/>
            <Route exact path = "/Events" component = {Events}/>
            <Route exact path = "/AboutUs" component = {AboutUs}/>
            <Route exact path = "/Membership" component = {Membership}/>
            <Route exact path = "/Resources" component = {Resources}/> 
            <Route exact path = "/Careers" component = {Careers}/>
            <Route exact path = "/ContactUs" component = {ContactUs}/>
            <Footer/>
          </div>
      </Router>
    );
  }
}

export default App;

