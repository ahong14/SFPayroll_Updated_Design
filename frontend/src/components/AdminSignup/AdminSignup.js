import React , { Component } from 'react';
import './AdminSignup.css';
import axios from 'axios';

class AdminSignup extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: ''
        }
    }

    //handle input change for input field
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //enter key pressed
    handleEnterKey = (event) => {
        if(event.key == "Enter"){
            this.submitLogin();
        }
    }

    //send signup info to backend
    submitSignup = () => {
        if(this.state.firstName == '' || this.state.lastName == '' || this.state.password == '' || this.state.confirmPassword == ''){
            alert("One or more fields empty");
        }

        //if passwords do not match
        else if(this.state.password != this.state.confirmPassword){
            alert.log("Passwords do not match");
        }

        else{
            axios.post('/api/admin/signup', {
                params: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    userName: this.state.userName,
                    password: this.state.password
                }
            })
            .then(res => {
                alert(res.data.message);
                //clear fields after submission
                this.setState({
                    firstName: '',
                    lastName: '',
                    userName: '',
                    password: '',
                    confirmPassword: ''
                });
            })
            .catch(err => {
                alert(err.response.data.message);
            })
        }
    }

    render(){
        return(
            <div className="container-fluid signupContainer" onKeyPress={this.handleEnterKey}>
                <div id="signupForm">
                    <h3> Admin Sign Up </h3>
                    <form>
                         <div className="form-group">
                            <label> First Name: </label>
                            <input onChange={this.handleInputChange} value={this.state.firstName} name="firstName" type="text" className="form-control" placeholder="Enter First Name"/>
                        </div>

                        <div className="form-group">
                            <label> Last Name: </label>
                            <input onChange={this.handleInputChange} value={this.state.lastName} name="lastName" type="text" className="form-control" placeholder="Enter Last Name"/>
                        </div>

                        <div className="form-group">
                            <label> Enter Username: </label>
                            <input onChange={this.handleInputChange} value={this.state.userName} name="userName" type="text" className="form-control" placeholder="Enter Username"/>
                        </div>

                        <div className="form-group">
                            <label> Password: </label>
                            <input onChange={this.handleInputChange} value={this.state.password} name="password" type="password" className="form-control" placeholder="Enter Password"/>
                        </div>

                        <div className="form-group">
                            <label> Confirm Password: </label>
                            <input onChange={this.handleInputChange} value={this.state.confirmPassword} name="confirmPassword" type="password" className="form-control" placeholder="Confirm Password"/>
                        </div>

                        <button type="button" className="btn btn-primary" onClick={this.submitSignup}> Sign Up </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AdminSignup;