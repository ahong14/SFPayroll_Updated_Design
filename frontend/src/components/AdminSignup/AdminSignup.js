import React, { useState } from 'react';
import './AdminSignup.css';
import axios from 'axios';

const AdminSignup = () => {
    const [adminFormState, setAdminFormState] = useState({
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: ''
    });

    // handle input change for input field
    const handleInputChange = event => {
        let updateAdminFormState = { ...adminFormState };
        updateAdminFormState[event.target.name] = event.target.value;
        setAdminFormState(updateAdminFormState);
    };

    // enter key pressed
    const handleEnterKey = event => {
        if (event.key === 'Enter') {
            submitSignup();
        }
    };

    // send signup info to backend
    const submitSignup = () => {
        if (
            adminFormState.firstName === '' ||
            adminFormState.lastName === '' ||
            adminFormState.password === '' ||
            adminFormState.confirmPassword === ''
        ) {
            alert('One or more fields empty');
            return;
        } else if (adminFormState.password !== adminFormState.confirmPassword) {
            // if passwords do not match
            alert('Passwords do not match');
            return;
        } else {
            axios
                .post('/api/admin/signup', {
                    params: {
                        firstName: adminFormState.firstName,
                        lastName: adminFormState.lastName,
                        userName: adminFormState.userName,
                        password: adminFormState.password
                    }
                })
                .then(res => {
                    alert(res.data.message);
                    // clear fields after submission
                    setAdminFormState({
                        firstName: '',
                        lastName: '',
                        userName: '',
                        password: '',
                        confirmPassword: ''
                    });
                })
                .catch(err => {
                    alert(err.response.data.message);
                });
        }
    };

    return (
        <div
            className="container-fluid signupContainer"
            onKeyPress={handleEnterKey}
        >
            <div id="signupForm">
                <h3> Admin Sign Up </h3>
                <form>
                    <div className="form-group">
                        <label> First Name: </label>
                        <input
                            onChange={handleInputChange}
                            value={adminFormState.firstName}
                            name="firstName"
                            type="text"
                            className="form-control"
                            placeholder="Enter First Name"
                        />
                    </div>

                    <div className="form-group">
                        <label> Last Name: </label>
                        <input
                            onChange={handleInputChange}
                            value={adminFormState.lastName}
                            name="lastName"
                            type="text"
                            className="form-control"
                            placeholder="Enter Last Name"
                        />
                    </div>

                    <div className="form-group">
                        <label> Enter Username: </label>
                        <input
                            onChange={handleInputChange}
                            value={adminFormState.userName}
                            name="userName"
                            type="text"
                            className="form-control"
                            placeholder="Enter Username"
                        />
                    </div>

                    <div className="form-group">
                        <label> Password: </label>
                        <input
                            onChange={handleInputChange}
                            value={adminFormState.password}
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                        />
                    </div>

                    <div className="form-group">
                        <label> Confirm Password: </label>
                        <input
                            onChange={handleInputChange}
                            value={adminFormState.confirmPassword}
                            name="confirmPassword"
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                        />
                    </div>

                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={submitSignup}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminSignup;
