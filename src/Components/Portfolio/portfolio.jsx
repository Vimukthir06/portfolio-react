import React from 'react';
import './portfolio.css';
import bg1 from '../../Assets/bg1.PNG';
import bg2 from '../../Assets/bg2.PNG';
import bg3 from '../../Assets/bg3.PNG';
import bg4 from '../../Assets/bg4.PNG';
import bg5 from '../../Assets/bg5.PNG';
import bg6 from '../../Assets/bg6.PNG'

function Portfolio() {
  return (
    <div className="portfolio">
        <h2>My Project</h2>
        <p>Check my Project. I work as a freelance developer for companies all over the world to build web applications, marketing websites, data visualizations, and browser extensions. I use React, Next.js, Node.js and related technologies to implement seamless and performant products</p>
        <div className="folio">
            <img src={bg1} alt="" className='folios'/>
            <img src={bg2} alt="" className='folios'/>
            <img src={bg3} alt="" className='folios'/>
            <img src={bg4} alt="" className='folios'/>
            <img src={bg5} alt="" className='folios'/>
            <img src={bg6} alt="" className='folios'/>
        </div>
    </div>
  )
}

export default Portfolio