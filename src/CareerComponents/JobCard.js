import React, { Component } from 'react';
import JobCardCollection from './JobCardCollection';

    class JobCard extends Component {
    render(props) {
        return (
           
            <div className="cardContent">
                <h3>{this.props.title}</h3>
                <img src="http://careers.dish.com/images/fields-of-work/fow--ihs.jpg"/>
                <div className="card-txt">
                    <p>{this.props.discription}</p>
                    <button className="jobButton">See Jobs</button>
                </div>
            </div>
           
        );
    }
}

export default JobCard;