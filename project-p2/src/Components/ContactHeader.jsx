import React from 'react';
import Nav from './Nav'

const ContactHeader = () => {
    return (
        <div>
            <header id="contact-header" className="header-template">
            <h1 id="contact-page-title" className="homepage-h1">Photology</h1>
              <div id="contact-us">
            <h1 className="homepage-h1">Contact us</h1>
             </div>   
             <Nav/>        
            </header>
        </div>
    );
};

export default ContactHeader;