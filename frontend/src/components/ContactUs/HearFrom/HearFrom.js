import React, { useState } from 'react';
import '../../ContactUs/HearFrom/HearFrom.css';
import SubmitButton from '../../SubmitButton/SubmitButton';
import axios from 'axios';
import validator from 'validator';

const HearFrom = () => {
    const [hearFromState, setHearFromState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleHearFromInput = event => {
        let currentHearFromState = { ...hearFromState };
        currentHearFromState[event.target.name] = event.target.value;
        setHearFromState(currentHearFromState);
    };

    // send contact info to email
    const sendContact = () => {
        const apiURL = '/api/contact/contactUs';

        if (
            !hearFromState.name.trim() ||
            !hearFromState.email.trim() ||
            !hearFromState.message.trim()
        ) {
            alert('One or more fields empty');
        } else if (!validator.isEmail(hearFromState.email)) {
            alert('Invalid email inserted');
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
                    alert(resp.data);
                })
                .catch(err => {
                    alert('Error sending email');
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
            <label htmlFor="usr" className="font-weight-bold">
                Name:
            </label>
            <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={handleHearFromInput}
            />

            <label htmlFor="usr" className="font-weight-bold">
                Email:
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={handleHearFromInput}
            />

            <label htmlFor="usr" className="font-weight-bold">
                Message:
            </label>
            <textarea
                className="form-control"
                rows="5"
                id="message"
                name="message"
                onChange={handleHearFromInput}
            ></textarea>
            <SubmitButton click={sendContact} />
        </div>
    );
};

export default HearFrom;
