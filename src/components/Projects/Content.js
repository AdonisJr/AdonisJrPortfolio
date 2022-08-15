import React, {useState, useEffect} from 'react';
import Aos from 'aos';
import project1 from '../../images/miniproject1.PNG';
import project2 from '../../images/miniproject2.PNG';
import capstone from '../../images/capstone.PNG';
import hackathon from '../../images/hackathon.png';
export default function Content() {

    const [isToggle, SetIsToggle] = useState(0);

    useEffect(()=>{
        Aos.init({duration: 2000});
      },[]);
    
  return (
    <div className='content-container'>
        {/* first project */}
        <div data-aos='fade-left' className="d-flex row1" onMouseOver={()=>SetIsToggle(1)} onMouseOut={()=>SetIsToggle(0)}>
            <div className="info-left" style={{opacity: isToggle === 1 ? '0.97' : '0'}}>
                <h3 className='text-dark'>Mini Project 1</h3>.
                <h4 className='text-dark'>Title: Traveler's Info</h4>
                <p>Info: <b>Traveler's info - the main purpose of 
                    this project is to give information to the Users/Travellers about the tourist destination, gerographically focused in Caraga / Region XIII.</b></p>
                <p>Tech Stack: <span className='span_tech'>HTML</span><span className='span_tech'>CSS</span><span className='span_tech'>Bootstrap</span></p>
                <p><a href="https://adonisjr.github.io/" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
                        <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                        <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
                    </svg>    
                    https://adonisjr.github.io/
                </a></p>
            </div>
            <div className="content">
                <img src={project1} alt="Project 1" className='img img-thumbnail' />
            </div>
        </div>

{/* 2nd project */}
        <div data-aos='fade-right' className="d-flex row1" onMouseOver={()=>SetIsToggle(2)} onMouseOut={()=>SetIsToggle(0)}>
            <div className="info-left" style={{opacity: isToggle === 2 ? '0.97' : '0'}}>
                <h3 className='text-dark'>Mini Project 2 | Group Project</h3>.
                <h4 className='text-dark'>Title: KodeKo</h4>
                <p>Info: <b>KodeKo - is a HeadHunting Site which primary aim is to connect developers to future employer.</b></p>
                
                <p>Tech Stack: <span className='span_tech'>HTML</span>
                <span className='span_tech'>CSS</span><span className='span_tech'>Bootstrap</span>
                <span className='span_tech'>React JS</span><span className='span_tech'>Local Storage</span>
                <span className='span_tech'>SASS</span>
                </p>
                
                <p><a href="https://resilient-crepe-519cdd.netlify.app/" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
                        <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                        <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
                    </svg>    
                    KodeKo
                </a></p>
            </div>
            <div className="content">
                <img src={project2} alt="Project 2" className='img img-thumbnail' />
            </div>
        </div>

{/* third project */}
        <div data-aos='fade-left' className="d-flex row1" onMouseOver={()=>SetIsToggle(3)} onMouseOut={()=>SetIsToggle(0)}>
            <div className="info-left" style={{opacity: isToggle === 3 ? '0.97' : '0'}}>
                <h3 className='text-dark'>Capstone | Group Project</h3>.
                <h4 className='text-dark'>Title: Besh</h4>
                <p>Info: <b>Besh - is a micro-blog website where users can post status, updates, send direct message and view other users' profiles.</b></p>
                <p>Tech Stack: <span className='span_tech'>HTML</span><span className='span_tech'>CSS</span><span className='span_tech'>Bootstrap</span>
                <span className='span_tech'>SASS</span> <span className='span_tech'>React JS</span><span className='span_tech'>Node JS</span>
                <span className='span_tech'>My SQL</span></p>
                <p><a href="https://besh-flexi.netlify.app/" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
                        <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                        <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
                    </svg>    
                    https://besh-flexi.netlify.app/
                </a></p>
            </div>
            <div className="content">
                <img src={capstone} alt="Capstone" className='img img-thumbnail' />
            </div>
        </div>
{/* fourth project */}
        <div data-aos='fade-right' className="d-flex row1" onMouseOver={()=>SetIsToggle(4)} onMouseOut={()=>SetIsToggle(0)}>
            <div className="info-left" style={{opacity: isToggle === 4 ? '0.97' : '0'}}>
                <h3 className='text-dark'>Elevate | 48-hour Hackathon Challenge</h3>.
                <h4 className='text-dark'>Title: Build Me Up</h4>
                <p>Info: <b>Build Me Up - is a e-commerce website for Computers.</b></p>
                <p>Tech Stack: <span className='span_tech'>HTML</span><span className='span_tech'>CSS</span><span className='span_tech'>Tailwind CSS</span>
                <span className='span_tech'>Axios</span><span className='span_tech'>React JS</span><span className='span_tech'>Concati APIs</span></p>
                <p><a href="https://github.com/AdonisJr/HackathonBuildMeUp.github.io" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
                        <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                        <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
                    </svg>    
                    Github Repository
                </a></p>
            </div>
            <div className="content">
                <img src={hackathon} alt="Hackathon" className='img img-thumbnail' />
            </div>
        </div>
    </div>
        
        
  )
}
