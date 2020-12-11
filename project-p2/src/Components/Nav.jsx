import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div>
           <nav>
               <ul>
                <Link to="/" style={{color:"white"}}><li>Home|</li></Link>
                <Link style={{color:"white"}}><li>About |</li></Link>
                <Link style={{color:"white"}}><li>Show |</li></Link>
                <Link style={{color:"white"}}><li>Review |</li></Link>
                <Link style={{color:"white"}}><li>Contact</li></Link>
               </ul>
           </nav> 
        </div>
    );
};

export default Nav;