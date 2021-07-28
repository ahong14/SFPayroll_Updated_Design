import React, { useState, Component, Fragment } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import moment from 'moment-timezone';
import './EditCareerItem.css';

const EditCareerItem = props => {
    const [editCareerItemState, setEditCareerItemState] = useState({
        // career info state values
        date: '',
        city: '',
        company: '',
        title: '',
        deletedMessage: '',
        newPdf: false,
        // new pdf state values
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

    const [deleteClicked, setDeleteClicked] = useState(false);

    //  update state of fields updated
    const editCareer = event => {
        setEditCareerItemState({
            ...editCareerItemState,
            [event.target.name]: event.target.value
        });
    };

    //  set flag for new pdf
    const enableNewPdf = () => {
        setEditCareerItemState({
            ...editCareerItemState,
            newPdf: editCareerItemState.newPdf
        });
    };

    //  function to handle delete clicked
    const handleDeleteClicked = () => {
        setDeleteClicked(true);
    };

    const handleCloseDelete = () => {
        setDeleteClicked(false);
    };

    // update career values
    const updateCareer = () => {
        // object storing state values
        // stores values for edit career and edit new pdf
        let newCareerContent = {};
        // return everything except deleteClicked from state object
        Object.keys(editCareerItemState).forEach(key => {
            if (key !== 'deleteClicked' || key !== 'newPdf') {
                // update found, use updated state value
                if (editCareerItemState[key] !== '') {
                    newCareerContent[key] = editCareerItemState[key];
                }

                // no update found, use prop value
                else {
                    newCareerContent[key] = props[key] || '';
                }
            }
        });

        // check if new pdf was clicked, if not use old pdf link
        if (editCareerItemState.newPdf === false) {
            newCareerContent['link'] = props.link;
        }

        // check for empty fields if no PDF was uploaded
        else {
            if (
                Array(Object.keys(editCareerItemState.uploadedFile)).length ===
                0
            ) {
                if (
                    editCareerItemState.email === '' ||
                    editCareerItemState.select === '' ||
                    editCareerItemState.company === '' ||
                    editCareerItemState.position === '' ||
                    editCareerItemState.description === '' ||
                    editCareerItemState.city === '' ||
                    editCareerItemState.state === ''
                ) {
                    alert('One or more fields empty for pdf content');
                    return;
                }
            }
        }

        // create form data
        const fileData = new FormData();
        fileData.append('newPdf', editCareerItemState.uploadedFile);

        // create last edited information
        let lastEditedDate = new Date();
        lastEditedDate = moment(lastEditedDate)
            .tz('America/Los_Angeles')
            .format('YYYY-MM-DD hh:mm:ss');

        let lastEdited =
            props.firstName + ' ' + props.lastName + ' ' + lastEditedDate;
        newCareerContent['lastEdited'] = lastEdited;

        // make api request to update record
        axios
            .put('/api/positions/edit', fileData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: 'application/json'
                },

                params: {
                    id: props.objectid,
                    newCareerContent: newCareerContent,
                    newPdf: editCareerItemState.newPdf
                }
            })
            .then(res => {
                alert(res.data.message);
            })
            .catch(err => {
                alert(err.response.data.message);
            });
    };

    // handle input for delete message
    const handleDeleteMessage = event => {
        setEditCareerItemState({
            ...editCareerItemState,
            [event.target.name]: event.target.value
        });
    };

    // delete career from database
    const deleteCareer = () => {
        if (
            editCareerItemState.deletedMessage.length === 0 ||
            editCareerItemState.deletedMessage === ''
        ) {
            alert('Please insert delete message');
            return;
        } else {
            axios
                .delete('/api/positions/delete', {
                    params: {
                        id: props.objectid,
                        deletedMessage: editCareerItemState.deletedMessage
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

    // new PDF content functions

    // handle file upload for new pdf
    // function to handle file uploaded
    const handleFileUpload = event => {
        if (event.target.files) {
            setEditCareerItemState({
                ...editCareerItemState,
                uploadedFile: event.target.files[0]
            });
        }
    };

    const handleNewPdfContent = event => {
        setEditCareerItemState({
            ...editCareerItemState,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div className="card border-info">
            <div className="card-body">
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <h5 className="card-title text-center">{props.title}</h5>
                </a>
                <p className="card-text text-center">
                    <strong> Date Posted: </strong> {props.date}
                </p>
                <p className="card-text text-center">
                    <strong> City: </strong> {props.city}
                </p>
                <p className="card-text text-center">
                    <strong> Company: </strong> {props.company}
                </p>
                <p className="card-text text-center">
                    <strong> Last Edited By: </strong> {props.lastEdited}
                </p>
                {props.deleted === true ? (
                    <p className="card-text text-center">
                        <strong> Deleted Message: </strong>
                        {props.deletedMessage}
                    </p>
                ) : (
                    <Fragment />
                )}
            </div>

            {props.deleted === false ? (
                <div className="editButtonsContainer">
                    <button
                        type="button"
                        className="form-control btn btn-secondary editButton"
                        data-toggle="modal"
                        data-target={'#' + props.id}
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        className="form-control btn btn-danger editButton"
                        data-toggle="modal"
                        data-target={'#' + props.id}
                        onClick={handleDeleteClicked}
                    >
                        Delete
                    </button>
                </div>
            ) : (
                <Fragment />
            )}

            <div className="modal fade" id={props.id}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title"> Edit Career </h4>
                            <button
                                className="form-control close"
                                type="button"
                                data-dismiss="modal"
                                onClick={handleCloseDelete}
                            >
                                &times;
                            </button>
                        </div>

                        <div className="modal-body">
                            {deleteClicked !== true ? (
                                <form>
                                    <label> Title </label>
                                    <input
                                        name="title"
                                        onChange={editCareer}
                                        className="form-control"
                                        placeholder={props.title}
                                        type="text"
                                    />

                                    <label> Date </label>
                                    <input
                                        name="date"
                                        onChange={editCareer}
                                        className="form-control"
                                        placeholder={props.date}
                                        type="text"
                                    />

                                    <label> Company </label>
                                    <input
                                        name="company"
                                        onChange={editCareer}
                                        className="form-control"
                                        placeholder={props.company}
                                        type="text"
                                    />

                                    <label> City </label>
                                    <input
                                        name="city"
                                        onChange={editCareer}
                                        className="form-control"
                                        placeholder={props.city}
                                        type="text"
                                    />

                                    <div className="form-check">
                                        <input
                                            name="link"
                                            className="form-check-input"
                                            onChange={enableNewPdf}
                                            placeholder="Yes"
                                            type="checkbox"
                                        />
                                        <label>
                                            Click checkbox to create new PDF
                                            Link
                                        </label>
                                    </div>
                                </form>
                            ) : (
                                <div>
                                    <p> Confirm Deleting {props.title} ? </p>
                                    <form className="deleteConfirmMessage">
                                        <label> Input Delete Message </label>
                                        <textarea
                                            name="deletedMessage"
                                            onChange={handleDeleteMessage}
                                        />
                                    </form>
                                </div>
                            )}

                            {editCareerItemState.newPdf === true ? (
                                <form>
                                    <label
                                        htmlFor="email"
                                        className="font-weight-bold"
                                    >
                                        Email:
                                    </label>
                                    <input
                                        disabled={
                                            editCareerItemState.disableForms
                                        }
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        onChange={handleNewPdfContent}
                                    />

                                    <label
                                        htmlFor="title"
                                        className="font-weight-bold"
                                    >
                                        Title of Position:
                                    </label>
                                    <input
                                        disabled={
                                            editCareerItemState.disableForms
                                        }
                                        name="position"
                                        type="text"
                                        className="form-control"
                                        id="position"
                                        onChange={handleNewPdfContent}
                                    />

                                    <label
                                        htmlFor="city"
                                        className="font-weight-bold"
                                    >
                                        City:
                                    </label>
                                    <input
                                        disabled={
                                            editCareerItemState.disableForms
                                        }
                                        name="city"
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        onChange={handleNewPdfContent}
                                    />

                                    <label
                                        htmlFor="state"
                                        className="font-weight-bold"
                                    >
                                        State:
                                    </label>
                                    <input
                                        disabled={
                                            editCareerItemState.disableForms
                                        }
                                        name="state"
                                        type="text"
                                        className="form-control"
                                        id="state"
                                        onChange={handleNewPdfContent}
                                    />

                                    <label
                                        htmlFor="position"
                                        className="font-weight-bold"
                                    >
                                        Select Position:
                                    </label>
                                    <select
                                        className="form-control"
                                        id="payroll_position"
                                        name="select"
                                        onChange={handleNewPdfContent}
                                    >
                                        <option>
                                            Payroll Position- Full Time
                                        </option>
                                        <option>
                                            Payroll Position- Part Time
                                        </option>
                                        <option>Payroll Position- Temp</option>
                                        <option>
                                            Non Payroll Position - Full Time
                                        </option>
                                        <option>
                                            Non Payroll Position - Part Time
                                        </option>
                                        <option>
                                            Non Payroll Position - Temp
                                        </option>
                                    </select>
                                    <label
                                        htmlFor="description"
                                        className="font-weight-bold"
                                    >
                                        Job Description:
                                    </label>
                                    <textarea
                                        disabled={
                                            editCareerItemState.disableForms
                                        }
                                        name="description"
                                        onChange={handleNewPdfContent}
                                        className="form-control"
                                        rows="5"
                                        id="job_description"
                                    ></textarea>
                                    <label
                                        htmlFor="file"
                                        className="font-weight-bold"
                                    >
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
                            ) : (
                                <span />
                            )}
                        </div>

                        <div className="modal-footer">
                            <button
                                className="form-control btn btn-secondary"
                                type="button"
                                data-dismiss="modal"
                                onClick={handleCloseDelete}
                            >
                                Close
                            </button>
                            {deleteClicked === false ? (
                                <button
                                    className="form-control btn btn-success"
                                    type="button"
                                    onClick={updateCareer}
                                >
                                    Submit Edit
                                </button>
                            ) : (
                                <button
                                    className="form-control btn btn-danger"
                                    type="button"
                                    onClick={deleteCareer}
                                >
                                    Delete Event
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
