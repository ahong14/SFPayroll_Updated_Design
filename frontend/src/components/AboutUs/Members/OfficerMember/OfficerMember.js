import React from 'react';
import './OfficerMember.css';

const OfficerMember = props => {
    return (
        <div className="col-md-3">
            <div className="card memberCard">
                <img
                    className="card-img-top memberImage"
                    src={props.imagesrc}
                    alt="Member"
                />
                <div className="card-body">
                    <h5 className="card-title text-center font-weight-bold">
                        {props.name}
                    </h5>
                    <p className="card-text text-center font-weight-bold">
                        {props.position}
                    </p>
                    <p className="card-text text-center font-weight-bold">
                        {props.company}
                    </p>
                </div>
            </div>
        </div>
    );
};

OfficerMember.defaultProps = {
    imagesrc: '//:0'
};

export default OfficerMember;
