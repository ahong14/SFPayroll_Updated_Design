import React, {Component} from 'react';
import '../../Careers/JobForm/JobForm.css';
import axios from 'axios';
import SubmitButton from '../../SubmitButton/SubmitButton';

class JobForm extends Component{

    sendJob = () =>{

        if(this.emailInput.value.trim() === '' || this.positionInput.value.trim() === '' || this.cityInput.value.trim() === '' || this.stateInput.value.trim() === '' || this.descriptionInput.value.trim() === ''){
            alert("Please do not leave job posting inputs blank");
        }

        else{    
            const apiURL = 'http://sfpayroll.herokuapp.com/job/sendJob';
            // const apiURL = 'http://localhost:4000/job/sendJob';
            console.log("testing ref", this.positionInput.value);
            axios.post(apiURL,{
                params: {
                    email: this.emailInput.value,
                    title: this.positionInput.value,
                    city: this.cityInput.value,
                    state: this.stateInput.value,
                    position: this.selectInput.value,
                    description: this.descriptionInput.value
                }
            }).then(resp => {
                alert(resp.data);
                //reset input values
                this.emailInput.value = ''; 
                this.positionInput.value = ''; 
                this.cityInput.value = ''; 
                this.stateInput.value = ''; 
                this.descriptionInput.value = '';
            })
        }
    }

    render(){
        return(
            <div className="form-group" id = "job_form_input">
                <form>
                    <label htmlFor="email" className = "font-weight-bold">Email:</label>
                    <input type="text" className="form-control" id="email" ref = {(input) => {this.emailInput = input}}/>
                    <label htmlFor="title" className = "font-weight-bold">Title of Position:</label>
                    <input type="text" className="form-control" id="position" ref = {(input) => {this.positionInput = input}}/>
                    <label htmlFor="city" className = "font-weight-bold">City: </label>
                    <input type="text" className="form-control" id="city" ref = {(input) => {this.cityInput = input}}/>
                    <label htmlFor="state" className = "font-weight-bold">State: </label>
                    <input type="text" className="form-control" id="state" ref = {(input) => {this.stateInput = input}}/>
                    <label htmlFor="position" className = "font-weight-bold">Select Position:</label>
                    <select className="form-control" id="payroll_position" ref = {(select) => {this.selectInput = select}}>
                        <option>Payroll Position- Full Time </option>
                        <option>Payroll Position- Part Time</option>
                        <option>Payroll Position- Temp</option>
                        <option>Non Payroll Position - Full Time </option>
                        <option>Non Payroll Position - Part Time </option>
                        <option>Non Payroll Position - Temp </option>
                    </select>
                    <label htmlFor="description" className = "font-weight-bold">Job Description:</label>
                    <textarea className="form-control" rows="5" id="job_description" ref = {(textarea) => {this.descriptionInput = textarea}}></textarea>
                </form>
                <SubmitButton click = {this.sendJob}/>
            </div>
        );
    }
}

export default JobForm;
