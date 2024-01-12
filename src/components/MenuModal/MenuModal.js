import { Col, Row } from "antd";

import './menuModal.css';
import { Link } from "react-scroll";

const MenuModal = ({
  isOpen,
  setIsOpen,
}) => {

  const handleClose = () => {
    setIsOpen(false);
    document.body.style = '';
  }

  return (
    <Row className={`menu-modal ${isOpen ? 'menu-modal--active' : ''}`}>
      <Col span={24}>
        <Col className="menu-modal-content">
          <Col className="menu-modal-item">
            <Link activeClass="active" smooth spy to="main" onClick={handleClose}>
              Главная
            </Link>
          </Col>
          <Col className="menu-modal-item">
            <Link activeClass="active" smooth spy to="whatCanDeliver" onClick={handleClose}>
              Услуги
            </Link>
          </Col>
          <Col className="menu-modal-item">
            <Link activeClass="active" smooth spy to="about" onClick={handleClose}>
              О нас
            </Link>
          </Col>
          <Col className="menu-modal-item">
            <Link activeClass="active" smooth spy to="howWeWork" onClick={handleClose}>
              Схема работы
            </Link>
          </Col>
          <Col className="menu-modal-item">
            <Link activeClass="active" smooth spy to="price" onClick={handleClose}>
              Цены
            </Link>
          </Col>
          <Col className="menu-modal-item">
            <Link activeClass="active" smooth spy to="contacts" onClick={handleClose}>
              Контакты
            </Link>
          </Col>
        </Col>
      </Col>
    </Row>
  )
}

export default MenuModal;
