import { Row, Button, Col } from "antd";
import React, { useState } from "react";

import what_can_deliver_1 from '../../../assets/what_can_deliver_1.png';
import what_can_deliver_2 from '../../../assets/what_can_deliver_2.png';
import what_can_deliver_3 from '../../../assets/what_can_deliver_3.png';
import what_can_deliver_4 from '../../../assets/what_can_deliver_4.png';

import './whatCanDeliver.css';

import OrderModal from "../../../components/OrderModal/OrderModal";

const WhatCanDeliverRoot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openOrderModal = () => {
    setIsOpen(true);
  }

  return (
    <>
      <section id="whatCanDeliver" />

      <Row className="what-can-deliver-root">
        <OrderModal isOpen={isOpen} setIsOpen={setIsOpen} />
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
                      <img className="deliver-card__image__img" src={what_can_deliver_1} alt="img1" />
                    </div>
                    <div className="deliver-card__desc-block">
                      <div className="deliver-card__description">
                        <span className="deliver-desc__header">Аварийные авто</span>
                        <span className="deliver-desc__content">Авто и техника со страховых аукционов США и Кореи по выгодным ценам.</span>
                      </div>
                      <div className="deliver-card__order-btn">
                        <button onClick={openOrderModal}>
                          Заказать
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="deliver-card deliver-card--second">
                  <div className="deliver-card__block">
                    <div className="deliver-card__image">
                      <img className="deliver-card__image__img" src={what_can_deliver_2} alt="img1" />
                    </div>
                    <div className="deliver-card__desc-block">
                      <div className="deliver-card__description">
                        <span className="deliver-desc__header">Автомобили</span>
                        <span className="deliver-desc__content">Новые и б/у автомобили всех марок и моделей по всей территории США, Кореи и Китая.</span>
                      </div>
                      <div className="deliver-card__order-btn">
                        <button onClick={openOrderModal}>
                          Заказать
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="deliver-card deliver-card--third">
                  <div className="deliver-card__block">
                    <div className="deliver-card__image">
                      <img className="deliver-card__image__img" src={what_can_deliver_3} alt="img1" />
                    </div>
                    <div className="deliver-card__desc-block">
                      <div className="deliver-card__description">
                        <span className="deliver-desc__header">Электромобили</span>
                        <span className="deliver-desc__content">Электрокары из США и Китая от ведущих производителей мира: новые, аварийные, б/у.</span>
                      </div>
                      <div className="deliver-card__order-btn">
                        <button onClick={openOrderModal}>
                          Заказать
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="deliver-card deliver-card--forth">
                  <div className="deliver-card__block">
                    <div className="deliver-card__image">
                      <img className="deliver-card__image__img" src={what_can_deliver_4} alt="img1" />
                    </div>
                    <div className="deliver-card__desc-block">
                      <div className="deliver-card__description">
                        <span className="deliver-desc__header">Мотоциклы</span>
                        <span className="deliver-desc__content">Мотоциклы от самых популярных моделей до легендарных раритетных.</span>
                      </div>
                      <div className="deliver-card__order-btn">
                        <button onClick={openOrderModal}>
                          Заказать
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </>
  )
}

export default WhatCanDeliverRoot;
