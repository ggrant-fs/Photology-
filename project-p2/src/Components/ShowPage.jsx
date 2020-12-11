import React from 'react';
import ShowHeader from './ShowHeader'
const ShowPage = () => {
    return (
        <div>
          <ShowHeader/>
          <h1 id="title-featured" className="homepage-h1">Featured</h1>
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
           <div className="show-photos3">
              <div id="show-pic7"></div>
              <div id="bottomBreak"></div>
              <div id="show-pic8"></div>
           </div>
        </div>
    );
};

export default ShowPage;