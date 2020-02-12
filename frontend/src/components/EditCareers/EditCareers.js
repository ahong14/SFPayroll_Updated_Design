import React, { Component } from 'react';
import axios from 'axios';
import EditCareerItem from '../EditCareerItem/EditCareerItem';
import './EditCareers.css';

class EditCareer extends Component{
    constructor(props){
        super(props);
        this.state = {
            careers: []
        }
    }

    //get career postings
    componentDidMount(){
        axios.get('/api/positions/getPostings')
            .then(res => {
                this.setState({
                    careers: res.data
                })
            })
            .catch(err => {
                alert(err);
            })
    }

    render(){
        const editCareers = this.state.careers.map(career => {
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
                />
            )
        });


        return(
            <div className="editContainer">
                <div id="editCareersContainer">
                    <div>
                        <h3> Edit Careers </h3>
                    </div>
                    { 
                        editCareers.length > 0 ? 
                        
                        editCareers

                        :

                        <p> No careers found. </p>
                    }
                </div>
            </div>
        )
    }
}

export default EditCareer;