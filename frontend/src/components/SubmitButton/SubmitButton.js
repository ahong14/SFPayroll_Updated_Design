import React from 'react';
import '../SubmitButton/SubmitButton.css';

const SubmitButton = props => {
    return (
        <div id="submit_container">
            <button
                type="button"
                className="btn btn-outlined btn-primary"
                id="submit_button"
                onClick={props.click}
            >
                Submit
            </button>
        </div>
    );
};

export default SubmitButton;
