import React from 'react';
import '../styles/About.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import headshot from '../assets/cropped_headshot.jpg';

const About = () => {
  return (
    <Container fluid id='about' className='about-background'>
      <Row>
        <Col xs={12} md={6}><Image src={headshot} className='about-headshot' /></Col>
        <Col xs={12} md={4}>
          <div className='about-intro'>
            <h1>About Me</h1>
            <p>I'm a 3B Computer Engineering student at the University of Waterloo currently working as a analytics engineer at Scotiabank. </p>
            <p>When I'm not in school, you will most likely catch me exploring with my camera, cooking new dishes or listening to music.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;