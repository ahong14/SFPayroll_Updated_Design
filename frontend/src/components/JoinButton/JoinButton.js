import React, {Component} from 'react';
import '../JoinButton/JoinButton.css';

class JoinButton extends Component{
    render(){
        return(
            <div id="join">
                <h3 className="text-center"> Not a member yet?  </h3>

                <a className="text-center" id="join_link" href="https://www.cvent.com/events/ContactPortal/Login.aspx?cwstub=e9b2ed48-33d2-4d6c-bd0e-f6459cd30d89" rel="noopener noreferrer" target="_blank"> 
                    <button type="button" className="btn btn-outlined btn-primary" id="join_button">  Join/Login </button>  
                </a>

                <h3 className="text-center"> Click to join! </h3>
            </div>   
        );
    }
}

export default JoinButton;
