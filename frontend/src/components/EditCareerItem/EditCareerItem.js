import React, { Component } from 'react';
import axios from 'axios';

class EditCareerItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: '',
            city: '',
            company: '',
            title: '',
            deleteClicked: false,
            newPdf: false
        }
    }

    //update state of fields updated
    editCareer = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //set flag for new pdf
    enableNewPdf = () => {
        this.setState({
            newPdf: !this.state.newPdf
        })
    }

    //function to handle delete clicked
    handleDeleteClicked = () => {
        this.setState({
            deleteClicked: true
        });
    }

    handleCloseDelete = () => {
        this.setState({
            deleteClicked: false
        })
    }
    
    //update career values
    updateCareer = () => {
        let newCareerContent = {};
        let careerUpdateFound = false;
        //return everything except deleteClicked from state object
        Object.keys(this.state).forEach(key => {
            if(key != "deleteClicked" || key != "newPdf"){
                //update found, use updated state value
                if(this.state[key] != ''){
                    careerUpdateFound = true;
                    newCareerContent[key] = this.state[key];
                }

                //no update found, use prop value
                else{
                    newCareerContent[key] = this.props[key]
                }
            }
        });

        if(this.state.newPdf == false){
            newCareerContent["link"] = this.props.link
        }

        //make api request to update record
        axios.put('/api/positions/edit', {
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
        })
    }

    //delete career from database
    deleteCareer = () => {
        axios.delete('/api/positions/delete', {
            params: {
                id: this.props.objectid
            }
        })
        .then(res => {
            alert(res.data.message);
        })
        .catch(err => {
            alert(err.response.data.message);
        })
    }

    render(){
        return(
            <div className="card border-info">
                <div className="card-body">
                    <h5 className="card-title text-center"> {this.props.title} </h5>
                    <p className="card-text text-center"> <strong> Date Posted: </strong> {this.props.date} </p>
                    <p className="card-text text-center"> <strong> City: </strong> {this.props.city} </p>
                    <p className="card-text text-center"> <strong> Company: </strong> {this.props.company} </p>
                </div>

                <div className="editButtonsContainer">
                    <button type="button" className="form-control btn btn-secondary editButton" data-toggle="modal" data-target={"#" + this.props.id}> Edit </button>
                    <button type="button" className="form-control btn btn-danger editButton" data-toggle="modal" data-target={"#" + this.props.id} onClick={this.handleDeleteClicked}> Delete </button> 
                </div>

                <div className="modal fade" id={this.props.id}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title"> Edit Career </h4>
                                <button className="form-control" type="button" className="close" data-dismiss="modal" onClick={this.handleCloseDelete}>&times;</button>
                            </div>

                            <div className="modal-body">
                                {this.state.deleteClicked != true ? 
                                        <form>
                                            <label> Title </label>
                                            <input name="title" onChange={this.editCareer} className="form-control" placeholder={this.props.title} type="text"/>

                                            <label> Date </label>
                                            <input name="date" onChange={this.editCareer} className="form-control" placeholder={this.props.date} type="text"/>

                                            <label> Company </label>
                                            <input name="company" onChange={this.editCareer} className="form-control" placeholder={this.props.company} type="text"/>

                                            <label> City </label>
                                            <input name="city" onChange={this.editCareer} className="form-control" placeholder={this.props.city} type="text"/>

                                            <label> Click checkbox to create new PDF Link </label>
                                            <input name="link" onChange={this.enableNewPdf} className="form-control" placeholder="Yes" type="checkbox"/> 
                                        </form>
                                    :
                                        <p> Confirm Deleting {this.props.title} ? </p>
                                }
                            </div>

                            <div className="modal-footer">
                                <button className="form-control" type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleCloseDelete}>Close</button>
                                {this.state.deleteClicked == false ? 
                                    <button className="form-control" type="button" className="btn btn-success" onClick={this.updateCareer}> Submit Edit </button>
                                    :
                                    <button className="form-control" type="button" className="btn btn-danger" onClick={this.deleteCareer}> Delete Event </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditCareerItem;