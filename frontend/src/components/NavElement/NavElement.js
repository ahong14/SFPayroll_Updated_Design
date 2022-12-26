import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../NavElement/NavElement.css';

// NavElement component for NavBar
// remove white spaces for routing
const NavElement = (props) => {
    const [route, setRoute] = useState('');

    // set route when props are loaded
    useEffect(() => {
        if (props.section) {
            const currentSection = props.section.replace(/\s/g, '');
            setRoute(currentSection);
        }
    }, [props]);

    return (
        <li className="nav-item">
            <Link to={route} onClick={props.onClick}>
                <strong> {props.section} </strong>
            </Link>
        </li>
    );
};

export default NavElement;
