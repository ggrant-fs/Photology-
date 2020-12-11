import React from 'react';
import Nav from './Nav'

const ShowHeader = () => {
    return (
        <div>
          <header id="show-header" className="header-template">
          <h1 id="show-page-title" className="homepage-h1">Photology</h1>
          <div id="show-nav">
          <Nav/>
          </div>
          </header>
        </div>
    );
};

export default ShowHeader;