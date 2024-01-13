import { Col, Row } from "antd";
import { useState } from "react";

import './priceListRoot.css';

import ConditionItem from "./ConditionItem";
import OrderModal from "../../../components/OrderModal/OrderModal";

const PriceListRoot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openOrderModal = () => {
    setIsOpen(true);
  }

  return (
    <>
      <section id="price" />
      <Row className="price-list-root">
        <OrderModal isOpen={isOpen} setIsOpen={setIsOpen} />
        <Col span={24} className="price-list-wrapper">
          <Col span={24} className="price-list-block">
            <div className="price-list__header">
              <h1>Стоимость наших услуг</h1>
            </div>
            <div className="price-list__content">
              <div className="price-list__content__conditions">
                <div className="price-list__content__conditions__item">
                  <ConditionItem title="Подбор актуальных вариантов" />
                  <ConditionItem title="Предварительный детальный расчет" />
                  <ConditionItem title="Консультации по возможному ремонту" />
                  <ConditionItem title="Проверка истории" />
                  <ConditionItem title="Безлимит ставок / участий в аукционах" />
                </div>
                <div className="price-list__content__conditions__item">
                  <ConditionItem title="Консультация по вопросу оплаты (банк, комиссия и тд)" />
                  <ConditionItem title="Своевременное предоставление информации о движении т/с" />
                  <ConditionItem title="Консультация по таможенному оформлению" />
                  <ConditionItem title="Обратная связь 24/7" />
                </div>
              </div>

              <div className="price-list__content__price">
                <div className="price">
                  <h1>
                    900 рублей
                  </h1>
                  <button onClick={openOrderModal}>
                    Отправить заявку
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </>
  )
}

export default PriceListRoot;
