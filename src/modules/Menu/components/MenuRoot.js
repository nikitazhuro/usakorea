import { Col, Row } from "antd";
import { Link } from "react-scroll";
import { useState } from "react";

import './menuRoot.css';

import { ReactComponent as MailIcon } from '../../../assets/Mail.svg';
import { ReactComponent as TelegramIcon } from '../../../assets/Paper_Plane.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/Phone.svg';

import MenuModal from "../../../components/MenuModal/MenuModal";

const MenuRoot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuModal isOpen={isOpen} setIsOpen={setIsOpen} />

      <Row className="menu-wrapper">
        <Col span={24} className="menu">
          <Col className="menu-list">
            <Col className="menu-item">
              <Link activeClass="active" smooth spy to="main">
                Главная
              </Link>
            </Col>
            <Col className="menu-item">
              <Link activeClass="active" smooth spy to="whatCanDeliver">
                Услуги
              </Link>
            </Col>
            <Col className="menu-item">
              <Link activeClass="active" smooth spy to="about">
                О нас
              </Link>
            </Col>
            <Col className="menu-item">
              <Link activeClass="active" smooth spy to="howWeWork">
                Схема работы
              </Link>
            </Col>
            <Col className="menu-item">
              <Link activeClass="active" smooth spy to="price">
                Цены
              </Link>
            </Col>
            <Col className="menu-item">
              <Link activeClass="active" smooth spy to="contacts">
                Контакты
              </Link>
            </Col>
          </Col>
          <Col className="menu-burger">
            <Col className="menu-burger-button" onClick={() => setIsOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
                <path d="M0 1H24" stroke="black" />
                <path d="M0 7H24" stroke="black" />
                <path d="M0 13H24" stroke="black" />
              </svg>
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
    </>
  )
}

export default MenuRoot;