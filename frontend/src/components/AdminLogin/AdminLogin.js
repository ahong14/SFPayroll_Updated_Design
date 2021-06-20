import React, { useState, useEffect } from 'react';
import './AdminLogin.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import actions from '../../actions';

const AdminLogin = props => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loginLoading, setLoginLoading] = useState(false);

    useEffect(() => {
        if (!loginLoading) {
            return;
        }
        axios
            .post('/api/admin/login', {
                params: {
                    userName: userName,
                    password: password
                }
            })
            .then(res => {
                if (res.data.success === true) {
                    alert(res.data.message);
                    //update redux store, retrieve user info payload
                    props.updateLogin(
                        res.data.userPayload.userName,
                        res.data.userPayload.firstName,
                        res.data.userPayload.lastName
                    );
                    props.history.push('/');
                    setLoginLoading(false);
                } else {
                    setLoginLoading(false);
                    alert(res.data.message);
                }
            })
            .catch(err => {
                setLoginLoading(false);
                alert(err.response.data.message);
            });
    }, [loginLoading]);

    //handle login form changes
    const handleLoginForms = event => {
        switch (event.target.name) {
            case 'userName':
                setUserName(event.target.value);
                break;
            case 'password':
                setPassword(event.target.value);
                break;
            default:
                break;
        }
    };

    //enter key pressed
    const handleEnterKey = event => {
        if (event.key === 'Enter') {
            submitLogin();
        }
    };

    //submit login
    const submitLogin = () => {
        if (userName === '' || password === '') {
            alert('One or more fields empty');
        } else {
            setLoginLoading(true);
        }
    };

    return (
        <div
            className="container-fluid loginContainer"
            onKeyPress={handleEnterKey}
        >
            <div id="signupForm">
                <h3> Admin Login </h3>
                <form>
                    <div className="form-group">
                        <label> Login: </label>
                        <input
                            name="userName"
                            onChange={handleLoginForms}
                            type="text"
                            className="form-control"
                            placeholder="Enter Username"
                        />
                    </div>

                    <div>
                        <Link to="/AdminSignup"> Click here to Sign Up</Link>
                    </div>

                    <div className="form-group">
                        <label> Password: </label>
                        <input
                            name="password"
                            onChange={handleLoginForms}
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                        />
                        <Link to="/AdminResetPass"> Reset Password </Link>
                    </div>

                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={submitLogin}
                    >
                        {loginLoading ? 'Loading...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        updateLogin: (userName, firstName, lastName) => {
            dispatch({
                type: actions.UPDATE_LOGIN,
                userName: userName,
                firstName: firstName,
                lastName: lastName
            });
        }
    };
};

export default connect(null, mapDispatchToProps)(AdminLogin);
