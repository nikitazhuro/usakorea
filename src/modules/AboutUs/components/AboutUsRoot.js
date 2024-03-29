import { Col, Row } from "antd";
import React, { useEffect, useState } from 'react';

import './aboutUsRoot.css';

import image from '../../../assets/aboutus.png';
import image1 from '../../../assets/aboutus1.png';

import OrderModal from "../../../components/OrderModal/OrderModal";

const AboutUsRoot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageState, setImageState] = useState(image);

  const openOrderModal = () => {
    setIsOpen(true);
  }

  useEffect(() => {
    if (window.innerWidth < 768) {
      setImageState(image1);
    }
  }, [])

  return (
    <>
      <section id="about" />
      <Row className="about-us-root">
        <OrderModal isOpen={isOpen} setIsOpen={setIsOpen} />
        <Col span={24} className="about-us-root-wrapper">
          <Col span={24} className="about-us-root-block">
            <Col span={12} className="about-us-content">
              <h1 className="about-us-content__title">O нас</h1>
              <div className="about-us-content__desc1">
                <div>Мы помогаем людям выгодно приобретать автомобили и любые другие транспортные средства с рынка США, Кореи и Китая. Мы совершенствуем процесс покупки и доставки, делая их максимально прозрачными и понятными, чтобы у каждого клиента остались только положительные эмоции от сотрудничества.</div>
                <div>Мы ценим наших клиентов и их время. Для этого четко доносим всю важную информацию и всегда готовы проконсультировать по всем интересующим вопросам. Также мы ценим своих партнеров.</div>
              </div>
              <div className="about-us-content__desc2">
                Только слаженная работа и ответственное отношение к делу позволяет получить положительные результаты.
              </div>
              <button className="about-us-content__submit" onClick={openOrderModal}>
                Подобрать авто
              </button>
            </Col>
            <Col span={12} className="about-us-info">
              <Col className="about-us-info__image">
                <img src={imageState} alt="image" />
              </Col>
              <Col className="about-us-info__content">
                <h2>Наша задача</h2>
                <div>Активное участие в формировании автомобильного рынка Республики Беларусь, увеличивая объем присутствия качественных и надежных автомобилей, мотоциклов и другой техники из США, Кореи и Китая.</div>
              </Col>
            </Col>
          </Col>
        </Col>
      </Row>
    </>
  )
}

export default AboutUsRoot;