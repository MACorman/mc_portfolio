import React from 'react'
import projects from './ProjectData'
import ProjectCard from './ProjectCard'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

class ProjectsContainer extends React.Component {
    
    render() {
        return (
            <>
                <h2>Projects</h2>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={4}
                    isIntrinsicHeight={true}
                    infinite={true}
                >
                    <Slider>
                        {projects.map(p => <ProjectCard {...p} />)}
                    </Slider>
                    <div style={{marginLeft: 'auto', marginRight: 'auto', width: 'fit-content'}}>
                        <ButtonBack style={{border: 'none', color: 'black', backgroundColor: 'white', marginRight: '15px'}}><FontAwesomeIcon icon={faAngleLeft} color={'grey'} size={'2x'}/></ButtonBack>
                        <ButtonNext style={{border: 'none', backgroundColor: 'white', marginLeft: '15px'}}><FontAwesomeIcon icon={faAngleRight} color={'grey'} size={'2x'}/></ButtonNext>
                    </div>
                </CarouselProvider>
            </>
        )
    }
}

export default ProjectsContainer