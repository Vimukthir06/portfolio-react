import React from 'react';
import './about.css'

function About() {
  return (
    <section className='about'>
        <div className="heading">
            <h2>What I do</h2>
            <p>I am a skilled Web Designer with experince in creating visually appealing and user-friendly websites.as well as design software such as adobe photoshop, illustrator and figma.</p>
        </div>
        <div className="box-bar">
          <div className="box">
              <span>UI/UX Design</span>
          </div>
          <div className="box">
          <span>Web Site Design</span>
          </div>
          
        </div>
        <div className="cv">
          Download Resume
        </div>

    </section>
  )
}

export default About