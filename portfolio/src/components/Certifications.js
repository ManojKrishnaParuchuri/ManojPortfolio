import React from 'react';
import { Link } from 'react-router-dom';
import './Certification.css';
export default function Certifications() {
  return (
    <>
    <body>
    <h1 className="mypr">My Certifications</h1>
    <div className="fl">
    <div className="awscontainer">
        <h2 className="aws">AWS CLOUD PRACTITIONER</h2>
             <h3 className="mat">What is a AWS cloud practitioner?
                AWS Cloud Practitioner Job Description: Guide, Sample ...
                The role of an AWS cloud practitioner is to help organizations understand the benefits of the AWS cloud and migrate to, or operate in, the AWS cloud.
                 They have general technical proficiency in the AWS platform and work as part of an organization's IT team, supporting infrastructure and applications.</h3>
        </div>
    <div className="awscontainer">
        <h2 className='aws'>RED HAT ENTERPRISE APPLICATION DEVELEOPER</h2>

             <h3 className='mat'>A Red Hat® Certified Enterprise Application Developer possesses the skills, knowledge, and abilities required to to undertake real-world Java development tasks. 
                The credential is earned after successfully passing the Red Hat Certified Enterprise Application Developer exam (EX183). 
                The exam is designed for experienced JSE developers.</h3>
    </div>
</div>
<br></br>
<Link to="https://www.credly.com/users/manoj-paruchuri.d1b88656/badges" className="link">To view the Certification Badges Click me</Link>

</body>
    </>
  )
}
