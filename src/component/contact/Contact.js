import React from 'react';
import CurrentPage from '../../component/CurrentPage';
import Hero from '../../component/Hero';
import Map from './Map';
import ContactForm from './ContactForm';
import hero from '../../assets/contact/desktop/image-hero.jpg';
import heroTablet from '../../assets/contact/tablet/image-hero.jpg';
import heroMobile from '../../assets/contact/mobile/image-hero.jpg';
import '../../styles/contact/Contact.css';

const Contact = () => {
  const images = {
    hero,
    heroTablet,
    heroMobile,
  };

  const description =
    'We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!';

  return (
    <section className="Contact">
      <CurrentPage pageName="Contact" />
      <Hero
        images={images}
        title="Contact"
        subtitle="Tell us about your project"
        description={description}
      />
      <Map />
      <ContactForm />
    </section>
  );
};

export default Contact;
