import React, { Component } from 'react';
import '../../../AboutUs/Members/OfficerMember/OfficerMember.css';

class OfficerMember extends Component {
    render() {
        return (
            <div className="col-md-3">
                <div className="card memberCard">
                    <img
                        className="card-img-top memberImage"
                        src={this.props.imagesrc}
                        alt="Member"
                    />
                    <div className="card-body">
                        <h5 className="card-title text-center font-weight-bold">
                            {' '}
                            {this.props.name}{' '}
                        </h5>
                        <p className="card-text text-center font-weight-bold">
                            {' '}
                            {this.props.position}{' '}
                        </p>
                        <p className="card-text text-center font-weight-bold">
                            {' '}
                            {this.props.company}{' '}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

OfficerMember.defaultProps = {
    imagesrc: '//:0'
};

export default OfficerMember;
