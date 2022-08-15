import React from 'react';

export default function Header({handleNavToggle, navClose}) {


  return (
    <div className='header' style={{display: navClose ? 'none': 'block'}}>
        
        <div className='nav'>
            
            {<NavHeader handleNavToggle={handleNavToggle}/>}
            
            {<NavBody handleNavToggle={handleNavToggle} />}

            {<NavFooter />}
          
        </div>
        <div className="background" onClick={handleNavToggle}>

        </div>
    </div>
  )
}

function NavHeader({handleNavToggle}){
    return(
        <div className="nav-header">
            
            <div className="nav-logo">
                <div className="close-button"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="Close">
                    <a href='#home' onClick={handleNavToggle}>
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="30" 
                        height="30" 
                        fill ="currentColor" 
                        className="bi bi-x-circle" 
                        viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </a>
                    
                </div>
                {/* <h1>LOGO</h1> */}
            </div>
           
        </div>
    )
}

function NavBody({handleNavToggle}){
    return(
        <div className="nav-body">
            <a onClick={handleNavToggle} href="#home">
                HOME
            </a>
            <a onClick={handleNavToggle} href="#technology">
                TECHNOLOGIES
            </a>
            <a onClick={handleNavToggle} href="#projects">
                PROJECTS
            </a>
            <a onClick={handleNavToggle} href="#about">
                ABOUT
            </a>
            <a onClick={handleNavToggle} href="#contact-me">
                CONTACT
            </a>
        </div>
    )
}

function NavFooter(){
    return(
        <div className="nav-header">
         
        </div>
    )
}