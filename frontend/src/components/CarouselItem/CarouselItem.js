import React, { Component } from 'react';
import './CarouselItem.css';

export default class CarouselItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                className={
                    this.props.index === 0
                        ? 'carousel-item active'
                        : 'carousel-item'
                }
            >
                <img
                    className="pdfImageSlide"
                    src={this.props.image}
                    alt={this.props.image}
                />
            </div>
        );
    }
}
