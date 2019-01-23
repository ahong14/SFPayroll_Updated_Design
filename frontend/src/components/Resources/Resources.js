import React, {Component} from 'react';
import '../Resources/Resources.css';
import StudyGroupResources from '../Resources/StudyGroupResources/StudyGroupResources';
import LearningResources from '../Resources/LearningResources/LearningResources';

class Resources extends Component {
    render(){
        return(
            <div className = "container-fluid" id = "resources_container">
                <h2 className = "section_header text-center"> Resources </h2>
                <StudyGroupResources/>
                <LearningResources/>
            </div>
        );
    }
}

export default Resources;