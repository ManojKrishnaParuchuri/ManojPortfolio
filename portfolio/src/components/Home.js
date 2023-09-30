import React,{useState} from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faLink, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import {  faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import {  Link, NavLink  } from 'react-router-dom';
import axios from 'axios'



export default function Home() {
  const handleDownload = () =>{
    fetch('ManojResume.pdf').then(response =>{
      response.blob().then(blob =>{
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href=fileURL;
        alink.download = 'ManojResume.pdf';
        alink.click();
      })
    })
  };
  const [username,setUsername] = useState();
  const [email,setEmail] = useState();
  const [message,setMessage] = useState();
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:8888/contact',{username , email , message})
    .then((result) => console.log(result))
    .catch(err => console.log(err))
  }
  return (
   
   <>
  
  <div id="home">
    <div className="container">
    
      <nav>
        
       <p className="manoj">Manoj</p>
        <ul>
          <li><a href="#home">Home</a></li> 
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contactme">Contact</a></li>
        </ul>
      </nav>
    </div>

    <div id="header">
    </div>
    <div className="header-text">
    <p className="full">FullStackDeveloper</p>
    <h1>Hi, I am <span>Manoj Paruchuri </span><br></br>from India</h1>
    </div>
  </div>
  


  <div id="about" className="about">
    <h1 align="center" className="abo" >About me</h1>
    <p className="ma">I’m A Web Developer, Programmer And Software Tester. 
      I’m Currently Pursuing My BTech Degree At KL University And Have A CGPA Of 9.6.
       I’m A Fast Learner And Enjoy Working On Challenging Projects That Push Me To Learn New Things.
        I’m Passionate About Creating Clean, Responsive And User-Friendly Websites That Provide An Excellent User Experience. 
        In my free time I use to listen to Music and have fun while watching movies and webseries.</p>
    <div className="tab">
      <a className="tablinks active"  href="#skills">Skills</a>
      <a className="tablinks" href="#education">Eductaion</a>
      <a className="tablinks" href="#experience" >Experience</a>
    </div>
    <div className="tab-contents active-link" id="skills" >
      <ul >
        <li>C,Java,Basics of Python</li><br></br>
        <li>Flask,MERN,Html,Css,Tailwind Css,MongoDb,MySql,PostgreSQl</li><br></br>
        <li>FullStackDeveloper</li><br></br>
        <li>UX/UI Designing</li><br></br>
        <li>Software Testing</li>
      </ul>

    </div>
    <div className="tab-contents" id="education">
      <span>Bachelor of Technology (B.Tech)<br>
      </br>KLUniversity<br></br>Expected Gradution Date: 09/2025<br></br>Current Cgpa : 9.6</span>
      
  </div>
  <div className="tab-contents" id="experience">
    <h2>AWS Cloud Virtual Internship</h2>
    <p>Dec 2022-Feb 2023</p>
    <p>The Internship helped me to Know about the Basic Knowledge of AWS Services and later it helped me to Clear AWS CLOUD PRACTITIONER Certificate.</p>

    <h2 >Intelligent Automation Virtual Internship</h2>
    <p>May 2023- July2023</p>
    <p>This Intern provides general awareness of the organization of the architecture and technology opportunities of the organization based on new and emerging IA technologies.</p>
  </div> 
  </div>

  
  <div id="services">
  <div className="container">
    <h1 className="serhea">Services</h1>
    <div className="services-list">
      <div>
        <i className="fa-solid fa-code"></i>
      <h2 className="serv">FullStack-Developer</h2>
      <p>In Full Stack development I am really fond of making Frontend Development rather on Backend developement.But I have the primary Knowledge of activites of Backend Activites and I have Knwowledge of Connectivity.</p>
      <a href="https://www.figma.com/proto/LKCQz4Kum4T520lkUoXGsN/Untitled?page-id=0%3A1&type=design&node-id=25-440&viewport=454%2C541%2C0.35&t=GIs6Iow5MbPtafip-1&scaling=scale-down&starting-point-node-id=25%3A2&show-proto-sidebar=1">Learn more</a>
    </div>
    <div >
      <i className="fa-solid fa-crop"></i>
      <h2 className="serv">UI/UX Designer</h2>
      <p>I have Knowledge of Designing and make Prototypes by using User Interface tools for visual appealing and  interactive elements of a product ,like FIGMA. To view the prototype of The Figma Design made by our team for Project of PetStore Management System click down.</p>
      <a href="https://www.figma.com/proto/LKCQz4Kum4T520lkUoXGsN/Untitled?page-id=0%3A1&type=design&node-id=25-440&viewport=454%2C541%2C0.35&t=GIs6Iow5MbPtafip-1&scaling=scale-down&starting-point-node-id=25%3A2&show-proto-sidebar=1">Click Me</a>
    </div>
    <div>
      <i className="fa-solid fa-robot"></i>
      <h2 className="serv">Artificial Intelligence</h2>
      <p>As all Know AI making people crazy,I got interest in it and did a basic chatbot on Our College(KLUniversity) created using <u>ChatBase.co</u><br></br>Warning: It may be inactive as it is not used for long.To see if it is active click down.</p>
      <a href="https://www.chatbase.co/chatbot-iframe/scFh3-9T7YZLJFO1ClETS">Click me</a>
    </div>
  </div>
</div>
</div>



<div id="portfolio">
  <h2  className="wo">MyWork</h2>
  <div className="chi">
  
  <div className="container2">
  <h3 className="pro">My<nobr> Projects</nobr></h3><br></br>
    <img src="data:image/jpeg;base64,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" height={220} alt=''/>
    <div className="overlay">
      <div className="cont">
      <FontAwesomeIcon icon={faGithub} size="6x" color='black'/> <br></br><Link to={"/Projects"} className="ne" >Source<nobr> Code</nobr></Link>
      </div>
    </div>
  </div> 
  
  <div className="container3">
  <h3 className="hedc">My Certifications</h3><br></br>
  <img src="data:image/png;base64,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"
    height="220" width="320" className="creim" alt="credly"/>
  <div className="over">
    <div className="conte">
    <FontAwesomeIcon icon={faLink} size="6x" color='black'/> <br></br> <Link to={"/Certifications"} className="cre">My<nobr> Certifications</nobr></Link>
      </div>
  </div>
  </div>
</div>
</div>
<div id="contactme">
  <h2 className="co">Contact Me</h2>
  <div className="conta">
      <div className="cont-left" id="detail">
        <h3 className='hed'>Details</h3><br></br>
        <label ><FontAwesomeIcon icon={faEnvelope} size="2x" color='deeppink'/>
        manojparuchuri21@gmail.com</label><br></br><br></br>
        <a href="mailto:manojparuchuri21@gmail.com" >To Mail Click Here</a><br></br><br></br>
            <label><FontAwesomeIcon icon={faPhone} size="2x" color='deeppink'/>6309418485</label><br></br><br></br>
        
        <label><FontAwesomeIcon icon={faAddressCard} size="2x" color='deeppink'/>BankStreet,Jonnalagadda,Narasaraopet,Guntur.</label><br></br><br></br>
      <div className="socail-icons">
      <NavLink to=""><FontAwesomeIcon icon={faGithub} size="2x" color='deeppink'/></NavLink> <br></br> <br></br>
      <NavLink to="https://www.linkedin.com/in/manoj-paruchuri-78502a226/"><FontAwesomeIcon icon={faLinkedin} size="2x" color='deeppink'/></NavLink> <br></br>
      </div>
     <br></br>
     <br></br> <button className="btn2" onClick={handleDownload}>Download Cv</button>
    </div>
    <div id="form">
    <div className="cont-right">
      <form onSubmit={handleSubmit}>
        <h2 className="fo">Form</h2>
        <label className='atri'>Name:            <input type="text" placeholder="Your Name" id="username" name="username" onChange={(e) => setUsername(e.target.value)} required/></label><br></br><br></br>
       
        <label className='atri'>Email:           <input type="emial" placeholder="Your Email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required/></label>

     <br></br> <label className="fee">Feedback:</label><textarea className="textcl" id="message" name="message" rows="6" placeholder="Your Message" onChange={(e) => setMessage(e.target.value)}></textarea><br></br><br></br>
     
        <button type="submit"  className="btn" >Submit</button>
      </form>
    </div> 
    <div className="copyright">
      <p>Copyright P.Manoj made with <FontAwesomeIcon icon={faHeart} size="1x" color='deeppink'/> </p>
      <p>@2023 India ,Inc. All rights reserved</p>
    </div>
    </div>
  </div>
   </div>
  

    </>
    
  )
}
