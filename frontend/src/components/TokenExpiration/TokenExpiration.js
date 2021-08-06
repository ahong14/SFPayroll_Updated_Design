import React from 'react';
import './TokenExpiration.css';
const TokenExpiration = () => {
    return (
        <div id="tokenExpirationContainer">
            <jumbotron>
                <h2> Token URL expired. New email sent with new token. </h2>
            </jumbotron>
        </div>
    );
};

export default TokenExpiration;
