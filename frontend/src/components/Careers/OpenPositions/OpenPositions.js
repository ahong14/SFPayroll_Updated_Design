import React, { useState, useEffect } from 'react';
import '../../Careers/OpenPositions/OpenPositions.css';
import Position from '../../Careers/OpenPositions/Position/Position';
import axios from 'axios';

const OpenPositions = () => {
    const [openings, setOpenings] = useState([]);

    useEffect(() => {
        const apiURL = '/api/positions/getPostings';
        axios
            .get(apiURL)
            .then(res => {
                let activePositions = res.data.filter(position => {
                    return position.deleted === false;
                });

                setOpenings(activePositions);
            })
            .catch(err => {
                alert(err.repsonse.data.message);
            });
    }, []);
    const postings = openings.map(result => {
        return (
            <Position
                key={result._id}
                link={result.link}
                title={result.title}
                city={result.city}
                company={result.company}
                postedDate={result.date}
            />
        );
    });

    return (
        <div className="learning_resources underline" id="open_positions">
            <h3> Open Positions </h3>
            {postings}
        </div>
    );
};

export default OpenPositions;
