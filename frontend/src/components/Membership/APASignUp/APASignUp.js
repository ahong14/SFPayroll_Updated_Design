import React from 'react';
import './APASignUp.css';
import Grid from '@material-ui/core/Grid';
import apa from '../../../photos/american_payroll_association_logo.png';

const APASignUp = () => {
    return (
        <Grid container direction="column" justify="center">
            <div className="card border-dark corporateCard">
                <div className="card-body">
                    <img className="section_image" src={apa} alt="APA Logo" />
                    <p>
                        Apply for a APA membership here:
                        <a
                            href="https://ebiz.americanpayroll.org/ebusiness/MemberProfile.aspx?RTNMBRAPP=/ebusiness/membershipapplication.aspx?utm_source=APAWeb&utm_medium=MembershipTab&utm_campaign=JoinRenew"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Application
                        </a>
                    </p>
                </div>
            </div>
        </Grid>
    );
};

export default APASignUp;
