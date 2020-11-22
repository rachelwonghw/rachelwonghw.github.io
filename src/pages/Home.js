import React from 'react';
import '../styles/Home.scss';
import ReactTypingEffect from 'react-typing-effect';

const Home = () => {
  return (
    <div className='home-background'>
      <div className='mr-auto home-margin'>
        <div className='home-font home-title'>
          Rachel Wong
        </div>
        <div className='home-font home-position float-right'>
          <ReactTypingEffect
            text={["Web Developer", "Amateur Photographer", "Tech Enthusiast"]}
            speed={200}
            eraseSpeed={200}
            eraseDelay={2000}
          />
        </div>
      </div>
      
    </div>
  );
}

export default Home;