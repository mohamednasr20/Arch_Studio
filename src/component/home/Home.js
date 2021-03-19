import React from 'react';
import { Container } from 'react-bootstrap';
import HomeCarousel from './HomeCarousel';
import Welcome from './Welcome';

function Home() {
  return (
    <Container fluid className="mx-4">
      <div className="current">Home</div>
      <HomeCarousel />
      <Welcome />
    </Container>
  );
}

export default Home;
