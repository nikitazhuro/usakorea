import { Button, Col, Row } from "antd";

import './priceListRoot.css';
import ConditionItem from "./ConditionItem";

const PriceListRoot = () => {
  return (
    <Row className="price-list-root">
      <Col span={24} className="price-list-wrapper">
        <Col span={24} className="price-list-block">
          <div className="price-list__header">
            <h1>Стоимость наших услуг</h1>
          </div>
          <div className="price-list__content">
            <div className="price-list__content__conditions">
              <div>
                <ConditionItem title="Подбор актуальных вариантов" />
                <ConditionItem title="Предварительный детальный расчет" />
                <ConditionItem title="Консультации по возможному ремонту" />
                <ConditionItem title="Проверка истории" />
                <ConditionItem title="Безлимит ставок / участий в аукционах" />
              </div>
              <div>
                <ConditionItem title="Консультация по вопросу оплаты (банк, комиссия и тд)" />
                <ConditionItem title="Своевременное предоставление информации движении т/с" />
                <ConditionItem title="Консультация по таможенному оформлению" />
                <ConditionItem title="Обратная связь 24/7" />
              </div>
            </div>

            <div className="price-list__content__price">
              <div className="price">
                <h1>
                  900 рублей
                </h1>
                <Button>
                  Отправить заявку
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Col>
    </Row>
  )
}

export default PriceListRoot;
