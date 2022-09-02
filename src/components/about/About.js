import React from 'react';
import profile from '../../images/profile.png'

export default function About() {
  return (
    <div id='about' className='about'>
        <div className="list-header">
            <h1>About</h1>
        </div>
        <div className="sec-2">

          <div className="picture">

              <img src={profile} alt="" />

              <div className="contact">

                <a href="https://www.facebook.com/profile.php?id=100078105906500" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/adonis-jr-suico-0036891b2/" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a href="mailto:adonisjr.suico@gmail.com" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/SuicoAdonis" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
          
              </div>
          </div>
          <div className="content text-dark">
            <h1><span>Name :</span> Adonis Jr. Suico</h1>
            <h3><span>Age :</span> 26 Years Old</h3>
            <h5><span>Intro :</span> If you are not willing to learn, No one can help you. If you are determined to learn, No one can stop you. -Zig Ziglar<br>
            </br> I am a <span>Full Stack Web Developer</span>  whos aim is to be the best version of myself everyday. </h5>
            <h5><span>Call me? :</span> +63 912-1793-542</h5>
          </div>
        </div>
        <div className="work-experience">
          <div className="work-card card my-2">
            <div className="card-header">
              <h4>Work Experience</h4>
            </div>
            <div className="card-body">
              <table className='table'>
                <tbody>
                  
                  <tr>
                    <td><b>2019 - 2020 (Data Capture Operator at Filmetrics Corporation)</b></td>
                    <td>Responsible in getting customer information for UMID I.D.</td>
                  </tr>
                    <tr>
                      <td><b>2018-2019 (Dental X-Ray Technician at Fulgarinas Dental Clinic)</b></td>
                      <td>Responsible in capturing dental X-Ray Image.</td>
                    </tr>
                  <tr>
                    <td><b>2015-2017 (PartTime Pageant Tabulator, Junior Programmer)</b></td>
                    <td>Responsible in maintaining and adding features in the System and Responsible for fixing bugs. Tech Stack (Visual Basic 2006, M.S Access Database)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="work-card card my-2">
            <div className="card-header">
              <h4>Certificates</h4>
            </div>
            <div className="card-body">
              <table className='table'>
                <tbody>
                  <tr>
                    <td><b>July 2022 - Fullstack Web Development Bootcamp (KodeGo)</b></td>
                    <td>Full time hands on training in both front-end and back-end technologies, and building real world application.</td>
                  </tr>
                  <tr>
                    <td><b>Computer Hardware Services (CHS) NCII</b></td>
                    <td>Computer Hardware Servicing NCII is a TESDA course in the Philippines that will train you in diagnosing and troubleshooting software and hardware problems in personal computer system.</td>
                  </tr>
                    <tr>
                      <td><b>Visual Graphics Design (VGD) NCIII</b></td>
                      <td>The VISUAL GRAPHIC DESIGN NC III Qualification consists of competencies that a person must achieve to design and develop visual graphic designs for (i) logo; (ii) print media; (iii) user experience; (iv) user interface; (v) product packaging; and (iv) booth and product/window display.</td>
                    </tr>
                  <tr>
                    <td><b>Bookkeeping NCIII</b></td>
                    <td>The BOOKKEEPING NC III Qualification consists of competencies that a person must achieve to enable him/her to journalize transactions, post transactions, prepare trial balance, prepare financial reports and review internal control system.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
    </div>
  )
}
