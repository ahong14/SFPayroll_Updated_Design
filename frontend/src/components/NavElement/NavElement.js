import React, {Component} from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import '../NavElement/NavElement.css';

class NavElement extends Component {
    render(){
        return(
            <li className = "nav-item">
                <Link to = {this.props.section.replace(/\s/g, '')}> <strong> {this.props.section}  </strong> </Link>
            </li>
        );
    }
}

export default NavElement;
