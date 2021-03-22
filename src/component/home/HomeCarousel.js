import React from 'react';
import Button from '../../component/Button';
import Carousel from 'react-bootstrap/Carousel';
import imageHeroFederal from '../../assets/home/desktop/image-hero-federal.jpg';
import imageHeroParamour from '../../assets/home/desktop/image-hero-paramour.jpg';
import imageHeroSeraph from '../../assets/home/desktop/image-hero-seraph.jpg';
import imageHeroTrinity from '../../assets/home/desktop/image-hero-trinity.jpg';
import imageTabletParamour from '../../assets/home/tablet/image-hero-paramour.jpg';
import imageTabletSeraph from '../../assets/home/tablet/image-hero-seraph.jpg';
import imageTabletFedral from '../../assets/home/tablet/image-hero-federal.jpg';
import imageTabletTrinity from '../../assets/home/tablet/image-hero-trinity.jpg';
import imageMobileParamour from '../../assets/home/mobile/image-hero-paramour.jpg';
import imageMobileSeraph from '../../assets/home/mobile/image-hero-seraph.jpg';
import imageMobileFedral from '../../assets/home/mobile/image-hero-federal.jpg';
import imageMobileTrinity from '../../assets/home/mobile/image-hero-trinity.jpg';

import '../../styles/HomeCarousel.css';
import { Link } from 'react-router-dom';

const HomeCarousel = () => {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <picture>
          <source srcSet={imageHeroParamour} media="(min-width: 1024px)" />
          <source srcSet={imageTabletParamour} media="(min-width: 768px)" />
          <img
            className="d-block w-100"
            src={imageMobileParamour}
            alt="paramour"
          />
        </picture>
        <Carousel.Caption>
          <h1>Project Paramour</h1>
          <p className="py-2 lead">
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>
          <Link to="/portfolio">
            <Button text="See Our Portfolio" />
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <picture>
          <source srcSet={imageHeroSeraph} media="(min-width: 1024px)" />
          <source srcSet={imageTabletSeraph} media="(min-width: 768px)" />
          <img className="d-block w-100" src={imageMobileSeraph} alt="seraph" />
        </picture>

        <Carousel.Caption>
          <h1>Seraph Station</h1>
          <p className="py-2 lead">
            The Seraph Station project challenged us to design a unique station
            that would transport people through time. The result is a fresh and
            futuristic model inspired by space stations.
          </p>
          <Link to="/portfolio">
            <Button text="See Our Portfolio" />
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <picture>
          <source srcSet={imageHeroFederal} media="(min-width: 1024px)" />
          <source srcSet={imageTabletFedral} media="(min-width: 768px)" />
          <img className="d-block w-100" src={imageMobileFedral} alt="fedral" />
        </picture>

        <Carousel.Caption>
          <h1>Federal II Tower</h1>
          <p className="py-2 lead">
            A sequel theme project for a tower originally built in the 1800s. We
            achieved this with a striking look of brutal minimalism with modern
            touches.
          </p>
          <Link to="/portfolio">
            <Button text="See Our Portfolio" />
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <picture>
          <source srcSet={imageHeroTrinity} media="(min-width: 1024px)" />
          <source srcSet={imageTabletTrinity} media="(min-width: 768px)" />
          <img
            className="d-block w-100"
            src={imageMobileTrinity}
            alt="trinity"
          />
        </picture>

        <Carousel.Caption>
          <h1>Trinity Bank Tower</h1>
          <p className="py-2 lead">
            Trinity Bank challenged us to make a concept for a 84 story building
            located in the middle of a city with a high earthquake frequency.
            For this project we used curves to blend design and stability to
            meet our objectives.
          </p>
          <Link to="/portfolio">
            <Button text="See Our Portfolio" />
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
