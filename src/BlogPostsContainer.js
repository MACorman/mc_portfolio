import React from 'react'
import BlogPostCard from './BlogPostCard'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'


class BlogPostContainer extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@madelinecorman')
        .then((res) => res.json())
        .then(posts => this.setState({posts: posts.items}))
    }

    render() {
        return (
            <>
                <h2>Blog</h2>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={10}
                    isIntrinsicHeight={true}
                >
                    <Slider>
                        {this.state.posts.length && this.state.posts.map(post => <BlogPostCard {...post} />)}
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

export default BlogPostContainer