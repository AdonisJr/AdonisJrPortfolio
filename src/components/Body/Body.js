import React from 'react'
import profile from '../../images/profile.png';
import Technology from '../Technology/Technology'
import Projects from '../Projects/Projects';
import light from '../../images/light.png';
import dark from '../../images/dark.png';
import About from '../about/About';
import Contact from '../contact/Contact';

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
        
        < BodyContent isToggle={isToggle} />
       
        < Technology technologies={technologies} />
   
        < Projects />
        < About />
        < Contact />
    </div>


  )
}
function BodyContent({isToggle}){
  return(
    <div id='home' className="home">
      <div className="left">
        <div className="img-profile">
            <img src={profile} alt="" />
        </div>
      </div>
      <div className="right">
      
        <h2 className={isToggle ? 'text-dark' : 'text-light'}>Hello! I'm </h2>
        <h1 className={isToggle ? 'text-dark' : 'text-light'}> <span className='name mt-3'>ADONIS JR SUICO</span></h1>
        <h2 className={isToggle ? 'text-dark mt-3' : 'text-light mt-3'}>Full Stack Web Developer</h2>
        <p className={isToggle ? 'text-dark mt-2' : 'text-light mt-2'}>Scroll down</p>
        <svg className={isToggle ? 'text-dark' : 'text-light'} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
        </svg>
        
      </div>
      
      <div className="border-">
          <div className="line">

          </div>
          <div className="circle">

          </div>
          <div className="circle">

          </div>
          <div className="circle">

          </div>
          <div className="line2">

          </div>
        </div>

    </div>
  )
}