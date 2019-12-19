import React, {Component} from 'react';
import '../../Membership/Corporate/Corporate.css';

class Corporate extends Component{
    render(){
        return(
            <div className="container-fluid" id="corporateContainer">
                <div className="card border-dark corporateCard">
                    <div className="card-header header" > Individual Membership </div>
                    <div className="card-body text-primary">
                        <h5 className="card-title">$60 </h5>
                    </div>
                </div>
                <div className="card border-dark corporateCard" >
                    <div className="card-header header">Silver</div>
                    <div className="card-body text-primary">
                        <h5 className="card-title">5 Members</h5>
                        <p className="card-text"> $225 </p>
                    </div>
                </div>

                <div className="card border-dark corporateCard"> 
                    <div className="card-header header">Gold</div>
                    <div className="card-body text-primary">
                        <h5 className="card-title">20 Members</h5>
                        <p className="card-text"> $900 </p>
                    </div>
                </div>

                <div className="card border-dark corporateCard">
                    <div className="card-header header">Platinum</div>
                    <div className="card-body text-primary">
                        <h5 className="card-title">20+ Members</h5>
                        <p className="card-text"> $1500 </p>
                    </div>
                </div>           
            </div>
        );
    }
}

export default Corporate;
