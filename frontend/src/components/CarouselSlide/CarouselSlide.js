import React, { Component } from 'react';

export default class CarouselSlide extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li
                data-target={this.props.target}
                data-slide-to={this.props.slideIndex}
            ></li>
        );
    }
}
