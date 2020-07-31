import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faMedium, faGithub } from "@fortawesome/free-brands-svg-icons"


function Contact() {
    return (
        <>
            <h2>Contact</h2>
            <p>madelinecorman@gmail.com</p>
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