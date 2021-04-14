import React from 'react';
import Button from 'react-bootstrap/Button';
import ImageCard from '../ImageCard';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import delSol from '../../assets/portfolio/desktop/image-del-sol.jpg';
import delSolTablet from '../../assets/portfolio/tablet/image-del-sol.jpg';
import delSoMobile from '../../assets/portfolio/mobile/image-del-sol.jpg';
import img228b from '../../assets/portfolio/desktop/image-228b.jpg';
import img228bTablet from '../../assets/portfolio/tablet/image-228b.jpg';
import img228bMobile from '../../assets/portfolio/mobile/image-228b.jpg';
import prototype from '../../assets/portfolio/desktop/image-prototype.jpg';
import prototypeTablet from '../../assets/portfolio/tablet/image-prototype.jpg';
import prototypeMobile from '../../assets/portfolio/mobile/image-prototype.jpg';
import arrow from '../../assets/icons/icon-arrow.svg';

import '../../styles/home/Featured.css';

const Featured = () => {
  const text = <Link to="/portfolio">View all Projects</Link>;

  const images = [
    {
      desktopSrc: delSol,
      tabletSrc: delSolTablet,
      mobileSrc: delSoMobile,
      title: 'Project Del Sol',
    },
    {
      desktopSrc: img228b,
      tabletSrc: img228bTablet,
      mobileSrc: img228bMobile,
      title: '228B Tower',
    },
    {
      desktopSrc: prototype,
      tabletSrc: prototypeTablet,
      mobileSrc: prototypeMobile,
      title: 'Le Prototype',
    },
  ];

  const imagesDiv = images.map((img) => {
    return (
      <Col key={img.title} className="my-3">
        <ImageCard
          desktopSrc={img.desktopSrc}
          tabletSrc={img.tabletSrc}
          mobileSrc={img.mobileSrc}
          title={img.title}
          text={text}
        />
      </Col>
    );
  });
  return (
    <div className="Featured m-auto">
      <div className="Featured-header d-flex justify-content-between">
        <h3>Featured</h3>
        <Link to="/portfolio" className="d-none d-md-block">
          <Button>
            See All <img className="ml-2" src={arrow} alt="arrow" />
          </Button>{' '}
        </Link>
      </div>
      <Row lg={3} className="my-4 imgDiv">
        {imagesDiv}
      </Row>
      <Link to="/portfolio" className="d-md-none w-100 m-auto">
        <Button block>
          See All <img className="ml-2" src={arrow} alt="arrow" />
        </Button>{' '}
      </Link>
    </div>
  );
};

export default Featured;
