import React, {Component} from 'react';
import SideBar from '../SideBar/SideBar';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import NavElement from '../NavElement/NavElement';
import '../NavBar/NavBar.css';
import navbarLogo from '../../photos/sf_payroll_logo.gif';

class NavBar extends Component{

    constructor(props){
        super(props);
        this.state = {width: 0};// keep track of width of screen
        this.updateWindowSize = this.updateWindowSize.bind(this);
    }

    
    updateWindowSize(){
        this.setState({
            width: window.innerWidth
        })
    }

    //update window width after rendering
    componentDidMount(){
        this.updateWindowSize();
    }

    render(){

        const windowWidth = this.state.width;

        //if the window width is a desktop or laptop
        if(windowWidth > 600){
            return(
                <nav id = "navBar" className = "navbar navbar-expand-lg navbar-inverse fixed-top">
                   <Link to = "/" className = "navbar-brand" id = "navbarLogo"> <img id = "imageLogo" src = {navbarLogo} /> </Link>
                   <ul className = "navbar-nav nav-fill w-100" id = "navbarList">
                       <NavElement section = "Home"/>
                       <NavElement section = "Events"/>
                       <NavElement section = "About Us"/>
                       <NavElement section = "Membership"/>
                       <NavElement section = "Resources"/>
                       <NavElement section = "Careers"/>
                       <NavElement section = "Contact Us"/>
                   </ul>
               </nav>
            );
        }

        else{
            return(
                <div>
                    <nav className="navbar navbar-toggleable-lg navbar-light bg-faded fixed-top" id = "mobile_navbar">
                        <div id = "mobile_bar">
                            <i id = "bar_icon"> {FaBars} </i>
                        </div>
                        
                        <div className = "navbar-header" id = "mobile_banner">
                            <Link to = "/"> <img id = "banner_logo_mobile" src = {navbarLogo} alt = "banner logo"/> </Link>
                        </div>
                    </nav>
                </div>
            );
        }
    }
}

export default NavBar;
