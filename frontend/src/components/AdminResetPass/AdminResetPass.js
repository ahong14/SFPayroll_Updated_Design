import React, { useState } from 'react';
import './AdminResetPass.css';
import axios from 'axios';

const AdminResetPass = () => {
    const [userName, setUserName] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleResetChanges = event => {
        switch (event.target.name) {
            case 'userName':
                setUserName(event.target.value);
                break;
            case 'newPassword':
                setNewPassword(event.target.value);
                break;
            case 'confirmNewPassword':
                setConfirmNewPassword(event.target.value);
                break;
        }
    };

    const handleEnterKey = event => {
        if (event.key === 'Enter') {
            submitPasswordReset();
        }
    };

    const submitPasswordReset = () => {
        //error handling
        //empty fields
        if (
            userName === '' ||
            newPassword === '' ||
            confirmNewPassword === ''
        ) {
            alert('One or more fields empty');
            return;
        }

        //passwords do not match
        else if (newPassword !== confirmNewPassword) {
            alert('Passwords do not match');
            return;
        }

        //submit password request
        else {
            //submit request
            axios
                .post('/api/admin/resetPassword', {
                    params: {
                        userName: userName,
                        newPassword: newPassword
                    }
                })
                .then(res => {
                    alert(res.data.message);
                    setUserName('');
                    setNewPassword('');
                    setConfirmNewPassword('');
                })
                .catch(err => {
                    alert(err.response.data.message);
                });
        }
    };

    return (
        <div className="container" id="adminResetContainer">
            <h1> Admin Reset Password </h1>
            <div id="resetPassForm">
                <form onKeyPress={handleEnterKey}>
                    <label> Insert username to reset </label>
                    <input
                        type="text"
                        name="userName"
                        value={userName}
                        className="form-control"
                        onChange={handleResetChanges}
                        placeholder="Insert username"
                    />

                    <label> Insert New Password </label>
                    <input
                        type="password"
                        name="newPassword"
                        value={newPassword}
                        className="form-control"
                        onChange={handleResetChanges}
                        placeholder="New Password"
                    />

                    <label> Confirm New Password </label>
                    <input
                        type="password"
                        name="confirmNewPassword"
                        value={confirmNewPassword}
                        className="form-control"
                        onChange={handleResetChanges}
                        placeholder="Confirm Password"
                    />

                    <button
                        type="button"
                        className="btn btn-primary"
                        id="submitResetButton"
                        onClick={submitPasswordReset}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminResetPass;
