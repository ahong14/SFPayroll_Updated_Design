import React, { useState, useEffect, Fragment } from 'react';
import '../../Careers/JobForm/JobForm.css';
import axios from 'axios';
import validator from 'validator';
import { connect } from 'react-redux';
import moment from 'moment-timezone';

const JobForm = props => {
    const [jobFormState, setJobFormState] = useState({
        emailInput: '',
        companyInput: '',
        positionInput: '',
        cityInput: '',
        stateInput: '',
        descriptionInput: '',
        selectInput: 'Payroll Position- Full Time',
        formInputTitles: [
            'Email',
            'Company',
            'City',
            'State',
            'Position',
            'Selected',
            'Description',
            'PDF'
        ],
        uploadedFile: {},
        disableForms: false
    });
    const [showLoading, setShowLoading] = useState(false);

    // function to handle file uploaded
    const handleFileUpload = event => {
        if (event.target.files) {
            setJobFormState({
                ...jobFormState,
                uploadedFile: event.target.files[0]
            });
        }
    };

    // function to send email with inputted params
    const sendJob = () => {
        if (
            jobFormState.emailInput.trim() === '' ||
            jobFormState.positionInput.trim() === '' ||
            jobFormState.cityInput.trim() === '' ||
            jobFormState.stateInput.trim() === '' ||
            jobFormState.descriptionInput.trim() === ''
        ) {
            alert('One or more fields empty');
        } else if (validator.isEmail(jobFormState.emailInput) === false) {
            alert('Invalid email inserted');
        } else {
            setShowLoading(true);
        }
    };

    // handle input changes
    const handleJobFormChanges = event => {
        setJobFormState({
            ...jobFormState,
            [event.target.name]: event.target.value
        });
    };

    // make request to send job file
    const uploadJobFile = () => {
        const apiURL = '/api/job/sendJob';
        const fileData = new FormData();
        fileData.append('jobPosting', jobFormState.uploadedFile);

        //check if admin is logged in, determine last edited
        let lastEditedDate = new Date();
        lastEditedDate = moment(lastEditedDate)
            .tz('America/Los_Angeles')
            .format('YYYY-MM-DD hh:mm:ss');

        let lastEdited = '';
        if (props.login === true) {
            lastEdited =
                props.firstName + ' ' + props.lastName + ' ' + lastEditedDate;
        } else {
            lastEdited = 'Job Poster ' + lastEditedDate;
        }

        //convert axios params to send form data and accept json
        const requestParams = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Accept: 'application/json'
            },

            //data for body of requests, post request
            params: {
                email: jobFormState.emailInput,
                company: jobFormState.companyInput,
                title: jobFormState.positionInput,
                city: jobFormState.cityInput,
                state: jobFormState.stateInput,
                position: jobFormState.positionInput,
                description: jobFormState.descriptionInput,
                payrollPosition: jobFormState.selectInput,
                lastEdited: lastEdited
            }
        };

        axios
            .post(apiURL, fileData, requestParams)
            .then(res => {
                alert(res.data);
                setJobFormState({ ...jobFormState, showLoading: false });
            })
            .catch(err => {
                alert(err);
            });
    };

    // if show loading enabled, upload job file
    useEffect(() => {
        if (showLoading) {
            uploadJobFile();
        }
    }, [showLoading]);

    const formConfirmation = jobFormState.formInputTitles.map(
        (title, index) => {
            switch (title) {
                case 'Email':
                    return (
                        <div key={title + index}>
                            <span className="font-weight-bold"> {title} </span>:
                            {jobFormState.emailInput}
                        </div>
                    );

                case 'Company':
                    return (
                        <div key={title + index}>
                            <span className="font-weight-bold"> {title} </span>:
                            {jobFormState.companyInput}
                        </div>
                    );

                case 'Position':
                    return (
                        <div key={title + index}>
                            <span className="font-weight-bold"> {title} </span>:
                            {jobFormState.positionInput}
                        </div>
                    );

                case 'City':
                    return (
                        <div key={title + index}>
                            <span className="font-weight-bold"> {title} </span>:
                            {jobFormState.cityInput}
                        </div>
                    );

                case 'State':
                    return (
                        <div key={title + index}>
                            <span className="font-weight-bold"> {title} </span>:
                            {jobFormState.stateInput}
                        </div>
                    );

                case 'Selected':
                    return (
                        <div key={title + index}>
                            <span className="font-weight-bold"> {title} </span>:
                            {jobFormState.selectInput}
                        </div>
                    );

                case 'Description':
                    return (
                        <div
                            className="job_description_container"
                            key={title + index}
                        >
                            <span className="font-weight-bold"> {title} </span>:
                            {jobFormState.descriptionInput}
                        </div>
                    );

                case 'PDF':
                    return (
                        <div
                            className="job_description_container"
                            key={title + index}
                        >
                            <span className="font-weight-bold"> {title} </span>:
                            {jobFormState.uploadedFile.name
                                ? jobFormState.uploadedFile.name
                                : 'No PDF uploaded'}
                        </div>
                    );
                default:
                    return <Fragment />;
            }
        }
    );

    return (
        <div className="job_container">
            <div className="form-group" id="job_form_input">
                <form>
                    <label htmlFor="email" className="font-weight-bold">
                        Email:
                    </label>
                    <input
                        disabled={jobFormState.disableForms}
                        type="email"
                        className="form-control"
                        id="email"
                        name="emailInput"
                        onChange={handleJobFormChanges}
                    />

                    <label htmlFor="company" className="font-weight-bold">
                        Company:
                    </label>
                    <input
                        disabled={jobFormState.disableForms}
                        type="text"
                        className="form-control"
                        id="company"
                        name="companyInput"
                        onChange={handleJobFormChanges}
                    />

                    <label htmlFor="title" className="font-weight-bold">
                        Title of Position:
                    </label>
                    <input
                        disabled={jobFormState.disableForms}
                        type="text"
                        className="form-control"
                        id="position"
                        name="positionInput"
                        onChange={handleJobFormChanges}
                    />

                    <label htmlFor="city" className="font-weight-bold">
                        City:
                    </label>
                    <input
                        disabled={jobFormState.disableForms}
                        type="text"
                        className="form-control"
                        id="city"
                        name="cityInput"
                        onChange={handleJobFormChanges}
                    />

                    <label htmlFor="state" className="font-weight-bold">
                        State:
                    </label>
                    <input
                        disabled={jobFormState.disableForms}
                        type="text"
                        className="form-control"
                        id="state"
                        name="stateInput"
                        onChange={handleJobFormChanges}
                    />

                    <label htmlFor="position" className="font-weight-bold">
                        Select Position:
                    </label>
                    <select
                        className="form-control"
                        id="payroll_position"
                        name="selectInput"
                        onChange={handleJobFormChanges}
                    >
                        <option>Payroll Position- Full Time </option>
                        <option>Payroll Position- Part Time</option>
                        <option>Payroll Position- Temp</option>
                        <option>Non Payroll Position - Full Time </option>
                        <option>Non Payroll Position - Part Time </option>
                        <option>Non Payroll Position - Temp </option>
                    </select>
                    <label htmlFor="description" className="font-weight-bold">
                        Job Description:
                    </label>
                    <textarea
                        disabled={jobFormState.disableForms}
                        className="form-control"
                        rows="5"
                        id="job_description"
                        name="descriptionInput"
                        onChange={handleJobFormChanges}
                    ></textarea>
                    <label htmlFor="file" className="font-weight-bold">
                        Upload PDF (Optional):
                    </label>
                    <div>
                        <input
                            type="file"
                            name="jobPosting"
                            onChange={handleFileUpload}
                        />
                    </div>
                </form>

                <button
                    id="submit-job-button"
                    type="button"
                    className="btn btn-primary btn-md"
                    data-toggle="modal"
                    data-target="#myModal"
                >
                    Submit Job Posting
                </button>
            </div>

            <div
                className="modal fade"
                id="myModal"
                role="dialog"
                aria-labelledby="myModalLabel"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="job-posting-header">
                                Job Posting
                            </h4>
                        </div>

                        <div className="modal-body">{formConfirmation}</div>

                        <div className="modal-footer">
                            <h6 className="job-posting-footer-header">
                                Job Posting Information Correct?
                            </h6>
                            <button
                                type="button"
                                className="btn btn-default"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                onClick={sendJob}
                                type="button"
                                className="btn btn-primary"
                            >
                                {showLoading ? 'Posting...' : 'Submit Posting'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        firstName: state.authReducer.firstName,
        lastName: state.authReducer.lastName,
        login: state.authReducer.login
    };
};

export default connect(mapStateToProps, null)(JobForm);
