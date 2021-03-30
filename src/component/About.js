import React from 'react';
import Hero from '../component/Hero';
import CurrentPage from '../component/CurrentPage';

const About = () => {
  return (
    <section className="About">
      <CurrentPage pageName="about us" />
      <Hero />
    </section>
  );
};

export default About;
