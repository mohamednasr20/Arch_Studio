import React from 'react';
import HomeCarousel from './HomeCarousel';
import CurrentPage from '../CurrentPage';
import Welcome from './Welcome';
import SmallTeam from './SmallTeam';
import Featured from './Featured';

const Home = () => {
  return (
    <section className="mx-0 px-0">
      <CurrentPage pageName="home" />
      <HomeCarousel />
      <Welcome />
      <SmallTeam />
      <Featured />
    </section>
  );
};

export default Home;
