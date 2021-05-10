import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import {Card} from 'react-bootstrap';
import '../index.css'
import '../App.css'

const About = props => {
  return (

    <div className="container">  
      <Navbar/>   

      <h3 className="about-h1">About Us</h3>
      
      <Card className="card" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Text className="card-text">
            Weather forecasting web page designed with the customer in mind.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;