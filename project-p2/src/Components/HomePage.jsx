import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'

const HomePage = () => {
    return (
    <div className="home-page">
        
      <div className="into-div">
        <h1 className="homepage-h1"><Link to="/about" style={{color:"white"}}>Photology</Link></h1>
      </div>
    </div>
       
    );
};

export default HomePage;