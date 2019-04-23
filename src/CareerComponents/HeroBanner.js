
import React, { Component } from 'react';
import './HeroBanner.css';

import App from '../App';
class HeroBanner extends Component {
    render() {
        return (
            <div className="main-nav">
                <div className="mainNavContent">
                    <h1 className="heroText">{this.props.herotitle}</h1>
                    <p>{this.props.heroText}</p>
                </div>
            </div>
        )


    }
}

export default HeroBanner;

