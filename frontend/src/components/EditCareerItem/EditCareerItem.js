import React, { useState, Component, Fragment } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import moment from 'moment-timezone';
import './EditCareerItem.css';

const EditCareerItem = props => {
    const [editCareerItemState, setCarerItemState] = useState({
        //career info state values
        date: '',
        city: '',
        company: '',
        title: '',
        //boolean clicked values
        deleteClicked: false,
        deletedMessage: '',
        newPdf: false,
        //new pdf state values
        email: '',
        position: '',
        state: '',
        description: '',
        select: 'Payroll Position- Full Time',
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
        uploadedFile: {}
    });

    // update state of fields updated
    const editCareer = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    // set flag for new pdf
    const enableNewPdf = () => {
        this.setState({
            newPdf: !this.state.newPdf
        });
    };

    // function to handle delete clicked
    const handleDeleteClicked = () => {
        this.setState({
            deleteClicked: true
        });
    };

    const handleCloseDelete = () => {
        this.setState({
            deleteClicked: false
        });
    };

    //update career values
    const updateCareer = () => {
        //object storing state values
        //stores values for edit career and edit new pdf
        let newCareerContent = {};
        //return everything except deleteClicked from state object
        Object.keys(this.state).forEach(key => {
            if (key !== 'deleteClicked' || key !== 'newPdf') {
                //update found, use updated state value
                if (this.state[key] !== '') {
                    newCareerContent[key] = this.state[key];
                }

                //no update found, use prop value
                else {
                    newCareerContent[key] = this.props[key] || '';
                }
            }
        });

        //check if new pdf was clicked, if not use old pdf link
        if (this.state.newPdf === false) {
            newCareerContent['link'] = this.props.link;
        }

        //check for empty fields if no PDF was uploaded
        else {
            if (Array(Object.keys(this.state.uploadedFile)).length === 0) {
                if (
                    this.state.email === '' ||
                    this.state.select === '' ||
                    this.state.company === '' ||
                    this.state.position === '' ||
                    this.state.description === '' ||
                    this.state.city === '' ||
                    this.state.state === ''
                ) {
                    alert('One or more fields empty for pdf content');
                    return;
                }
            }
        }

        //create form data
        const fileData = new FormData();
        fileData.append('newPdf', this.state.uploadedFile);

        //create last edited information
        let lastEditedDate = new Date();
        lastEditedDate = moment(lastEditedDate)
            .tz('America/Los_Angeles')
            .format('YYYY-MM-DD hh:mm:ss');

        let lastEdited =
            this.props.firstName +
            ' ' +
            this.props.lastName +
            ' ' +
            lastEditedDate;
        newCareerContent['lastEdited'] = lastEdited;

        //make api request to update record
        axios
            .put('/api/positions/edit', fileData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: 'application/json'
                },

                params: {
                    id: this.props.objectid,
                    newCareerContent: newCareerContent,
                    newPdf: this.state.newPdf
                }
            })
            .then(res => {
                alert(res.data.message);
            })
            .catch(err => {
                alert(err.response.data.message);
            });
    };

    //handle input for delete message
    const handleDeleteMessage = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    //delete career from database
    const deleteCareer = () => {
        if (
            this.state.deletedMessage.length === 0 ||
            this.state.deletedMessage === ''
        ) {
            alert('Please insert delete message');
            return;
        } else {
            axios
                .delete('/api/positions/delete', {
                    params: {
                        id: this.props.objectid,
                        deletedMessage: this.state.deletedMessage
                    }
                })
                .then(res => {
                    alert(res.data.message);
                })
                .catch(err => {
                    alert(err.response.data.message);
                });
        }
    };

    //new PDF content functions

    //handle file upload for new pdf
    //function to handle file uploaded
    const handleFileUpload = event => {
        if (event.target.files) {
            this.setState({
                uploadedFile: event.target.files[0]
            });
        }
    };

    const handleNewPdfContent = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    return (
        <div className="card border-info">
            <div className="card-body">
                <a
                    href={this.props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {' '}
                    <h5 className="card-title text-center">
                        {' '}
                        {this.props.title}{' '}
                    </h5>{' '}
                </a>
                <p className="card-text text-center">
                    {' '}
                    <strong> Date Posted: </strong> {this.props.date}{' '}
                </p>
                <p className="card-text text-center">
                    {' '}
                    <strong> City: </strong> {this.props.city}{' '}
                </p>
                <p className="card-text text-center">
                    {' '}
                    <strong> Company: </strong> {this.props.company}{' '}
                </p>
                <p className="card-text text-center">
                    {' '}
                    <strong> Last Edited By: </strong> {this.props.lastEdited}{' '}
                </p>
                {this.props.deleted === true ? (
                    <p className="card-text text-center">
                        {' '}
                        <strong> Deleted Message: </strong>{' '}
                        {this.props.deletedMessage}{' '}
                    </p>
                ) : (
                    <Fragment />
                )}
            </div>

            {this.props.deleted === false ? (
                <div className="editButtonsContainer">
                    <button
                        type="button"
                        className="form-control btn btn-secondary editButton"
                        data-toggle="modal"
                        data-target={'#' + this.props.id}
                    >
                        {' '}
                        Edit{' '}
                    </button>
                    <button
                        type="button"
                        className="form-control btn btn-danger editButton"
                        data-toggle="modal"
                        data-target={'#' + this.props.id}
                        onClick={this.handleDeleteClicked}
                    >
                        {' '}
                        Delete{' '}
                    </button>
                </div>
            ) : (
                <Fragment />
            )}

            <div className="modal fade" id={this.props.id}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title"> Edit Career </h4>
                            <button
                                className="form-control close"
                                type="button"
                                data-dismiss="modal"
                                onClick={this.handleCloseDelete}
                            >
                                &times;
                            </button>
                        </div>

                        <div className="modal-body">
                            {this.state.deleteClicked !== true ? (
                                <form>
                                    <label> Title </label>
                                    <input
                                        name="title"
                                        onChange={this.editCareer}
                                        className="form-control"
                                        placeholder={this.props.title}
                                        type="text"
                                    />

                                    <label> Date </label>
                                    <input
                                        name="date"
                                        onChange={this.editCareer}
                                        className="form-control"
                                        placeholder={this.props.date}
                                        type="text"
                                    />

                                    <label> Company </label>
                                    <input
                                        name="company"
                                        onChange={this.editCareer}
                                        className="form-control"
                                        placeholder={this.props.company}
                                        type="text"
                                    />

                                    <label> City </label>
                                    <input
                                        name="city"
                                        onChange={this.editCareer}
                                        className="form-control"
                                        placeholder={this.props.city}
                                        type="text"
                                    />

                                    <div className="form-check">
                                        <input
                                            name="link"
                                            className="form-check-input"
                                            onChange={this.enableNewPdf}
                                            placeholder="Yes"
                                            type="checkbox"
                                        />
                                        <label>
                                            {' '}
                                            Click checkbox to create new PDF
                                            Link{' '}
                                        </label>
                                    </div>
                                </form>
                            ) : (
                                <div>
                                    <p>
                                        {' '}
                                        Confirm Deleting {
                                            this.props.title
                                        } ?{' '}
                                    </p>
                                    <form className="deleteConfirmMessage">
                                        <label> Input Delete Message </label>
                                        <textarea
                                            name="deletedMessage"
                                            onChange={this.handleDeleteMessage}
                                        />
                                    </form>
                                </div>
                            )}

                            {this.state.newPdf === true ? (
                                <form>
                                    <label
                                        htmlFor="email"
                                        className="font-weight-bold"
                                    >
                                        {' '}
                                        Email:{' '}
                                    </label>
                                    <input
                                        disabled={this.state.disableForms}
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        onChange={this.handleNewPdfContent}
                                    />

                                    <label
                                        htmlFor="title"
                                        className="font-weight-bold"
                                    >
                                        Title of Position:
                                    </label>
                                    <input
                                        disabled={this.state.disableForms}
                                        name="position"
                                        type="text"
                                        className="form-control"
                                        id="position"
                                        onChange={this.handleNewPdfContent}
                                    />

                                    <label
                                        htmlFor="city"
                                        className="font-weight-bold"
                                    >
                                        {' '}
                                        City:{' '}
                                    </label>
                                    <input
                                        disabled={this.state.disableForms}
                                        name="city"
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        onChange={this.handleNewPdfContent}
                                    />

                                    <label
                                        htmlFor="state"
                                        className="font-weight-bold"
                                    >
                                        {' '}
                                        State:{' '}
                                    </label>
                                    <input
                                        disabled={this.state.disableForms}
                                        name="state"
                                        type="text"
                                        className="form-control"
                                        id="state"
                                        onChange={this.handleNewPdfContent}
                                    />

                                    <label
                                        htmlFor="position"
                                        className="font-weight-bold"
                                    >
                                        {' '}
                                        Select Position:
                                    </label>
                                    <select
                                        className="form-control"
                                        id="payroll_position"
                                        name="select"
                                        onChange={this.handleNewPdfContent}
                                    >
                                        <option>
                                            Payroll Position- Full Time{' '}
                                        </option>
                                        <option>
                                            Payroll Position- Part Time
                                        </option>
                                        <option>Payroll Position- Temp</option>
                                        <option>
                                            Non Payroll Position - Full Time{' '}
                                        </option>
                                        <option>
                                            Non Payroll Position - Part Time{' '}
                                        </option>
                                        <option>
                                            Non Payroll Position - Temp{' '}
                                        </option>
                                    </select>
                                    <label
                                        htmlFor="description"
                                        className="font-weight-bold"
                                    >
                                        Job Description:
                                    </label>
                                    <textarea
                                        disabled={this.state.disableForms}
                                        name="description"
                                        onChange={this.handleNewPdfContent}
                                        className="form-control"
                                        rows="5"
                                        id="job_description"
                                    ></textarea>
                                    <label
                                        htmlFor="file"
                                        className="font-weight-bold"
                                    >
                                        {' '}
                                        Upload PDF (Optional):{' '}
                                    </label>
                                    <div>
                                        <input
                                            type="file"
                                            name="jobPosting"
                                            onChange={this.handleFileUpload}
                                        />
                                    </div>
                                </form>
                            ) : (
                                <span />
                            )}
                        </div>

                        <div className="modal-footer">
                            <button
                                className="form-control btn btn-secondary"
                                type="button"
                                data-dismiss="modal"
                                onClick={this.handleCloseDelete}
                            >
                                Close
                            </button>
                            {this.state.deleteClicked === false ? (
                                <button
                                    className="form-control btn btn-success"
                                    type="button"
                                    onClick={this.updateCareer}
                                >
                                    {' '}
                                    Submit Edit{' '}
                                </button>
                            ) : (
                                <button
                                    className="form-control btn btn-danger"
                                    type="button"
                                    onClick={this.deleteCareer}
                                >
                                    {' '}
                                    Delete Event{' '}
                                </button>
                            )}
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
        lastName: state.authReducer.lastName
    };
};

export default connect(mapStateToProps, null)(EditCareerItem);
