import React, {Component} from 'react';
import '../../../AboutUs/Members/President/President.css';
import owhen from '../../../../photos/owhen_image.jpg';

class President extends Component{
    render(){
        return(
            <div className="card memberCard">
                <img className="card-img-top memberImage" src= {owhen} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title text-center"> Owhen Astorga </h5>
                    <p className="card-text text-center"> President </p>
                    <p className="card-text text-center"> Salesforce.com </p>
                    <p className="card-text text-center"> Phone: 415-536-4524 </p>
                    <p className="card-text text-center"> Email: oastorga@salesforce.com </p>
                </div>
            </div>
        );
    }
}

export default President;
