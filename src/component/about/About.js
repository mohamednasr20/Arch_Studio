import React from 'react';
import Hero from '../../component/Hero';
import CurrentPage from '../../component/CurrentPage';
import Heritage from './Heritage';
import hero from '../../assets/about/desktop/image-hero.jpg';
import heroTablet from '../../assets/about/tablet/image-hero.jpg';
import heroMobile from '../../assets/about/mobile/image-hero.jpg';
import Leaders from './Leaders';

const About = () => {
  const images = {
    hero,
    heroTablet,
    heroMobile,
  };

  const description =
    'Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.';

  return (
    <section className="About">
      <CurrentPage pageName="about us" />
      <Hero
        images={images}
        title="About"
        subtitle="Your team of professionals"
        description={description}
      />
      <Heritage />
      <Leaders />
    </section>
  );
};

export default About;
