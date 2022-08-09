import React from 'react'
import profile from '../../images/profile.jpg';
import {Typewriter} from 'react-simple-typewriter'
import Technology from '../Technology/Technology'
import Projects from '../Projects/Projects';
import light from '../../images/light.png';
import dark from '../../images/dark.png';

export default function Body({handleNavToggle, navClose, technologies, isToggle, handleIsToggle}) {
    
  return (
    <div className={isToggle ? 'bg-light body': 'bg-dark body'}>
        <div className="open-navbar" style={{display: !navClose ? 'none':'block'}}
        data-bs-toggle="tooltip" data-bs-placement="bottom" title="Open Navbar">
            
            <a onClick={handleNavToggle}>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="25" 
                height="25" 
                fill="currentColor" 
                className="bi bi-list" 
                viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </a>
            
        </div>
            
        <div className='toggle' onClick={handleIsToggle}>
          <img src={isToggle ? dark: light} alt="light and dark toggle" />
        </div>
        
        < BodyContent />
       
        < Technology technologies={technologies} />
   
        < Projects />
    </div>


  )
}
function BodyContent(){
  return(
    <div id='home' className="home">

    </div>
  )
}