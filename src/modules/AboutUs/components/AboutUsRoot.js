import { Button, Col, Row } from "antd";
import React from 'react';

import image from '../../../assets/aboutus.png';

import './aboutUsRoot.css';

const AboutUsRoot = () => {
  return (
    <Row className="about-us-root">
      <Col span={24} className="about-us-root-block">
        <Col span={12} className="about-us-content">
          <h1 className="about-us-content__title">О нас</h1>
          <div className="about-us-content__desc1">
            <div>Мы помогаем людям выгодно приобретать автомобили и любые другие транспортные средства с рынка США и Кореи. Мы совершенствуем процесс покупки и доставки, делая их максимально прозрачными и понятными, чтобы у каждого клиента остались только положительные эмоции от сотрудничества.</div>
            <div>Мы ценим наших клиентов и их время. Для этого четко доносим всю важную информацию и всегда готовы проконсультировать по всем интересующим вопросам. Также мы ценим своих партнеров.</div>
          </div>
          <div className="about-us-content__desc2">
            Только слаженная работа и ответственное отношение к делу позволяет получить положительные результаты.
          </div>
          <Button className="about-us-content__submit">
            Подобрать авто
          </Button>
        </Col>
        <Col span={12} className="about-us-info">
          <Col className="about-us-info__image">
            <img src={image} alt="image" />
          </Col>
          <Col className="about-us-info__content">
            <h2>Наша задача</h2>
            <div>Активное участие в формировании автомобильного рынка Республики Беларусь, увеличивая объем присутствия качественных и надежных б/у автомобилей, мотоциклов и другой техники из США и Южной Кореи. </div>
          </Col>
        </Col>
      </Col>
    </Row>
  )
}

export default AboutUsRoot;