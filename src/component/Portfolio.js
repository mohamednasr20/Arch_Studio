import React from 'react';
import ImageCard from './ImageCard';
import CurrentPage from './CurrentPage';
import images from '../images';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const imagesGrid = images.map((img) => {
    return (
      <Col className="my-3" key={img.title}>
        <ImageCard
          desktopSrc={img.desktop}
          mobileSrc={img.mobile}
          tabletSrc={img.tablet}
          title={img.title}
          text={img.date}
        />
      </Col>
    );
  });
  return (
    <section className="Portfolio ">
      <CurrentPage pageName="portfolio" />
      <Row className="m-auto  py-4 " lg={3}>
        {imagesGrid}
      </Row>
    </section>
  );
};

export default Portfolio;
