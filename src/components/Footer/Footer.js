import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  return (
    
    <div className='footer'>

          <div data-aos="fade-up" className="box">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos harum consequatur consectetur veritatis. Quibusdam at blanditiis iusto voluptates eveniet obcaecati quia dolorem cupiditate repellendus necessitatibus doloribus, sint optio modi ea?
          </div>
          <div data-aos="fade-down" className="box">
            
          </div>
          <div data-aos="fade-left" className="box">
            
          </div>
          <div data-aos="fade-right" className="box">
            
          </div>

        
      </div>
        

  )
}
