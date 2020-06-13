import React, { Component } from 'react';
import { Link} from "react-router-dom";
// import Slide from '../Slide'

class Header extends Component {
  render() {
    return (
     <nav class="uk-navbar-container" uk-navbar="boundary-align: true; align: center;">
    <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/About_us">About Us</Link>   
            </li>
            <li>
               <Link to="/Services">Service</Link> 
            </li>
             <li>
                <Link to="/portfolio">Portfolio</Link>   
            </li>
             <li>
                <Link to="/team">Team</Link>  
            </li>
             <li>
                <Link to="/careers">Careers</Link>
            </li>
             <li>
                <Link to="/contact_us">Contact Us</Link> 
            </li>
        </ul>
    </div>

</nav>
    );
  }
}

export default Header;