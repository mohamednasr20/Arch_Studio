import React from 'react';
import HomeCarousel from './HomeCarousel';
import Welcome from './Welcome';
import SmallTeam from './SmallTeam';
import Featured from './Featured';

function Home() {
  return (
    <section className="mx-0 px-0">
      <div className="current">Home</div>
      <HomeCarousel />
      <Welcome />
      <SmallTeam />
      <Featured />
    </section>
  );
}

export default Home;
