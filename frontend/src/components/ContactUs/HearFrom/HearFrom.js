import React, {Component} from 'react';
import '../../ContactUs/HearFrom/HearFrom.css';
import SubmitButton from '../../SubmitButton/SubmitButton';
import axios from 'axios';
import validator from 'validator';

class HearFrom extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        }
    }

    //send contact info to email
    sendContact = () => {
        const apiURL = '/api/contact/contactUs';
        
        if(this.state.name.trim() === '' || this.state.email.trim() === '' || this.state.message.trim() === ''){
            alert("One or more fields empty");
        }

        else if(validator.isEmail(this.state.email) === false){
            alert("Invalid email inserted")
        }

        else{
            axios.post(apiURL, {
                params:{
                    name: this.state.name,
                    email: this.state.email,
                    message: this.state.message
                }
            }).then(resp => {
                alert(resp.data);
            })
        }
    }

    render(){
        return(
            <div className = "form-group" id = "hear_from_form">
                <div id = "hearHeader">
                  <blockquote id = "headerHeader" className = "text-center font-weight-bold">
                    We would love to hear from you! Fill out the form below or send an email to sfbac.apa@gmail.com! 
                  </blockquote>
                </div>
                <p id = "hear_content">We want to know how we can serve you better. Feel free to drop us a note, ask a question about our Chapter, or join us a sponsor. We will get back to you right away.</p>
                <label htmlFor="usr" className="font-weight-bold"> Name:  </label>
                <input type="text" className="form-control" id="name" onChange={(event) => {this.setState({name: event.target.value})}}/>

                 <label htmlFor="usr" className="font-weight-bold"> Email: </label>
                <input type="email" className="form-control" id="email" onChange={(event) => {this.setState({email: event.target.value})}}/> 

                <label htmlFor="usr" className="font-weight-bold">Message:</label>
                <textarea className="form-control" rows="5" id="message" onChange={(event) => {this.setState({message: event.target.value})}}></textarea>
                <SubmitButton click={this.sendContact}/>
            </div>
        );
    }
}

export default HearFrom;
