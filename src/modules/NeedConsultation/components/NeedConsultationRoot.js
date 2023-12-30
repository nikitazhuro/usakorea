import { Button, Col, Row } from "antd";
import React from 'react';

import './needConsultation.css';

import needConsultation from '../../../assets/needConsultation1.png';

const NeedConsultationRoot = () => {
  return (
    <Row className="need-consultation-root">
      <Col span={24} className="need-consultation-block">
        <Col span={12} className="need-consultation__image">
          <img src={needConsultation} alt="img" />
        </Col>
        <Col span={12} className="need-consultation__content">
          <div className="consult-wrapper">
            <h1 className="consult-wrapper__question">Нужна консультация специалиста?</h1>
            <div className="consult-wrapper__desc">Оставьте заявку и мы оперативно вам перезвоним и ответим на все ваши вопросы!</div>

            <div className="consult-wrapper__inputs">
              <input type="text" className="consult-wrapper__input" />
              <input type="text" className="consult-wrapper__input" />
            </div>

            <div className="consult-wrapper__approve">
              <input
                class="custom-checkbox"
                id="myCheckbox"
                type="checkbox"
              />
              <label for="myCheckbox">
                <span>Нажимая на кнопку, я даю согласие на обработку персональных данных</span>
              </label>
            </div>

            <Button className="consult-wrapper__submit">
              Отправить заявку
            </Button>
          </div>
        </Col>
      </Col>
    </Row>
  )
}

export default NeedConsultationRoot;
