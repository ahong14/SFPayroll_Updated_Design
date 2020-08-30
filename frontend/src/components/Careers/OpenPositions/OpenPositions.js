import React, {Component} from 'react';
import '../../Careers/OpenPositions/OpenPositions.css';
import Position from '../../Careers/OpenPositions/Position/Position';
import axios from 'axios';

class OpenPositions extends Component{
    constructor(props){
        super(props);
        this.state = {
            openings: []
        };
    }

    componentDidMount(){
        const apiURL = '/api/positions/getPostings';
        axios.get(apiURL)
            .then(res=> {
                let activePositions = res.data.filter(position => {
                    return position.deleted === false;
                });

                this.setState({
                    openings: activePositions
                })
            })
            .catch(err => {
                alert(err.repsonse.data.message);
            })
    }

    render(){
        const postings = this.state.openings.map(result =>{
            return <Position key = {result._id} link = {result.link} title = {result.title} city = {result.city} company = {result.company} postedDate = {result.date}/>
        })

        return(
            <div className="learning_resources underline" id="open_positions">
                <h3> Open Positions </h3>
                {postings}
            </div> 
        );
    }
}

export default OpenPositions;
