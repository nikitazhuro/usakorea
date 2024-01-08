import { Row, Button, Col } from "antd";
import React from "react";

import image1 from '../../../assets/2.png';
import image2 from '../../../assets/3.png';
import image3 from '../../../assets/4.png';
import image4 from '../../../assets/5.png';

import './whatCanDeliver.css';

const WhatCanDeliverRoot = () => {
  return (
    <Row className="what-can-deliver-root">
      <Col span={24} className="what-can-deliver-wrapper">
        <Col span={24} className="what-can-deliver-block">
          <div className="what-can-deliver-root__header">
            <h1>Что мы можем вам привезти?</h1>
          </div>

          <div className="what-can-deliver-root__content">
            <div className="deliver-block">
              <div className="deliver-card deliver-card--first">
                <div className="deliver-card__block">
                  <div className="deliver-card__image">
                    <img className="deliver-card__image__img" src={image1} alt="img1" />
                  </div>
                  <div className="deliver-card__description">
                    <span className="deliver-desc__header">Аварийные авто</span>
                    <span className="deliver-desc__content">Авто и техника со страховых аукционов США и Кореи по выгодным ценам</span>
                  </div>
                </div>
              </div>
              <div className="deliver-card deliver-card--second">
                <div className="deliver-card__block">
                  <div className="deliver-card__image">
                    <img className="deliver-card__image__img" src={image4} alt="img1" />
                  </div>
                  <div className="deliver-card__description">
                    <span className="deliver-desc__header">Автомобили</span>
                    <span className="deliver-desc__content">Новые и б/у автомобили всех марок и моделей по всей территории США и Южной Кореи</span>
                  </div>
                </div>
              </div>
              <div className="deliver-card deliver-card--third">
                <div className="deliver-card__block">
                  <div className="deliver-card__image">
                    <img className="deliver-card__image__img" src={image2} alt="img1" />
                  </div>
                  <div className="deliver-card__description">
                    <span className="deliver-desc__header">Электромобили</span>
                    <span className="deliver-desc__content">Электрокары из США от ведущих производителей мира: новые, аварийные, б/у</span>
                  </div>
                </div>
              </div>
              <div className="deliver-card deliver-card--forth">
                <div className="deliver-card__block">
                  <div className="deliver-card__image">
                    <img className="deliver-card__image__img" src={image3} alt="img1" />
                  </div>
                  <div className="deliver-card__description">
                    <span className="deliver-desc__header">Мотоциклы</span>
                    <span className="deliver-desc__content">Мотоциклы от самых популярных моделей до легендарных раритетных</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Col>
    </Row>
  )
}

export default WhatCanDeliverRoot;
