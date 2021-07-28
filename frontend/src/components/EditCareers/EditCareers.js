import React, { useState, useEffect, Fragment, Component } from 'react';
import axios from 'axios';
import EditCareerItem from '../EditCareerItem/EditCareerItem';
import './EditCareers.css';
import JobForm from '../Careers/JobForm/JobForm';

const EditCareer = () => {
    const [careers, setCareers] = useState([]);
    const [removedCareers, setRemovedCareers] = useState([]);
    const [showJobForm, setShowJobForm] = useState(false);
    const [activePostings, setActivePostings] = useState(false);
    const [removedPostings, setRemovedPostings] = useState(false);

    // show job form
    const handleJobForm = () => {
        setShowJobForm(true);
    };

    // hide job form
    const hideJobForm = () => {
        setShowJobForm(false);
    };

    const handleActivePosts = () => {
        setActivePostings(true);
        setRemovedPostings(false);
    };

    const handleRemovedPosts = () => {
        setActivePostings(false);
        setRemovedPostings(true);
    };

    // get career postings
    useEffect(() => {
        axios
            .get('/api/positions/getPostings')
            .then(res => {
                //filter active and removed career positions
                let activeCareers = res.data.filter(position => {
                    return position.deleted === false;
                });

                let removedCareers = res.data.filter(position => {
                    return position.deleted === true;
                });
                setCareers(activeCareers);
                setRemovedCareers(removedCareers);
            })
            .catch(err => {
                alert(err);
            });
    }, []);

    const editCareersActive = careers.map(career => {
        return (
            <EditCareerItem
                objectid={career._id}
                id={career._id.toLowerCase().replace(/[^a-z]/gi, '')}
                title={career.title}
                date={career.date}
                city={career.city}
                company={career.company}
                link={career.link}
                email={career.email}
                lastEdited={career.lastEdited}
                deleted={career.deleted}
                deletedMessage={career.deletedMessage}
            />
        );
    });

    const editCareersRemoved = removedCareers.map(career => {
        return (
            <EditCareerItem
                objectid={career._id}
                id={career._id.toLowerCase().replace(/[^a-z]/gi, '')}
                title={career.title}
                date={career.date}
                city={career.city}
                company={career.company}
                link={career.link}
                email={career.email}
                lastEdited={career.lastEdited}
                deleted={career.deleted}
                deletedMessage={career.deletedMessage}
            />
        );
    });

    return (
        <div className="editContainer">
            <div id="editCareersContainer">
                <div>
                    <h3> Edit Careers </h3>
                    {showJobForm ? (
                        <button
                            className="btn btn-danger"
                            onClick={hideJobForm}
                        >
                            Hide
                        </button>
                    ) : (
                        <button
                            className="btn btn-success"
                            onClick={handleJobForm}
                        >
                            Create New Position
                        </button>
                    )}
                </div>

                {showJobForm ? (
                    <div>
                        <JobForm />
                    </div>
                ) : (
                    <Fragment />
                )}

                <div className="viewPostingsButtons">
                    <button
                        className="btn btn-info postingsButton"
                        onClick={handleActivePosts}
                        disabled={activePostings}
                    >
                        View Active Postings
                    </button>
                    <button
                        className="btn btn-danger postingsButtons"
                        onClick={handleRemovedPosts}
                        disabled={removedPostings}
                    >
                        View Removed Postings
                    </button>
                </div>

                {activePostings === true && editCareersActive.length > 0 ? (
                    editCareersActive
                ) : removedPostings === true &&
                  editCareersRemoved.length > 0 ? (
                    editCareersRemoved
                ) : (
                    <p> No postings found </p>
                )}
            </div>
        </div>
    );
};

export default EditCareer;
