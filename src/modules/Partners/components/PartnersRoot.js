import { Col, Row } from "antd";
import React from 'react';

import partner1 from '../../../assets/partner1.png';
import partner2 from '../../../assets/partner2.jpg';
import partner3 from '../../../assets/partner3.png';
import partner4 from '../../../assets/partner4.png';

import './partnersRoot.css';

const PartnersRoot = () => {
  return (
    <Row className="partners-root">
      <Col span={24} className="partners-root-block">
        <Col className="partners-root-block__item">
          <img src={partner1} alt='img' />
        </Col>
        <Col className="partners-root-block__item">
          <img src={partner2} alt='img' />
        </Col>
        <Col className="partners-root-block__item">
          <img src={partner3} alt='img' />
        </Col>
        <Col className="partners-root-block__item">
          <img src={partner4} alt='img' />
        </Col>
      </Col>
    </Row>
  )
}

export default PartnersRoot;
