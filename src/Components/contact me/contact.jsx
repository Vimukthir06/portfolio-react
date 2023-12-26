import React from 'react';
import './contact.css'

function Contact() {
  return (
    <div className="contactheading">
        <h2>Contact Me</h2>
        <p>Please Fill out the form below to discuss any work opportunities.</p>
        <form className='form'>
            <input type="text" placeholder='Your Name' className='name'/><br />
            <input type="email" placeholder='Your Email' className='email'/><br />
            <input type="text" placeholder='Your Massage' className='msg'/><br />
            <button className='submit'>Submit</button>
            <div className="Social-logo">
                
            </div>
            <div className="footer">
        <h4>Copyright &#168; 2023 Wimukthi Sampath. All right received.</h4>
       </div>
        </form>
    </div>
  )
}

export default Contact