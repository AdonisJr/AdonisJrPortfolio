import React, {useRef} from 'react';
import contact from '../../images/contactus.svg';
import swal from 'sweetalert';
import emailjs from 'emailjs-com';



export default function Contact() {
    const form = useRef();

    const handleSubmit = e =>{
        e.preventDefault();

    emailjs.sendForm('service_4sbjqeo', 'template_bcimg3r', form.current, 'OXy9GIKWuIJ5o0Jd0')
      .then((result) => {
        swal("Thank You for reaching out!", "Message sent successfully!", "success",{
            button: "Aww yiss!"
        });
        
      }, (error) => {
        swal("Please try again later", "Message not sent!", "error");
      });
        
        e.target.reset();

    }
  return (
    <div id='contact-me' className='contact-me'>
        <div className="list-header">
            <h1>Contact</h1>
        </div>
        <div className="contact-content">
            
            <form ref={form} onSubmit={handleSubmit} action="" className='card form'>
                <div className="card-header">
                    <h2 className='text-light'>Send me a message</h2>
                </div>
                <div className="card-body d-flex flex-column gap-2">
                    <input className='form-control' type="text" placeholder='Name' name='name' id='name' required/>
                    <input className='form-control' type="email" placeholder='Email' name='email' id='email'required/>
                    <input className='form-control' type="text" placeholder='Subject' name='subject' id='subject'required />
                    <textarea className='form-control' name="message" id="message" cols="20" rows="10" placeholder='Message' required></textarea>
                    <input className='form-control btn btn-primary' type="submit" value='SEND'/>
                </div>
                
            </form>

            <img src={contact} alt="" />

        </div>
        
    </div>
  )
}
