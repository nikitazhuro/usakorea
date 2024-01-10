import { Col, Modal, Row } from "antd";

import './menuModal.css';
import { Link } from "react-scroll";

const MenuModal = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <Modal open={isOpen} onCancel={() => setIsOpen(false)} footer={null} className="menu-modal">
      <Col span={24}>
        <Col className="menu-modal-content">
          <Col className="menu-modal-item">
            <Link activeClass="active" smooth spy to="main" onClick={() => setIsOpen(false)}>
              Главная
            </Link>
          </Col>
          <Col className="menu-modal-item">
            <Link activeClass="active" smooth spy to="whatCanDeliver" onClick={() => setIsOpen(false)}>
              Услуги
            </Link>
          </Col>
          <Col className="menu-modal-item">
            <Link activeClass="active" smooth spy to="about" onClick={() => setIsOpen(false)}>
              О нас
            </Link>
          </Col>
          <Col className="menu-modal-item">
            <Link activeClass="active" smooth spy to="howWeWork" onClick={() => setIsOpen(false)}>
              Схема работы
            </Link>
          </Col>
          <Col className="menu-modal-item">
            <Link activeClass="active" smooth spy to="price" onClick={() => setIsOpen(false)}>
              Цены
            </Link>
          </Col>
          <Col className="menu-modal-item">
            <Link activeClass="active" smooth spy to="contacts" onClick={() => setIsOpen(false)}>
              Контакты
            </Link>
          </Col>
        </Col>
      </Col>
    </Modal>
  )
}

export default MenuModal;
