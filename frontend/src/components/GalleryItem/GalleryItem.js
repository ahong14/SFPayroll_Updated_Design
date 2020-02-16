import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="col-lg-4">
        <div className="thumbnail">
          <a href={this.props.imageSrc} rel="noopener noreferrer" target="_blank">
            <img className="galleryImage img-fluid" src={this.props.imageSrc} alt="Gallery Image"/>
            <div className="caption">
              <p className="text-center"> <strong> {this.props.caption} </strong> </p>
            </div>
            
          </a>
        </div>
      </div>
    )
  }
}

export default GalleryItem;
