import React, { Component } from 'react';
class BodySection extends Component {
    render(props) {
        return (
            <div className="sectionTiles">
                <div className="tilesContent">
                <h2>{this.props.title}</h2>
                <p>{this.props.paratext}</p>
                <button>Learn More</button>
            </div>
            </div>
            
        )
    }
}
export default BodySection;