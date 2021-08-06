import React from 'react';
import './Gallery.css';
import { Tabs, Tab } from 'react-bootstrap';
import GalleryGroupJSON from './Gallery.json';
import GalleryGroup from '../GalleryGroup/GalleryGroup';

const Gallery = () => {
    //create tab groups based on categories of photos
    const tabGroups = GalleryGroupJSON.galleryGroups.map(group => {
        return (
            <Tab
                key={group.eventKey}
                eventKey={group.eventKey}
                title={group.groupName}
            >
                <GalleryGroup groupName={group.eventKey} />
            </Tab>
        );
    });

    return (
        <div className="container galleryContainer">
            <h1 className="text-center"> Gallery </h1>
            <Tabs defaultActiveKey="chapterMeetings">{tabGroups}</Tabs>
        </div>
    );
};

export default Gallery;
