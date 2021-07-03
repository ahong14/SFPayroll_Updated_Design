import React, { Fragment } from 'react';
import './EventItem.css';

//EventItem for Events component

const EventItem = props => {
    return (
        <div className="card border-info eventCard">
            <div className="card-body">
                <h5 className="card-title text-center">{props.eventTitle}</h5>
                <p className="card-text text-center">
                    <strong> Date: </strong> {props.date}
                </p>
                <p className="card-text text-center">
                    <strong> Time: </strong> {props.time}
                </p>
                <p className="card-text text-center">
                    <strong> Speakers: </strong> {props.speakers}
                </p>
                <p className="card-text text-center">
                    <strong> Location: </strong> {props.location}
                </p>
                {props.registration ? (
                    <p className="card-text text-center">
                        <a
                            href={props.registration}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Registration
                        </a>
                    </p>
                ) : (
                    <Fragment />
                )}
                {props.description ? (
                    <div>
                        <p className="card-text text-center">
                            <strong> Description: </strong>
                        </p>

                        <div
                            className="card-text text-center"
                            dangerouslySetInnerHTML={{
                                __html: props.description
                            }}
                        ></div>
                    </div>
                ) : (
                    <Fragment />
                )}
            </div>
        </div>
    );
};

export default EventItem;
