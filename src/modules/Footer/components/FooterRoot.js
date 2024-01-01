import { Col, Row } from "antd";

import './footerRoot.css';

const FooterRoot = () => {
  return (
    <Row className="footer-root">
      <Col span={24} className="footer-wrapper footer-border">
        <Col span={24} className="footer-content">
          <div className="footer-content__item footer-item">
            <div className="footer-item__logo" />
          </div>
          <div className="footer-content__item footer-item">
            <h4 className="footer-item__title">Реквизиты</h4>
            <div className="footer-item__content">
              ИП Гапонов Николай Анатольевич УНП 491626991BY57 ALFA 3013 2C31 2100 1027 0000 ЗАО "Альфа-Банк" 220013,г. Минск, ул. Сурганова, 43-47 ALFABY2X
            </div>
          </div>
          <div className="footer-content__item footer-item">
            <div className="footer-item-block">
              <h4 className="footer-item__title">Адрес</h4>
              <div className="footer-item__content">
                Гомель,ул.Ветковская 1
              </div>
            </div>
            <div className="footer-item-block">
              <h4 className="footer-item__title">Email</h4>
              <div className="footer-item__content">
                usakoreaby@yandex.ru
              </div>
            </div>
          </div>
          <div className="footer-content__item footer-item ">
            <div>
              <h4 className="footer-item__title">Телефоны</h4>
              <div className="footer-item__content">
                <div>+375 29 694 34 30</div>
                <div>+375 44 757 92 57</div>
                <div>+375 33 636 88 89</div>
              </div>
            </div>
            <div className="footer-item__telegram">
              <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                <path d="M35.6895 4.45104C35.5844 4.3602 35.4565 4.29983 35.3195 4.27647C35.1826 4.25311 35.0419 4.26765 34.9126 4.31851L4.0386 16.4009C3.72386 16.5231 3.45737 16.7442 3.27928 17.031C3.10119 17.3179 3.02115 17.6548 3.05124 17.9911C3.08133 18.3273 3.2199 18.6447 3.44608 18.8954C3.67225 19.146 3.97378 19.3164 4.3052 19.3807L12.7968 21.0474V30.4683C12.7968 30.8328 12.9057 31.189 13.1096 31.4911C13.3134 31.7932 13.6029 32.0275 13.9409 32.1639C14.1585 32.2512 14.3906 32.2961 14.625 32.2964C14.8703 32.2959 15.113 32.2459 15.3386 32.1496C15.5642 32.0533 15.7681 31.9126 15.9382 31.7358L20.2038 27.3178L26.7546 33.0627C27.0867 33.3556 27.5138 33.518 27.9566 33.5198C28.15 33.519 28.3421 33.4887 28.5263 33.4299C28.8279 33.3344 29.0992 33.1615 29.3131 32.9284C29.5269 32.6953 29.6759 32.4101 29.7451 32.1014L35.9333 5.19753C35.9643 5.0627 35.958 4.92197 35.915 4.79046C35.8721 4.65894 35.7941 4.54161 35.6895 4.45104ZM4.26559 17.8817C4.25665 17.808 4.27325 17.7335 4.31262 17.6705C4.35199 17.6076 4.41174 17.5601 4.48192 17.5358L31.0888 7.12315L13.2645 19.8972L4.54133 18.1848C4.46739 18.174 4.3995 18.1379 4.34922 18.0826C4.29894 18.0273 4.26938 17.9563 4.26559 17.8817ZM15.0622 30.8888C14.9779 30.9756 14.8698 31.0353 14.7515 31.0604C14.6331 31.0855 14.51 31.0749 14.3978 31.0298C14.2855 30.9847 14.1893 30.9072 14.1212 30.8072C14.0531 30.7072 14.0164 30.5893 14.0156 30.4683V21.8914L19.2836 26.5074L15.0622 30.8888ZM28.5568 31.8242C28.5332 31.9276 28.4831 32.0231 28.4113 32.1012C28.3394 32.1793 28.2485 32.2373 28.1474 32.2695C28.0463 32.3017 27.9385 32.3069 27.8348 32.2846C27.731 32.2624 27.6349 32.2134 27.5559 32.1426L14.3858 20.5934L34.4495 6.21519L28.5568 31.8242Z" fill="white" />
              </svg>
            </div>
          </div>
        </Col>
      </Col>

      <Col span={24} className="footer-wrapper">
        <Col span={24} className="footer-add-info">
          <div>© 2023 USAKOREA. Все права защищены</div>
        </Col>
      </Col>
    </Row>
  )
}

export default FooterRoot;