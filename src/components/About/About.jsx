import React from 'react';
import './Abput.css';
import img1 from '../../assets/img-1.jpg';

const About = () => {
  return (
    <div>
      <h1>About Component</h1>
      <img className='img1' src={img1} alt='' />
      {/* <img className='img1' src='/img-2.jpg' alt='' /> */}
    </div>
  );
};

export default About;
