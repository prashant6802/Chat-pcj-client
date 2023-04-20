import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { SiCodeforces, SiLeetcode } from 'react-icons/si';

const Design = () => {
  return (
    <>
    <div className='allicon'>
    <div className="icondesign">
      <div className="icona">Built with React.Js, Node.Js and Socket.io</div>
      <div className="icona">No chat-data stored after the end of the session</div>
      <div className="icona">Chat privately without sharing any personal data</div>
      <div className="icona">Track room members with an automatically <br/> updated user list for every join and leave event</div>
    </div>
    
    <p className="developertext"> - - - Developed by Prashant Choudhary - - - </p>
    <div className="icon-container">
      <div className='icont'>
              <a href="https://github.com/prashant6802" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/prashant-choudhary-007989206/" target="_blank" rel="noopener noreferrer" >
                <FaLinkedin className="icon" />
              </a>
              <a href="https://www.instagram.com/prashantcj68/" target="_blank" rel="noopener noreferrer" >
                <FaInstagram className="icon" />
              </a>
      </div>
      <div className='icont'>
              <a href="https://codeforces.com/profile/prashant68" target="_blank" rel="noopener noreferrer" >
                <SiCodeforces className="icon" />
              </a>
              <a href="https://leetcode.com/prashant68/" target="_blank" rel="noopener noreferrer" >
                <SiLeetcode className="icon" />
              </a>
              <a href="mailto:jakharprashant6802@gmail.com" >
                <FaEnvelope className="icon" />
              </a>
      </div>
    </div>
    </div>
    </>
  )
}

export default Design
