import { Button, Col, Row } from "antd";
import React, { useState } from 'react';

import './needConsultation.css';

import needConsultation from '../../../assets/needConsultation1.png';
import { createOrderRequest } from "../../../lib/api/orderApi";

const NeedConsultationRoot = () => {
  const [state, setState] = useState({
    name: '',
    number: '',
  });
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);
  const [validationFields, setValidationFields] = useState({
    name: true,
    number: true,
  });

  const confirm = async () => {
    if (!checked) {
      setError(true);
    }
    if (!state.name) {
      setValidationFields((prev) => ({ ...prev, name: false }))
    }

    if (!state.number) {
      setValidationFields((prev) => ({ ...prev, number: false }))
    }

    if (!state.name || !state.number || !checked) return;

    const config = {
      name: state.name,
      number: state.number,
    }

    await createOrderRequest(config);

    setValidationFields({
      name: true,
      number: true,
    })
    setError(false);
    setChecked(false);
    setState({
      name: '',
      number: '',
    })
  }

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
              <input
                type="text"
                className={`consult-wrapper__input ${!validationFields.name ? 'consult-wrapper__input--error' : ''}`}
                placeholder='Имя*'
                value={state.name}
                onChange={(e) => {
                  setState((prev) => ({ ...prev, name: e.target.value }));
                  setValidationFields((prev) => ({ ...prev, name: true }));
                }}
              />
              <input
                type="text"
                className={`consult-wrapper__input ${!validationFields.number ? 'consult-wrapper__input--error' : ''}`}
                placeholder='Телефон*'
                value={state.number}
                onChange={(e) => {
                  setState((prev) => ({ ...prev, number: e.target.value }));
                  setValidationFields((prev) => ({ ...prev, number: true }));
                }}
              />
            </div>

            <div className={`consult-wrapper__approve ${error ? 'error-checkbox' : ''}`}>
              <input
                class="custom-checkbox"
                id="order-checkbox"
                type="checkbox"
                checked={checked}
                onClick={(e) => {
                  setError(false);
                  setChecked(e.target.checked);
                }}
              />
              <label for="order-checkbox">
                <div>Нажимая на кнопку, я даю <span>согласие на обработку персональных данных</span></div>
              </label>
            </div>

            <button onClick={confirm} className="consult-wrapper__submit">
              Отправить заявку
            </button>
          </div>
        </Col>
      </Col>
    </Row>
  )
}

export default NeedConsultationRoot;
