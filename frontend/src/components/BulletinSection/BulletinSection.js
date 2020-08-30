import React, { Component, Fragment } from 'react';
import './BulletinSection.css';
import validator from 'validator';
import axios from 'axios';
import moment from 'moment-timezone';
import { connect } from 'react-redux';

class BulletinSection extends Component{
    constructor(props){
        super(props);
        this.state = {
            bulletinMonth: '',
            bulletinLink: '',
            bulletinValues: {},
            linkReady: false,
            bulletinText: ''
        }
    }

    //handle input changes for bulletin
    handleBulletinUpdate = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //handle bulletin available
    handleBulletinLink = () => {
        this.setState({
            linkReady: !this.state.linkReady
        })
    }

    //submit bulletin edit changes
    submitBulletinEdit = () => {
        //error handling 
        //empty fields
        if(this.state.bulletinMonth === ''){
            alert("Month field is empty");
            return;
        }

        //if bulletin link set to ready, check for valid inputs
        else if(this.state.linkReady === true){
            //empty field
            if(this.state.bulletinLink === ''){
                alert("Link field empty");
                return;
            }

            //invalid url
            else if(validator.isURL(this.state.bulletinLink) === false){
                alert("Please insert proper URL");
                return;
            }

            //check for http://
            else if(this.state.bulletinLink.includes("http://") === false){
                alert("Please insert http:// or https:// at beginning of URL");
                return;
            }
        }

        //create last edited with name and date
        let lastEditDate = new Date();
        lastEditDate = moment(lastEditDate).tz('America/Los_Angeles').format('YYYY-MM-DD hh:mm:ss');

        let lastEdited = this.props.firstName + " " + this.props.lastName + " " + lastEditDate;

        //create new bulletin object
        let newBulletinUpdates = {
            month: this.state.bulletinMonth,
            link: this.state.bulletinLink,
            lastEdited: lastEdited,
            id: this.state.bulletinValues._id,
            linkReady: this.state.linkReady
        }

        //make request to update record
        axios.put('/api/bulletin', {
            params: {
                newBulletinUpdates: newBulletinUpdates
            }
        })
        .then(res => {
            alert(res.data.message);
            this.getBulletin();
        })
        .catch(err => {
            alert(err.response.data.message);
        })
    }

    //function to get latest bulletin record from database
    getBulletin = () => {
        axios.get('/api/bulletin')
            .then(res => {
                if(res.data.values.length === 1){
                    let currentBulletin = res.data.values[0];
                    this.setState({
                        bulletinValues: {...currentBulletin}
                    }, () => {
                        //{this.state.bulletinValues['month'] != undefined ? this.state.bulletinValues['month'] + " Bulletin" : "Month"}
                        if(this.state.bulletinValues['month'] !== undefined && this.state.bulletinValues['linkReady'] === true){
                            this.setState({
                                bulletinText: this.state.bulletinValues['month'] + " Bulletin"
                            })
                        }

                        //{this.state.bulletinValues['month'] != undefined ? this.state.bulletinValues['month'] + " Bulletin" : "Month"}
                        else if(this.state.bulletinValues['month'] !== undefined && this.state.bulletinValues['linkReady'] === false){
                            this.setState({
                                bulletinText: this.state.bulletinValues['month'] + " Bulletin Coming Soon"
                            })
                        }
                    })
                }
            })
            .catch(err => {
                alert(err.response.data.message);
            })
    }

    componentDidMount(){
        this.getBulletin();
    }

    render(){
        return(
            <div className="card bannerContainer">
                <div id="bannerContent">
                    <h1> {this.state.bulletinText}</h1>
                    <a href={this.state.bulletinValues['link'] !== undefined ? this.state.bulletinValues['link'] : "http://www.sfpayroll.org"} rel="noopener noreferrer" target="_blank"> 
                        <button disabled={!this.state.bulletinValues['linkReady']}className="btn btn-primary">
                            View Bulletin 
                        </button>
                    </a>
                    {this.props.login === true ?
                        <div id="editBulletinContainer">
                            <button className="btn btn-secondary" data-toggle="modal" data-target="#modalBulletin"> Edit Bulletin Information </button>
                            <span> (Last Edited: {this.state.bulletinValues['lastEdited'] || ''})</span>
                        </div>

                        :
                        
                        <Fragment/>
                    }
                </div>

                <div className="modal fade" id="modalBulletin">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title"> Edit Bulletin Information </h4>
                                <button className="form-control close" type="button" data-dismiss="modal" onClick={this.handleCloseDelete}>&times;</button>
                            </div>

                            <div className="modal-body">
                                <form>
                                    <label> Set Bulletin Month </label>
                                    <input className="form-control" name="bulletinMonth" type="text" value={this.state.bulletinMonth} onChange={this.handleBulletinUpdate} placeholder="Insert Month Name"/>
                                    
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" onChange={this.handleBulletinLink}/>
                                        <label> Toggle To Enter Bulletin URL </label>
                                    </div>

                                    <label> Input Bulletin Link </label>
                                    <input disabled={!this.state.linkReady} className="form-control" name="bulletinLink" type="text" value={this.state.bulletinLink} onChange={this.handleBulletinUpdate} placeholder="Insert URL (http://...)"/>
                                </form>

                                <button className="btn btn-success" id="submitBulletinEdit" onClick={this.submitBulletinEdit}> Submit </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        login: state.authReducer.login,
        firstName: state.authReducer.firstName,
        lastName: state.authReducer.lastName
    }
}

export default connect(mapStateToProps, null)(BulletinSection);