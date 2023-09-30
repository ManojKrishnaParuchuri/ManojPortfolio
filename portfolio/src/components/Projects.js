import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'
export default function Projects() {
  return (
       <>
      <body >
    <h1 className="mypr">My Project Details</h1>
    <div className="fl">
    <div className="procontainer">
        <h2 className="mar">Marks-Managament-System </h2>
        <h3 className="mat"> Marks management system is a valuable tool for educators and administrators who want to improve the efficiency and accuracy of their grading processes.
             With a marks management system, they can easily input, store and track student grades, assessments, and performance data in one central location. </h3>

             <h3 className="mat">MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.
                I loved working on this project using MERN and the Knowledge about Tailwind CSS helped me to manage project in beautiful way.</h3>
        </div>
    <div className="procontainer">
        <h2 className="mar">Portfolio</h2>
        <h3 className="mat">Portfolio is about exposing my Skills and Experience.It consists of information about me and the services I have been part of and Contributed.The details to Contact me and give feedback on my Website.</h3>

             <h3 className="mat">This Portfolio consists of my Skills and Work Experience and my Knowledge in various technologies. It consists of my Education background
            and my academic projects that are developed using different Full-Stacks and the Source code is available in Github and it is also attached in the portfolio.</h3>
    </div>
</div>
<br></br>
<Link to="https://github.com/ManojKrishnaParuchuri/Mern_Project.git" className="link">To Go to Gituhub for Source Code Click me</Link>

</body>
      </>
    
  )
}
