import { Button, Col, Modal, Row } from "antd";

import './orderModal.css';

import { createOrderRequest } from '../../lib/api/orderApi';
import { useState } from "react";

const OrderModal = ({
  isOpen,
  setIsOpen,
}) => {
  const [state, setState] = useState({
    name: '',
    number: '',
    budget: '',
    userComment: '',
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
      budget: state.budget,
      userComment: state.userComment,
    }

    await createOrderRequest(config);

    onClose();
  }

  const onClose = () => {
    setIsOpen(false);
    setError(false);
    setValidationFields({
      name: true,
      number: true,
    });
    setState({
      name: '',
      number: '',
      budget: '',
      userComment: '',
    })
  }

  return (
    <Modal
      centered
      open={isOpen}
      onOk={confirm}
      destroyOnClose
      onCancel={onClose}
      className="order-modal"
      footer={
        <Row className="order-modal-content__submit">
          <button onClick={confirm}>Подтвердить</button>
        </Row>
      }
    >
      <Row className="order-modal-content">
        <Col span={24}>
          <h3 className="order-modal-content__title">Оформить заявку</h3>
          <input
            type="text"
            className={`order-modal-content__input ${!validationFields.name ? 'order-modal-content__input--error' : ''}`}
            placeholder='Ваше имя*'
            value={state.name}
            onChange={(e) => {
              setState((prev) => ({ ...prev, name: e.target.value }));
              setValidationFields((prev) => ({ ...prev, name: true }));
            }}
          />
          <input
            type="text"
            className={`order-modal-content__input ${!validationFields.number ? 'order-modal-content__input--error' : ''}`}
            placeholder='Телефон*'
            value={state.number}
            onChange={(e) => {
              const reg = /^\+?[0-9]*$/g;

              if (e.target.value.match(reg)) {
                setState((prev) => ({ ...prev, number: e.target.value }));
                setValidationFields((prev) => ({ ...prev, number: true }));
              }
            }}
          />
          <input
            type="text"
            className="order-modal-content__input"
            placeholder='Бюджет'
            value={state.budget}
            onChange={(e) => setState((prev) => ({ ...prev, budget: e.target.value }))}
          />
          <textarea
            type="text"
            className="order-modal-content__input order-modal-content__input--last"
            placeholder='Комментарий'
            value={state.userComment}
            onChange={(e) => setState((prev) => ({ ...prev, userComment: e.target.value }))}
          />
          <div className={`order-modal-content__approve ${error ? 'error-checkbox' : ''}`}>
            <input
              class="custom-checkbox"
              id="myCheckbox"
              type="checkbox"
              checked={checked}
              onClick={(e) => {
                setError(false);
                setChecked(e.target.checked);
              }}
            />
            <label for="myCheckbox">
              <div>Нажимая на кнопку, я даю <span>согласие на обработку персональных данных</span></div>
            </label>
          </div>
        </Col>
      </Row>
    </Modal>
  )
}

export default OrderModal;
