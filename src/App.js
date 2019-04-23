import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import CareerHeader from './CareerComponents/CareerHeader';
import HeroBanner from './CareerComponents/HeroBanner';
import BodySection from './CareerComponents/BodySection';
import JobCard from './CareerComponents/JobCard';
import JobCardCollection from './CareerComponents/JobCardCollection';



class App extends Component {
  render() {
    return (
      <div className="App">
        <CareerHeader />
        <HeroBanner 
            herotitle="Field Of Work"
            heroText ="We’re a pay-TV company, but really, we’re so much more than that. 
            Whatever you’re looking for, DISH has a place for you. We’re invested in finding opportunities to
            grow and define entertainment technology, and we could use energetic, intelligent, 
            and ambitious individuals to help us.
            In-Home Services"
            
            />
        <BodySection 
        title="Investing In You"
        paratext="DISH encourages personal growth and development with all the tools necessary to advance careers. 
        Training programs like our Lead, Grow, and Climb classes help employees realize new talents and opportunities while learning management tactics, leadership competencies, and company culture. Supporting professional and inter-departmental mobility helps employees find the perfect career 
        path within the organization while developing a more holistic knowledge of the DISH business."
        />
       <JobCardCollection />

       
      </div>


    );
  }
}

export default App;
