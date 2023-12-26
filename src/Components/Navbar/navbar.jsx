import React from 'react';
import './navbar.css';
//import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    //Nav-bar Section

    <nav className='nav-bar'>

        <div className='Logo'>Protfolio</div> 

        <div className='nav'> 
          <a href="/">Home</a>
          <a href="/About">About</a>
          <a href="/Project">Project</a>
          <a href="/Contact">Contact</a>
        </div>

        <div className="btn">
          <button id='btn1'>Contact</button>
        </div>

    </nav>

  )
}

export default Navbar;