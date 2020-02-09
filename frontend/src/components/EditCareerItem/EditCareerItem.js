import React, { Component } from 'react';

class EditCareerItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: '',
            city: '',
            company: '',
            title: '',
            deleteClicked: false
        }
    }

    editEvent = (event) => {
        this.setState({
            [event.target.name]: event.target.value
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
                    <button type="button" className="form-control btn btn-danger editButton"> Delete </button> 
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
                                            <input name="event" onChange={this.editEvent} className="form-control" placeholder={this.props.title} type="text"/>

                                            <label> Date </label>
                                            <input name="date" onChange={this.editEvent} className="form-control" placeholder={this.props.date} type="text"/>

                                            <label> Company </label>
                                            <input name="company" onChange={this.editEvent} className="form-control" placeholder={this.props.company} type="text"/>

                                            <label> City </label>
                                            <input name="city" onChange={this.editEvent} className="form-control" placeholder={this.props.city} type="text"/>
                                        </form>
                                    :
                                        <p> Confirm Deleting {this.props.title} ? </p>
                                }
                            </div>

                            <div className="modal-footer">
                                <button className="form-control" type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleCloseDelete}>Close</button>
                                {this.state.deleteClicked == false ? 
                                    <button className="form-control" type="button" className="btn btn-success" onClick={this.updateEvent}> Submit Edit </button>
                                    :
                                    <button className="form-control" type="button" className="btn btn-danger" onClick={this.deleteEvent}> Delete Event </button>
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