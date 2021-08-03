import React from 'react';
import './Position.css';

const Position = props => {
    return (
        <div className="card border-secondary container-fluid">
            <div className="card-body">
                <a href={props.link} rel="noopener noreferrer" target="_blank">
                    <h5> {props.title} </h5>
                </a>
                <p className="card-text text-center">
                    <strong> Date Posted: </strong> {props.postedDate}
                </p>
                <p className="card-text text-center">
                    <strong> City: </strong> {props.city}
                </p>
                <p className="card-text text-center">
                    <strong> Company: </strong> {props.company}
                </p>
            </div>
        </div>
    );
};

export default Position;
