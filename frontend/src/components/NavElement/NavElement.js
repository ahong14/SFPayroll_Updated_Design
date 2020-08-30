import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../NavElement/NavElement.css';

//NavElement component for NavBar
//remove white spaces for routing
class NavElement extends Component {
    constructor(props){
        super(props);
        this.state = {
            route: ''
        }
    }

    //set route when props are loaded
    componentDidMount(){
        if(this.props.section !== undefined){
            let currentSection = this.props.section;
            currentSection = currentSection.replace(/\s/g, '');
            this.setState({
                route: currentSection
            });
        }
    }

    //check if route updated based on login status
    //remove all white spaces
    componentDidUpdate(prevProps){
        if(prevProps.section !== this.props.section){
            let currentSection = this.props.section;
            currentSection = currentSection.replace(/\s/g, '');
            this.setState({
                route: currentSection
            })
        }
    }

    render(){
        return(
            <li className="nav-item">
                <Link to={this.state.route} onClick={this.props.onClick}> <strong> {this.props.section}  </strong> </Link>
            </li>
        );
    }
}

export default NavElement;
