import React, {Component} from 'react';
import '../../ContactUs/HearFrom/HearFrom.css';
import SubmitButton from '../../SubmitButton/SubmitButton';
import axios from 'axios';

class HearFrom extends Component{

    constructor(props){
        super(props);
    }

    sendContact = () =>{
        // const apiURL = 'http://sfpayroll.herokuapp.com/contact/contactUs';
        const apiURL = 'http://localhost:4000/contact/contactUs';

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
            })
        }
    }

    render(){
        return(
            <div className = "form-group" id = "hear_from_form">
                <h3 class = "text-center"> We would love to hear from you! </h3>
                <p id = "hear_content">We want to know how we can serve you better. Feel free to drop us a note, ask a question about our Chapter, or join us a sponsor. We will get back to you right away.</p>
                
                <label htmlFor="usr">Name: </label>
                <input type="text" className="form-control" id="name" ref = {(input) => {this.nameInput = input}}/>

                 <label htmlFor="usr">Email: </label>
                <input type="text" className="form-control" id="email" ref = {(input) => {this.emailInput = input}}/> 

                <label htmlFor="usr">Message:</label>
                <textarea className="form-control" rows="5" id="message" ref = {(textarea) => {this.messageInput = textarea}}></textarea>
                <SubmitButton click = {this.sendContact}/>
            </div>
        );
    }
}

export default HearFrom;