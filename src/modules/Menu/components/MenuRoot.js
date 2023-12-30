import { Col, Row } from "antd";

import { ReactComponent as MailIcon } from '../../../assets/Mail.svg';
import { ReactComponent as TelegramIcon } from '../../../assets/Paper_Plane.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/Phone.svg';

import './menuRoot.css';

const MenuRoot = () => {
  return (
    <Row className="menu-wrapper">
      <Col span={24} className="menu">
        <Col className="menu-list">
          <Col className="menu-item">
            Главная
          </Col>
          <Col className="menu-item">
            Условия
          </Col>
          <Col className="menu-item">
            Услуги
          </Col>
          <Col className="menu-item">
            О нас
          </Col>
          <Col className="menu-item">
            Контакти
          </Col>
        </Col>
        <Col className="menu-actions">
          <Col className="menu-actions__item">
            <TelegramIcon />
          </Col>
          <Col className="menu-actions__item">
            <MailIcon />
          </Col>
          <Col className="menu-actions__item">
            <PhoneIcon />
          </Col>
        </Col>
      </Col>
    </Row>
  )
}

export default MenuRoot;