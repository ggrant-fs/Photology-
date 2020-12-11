import React from 'react';
import Nav from './Nav'

const AboutHeader = () => {
    return (
        <div>
            <header id="about-header" className="header-template">
            <h1 id="about-page-title" className="homepage-h1">Photology</h1>
            <div id="about-nav">
            <Nav/>
            </div>
            </header>
        </div>
    );
};

export default AboutHeader;