import React from 'react';
import '../../Membership/Corporate/Corporate.css';
const Corporate = () => {
    return (
        <div className="container-fluid" id="corporateContainer">
            <div className="card border-dark corporateCard">
                <div className="card-header header">Individual Membership</div>
                <div className="card-body text-primary">
                    <h5 className="card-title">$65 </h5>
                </div>
            </div>
            <div className="card border-dark corporateCard">
                <div className="card-header header">Silver</div>
                <div className="card-body text-primary">
                    <h5 className="card-title">5 Members</h5>
                    <p className="card-text"> $250 </p>
                </div>
            </div>

            <div className="card border-dark corporateCard">
                <div className="card-header header">Gold</div>
                <div className="card-body text-primary">
                    <h5 className="card-title">20 Members</h5>
                    <p className="card-text"> $950 </p>
                </div>
            </div>

            <div className="card border-dark corporateCard">
                <div className="card-header header">Platinum</div>
                <div className="card-body text-primary">
                    <h5 className="card-title">20+ Members</h5>
                    <p className="card-text"> $1600 </p>
                </div>
            </div>
        </div>
    );
};

export default Corporate;
