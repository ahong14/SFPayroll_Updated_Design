import React, {Component} from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import NavElement from '../NavElement/NavElement';
import '../NavBar/NavBar.css';
import navbarLogo from '../../photos/sf_payroll_logo.gif';

//Navigation Bar Component
//Consits of NavElement components
//renders standard navigation bar or mobile depending on window width

class NavBar extends Component{

    //initialize props, state, and bind functions
    constructor(props){
        super(props);
        this.state = {width: 0};// keep track of width of screen
        this.updateWindowSize = this.updateWindowSize.bind(this);
        this.showSideNav = this.showSideNav.bind(this);
        this.closeSideNav = this.closeSideNav.bind(this);
    }

    //update window size based on device width
    updateWindowSize(){
        this.setState({
            width: window.innerWidth
        })
    }

    //toggle sidebar for mobile navbar, show
    showSideNav(){
        this.sideBar.style.width = "200px";
        this.sideBar.style.display = "block";
    }

    //toggle sidebar for mobile navbar, close
    closeSideNav(){
        this.sideBar.style.width = "0px";
        this.sideBar.style.transition = "0.8s";
        this.sideBar.style.display = "none";
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

        //if the window width is mobile, render sidebar
        else{
            return(
                <div>
                    <nav className="navbar navbar-toggleable-lg navbar-light bg-faded fixed-top" id = "mobile_navbar">
                        <div id = "mobile_bar" onClick = {this.showSideNav}>
                            <FaBars/>
                        </div>
                        
                        <div className = "navbar-header" id = "mobile_banner">
                            <Link to = "/"> <img id = "banner_logo_mobile" src = {navbarLogo} alt = "banner logo"/> </Link>
                        </div>

                        <div id = "sidebar" ref = {(sidebar) => {this.sideBar = sidebar}}>
                            <div id = "close_navbar" onClick = {this.closeSideNav}>
                                <p id = "close_icon" className = "font-weight-bold"> &times; </p> 
                            </div>
                                        
                            <div className = "text-center" id = "mobile_nav_links">
                                <NavElement onClick = {this.closeSideNav} section = "Home"/>
                                <NavElement onClick = {this.closeSideNav} section = "Events"/>
                                <NavElement onClick = {this.closeSideNav} section = "About Us"/>
                                <NavElement onClick = {this.closeSideNav} section = "Membership"/>
                                <NavElement onClick = {this.closeSideNav} section = "Resources"/>
                                <NavElement onClick = {this.closeSideNav} section = "Careers"/>
                                <NavElement onClick = {this.closeSideNav} section = "Contact Us"/>
                            </div>
                        </div>
                    </nav>
                </div>
            );
        }
    }
}

export default NavBar;
