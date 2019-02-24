import React, {Component} from 'react';
import '../../ContactUs/HearFrom/HearFrom.css';
import SubmitButton from '../../SubmitButton/SubmitButton';
import axios from 'axios';

class HearFrom extends Component{

    constructor(props){
        super(props);
    }

    sendContact = () =>{
        const apiURL = '/api/contact/contactUs';
        
        if(this.nameInput.value.trim() === '' || this.emailInput.value.trim() === '' || this.messageInput.value.trim() === ''){
            alert("Fields still empty");
        }

        else{
            axios.post(apiURL, {
                params:{
                    name: this.nameInput.value,
                    email: this.emailInput.value,
                    message: this.messageInput.value
                }
            }).then(resp => {
                alert(resp.data);
                //reset input values
                this.nameInput.value = '';  
                this.emailInput.value = '';
                this.messageInput.value = '';
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
                <label htmlFor="usr" className = "font-weight-bold"> Name:  </label>
                <input type="text" className="form-control" id="name" ref = {(input) => {this.nameInput = input}}/>

                 <label htmlFor="usr" className = "font-weight-bold"> Email: </label>
                <input type="text" className="form-control" id="email" ref = {(input) => {this.emailInput = input}}/> 

                <label htmlFor="usr" className = "font-weight-bold">Message:</label>
                <textarea className="form-control" rows="5" id="message" ref = {(textarea) => {this.messageInput = textarea}}></textarea>
                <SubmitButton click = {this.sendContact}/>
            </div>
        );
    }
}

export default HearFrom;
