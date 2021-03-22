import React from 'react';
import Button from '../Button';
import smallTeamImg from '../../assets/home/desktop/image-small-team.jpg';
import smallTeamTabletImg from '../../assets/home/tablet/image-small-team.jpg';
import smallTeamMobileImg from '../../assets/home/mobile/image-small-team.jpg';
import '../../styles/SmallTeam.css';

const SmallTeam = () => {
  return (
    <div className="SmallTeam">
      <div className="SmallTeam-content">
        <h3 className="mb-5">Small team, big ideas</h3>
        <Button text="About Us" />
      </div>
      <picture>
        <source srcSet={smallTeamImg} media="(min-width: 1024px)" />
        <source srcSet={smallTeamTabletImg} media="(min-width: 768px)" />
        <img
          className="mx-0 SmallTeam-img"
          src={smallTeamMobileImg}
          alt="small-team"
        />
      </picture>
    </div>
  );
};

export default SmallTeam;
