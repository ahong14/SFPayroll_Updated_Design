import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import NavElement from '../NavElement/NavElement';
import '../NavBar/NavBar.css';
import navbarLogo from '../../photos/sf_payroll_logo.gif';
import newLogo from '../../photos/sfpayroll-red.png';
import { connect } from 'react-redux'; 
import actions from '../../actions';

//Navigation Bar Component
//Consits of NavElement components
//renders standard navigation bar or mobile depending on window width

class NavBar extends Component{
    //initialize props, state, and bind functions
    constructor(props){
        super(props);
        // keep track of width of screen
        this.state = {
            width: 0
        };
    }

    //toggle sidebar for mobile navbar, show
    showSideNav = () => {
        this.sideBar.style.width = "200px";
        this.sideBar.style.display = "block";
    }

    //toggle sidebar for mobile navbar, close
    closeSideNav = () => {
        this.sideBar.style.width = "0px";
        this.sideBar.style.transition = "0.8s";
        this.sideBar.style.display = "none";
    }

    //logout user
    logoutUser = () => {
        if(this.props.login == true){
            this.props.updateLogout();
            this.props.history.push('/');
        }
    }

    //update window width after rendering
    componentDidMount(){
        this.setState({
            width: window.innerWidth
        });    
    }

    render(){        
        //if the window width is a desktop or laptop
        if(this.state.width > 600){
            return(
                <nav id="navBar" className="navbar navbar-expand-lg navbar-inverse fixed-top">
                   <Link to="/" className="navbar-brand" id="navbarLogo"> 
                        <img id="imageLogo" src={newLogo} /> 
                    </Link>
                   <ul className="navbar-nav nav-fill w-100" id="navbarList">
                       <NavElement section="Home"/>
                       <NavElement section={this.props.login == true ? "Edit Events" : "Events"}/>
                       <NavElement section="About Us"/>
                       <NavElement section="Membership"/>
                       <NavElement section="Resources"/>
                       <NavElement section={this.props.login == true ? "Edit Careers" : "Careers"}/>
                       <NavElement section="Contact Us"/>
                       <NavElement section="Gallery"/>
                       <NavElement onClick={this.logoutUser} section={this.props.login == true ? "Logout" : "Admin"}/>
                   </ul>
               </nav>
            );
        }

        //if the window width is mobile, render sidebar
        else{
            return(
                <div>
                    <nav className="navbar navbar-toggleable-lg navbar-light bg-faded fixed-top" id="mobile_navbar">
                        <div id="mobile_bar" onClick={this.showSideNav}>
                            <FaBars/>
                        </div>
                        
                        <div className="navbar-header" id="mobile_banner">
                            <Link to="/"> <img id="banner_logo_mobile" src={newLogo} alt="banner logo"/> </Link>
                        </div>

                        <div id="sidebar" ref={(sidebar) => {this.sideBar = sidebar}}>
                            <div id="close_navbar" onClick={this.closeSideNav}>
                                <p id="close_icon" className="font-weight-bold"> &times; </p> 
                            </div>
                                        
                            <div className="text-center" id="mobile_nav_links">
                                <NavElement onClick={this.closeSideNav} section = "Home"/>
                                <NavElement section={this.props.login == true ? "Edit Events" : "Events"}/>
                                <NavElement onClick={this.closeSideNav} section = "About Us"/>
                                <NavElement onClick={this.closeSideNav} section = "Membership"/>
                                <NavElement onClick={this.closeSideNav} section = "Resources"/>
                                <NavElement section={this.props.login == true ? "Edit Careers" : "Careers"}/>
                                <NavElement onClick={this.closeSideNav} section = "Contact Us"/>
                                <NavElement onClick={this.closeSideNav} section = "Gallery"/>
                            </div>
                        </div>
                    </nav>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return{
        login: state.authReducer.login
    }
}

const mapDispatchToProps = dispatch => {
    return({
        updateLogout: () => {
            dispatch({
                type: actions.UPDATE_LOGOUT
            })
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
