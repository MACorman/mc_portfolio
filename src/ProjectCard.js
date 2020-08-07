import React from 'react'
import YouTube from 'react-youtube'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class ProjectCard extends React.Component {

    render() {
        return (
            <Slide>
                <h3>{this.props.name}</h3>
                {this.props.demo ? <YouTube videoId={this.props.demo} opts={{height: '250', width: '450'}}/> : <img src={this.props.image} style={{height: '250px', width: 'auto'}}/>}
                <p>{this.props.description}</p>
                <a href={this.props.frontend} target="_blank">Frontend</a>
                <br/>
                <a href={this.props.backend} target="_blank">Backend</a>
                <br/>
                {this.props.url && <a href={this.props.url} target="_blank">Live</a>}
            </Slide>
        )
    }
}

export default ProjectCard