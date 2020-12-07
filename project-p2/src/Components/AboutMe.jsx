import React from 'react';
import AboutHeader from './AboutHeader'

const AboutMe = () => {
    return (
        <div >
            <AboutHeader/>
            <div className="about-container">
                <div className="content">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="break"></div>
                <div id="pic-div">
                   <img id="pic-test" src="https://i.imgur.com/5i93lwO.jpg"/>
                </div>
                <div className="break"></div>
                
            </div>
        </div>
    );
};

export default AboutMe;