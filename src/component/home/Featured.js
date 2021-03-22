import React from 'react';
import Button from '../Button';
import ImageCard from '../ImageCard';
import { Link } from 'react-router-dom';
import delSol from '../../assets/portfolio/desktop/image-del-sol.jpg';
import img228b from '../../assets/portfolio/desktop/image-228b.jpg';
import prototype from '../../assets/portfolio/desktop/image-prototype.jpg';
import '../../styles/Featured.css';

const Featured = () => {
  const caption = <Link to="/portfolio">View all Projects</Link>;

  const images = [
    {
      imgDesktop: delSol,
      title: 'Project Del Sol',
    },
    {
      imgDesktop: img228b,
      title: '228B Tower',
    },
    {
      imgDesktop: prototype,
      title: 'Le Prototype',
    },
  ];

  const imagesDiv = images.map((img) => {
    return (
      <ImageCard img={img.imgDesktop} title={img.title} caption={caption} />
    );
  });
  return (
    <div className="Featured">
      <div class="Featured-header d-flex">
        <h3>Featured</h3>
        <Button text="See All" />
      </div>
      <div>{imagesDiv}</div>
    </div>
  );
};

export default Featured;
