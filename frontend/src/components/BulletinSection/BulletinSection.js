import React, { Fragment, useState, useEffect } from 'react';
import './BulletinSection.css';
import validator from 'validator';
import axios from 'axios';
import moment from 'moment-timezone';
import { connect } from 'react-redux';

const BulletinSection = props => {
    const [bulletinMonth, setBulletinMonth] = useState('');
    const [bulletinLink, setBulletinLink] = useState('');
    const [bulletinValues, setBulletinValues] = useState({});
    const [linkReady, setLinkReady] = useState(false);
    const [bulletinText, setBulletinText] = useState('');
    const [createMode, setCreateModeState] = useState(false);
    const [editMode, setEditModeState] = useState(false);
    const [bulletins, setBulletins] = useState([]);
    const [bulletinOptions, setBulletinOptions] = useState([]);
    const [selectedBulletinLink, setSelectedBulletinLink] = useState(null);
    const [selectedMonthId, setSelectedMonthId] = useState('');

    // updated bulletin values
    useEffect(() => {
        if (bulletinValues['month'] && bulletinValues['linkReady']) {
            const monthBulletinText = bulletinValues['month'] + ' Bulletin';
            setBulletinText(monthBulletinText);
        } else if (bulletinValues['month'] && !bulletinValues['linkReady']) {
            const monthBulletinText =
                bulletinValues['month'] + ' Bulletin Coming Soon';
            setBulletinText(monthBulletinText);
        }
    }, [bulletinValues]);

    // get bulletin values
    useEffect(() => {
        getBulletin();
    }, [null]);

    const updateMonthSelection = event => {
        const bulletinFound = bulletins.find(bulletin => {
            return bulletin._id === event.target.value;
        });

        if (bulletinFound) {
            setSelectedBulletinLink(bulletinFound.link);
            setSelectedMonthId(bulletinFound._id);
        }
    };

    //handle input changes for bulletin
    const handleBulletinUpdate = event => {
        switch (event.target.name) {
            case 'bulletinMonth':
                setBulletinMonth(event.target.value);
                break;
            case 'bulletinLink':
                setBulletinLink(event.target.value);
                break;
            default:
                break;
        }
    };

    //handle bulletin available
    const handleBulletinLink = () => {
        setLinkReady(!linkReady);
    };

    const setCreateMode = () => {
        setCreateModeState(true);
        setEditModeState(false);
    };

    const setEditMode = () => {
        setEditModeState(true);
        setCreateModeState(false);
    };

    //submit bulletin edit changes
    const submitBulletinEdit = () => {
        //error handling
        //empty fields
        if (!bulletinMonth) {
            alert('Month field is empty');
            return;
        }

        //if bulletin link set to ready, check for valid inputs
        else if (linkReady) {
            //empty field
            if (!bulletinLink) {
                alert('Link field empty');
                return;
            }

            //invalid url
            else if (!validator.isURL(bulletinLink)) {
                alert('Please insert proper URL');
                return;
            }
        }

        //create last edited with name and date
        let lastEditDate = new Date();
        lastEditDate = moment(lastEditDate)
            .tz('America/Los_Angeles')
            .format('YYYY-MM-DD hh:mm:ss');

        let lastEdited =
            props.firstName + ' ' + props.lastName + ' ' + lastEditDate;

        //create new bulletin object
        let newBulletinUpdates = {
            month: bulletinMonth,
            link: bulletinLink,
            lastEdited: lastEdited,
            id: bulletinValues._id,
            linkReady: linkReady
        };

        //make request to update record
        if (editMode) {
            axios
                .put('/api/bulletin', {
                    params: {
                        newBulletinUpdates: newBulletinUpdates
                    }
                })
                .then(res => {
                    alert(res.data.message);
                    getBulletin();
                })
                .catch(err => {
                    alert(err.response.data.message);
                });
        } else if (createMode) {
            axios
                .post('/api/bulletin/createNew', {
                    params: {
                        month: bulletinMonth,
                        link: bulletinLink
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

    //function to get latest bulletin record from database
    const getBulletin = () => {
        axios
            .get('/api/bulletin')
            .then(res => {
                if (res.data.values.length === 1) {
                    let currentBulletin = res.data.values[0];
                    setBulletinValues({ ...currentBulletin });
                } else {
                    let bulletins = [...res.data.values];
                    bulletins = bulletins.filter(bulletin => {
                        return bulletin.month && bulletin.link;
                    });
                    bulletins.sort((a, b) => {
                        return (
                            new Date(b.createdDate) - new Date(a.createdDate)
                        );
                    });

                    let bulletinOptions = [];
                    bulletins.forEach(option => {
                        if (selectedMonthId === option._id) {
                            bulletinOptions.push(
                                <option
                                    key={option._id}
                                    value={option._id}
                                    selected
                                >
                                    {option.month}
                                </option>
                            );
                        } else {
                            bulletinOptions.push(
                                <option key={option._id} value={option._id}>
                                    {option.month}
                                </option>
                            );
                        }
                    });
                    setBulletins([...bulletins]);
                    setBulletinOptions([...bulletinOptions]);
                }
            })
            .catch(err => {
                alert(err.response.data.message);
            });
    };

    return (
        <div className="card bannerContainer">
            <div id="bannerContent">
                <h2> Bulletins </h2>
                <select
                    className="custom-select"
                    onChange={updateMonthSelection}
                    id="selectBulletin"
                >
                    <option> Select bulletin to view </option>
                    {bulletinOptions}
                </select>
                <a
                    href={
                        selectedBulletinLink
                            ? selectedBulletinLink
                            : 'http://www.sfpayroll.org'
                    }
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <button
                        disabled={selectedBulletinLink ? false : true}
                        className="btn btn-primary"
                    >
                        View Bulletin
                    </button>
                </a>
                {props.login === true ? (
                    <div>
                        <div class="editBulletinContainer">
                            <button
                                className="btn btn-info"
                                data-toggle="modal"
                                data-target="#createModalBulletin"
                                onClick={setCreateMode}
                            >
                                Add new bulletin
                            </button>
                        </div>
                        <div class="editBulletinContainer">
                            <button
                                className="btn btn-secondary"
                                data-toggle="modal"
                                data-target="#modalBulletin"
                                onClick={setEditMode}
                                disabled
                            >
                                Edit Bulletin Information (Need to update)
                            </button>
                            <span>
                                (Last Edited:
                                {bulletinValues['lastEdited'] || ''})
                            </span>
                        </div>
                    </div>
                ) : (
                    <Fragment />
                )}
            </div>

            <div className="modal fade" id="modalBulletin">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">
                                Edit Bulletin Information (Need to update)
                            </h4>
                            <button
                                className="form-control close"
                                type="button"
                                data-dismiss="modal"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="modal-body">
                            <form>
                                <label> Set Bulletin Month </label>
                                <input
                                    className="form-control"
                                    name="bulletinMonth"
                                    type="text"
                                    value={bulletinMonth}
                                    onChange={handleBulletinUpdate}
                                    placeholder="Insert Month Name"
                                />

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        onChange={handleBulletinLink}
                                    />
                                    <label>Toggle To Enter Bulletin URL</label>
                                </div>

                                <label> Input Bulletin Link </label>
                                <input
                                    disabled={!linkReady}
                                    className="form-control"
                                    name="bulletinLink"
                                    type="text"
                                    value={bulletinLink}
                                    onChange={handleBulletinUpdate}
                                    placeholder="Insert URL (http://...)"
                                />
                            </form>

                            <button
                                className="btn btn-success"
                                id="submitBulletinEdit"
                                onClick={submitBulletinEdit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="createModalBulletin">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title"> Create Bulletin </h4>
                            <button
                                className="form-control close"
                                type="button"
                                data-dismiss="modal"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="modal-body">
                            <form>
                                <label> Set Bulletin Month </label>
                                <input
                                    className="form-control"
                                    name="bulletinMonth"
                                    type="text"
                                    value={bulletinMonth}
                                    onChange={handleBulletinUpdate}
                                    placeholder="Insert Month Name"
                                />

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        onChange={handleBulletinLink}
                                    />
                                    <label>Toggle To Enter Bulletin URL</label>
                                </div>

                                <label> Input Bulletin Link </label>
                                <input
                                    disabled={!linkReady}
                                    className="form-control"
                                    name="bulletinLink"
                                    type="text"
                                    value={bulletinLink}
                                    onChange={handleBulletinUpdate}
                                    placeholder="Insert URL (http://...)"
                                />
                            </form>

                            <button
                                className="btn btn-success"
                                id="submitBulletinEdit"
                                onClick={submitBulletinEdit}
                            >
                                Submit
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
        login: state.authReducer.login,
        firstName: state.authReducer.firstName,
        lastName: state.authReducer.lastName
    };
};

export default connect(mapStateToProps, null)(BulletinSection);
