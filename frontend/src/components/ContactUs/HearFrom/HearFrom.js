import React, { useState } from 'react';
import '../../ContactUs/HearFrom/HearFrom.css';
import SubmitButton from '../../SubmitButton/SubmitButton';
import axios from 'axios';
import validator from 'validator';
import { Spinner } from 'react-bootstrap';

const HearFrom = () => {
    const [hearFromState, setHearFromState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [showSpinner, setShowSpinner] = useState(false);

    const handleHearFromInput = event => {
        let currentHearFromState = { ...hearFromState };
        currentHearFromState[event.target.name] = event.target.value;
        setHearFromState(currentHearFromState);
    };

    // send contact info to email
    const sendContact = () => {
        const apiURL = '/api/contact/contactUs';
        setShowSpinner(true);

        if (
            !hearFromState.name.trim() ||
            !hearFromState.email.trim() ||
            !hearFromState.message.trim()
        ) {
            alert('One or more fields empty');
            setShowSpinner(false);
        } else if (!validator.isEmail(hearFromState.email)) {
            alert('Invalid email inserted');
            setShowSpinner(false);
        } else {
            axios
                .post(apiURL, {
                    params: {
                        name: hearFromState.name,
                        email: hearFromState.email,
                        message: hearFromState.message
                    }
                })
                .then(resp => {
                    setShowSpinner(false);
                    setTimeout(() => {
                        alert(resp.data);
                    }, 500);
                })
                .catch(err => {
                    setShowSpinner(false);
                    setTimeout(() => {
                        alert('Error sending email');
                    }, 500);
                });
        }
    };

    return (
        <div className="form-group" id="hear_from_form">
            <div id="hearHeader">
                <blockquote
                    id="headerHeader"
                    className="text-center font-weight-bold"
                >
                    We would love to hear from you! Fill out the form below or
                    send an email to sfbac.apa@gmail.com!
                </blockquote>
            </div>
            <p id="hear_content">
                We want to know how we can serve you better. Feel free to drop
                us a note, ask a question about our Chapter, or join us a
                sponsor. We will get back to you right away.
            </p>
            <label htmlFor="name" className="font-weight-bold">
                Name:
            </label>
            <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={handleHearFromInput}
            />

            <label htmlFor="email" className="font-weight-bold">
                Email:
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={handleHearFromInput}
            />

            <label htmlFor="message" className="font-weight-bold">
                Message:
            </label>
            <textarea
                className="form-control"
                rows="5"
                id="message"
                name="message"
                onChange={handleHearFromInput}
            ></textarea>
            <div className="contact_us_actions">
                {showSpinner ? (
                    <Spinner animation="border" variant="primary" />
                ) : (
                    <SubmitButton click={sendContact} />
                )}
            </div>
        </div>
    );
};

export default HearFrom;
