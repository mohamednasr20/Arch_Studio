import React from 'react';
import HomeCarousel from './HomeCarousel';
import Welcome from './Welcome';
import SmallTeam from './SmallTeam';

function Home() {
  return (
    <section>
      <div className="current">Home</div>
      <HomeCarousel />
      <Welcome />
      <SmallTeam />
    </section>
  );
}

export default Home;
