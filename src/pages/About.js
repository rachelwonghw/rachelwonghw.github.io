import React from 'react';
import '../styles/About.scss';
import { Card, CardImg } from 'reactstrap';
import headshot from '../assets/cropped_headshot.jpg';

const About = () => {
  return (
    <div id='about' className='about-background'>
      <Card className='about-headshot'>
        <CardImg src={headshot} />
      </Card>
      <div className='about-intro'>
        <h1>About Me</h1>
        <p>I'm a 3B Computer Engineering student at the University of Waterloo currently working as a analytics engineer at Scotiabank. </p>
        <p>When I'm not in school, you will most likely catch me walking around with my camera, cooking new dishes or listening to music.</p>
      </div>
    </div>
  );
}

export default About;