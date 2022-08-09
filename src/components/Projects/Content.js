import React, {useState, useEffect} from 'react';
import Aos from 'aos';
import project1 from '../../images/miniproject1.PNG';
import project2 from '../../images/miniproject2.PNG';

export default function Content() {

    const [isToggle, SetIsToggle] = useState(false);

    useEffect(()=>{
        Aos.init({duration: 2000});
      },[]);
    
  return (
    <div>
        <div className="d-flex row1" onMouseOver={()=>SetIsToggle(true)} onMouseOut={()=>SetIsToggle(false)}>
            <div className="info-left" style={{opacity: isToggle ? '0.97' : '0'}}>
                <h1 className='text-light'>Tech Stach:</h1>
            </div>
            <div className="content">
                <img src={project1} alt="Project 1" className='img img-fluid' />
            </div>
            <div className="side">
                <h2>KodeGo</h2>
                <h3>Mini Project 1</h3>
            </div>
        </div>
    </div>
  )
}
