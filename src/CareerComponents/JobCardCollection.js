import React, { Component } from 'react';
import JobCard from './JobCard';
import './JobCardCollection.css';
import cardData from './cardData';





    class JobCardCollection extends Component {

       
    render() {

        const cardComponents = cardData.map(card => {
            return (
                <JobCard title={card.title} discription={card.discription}/>
            )
        })
      
        return (
            <div className="jobCardCollection">
               {cardComponents}
            </div>
        );
    }
}

export default JobCardCollection;