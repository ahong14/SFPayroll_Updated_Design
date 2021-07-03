import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import NavElement from '../NavElement/NavElement';
import '../NavBar/NavBar.css';
import newLogo from '../../photos/sfpayroll-red.png';
import { connect } from 'react-redux';
import actions from '../../actions';
import axios from 'axios';

//Navigation Bar Component
//Consits of NavElement components
//renders standard navigation bar or mobile depending on window width

const NavBar = props => {
    const [width, setWidth] = useState(0);
    const sideBar = useRef(null);

    // update window width after rendering
    useEffect(() => {
        setWidth(window.innerWidth);
    }, [width]);

    //toggle sidebar for mobile navbar, show
    const showSideNav = () => {
        sideBar.current.style.width = '200px';
        sideBar.current.style.display = 'block';
    };

    //toggle sidebar for mobile navbar, close
    const closeSideNav = () => {
        sideBar.current.style.width = '0px';
        sideBar.current.style.transition = '0.8s';
        sideBar.current.style.display = 'none';
    };

    //logout user
    const logoutUser = () => {
        if (props.login) {
            axios
                .post('/api/admin/logout')
                .then(res => {
                    props.updateLogout();
                    // temp fix, use window.location to redirect
                    window.location = '/';
                })
                .catch(err => {
                    alert(err);
                });
        }
    };

    //if the window width is a desktop or laptop
    if (width > 600) {
        return (
            <nav
                id="navBar"
                className="navbar navbar-expand-lg navbar-inverse fixed-top"
            >
                <Link to="/" className="navbar-brand" id="navbarLogo">
                    <img id="imageLogo" src={newLogo} alt="logo" />
                </Link>
                <ul className="navbar-nav nav-fill w-100" id="navbarList">
                    <NavElement section="Home" />
                    <NavElement
                        section={props.login ? 'Edit Events' : 'Events'}
                    />
                    <NavElement section="About Us" />
                    <NavElement section="Membership" />
                    <NavElement section="Resources" />
                    <NavElement
                        section={props.login ? 'Edit Careers' : 'Careers'}
                    />
                    <NavElement section="Contact Us" />
                    <NavElement section="Gallery" />
                    <NavElement
                        onClick={logoutUser}
                        section={props.login ? 'Logout' : 'Admin'}
                    />
                </ul>
            </nav>
        );
    }

    //if the window width is mobile, render sidebar
    else {
        return (
            <div>
                <nav
                    className="navbar navbar-toggleable-lg navbar-light bg-faded fixed-top"
                    id="mobile_navbar"
                >
                    <div id="mobile_bar" onClick={showSideNav}>
                        <FaBars />
                    </div>

                    <div className="navbar-header" id="mobile_banner">
                        <Link to="/">
                            <img
                                id="banner_logo_mobile"
                                src={newLogo}
                                alt="banner logo"
                            />
                        </Link>
                    </div>

                    <div id="sidebar" ref={sideBar}>
                        <div id="close_navbar" onClick={closeSideNav}>
                            <p id="close_icon" className="font-weight-bold">
                                &times;
                            </p>
                        </div>

                        <div className="text-center" id="mobile_nav_links">
                            <NavElement onClick={closeSideNav} section="Home" />
                            <NavElement
                                section={props.login ? 'Edit Events' : 'Events'}
                            />
                            <NavElement
                                onClick={closeSideNav}
                                section="About Us"
                            />
                            <NavElement
                                onClick={closeSideNav}
                                section="Membership"
                            />
                            <NavElement
                                onClick={closeSideNav}
                                section="Resources"
                            />
                            <NavElement
                                section={
                                    props.login ? 'Edit Careers' : 'Careers'
                                }
                            />
                            <NavElement
                                onClick={closeSideNav}
                                section="Contact Us"
                            />
                            <NavElement
                                onClick={closeSideNav}
                                section="Gallery"
                            />
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        login: state.authReducer.login
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateLogout: () => {
            dispatch({
                type: actions.UPDATE_LOGOUT
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
