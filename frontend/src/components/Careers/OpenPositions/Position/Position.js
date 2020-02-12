import React, {Component} from 'react';
import '../../../Careers/OpenPositions/Position/Position.css';

class Position extends Component{
    render(){
        return(
            <div className = "card border-secondary container-fluid">
                <div className="card-body">
                    <a href={this.props.link} rel="noopener noreferrer" target="_blank"> <h5> {this.props.title} </h5> </a>
                    <p className="card-text text-center"> <strong> Date Posted: </strong> {this.props.postedDate} </p>
                    <p className="card-text text-center"> <strong> City: </strong> {this.props.city} </p>
                    <p className="card-text text-center"> <strong> Company: </strong> {this.props.company} </p>
                </div>
            </div>
        );
    }
}

export default Position;
