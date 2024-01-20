import { Button, Col, Row } from "antd";
import { Link } from "react-scroll";
import { useState } from "react";

import logo_black from '../../../assets/logo_gray.png';

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
            <img src={logo_black} width={50} />
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
          <Col className="menu-burger" onClick={() => setIsOpen((prev) => {
            if (!prev) {
              document.body.style.overflow = 'hidden';
            } else {
              document.body.style = '';
            }
            return !prev;
          })}>

            <div className={`hamb__field ${isOpen ? 'active' : ''}`} id="hamb">
              <span className="bar"></span> <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </Col>
          <Col className="menu-actions">
            <Col className="menu-actions__item">
              <Button className="menu-actions__item--phone" href="https://t.me/+hmF--w1c5L45NDZi" target="_blank">
                <TelegramIcon />
              </Button>
            </Col>
            <Col className="menu-actions__item">
              <Button className="menu-actions__item--phone" href="mailto:usakorea@yandex.by">
                <MailIcon />
              </Button>
            </Col>
            <Col className="menu-actions__item">
              <Button className="menu-actions__item--phone" href="tel:+375447579257" target="_blank">
                <PhoneIcon />
              </Button>
            </Col>
          </Col>
        </Col>
      </Row>
    </>
  )
}

export default MenuRoot;