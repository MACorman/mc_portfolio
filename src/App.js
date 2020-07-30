import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameAndDesc from './NameAndDesc';
import About from './About'
import ProjectsContainer from './ProjectsContainer';
import Contact from './Contact'
import BlogPostContainer from './BlogPostsContainer';

function App() {
  return (
    <div>
      <NameAndDesc />
      <About />
      <ProjectsContainer />
      <BlogPostContainer />
      <Contact />
    </div>
  );
}

export default App;


// public file containing images
// image of me for home
// screen shot of each project
// technologies - display the technology logo