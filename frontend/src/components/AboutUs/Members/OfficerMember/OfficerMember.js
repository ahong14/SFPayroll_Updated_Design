import React, {Component} from 'react';
import '../../../AboutUs/Members/OfficerMember/OfficerMember.css';

class OfficerMember extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="card memberCard">
                <img className="card-img-top memberImage" src= {this.props.imagesrc} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title text-center"> {this.props.name} </h5>
                    <p className="card-text text-center"> {this.props.position} </p>
                    <p className="card-text text-center"> {this.props.company} </p>
                    <p className="card-text text-center"> Phone: {this.props.phone} </p>
                    <p className="card-text text-center"> Email: {this.props.email} </p>
                </div>
            </div>
        );
    }
}

export default OfficerMember;
