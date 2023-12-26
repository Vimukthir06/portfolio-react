import React from 'react';
import './home.css';
import git from '../../Assets/git.png';
import link from '../../Assets/link.png';
import html from '../../Assets/html.png';
import css from '../../Assets/css.png';
import css2 from '../../Assets/css2.png';
import js from '../../Assets/js.png';
import rs from '../../Assets/rs.png';

function Home() {
  return (
    <section id='home'>
        <div className="content">
            <h3 className='head'>Front-End React Developer</h3>
            <p>Hi, i'm Wimukthi Sampath. A passionate Front-End React <br />Developer.</p>
        </div>
        <div className="img">
        <img src={git} alt="git" />  
        <img src={link} alt="link" />
        </div>
        <div className="techSkill">
          <h5>Tech Skill</h5><br />
              <img src={html} alt="html" />
              <img src={css} alt="css" />
              <img src={css2} alt="cssT" />
              <img src={js} alt="javascript" />
              <img src={rs} alt="reactjs" />
        </div>
        <div className="btn">
            <button id='btn2'>Hire me</button>
        </div>

    </section>
  )
}

export default Home