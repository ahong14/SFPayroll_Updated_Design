import React, {Component} from 'react';
import '../../Careers/JobForm/JobForm.css';
import axios from 'axios';
import SubmitButton from '../../SubmitButton/SubmitButton';
import validator from 'validator';

class JobForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            emailInput: "",
            companyInput: "",
            positionInput: "",
            cityInput: "",
            stateInput: "",
            descriptionInput:"",
            selectInput: "Payroll Position- Full Time",
            formInputTitles: ["Email", "Company", "City", "State", "Position", "Selected", "Description"],
            uploadedFile: {},
            disableForms: false
        }
    }

    handleFileUpload = (event) => {
        if(event.target.files){
            this.setState({
                uploadedFile: event.target.files[0],
                disableForms: true
            });
        }
    }

    //function to send email with inputted params
    sendJob = () => {
        if(this.state.emailInput.trim() === '' || this.state.positionInput.trim() === '' || this.state.cityInput.trim() === '' || this.state.stateInput.trim() === '' || this.state.descriptionInput.trim() === ''){
            alert("Please do not leave job posting inputs blank");
        }

        else if(validator.isEmail(this.state.emailInput) === false){
            alert("Invalid email inserted");
        }

        else{    
            const apiURL = '/api/job/sendJob';
            axios.post(apiURL,{
                params: {
                    email: this.state.emailInput,
                    company: this.state.companyInput,
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
        const formConfirmation = this.state.formInputTitles.map(title => {
            switch(title){
                case "Email":
                    return(
                        <div>
                            <span className="font-weight-bold"> {title} </span>: {this.state.emailInput}
                        </div>
                    )

                case "Company":
                    return(
                        <div>
                            <span className="font-weight-bold"> {title} </span>: {this.state.companyInput}
                        </div>
                    )

                case "Position":
                    return(
                        <div>
                            <span className="font-weight-bold"> {title} </span>: {this.state.positionInput}
                        </div>
                    )

                case "City":
                    return(
                        <div>
                            <span className="font-weight-bold"> {title} </span>: {this.state.cityInput}
                        </div>
                    )

                case "State":
                    return(
                        <div>
                            <span className="font-weight-bold"> {title} </span>: {this.state.stateInput}
                        </div>
                    )

                case "Selected":
                    return(
                        <div>
                            <span className="font-weight-bold"> {title} </span>: {this.state.selectInput}
                        </div>
                    )

                case "Description":
                    return(
                        <div>
                            <span className="font-weight-bold"> {title} </span>: {this.state.descriptionInput}
                        </div>
                    )

                default:
                    return;
            }
        })

        return(
            <div className="job_container">
                <div id="job_upload">
                    <h4>  <span className="font-weight-bold"> Option 1 </span> : Upload PDF/Text file regarding job information </h4>
                    <input type="file" onChange={this.handleFileUpload}/>
                    <div id="file_submit_button">
                        <button type="button" className="btn btn-outlined btn-primary" >  Submit </button>
                    </div>
                </div>

                <div id="job_form_option2_container">
                    <h4> <span className="font-weight-bold"> Option 2 </span>  : Fill out following form </h4>
                </div>

                <div className="form-group" id = "job_form_input">
                    <form>
                        <label htmlFor="email" className = "font-weight-bold"> Email: </label>
                        <input disabled={this.state.disableForms} type="email" className="form-control" id="email" onChange={(event) => {this.setState({emailInput: event.target.value})}}/>
                        
                        <label htmlFor="company" className = "font-weight-bold"> Company: </label>
                        <input disabled={this.state.disableForms} type="text" className="form-control" id="company" onChange={(event) => {this.setState({companyInput: event.target.value})}}/>
                        
                        <label htmlFor="title" className = "font-weight-bold">Title of Position:</label>
                        <input disabled={this.state.disableForms} type="text" className="form-control" id="position" onChange={(event) => {this.setState({positionInput: event.target.value})}}/>
                        
                        <label htmlFor="city" className = "font-weight-bold"> City: </label>
                        <input disabled={this.state.disableForms} type="text" className="form-control" id="city" onChange={(event) => {this.setState({cityInput: event.target.value})}}/>
                        
                        <label htmlFor="state" className = "font-weight-bold"> State: </label>
                        <input disabled={this.state.disableForms} type="text" className="form-control" id="state" onChange={(event) => {this.setState({stateInput: event.target.value})}}/>
                        
                        <label htmlFor="position" className = "font-weight-bold"> Select Position:</label>
                        <select className="form-control" id="payroll_position" onChange={(event) => {this.setState({selectInput: event.target.value})}}>
                            <option>Payroll Position- Full Time </option>
                            <option>Payroll Position- Part Time</option>
                            <option>Payroll Position- Temp</option>
                            <option>Non Payroll Position - Full Time </ option>
                            <option>Non Payroll Position - Part Time </option>
                            <option>Non Payroll Position - Temp </option>
                        </select>
                        <label htmlFor="description" className = "font-weight-bold">Job Description:</label>
                        <textarea disabled={this.state.disableForms} className="form-control" rows="5" id="job_description" onChange={(event) => {this.setState({descriptionInput: event.target.value})}}></textarea>
                    </form>

                    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                        Submit Job Posting
                    </button>
                    {/* <SubmitButton click={this.sendJob}/> */}
                </div>

                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="myModalLabel"> Job Posting </h4>
                            </div>

                            <div class="modal-body">
                                { formConfirmation }
                            </div>

                            <div class="modal-footer">
                                <h6> Job Posting Information Correct? </h6>
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default JobForm;
