import { Col, Row } from "antd";

import './deliveryReasonsRoot.css';

import { ReactComponent as Reason1 } from "../../../assets/reason-1.svg";
import { ReactComponent as Reason2 } from "../../../assets/reason-2.svg";
import { ReactComponent as Reason3 } from "../../../assets/reason-3.svg";
import { ReactComponent as Reason4 } from "../../../assets/reason-4.svg";

const DeliveryReasonsRoot = () => {
  return (
    <Row className="delivery-reasons-root">
      <Col span={24} className="delivery-reasons-wrapper">
        <Col span={24} className="delivery-reasons-block">
          <Col span={24} className="delivery-reasons__title">
            <h1>Почему США, Корея или Китай?</h1>
          </Col>
          <Col span={24} className="delivery-reasons__content">
            <div className="delivery-reasons__content-sub">
              <div className="reason-item">
                <div className="reason-item__header">
                  <div className="reason-item__header__icon-block">
                    <Reason1 />
                  </div>
                  <div>Качество сборки</div>
                </div>
                <div className="reason-item__content">Лучшие автомобили в мире делают именно для рынка Америки, и к качеству сборки предъявляются самые жесткие требования. Надежно и просто - главный девиз американских авто.</div>
              </div>
              <div className="reason-item">
                <div className="reason-item__header">
                  <div className="reason-item__header__icon-block">
                    <Reason4 />
                  </div>
                  <div>Комплектация</div>
                </div>
                <div className="reason-item__content">Для американского и корейского рынка комплектации изначально более полные и богатые, они порадуют даже самого искушенного автолюбителя.</div>
              </div>
            </div>
            <div className="delivery-reasons__content-sub">
              <div className="reason-item">
                <div className="reason-item__header">
                  <div className="reason-item__header__icon-block">
                    <Reason2 />
                  </div>
                  <div>Прозрачная история</div>
                </div>
                <div className="reason-item__content">Автомобили из США, Кореи и Китая имеют полную историю обслуживания, которую можно проверить до покупки. В отчётах фиксируется пробег, ремонтные работы после ДТП и тд.</div>
              </div>
              <div className="reason-item reason-item--last">
                <div className="reason-item__header">
                  <div className="reason-item__header__icon-block">
                    <Reason3 />
                  </div>
                  <div>Экономия до 40-50%</div>
                </div>
                <div className="reason-item__content">Реальная экономия с учетом доставки, всех платежей и ремонта может достигать вплоть до 50%. Это значительная выгода и грамотное вложение денежных средств.</div>
              </div>
            </div>
          </Col>
        </Col>
      </Col>
    </Row>
  )
}

export default DeliveryReasonsRoot;
