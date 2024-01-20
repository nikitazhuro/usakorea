import { Col, Row } from "antd";

import { ReactComponent as MoneyIcon } from '../../../../assets/money.svg';
import { ReactComponent as CarIcon } from '../../../../assets/car.svg';
import { ReactComponent as CalcIcon } from '../../../../assets/calc.svg';
import { ReactComponent as CertIcon } from '../../../../assets/cert.svg';

import main from '../../../../assets/main.png';
import wheel from '../../../../assets/wheel.png';

import './mainView.css';

import OrderModal from "../../../../components/OrderModal/OrderModal";

import { useState } from "react";

const extra_offers = [
  {
    title: 'Без посредников',
    description: 'Нет посредников - нет переплат. Вы заранее будете знать стоимость услуг. Все цены фиксируются в договоре.',
    extraClass: 'offer-item--second',
    icon: <MoneyIcon />,
  },
  {
    title: 'Более 5000 авто',
    description: 'За время нашей плодотворной работы мы доставили тысячи различных видов техники. Присоединяйтесь!',
    extraClass: 'offer-item--third',
    icon: <CarIcon />,
  },
  {
    title: 'Без переплат',
    description: 'Мы не выставляем никаких дополнительных платежей после оплаты авто. Финальную цену Вы видите после аукциона.',
    extraClass: 'offer-item--forth',
    icon: <CalcIcon />,
  },
  {
    title: 'Помощь на таможне',
    description: 'Вы получите полную информацию по таможне или пройдете ее с нашим специалистом.',
    extraClass: 'offer-item--fifth',
    icon: <CertIcon />,
  },
]

const MainView = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openOrderModal = () => {
    setIsOpen(true);
  }
  return (
    <>
      <section id="main" />

      <Row className="main-view">
        <OrderModal isOpen={isOpen} setIsOpen={setIsOpen} />

        <Col span={24} className="main-view-wrapper">
          <Col span={24} className="main-view-block">
            <Col span={24} className="main-view-content">
              <Col className="main-offer__left">
                <Col className="left-content">
                  <Col className="offer-description-1"><span>Найдем автомобиль,</span> который превзойдет ваши ожидания</Col>

                  <Col className="offer-description-2">Подбор, покупка и доставка авто из США, Кореи и Китая с реальной денежной выгодой до 40% от рынка РБ</Col>

                  <button onClick={openOrderModal} className="offer-button">
                    Подобрать
                  </button>
                </Col>
              </Col>

              <Col className="main-offer__right">
                <Col span={24} className="car-block--mobile">
                  <img src={main} alt='car' />
                </Col>
                <img className="wheel" src={wheel} alt='car' />
              </Col>
            </Col>

            <Col span={24} className="offers-list-wrapper">
              <Col span={24} className="offers-list">
                <Col className="offer-item offer-item--first" />

                {extra_offers.map((elem) => (
                  <Col className={`offer-item ${elem.extraClass}`}>
                    <Col className="offer-item__wrapper">
                      <Col className="offer-item__title">
                        <span>{elem.title}</span>
                        {elem.icon}
                      </Col>
                      <Col className="offer-item__description">
                        <span>{elem.description}</span>
                      </Col>
                    </Col>
                  </Col>
                ))}
              </Col>
            </Col>

            <Col span={24} className="car-block">
              <img src={main} alt='car' />
            </Col>
          </Col>
        </Col>
      </Row>
    </>
  )
}

export default MainView;