import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>About Us</h1>
        <p>{/* About text here... */}</p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
