import React, { Children } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faMedium, faGithub } from "@fortawesome/free-brands-svg-icons"
// import Mailto from 'react-mailto'


function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{props.children}</a>
    );
  }


function Contact() {
    
    return (
        <>
            <h2>Contact</h2>
            <Mailto email="madelinecorman@gmail.com" subject="" body="">
                Email me!
            </Mailto>
            <br/>
            <a href="https://www.linkedin.com/in/madeline-corman/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size={'2x'}/></a>
            <br/>
            <a href="https://twitter.com/MadelineCorman" target="_blank"><FontAwesomeIcon icon={faTwitter} size={'2x'}/></a>
            <br/>
            <a href="https://medium.com/@madelinecorman" target="_blank"><FontAwesomeIcon icon={faMedium} size={'2x'}/></a>
            <br/>
            <a href="https://github.com/MACorman" target="_blank"><FontAwesomeIcon icon={faGithub} size={'2x'}/></a>

        </>
    )
}

export default Contact