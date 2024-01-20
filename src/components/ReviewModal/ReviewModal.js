import { Col, Modal, Rate, Row } from "antd";
import { useState } from "react";

import './reviewModal.css';

import { createUserReviewRequest } from '../../lib/api/reviewsApi';
import { ReactComponent as Complete } from "../../assets/complete.svg";

const ReviewModal = ({
  isOpen,
  setIsOpen,
}) => {
  const [state, setState] = useState({
    name: '',
    review: '',
    grade: 0,
  });
  const [validationFields, setValidationFields] = useState({
    name: true,
    review: true,
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const confirm = async () => {
    if (!state.name) {
      setValidationFields((prev) => ({ ...prev, name: false }))
    }

    if (!state.review) {
      setValidationFields((prev) => ({ ...prev, review: false }))
    }

    if (!state.name || !state.review) return;

    const config = {
      name: state.name,
      date: new Date(),
      comment: state.review,
      grade: state.grade,
    }

    await createUserReviewRequest(config);
    setIsCompleted(true);
  }

  const onClose = () => {
    setIsCompleted(false);
    setIsOpen(false);
    setValidationFields({
      name: true,
      review: true,
    });
    setState({
      name: '',
      review: '',
      grade: 0,
    })
  }

  return (
    <Modal
      centered
      open={isOpen}
      onOk={confirm}
      destroyOnClose
      onCancel={onClose}
      className="review-modal"
      footer={isCompleted ? (
        null
      )
        : (
          <Row className="review-modal-content__submit">
            <button onClick={confirm}>Оставить отзыв</button>
          </Row>
        )
      }
    >
      <Row className="review-modal-content">
        {isCompleted
          ? (
            <Col span={24} className="review-complete">
              <Complete />
              <h1>
                Спасибо, что вы с нами!
              </h1>
            </Col>
          )
          : (
            <Col span={24}>
              <h3 className="review-modal-content__title">Оцените нашу работу</h3>
              <input
                type="text"
                className={`review-modal-content__input ${!validationFields.name ? 'review-modal-content__input--error' : ''}`}
                placeholder='Ваше имя*'
                value={state.name}
                onChange={(e) => {
                  const text = e.target.value;

                  setState((prev) => ({ ...prev, name: text }));
                  setValidationFields((prev) => ({ ...prev, name: true }));
                }}
              />
              <textarea
                type="text"
                className={`review-modal-content__input review-modal-content__input--last ${!validationFields.review ? 'review-modal-content__input--error' : ''}`}
                placeholder='Ваш отзыв*'
                value={state.review}
                onChange={(e) => {
                  const text = e.target.value;

                  setState((prev) => ({ ...prev, review: text }));
                  setValidationFields((prev) => ({ ...prev, review: true }));
                }}
              />

              <Rate onChange={(value) => setState((prev) => ({ ...prev, grade: value }))} />

              {/* <Col span={24} className="review-modal-rates">
              <div className="review-modal-rates__rate">1</div>
              <div className="review-modal-rates__rate">2</div>
              <div className="review-modal-rates__rate">3</div>
              <div className="review-modal-rates__rate">4</div>
              <div className="review-modal-rates__rate">5</div>
            </Col> */}
            </Col>
          )
        }
      </Row >
    </Modal >
  )
}

export default ReviewModal;
