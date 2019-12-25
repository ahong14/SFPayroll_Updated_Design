import React, {Component} from 'react';
import '../../Careers/JobForm/JobForm.css';
import axios from 'axios';
import SubmitButton from '../../SubmitButton/SubmitButton';

class JobForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            emailInput: "",
            positionInput: "",
            cityInput: "",
            stateInput: "",
            descriptionInput:"",
            selectInput: "Payroll Position- Full Time"
        }
    }

    //function to send email with inputted params
    sendJob = () => {
        if(this.state.emailInput.trim() === '' || this.state.positionInput.trim() === '' || this.state.cityInput.trim() === '' || this.state.stateInput.trim() === '' || this.state.descriptionInput.trim() === ''){
            alert("Please do not leave job posting inputs blank");
        }

        else{    
            const apiURL = '/api/job/sendJob';
            axios.post(apiURL,{
                params: {
                    email: this.state.emailInput,
                    title: this.state.positionInput,
                    city: this.state.cityInput,
                    state: this.state.stateInput,
                    position: this.state.positionInput,
                    description: this.state.descriptionInput,
                    payrollPosition: this.state.selectInput
                }
            })
            .then(resp => {
                alert(resp.data);
            })
            .catch(err => {
                alert(err);
            })
        }
    }

    render(){
        return(
            <div className="form-group" id = "job_form_input">
                <form>
                    <label htmlFor="email" className = "font-weight-bold">Email:</label>
                    <input type="text" className="form-control" id="email" onChange={(event) => {this.setState({emailInput: event.target.value})}}/>
                    <label htmlFor="title" className = "font-weight-bold">Title of Position:</label>
                    <input type="text" className="form-control" id="position" onChange={(event) => {this.setState({positionInput: event.target.value})}}/>
                    <label htmlFor="city" className = "font-weight-bold">City: </label>
                    <input type="text" className="form-control" id="city" onChange={(event) => {this.setState({cityInput: event.target.value})}}/>
                    <label htmlFor="state" className = "font-weight-bold">State: </label>
                    <input type="text" className="form-control" id="state" onChange={(event) => {this.setState({stateInput: event.target.value})}}/>
                    <label htmlFor="position" className = "font-weight-bold">Select Position:</label>
                    <select className="form-control" id="payroll_position" onChange={(event) => {this.setState({selectInput: event.target.value})}}>
                        <option>Payroll Position- Full Time </option>
                        <option>Payroll Position- Part Time</option>
                        <option>Payroll Position- Temp</option>
                        <option>Non Payroll Position - Full Time </option>
                        <option>Non Payroll Position - Part Time </option>
                        <option>Non Payroll Position - Temp </option>
                    </select>
                    <label htmlFor="description" className = "font-weight-bold">Job Description:</label>
                    <textarea className="form-control" rows="5" id="job_description" onChange={(event) => {this.setState({descriptionInput: event.target.value})}}></textarea>
                </form>
                <SubmitButton click={this.sendJob}/>
            </div>
        );
    }
}

export default JobForm;
