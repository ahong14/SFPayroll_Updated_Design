import React, {Component} from 'react';
import '../SubmitButton/SubmitButton.css';

class SubmitButton extends Component{
    render(){
        return(
            <div id = "submit_container">
                <button type="button" className ="btn btn-outlined btn-primary" id = "submit_button" onClick = {this.props.click}>  Submit </button>
            </div>
        );
    }
}

export default SubmitButton;
