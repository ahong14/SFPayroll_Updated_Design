import React, { Component } from 'react';
import './AdminLogin.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import actions from '../../actions';

class AdminLogin extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }

    //handle login form changes
    handleLoginForms = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //submit login
    submitLogin = () => {
        if(this.state.login == '' || this.state.password == ''){
            alert("One or more fields empty");
        }

        else{
            axios.post('/api/admin/login', {
                params: {
                    userName: this.state.userName,
                    password: this.state.password
                }
            })
            .then(res => {
                if(res.data.success == true){
                    alert(res.data.message);
                    //extract JWT and assign as cookie
                    let newToken = res.data.token;
                    let userPayload = res.data.payload;
                    Cookies.set('authToken', newToken);
                    //update redux store, retrieve user info payload
                    this.props.updateLogin(userPayload.userName, userPayload.firstName, userPayload.lastName);
                    this.props.history.push('/');
                }
            })
            .catch(err => {
                alert(err.response.data.message);
            })
        }
    }

    render(){
        return(
            <div className="container-fluid loginContainer">
                <div id="signupForm">
                    <h3> Admin Login </h3>
                    <form>
                        <div className="form-group">
                            <label> Login: </label>
                            <input name="userName" onChange={this.handleLoginForms} type="text" className="form-control" placeholder="Enter Username"/>
                        </div>

                        <div>
                            <Link to="/AdminSignup"> Click here to signup </Link>
                        </div>

                        <div className="form-group">
                            <label> Password: </label>
                            <input name="password" onChange={this.handleLoginForms} type="password" className="form-control" placeholder="Enter Password"/>
                        </div>

                        <button type="button" className="btn btn-primary" onClick={this.submitLogin}> Login </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        updateLogin: (userName, firstName, lastName) => {
            dispatch({
                type: actions.UPDATE_LOGIN,
                userName: userName,
                firstName: firstName,
                lastName: lastName
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(AdminLogin);