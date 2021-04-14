import React from 'react';
import Avatar from '../about/Avatar';
import avatarJackson from '../../assets/about/desktop/avatar-jackson.jpg';
import avatarJake from '../../assets/about/desktop/avatar-jake.jpg';
import avatarMaria from '../../assets/about/desktop/avatar-maria.jpg';
import avatarThompson from '../../assets/about/desktop/avatar-thompson.jpg';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import '../../styles/about/Leaders.css';

const leadersArr = [
  {
    name: 'Jake Richards',
    description: 'Chief Architect',
    img: avatarJake,
  },

  {
    name: 'Thompson Smith',
    description: 'Head Of Finance',
    img: avatarThompson,
  },

  {
    name: 'Jackson Rourke',
    description: 'Lead Designer',
    img: avatarJackson,
  },
  {
    name: 'Maria Simpson',
    description: 'Senior Architect',
    img: avatarMaria,
  },
];

const Leaders = () => {
  const leadersGrid = leadersArr.map((leader) => {
    return (
      <Avatar
        key={leader.name}
        img={leader.img}
        name={leader.name}
        description={leader.description}
      />
    );
  });
  return (
    <Row className="Leaders ">
      <Col lg={4}>
        <h3 className="mt-4">
          The <br />
          Leaders
        </h3>
      </Col>
      <Col lg={8}>
        <Row className="Leaders-row" md={2}>
          {leadersGrid}
        </Row>
      </Col>
    </Row>
  );
};

export default Leaders;
