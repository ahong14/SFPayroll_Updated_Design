import React , { Component } from 'react';
import './AdminResetPass.css';
import axios from 'axios';

class AdminResetPass extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            newPassword: '',
            confirmNewPassword: '',

        }
    }

    handleResetChanges = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitPasswordReset = () => {
        //error handling
        //empty fields
        if(this.state.userName == '' || this.state.newPassword == '' || this.state.confirmNewPassword == ''){
            alert("One or more fields empty");
            return;
        }

        //passwords do not match
        else if(this.state.newPassword != this.state.confirmNewPassword){
            alert("Passwords do not match");
            return;
        }

        //submit password request
        else{
            //submit request
            axios.post('/api/admin/resetPassword', {
                params: {
                    userName: this.state.userName,
                    newPassword: this.state.newPassword
                }
            })
            .then(res => {
                alert(res.data.message);
            })
            .catch(err => {
                alert(err.response.data.message);
            })
        }
    }

    render(){
        return(
            <div className="container" id="adminResetContainer">
                <h1> Admin Reset Password </h1>
                <div id="resetPassForm">
                    <form>
                        <label> Insert username to reset </label>
                        <input type="text" name="userName" className="form-control" onChange={this.handleResetChanges} placeholder="Insert username"/>

                        <label> Insert New Password </label>
                        <input type="password" name="newPassword" className="form-control" onChange={this.handleResetChanges} placeholder="New Password"/>

                        <label> Confirm New Password </label>
                        <input type="password" name="confirmNewPassword" className="form-control" onChange={this.handleResetChanges} placeholder="Confirm Password"/>

                        <button type="button" className="btn btn-primary" id="submitResetButton" onClick={this.submitPasswordReset}> Submit </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AdminResetPass;