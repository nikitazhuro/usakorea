import { Row, Button } from "antd";
import React from "react";

import image1 from '../../../assets/2.png';
import image2 from '../../../assets/3.png';
import image3 from '../../../assets/4.png';
import image4 from '../../../assets/5.png';

import './whatCanDeliver.css';

const WhatCanDeliverRoot = () => {
  return (
    <Row className="what-can-deliver-root">
      <div className="what-can-deliver-root__header">
        <h1>Что мы можем вам привезти?</h1>
        <Button className="">Заказать</Button>
      </div>
      <div className="what-can-deliver-root__content">
        <div className="deliver-block">
          <div className="deliver-card">
            <div className="deliver-card__block">
              <img src={image1} alt="img1" />
              <div className="deliver-card__description">
                <span className="deliver-desc__header">Аварийные авто</span>
                <span className="deliver-desc__content">Авто и техника со страховых аукционов США и Кореи по выгодным ценам</span>
              </div>
            </div>
          </div>
          <div className="deliver-card">
            <div className="deliver-card__block">
              <img src={image4} alt="img1" />
              <div className="deliver-card__description">
                <span className="deliver-desc__header">Аварийные авто</span>
                <span className="deliver-desc__content">Авто и техника со страховых аукционов США и Кореи по выгодным ценам</span>
              </div>
            </div>
          </div>
          <div className="deliver-card">
            <div className="deliver-card__block">
              <img src={image2} alt="img1" />
              <div className="deliver-card__description">
                <span className="deliver-desc__header">Аварийные авто</span>
                <span className="deliver-desc__content">Авто и техника со страховых аукционов США и Кореи по выгодным ценам</span>
              </div>
            </div>
          </div>
          <div className="deliver-card">
            <div className="deliver-card__block">
              <img src={image3} alt="img1" />
              <div className="deliver-card__description">
                <span className="deliver-desc__header">Аварийные авто</span>
                <span className="deliver-desc__content">Авто и техника со страховых аукционов США и Кореи по выгодным ценам</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Row>
  )
}

export default WhatCanDeliverRoot;
