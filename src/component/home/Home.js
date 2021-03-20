import React from 'react';
import HomeCarousel from './HomeCarousel';
import Welcome from './Welcome';

function Home() {
  return (
    <section>
      <div className="current">Home</div>
      <HomeCarousel />
      <Welcome />
    </section>
  );
}

export default Home;
