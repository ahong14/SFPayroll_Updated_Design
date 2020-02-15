import React, { Fragment, Component } from 'react';
import axios from 'axios';
import EditCareerItem from '../EditCareerItem/EditCareerItem';
import './EditCareers.css';
import JobForm from '../Careers/JobForm/JobForm';

class EditCareer extends Component{
    constructor(props){
        super(props);
        this.state = {
            careers: [],
            removedCareers: [],
            showJobForm: false,
            activePostings: true,
            removedPostings: false
        }
    }

    //show job form 
    handleJobForm = () => {
        this.setState({
            showJobForm: true
        })
    }

    //hide job form
    hideJobForm = () => {
        this.setState({
            showJobForm: false
        })
    }

    handleActivePosts = () => {
        this.setState({
            activePostings: true,
            removedPostings: false
        })
    }

    handleRemovedPosts = () => {
        this.setState({
            activePostings:false,
            removedPostings: true
        })
    }

    //get career postings
    componentDidMount(){
        axios.get('/api/positions/getPostings')
            .then(res => {
                //filter active and removed career positions
                let activeCareers = res.data.filter(position => {
                    return position.deleted == false;
                });

                let removedCareers = res.data.filter(position => {
                    return position.deleted == true;
                });

                this.setState({
                    careers: activeCareers,
                    removedCareers: removedCareers
                });
            })
            .catch(err => {
                alert(err);
            })
    }

    render(){
        const editCareersActive = this.state.careers.map(career => {
            return(
                <EditCareerItem
                    objectid={career._id}
                    id={career._id.toLowerCase().replace(/[^a-z]/gi,'')}
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
            )
        });

        const editCareersRemoved = this.state.removedCareers.map(career => {
            return(
                <EditCareerItem
                    objectid={career._id}
                    id={career._id.toLowerCase().replace(/[^a-z]/gi,'')}
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
            )
        })

        return(
            <div className="editContainer">
                <div id="editCareersContainer">
                    <div>
                        <h3> Edit Careers </h3>
                        {
                            this.state.showJobForm ? 
                                <button className="btn btn-danger" onClick={this.hideJobForm}> Hide </button>
                            :
                                <button className="btn btn-success" onClick={this.handleJobForm}> Create New Position </button>
                        }
                    </div>
                    
                    {
                        this.state.showJobForm ?
                            <div>
                                <JobForm/>
                            </div>
                        :
                            <Fragment/>
                    }

                    <div className="viewPostingsButtons">
                        <button className="btn btn-info postingsButton" onClick={this.handleActivePosts} disabled={this.state.activePostings}> View Active Postings </button>
                        <button className="btn btn-danger postingsButtons" onClick={this.handleRemovedPosts} disabled={this.state.removedPostings}> View Removed Postings </button>
                    </div>

                    {
                        this.state.activePostings == true && editCareersActive.length > 0 ?
                            editCareersActive
                        :

                        this.state.removedPostings == true && editCareersRemoved.length > 0 ?
                            editCareersRemoved
                        :

                        <p> No postings found </p>
                    }
                </div>
            </div>
        )
    }
}

export default EditCareer;