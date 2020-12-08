import React from 'react';
import ShowHeader from './ShowHeader'
const ShowPage = () => {
    return (
        <div>
          <ShowHeader/>
          <div className="show-photos">
            <div id="show-pic1">
               <img src="https://i.imgur.com/OA7BRCB.jpg"/>
            </div>
            <div id="show-pic2">
               <img src="https://i.imgur.com/pAT1mbV.jpg"/>
            </div>
            <div id="show-pic3">
               <img src="https://i.imgur.com/K7zUaeb.jpg"/>
            </div>
            <div id="show-pic4">
               <img src="https://i.imgur.com/woCmidR.jpg"/>
            </div>
          </div>
        </div>
    );
};

export default ShowPage;