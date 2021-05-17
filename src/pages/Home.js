import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactTypingEffect from 'react-typing-effect';
import '../styles/Home.scss';

const Home = () => {
  return (
    <Container fluid className='home-background'>
      <Col md={5} className='mr-auto'>
        <Row xs={10} md={5} className='home-font home-title'>
          Rachel Wong
        </Row>
        <Row xs={10} md={5} className='home-font home-position'>
          <ReactTypingEffect
            text={["Web Developer", "Amateur Photographer", "Tech Enthusiast"]}
            speed={200}
            eraseSpeed={200}
            eraseDelay={2000}
            className='home-typing'
          />
        </Row>
      </Col>
    </Container>
  );
}

export default Home;