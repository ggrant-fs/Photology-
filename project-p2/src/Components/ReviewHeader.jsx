import React from 'react';
import Nav from "./Nav"

const ReviewHeader = () => {
    return (
        <div>
            <header id="review-header" className="header-template">
            <h1 id="review-page-title" className="homepage-h1">Photology</h1>
            <h1 id="review-header-title" className="homepage-h1">Reviews</h1>
             <Nav/>      
            </header>
        </div>
    );
};

export default ReviewHeader;