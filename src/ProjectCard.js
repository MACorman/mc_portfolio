import React from 'react'
import YouTube from 'react-youtube'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class ProjectCard extends React.Component {

    render() {
        return (
            <Slide>
                {this.props.url ? <a href={this.props.url} target="_blank">{this.props.name}</a> : <h3>{this.props.name}</h3>}
                <p>{this.props.description}</p>
                <a href={this.props.frontend} target="_blank">frontend</a>
                <br/>
                <a href={this.props.backend} target="_blank">backend</a>
                {this.props.demo && <YouTube videoId={this.props.demo} opts={{height: '250', width: '450'}}/>}
            </Slide>
        )
    }
}

export default ProjectCard