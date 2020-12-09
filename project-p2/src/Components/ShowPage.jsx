import React from 'react';
import ShowHeader from './ShowHeader'
const ShowPage = () => {
    return (
        <div>
          <ShowHeader/>
          <div className="show-photos">
            <div id="show-pic1">
               <img alt="" src="https://i.imgur.com/OA7BRCB.jpg"/>
            </div>
            <div id="showPageBreak"></div>
            <div id="show-pic2">
               <img alt=""src="https://i.imgur.com/pAT1mbV.jpg"/>
            </div>
            <div id="showPageBreak"></div>
            <div id="show-pic3">
               <img alt="" src="https://i.imgur.com/K7zUaeb.jpg"/>
            </div>
            <div id="showPageBreak"></div>
            <div id="show-pic4">
               <img alt="" src="https://i.imgur.com/woCmidR.jpg"/>
            </div>
          </div>
           {/* the following code below are the colums of photos */}
           <div className="show-photos2">
            <div id="show-pic5"></div>
            <div id="mid-break"></div>
            <div id="show-pic6"></div>
            </div>
           {/* the following code below is for the middle column */}
        </div>
    );
};

export default ShowPage;