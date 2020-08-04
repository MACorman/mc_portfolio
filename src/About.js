import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faReact, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons"
import { faGem } from '@fortawesome/free-solid-svg-icons'

function About() {
    // put resume in about section - a button that'll open it up in a new tab
    return (
        <>
            <p>I am a Brooklyn-based full-stack software engineer with an eye for detail and desire to know more. While working primarily in Ruby and JavaScript frameworks, I have delighted in creating applications from ideation and planning through to completion. I am passionate about solving problems - whether they be bugs in the code or the impetus for my next big project. </p>
            <h3>Technologies</h3>
            <i class="devicon-ruby-plain"></i>
            <p>Ruby</p>
            <i class="devicon-rails-plain"></i>
            <p>Rails</p>
            <FontAwesomeIcon icon={faJs} size={'2x'} />
            <p>JavaScript</p>
            <FontAwesomeIcon icon={faReact} size={'2x'} />
            <p>React</p>
            <FontAwesomeIcon icon={faHtml5} size={'2x'} />
            <p>HTML</p>
            <FontAwesomeIcon icon={faCss3} size={'2x'} />
            <p>CSS</p>
            {/* <FontAwesomeIcon icon={faRails} size={'2x'} /> */}
            
        </>
    )
}

export default About