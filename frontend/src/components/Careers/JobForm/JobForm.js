import React, {Component} from 'react';
import '../../Careers/JobForm/JobForm.css';
import axios from 'axios';
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
            formInputTitles: ["Email", "Company", "City", "State", "Position", "Selected", "Description", "PDF"],
            uploadedFile: {},
            disableForms: false,
            showLoading: false
        }
    }

    //function to handle file uploaded
    handleFileUpload = (event) => {
        if(event.target.files){
            this.setState({
                uploadedFile: event.target.files[0],
            });
        }
    }

    //function to send email with inputted params
    sendJob = () => {
        if(this.state.emailInput.trim() === '' || this.state.positionInput.trim() === '' || this.state.cityInput.trim() === '' || this.state.stateInput.trim() === '' || this.state.descriptionInput.trim() === ''){
            alert("One or more fields empty");
        }

        else if(validator.isEmail(this.state.emailInput) === false){
            alert("Invalid email inserted");
        }

        else{
            this.setState({
                showLoading: true
            }, () => {
                const apiURL = '/api/job/sendJob';
                const fileData = new FormData();
                fileData.append('jobPosting', this.state.uploadedFile);
    
                //convert axios params to send form data and accept json
                const requestParams = {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Accept': 'application/json'
                    },
    
                    //data for body of requests, post request
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
                }
    
                axios.post(apiURL, fileData, requestParams)
                    .then(res => {
                        alert(res.data);
                        this.setState({
                            showLoading: false
                        })
                    })
                    .catch(err => {
                        alert(err);
                    })
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
                        <div className="job_description_container">
                            <span className="font-weight-bold"> {title} </span>: {this.state.descriptionInput}
                        </div>
                    )
                
                case "PDF":
                    return(
                        <div className="job_description_container">
                            <span className="font-weight-bold"> {title} </span>: {this.state.uploadedFile.name ? this.state.uploadedFile.name : "No PDF uploaded"} 
                        </div>
                    )

                default:
                    return;
            }
        })

        return(
            <div className="job_container">
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
                        <label htmlFor="description" className="font-weight-bold">Job Description:</label>
                        <textarea disabled={this.state.disableForms} className="form-control" rows="5" id="job_description" onChange={(event) => {this.setState({descriptionInput: event.target.value})}}></textarea>
                        <label htmlFor="file" className="font-weight-bold"> Upload PDF (Optional): </label>
                        <div>
                            <input type="file" name='jobPosting' onChange={this.handleFileUpload}/>
                        </div>
                    </form>

                    <button id="submit-job-button" type="button" className="btn btn-primary btn-md" data-toggle="modal" data-target="#myModal">
                        Submit Job Posting
                    </button>
                </div>

                <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="job-posting-header"> Job Posting </h4>
                            </div>

                            <div className="modal-body">
                                { formConfirmation }
                            </div>

                            <div className="modal-footer">
                                <h6 className="job-posting-footer-header"> Job Posting Information Correct? </h6>
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                <button onClick={this.sendJob} type="button" class="btn btn-primary"> {this.state.showLoading ? "Posting..." : "Submit Posting" } </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default JobForm;
