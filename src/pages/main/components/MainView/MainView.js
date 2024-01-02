import { Button, Col, Row } from "antd";

import { ReactComponent as MoneyIcon } from '../../../../assets/money.svg';
import { ReactComponent as CarIcon } from '../../../../assets/car.svg';
import { ReactComponent as CalcIcon } from '../../../../assets/calc.svg';
import { ReactComponent as CertIcon } from '../../../../assets/cert.svg';

import image from '../../../../assets/image1.png';
import image1 from '../../../../assets/qwe.png';
import image2 from '../../../../assets/image 2.png';

import './mainView.css';
import { createOrderRequest } from "../../../../lib/api/orderApi";

const extra_offers = [
  {
    title: 'Без посредников',
    description: 'Нет посредников - нет переплаты. Вы заранее будете знать стоимость услуг. Фиксируем все цены в договоре доставки.',
    extraClass: 'offer-item--second',
    icon: <MoneyIcon />,
  },
  {
    title: 'Более 5000 авто',
    description: 'За время нашей плодотворной работы мы доставили тысячи различных видов техники по всему миру. Присоединяйтесь.',
    extraClass: 'offer-item--third',
    icon: <CarIcon />,
  },
  {
    title: 'Без переплат',
    description: 'Мы не выставляем никаких дополнительных платежей после оплаты авто. Финальную цену Вы видите еще до покупки/аукциона',
    extraClass: 'offer-item--forth',
    icon: <CalcIcon />,
  },
  {
    title: 'Без посредников',
    description: 'Вы получите полную информацию по таможне либо пройдете ее с нашим специалистом',
    extraClass: 'offer-item--fifth',
    icon: <CertIcon />,
  },
]

const MainView = () => {
  const createOrder = async () => {
    const config = {
      name: 'Nikita',
      number: '+375203939399'
    }

    await createOrderRequest(config);
  }
  return (
    <Row className="main-view">
      <Col span={24} className="main-view-wrapper">
        <Col span={24} className="main-view-block">
          <Col span={24} className="main-view-content">
            <Col className="main-offer__left">
              <Col className="left-content">
                <Col className="offer-description-1"><span>Найдем автомобиль,</span> который превзойдет ваши ожидания</Col>

                <Col className="offer-description-2">Подбор, покупка и доставка авто из США, Южной Кореи и Китая с реальной денежной выгодой до 40% от рынка РБ</Col>

                <Button onClick={createOrder} className="offer-button">
                  Подобрать
                </Button>
              </Col>
            </Col>

            <Col className="main-offer__right">
              <img className="wheel" src={image2} alt='car' />
            </Col>
          </Col>

          <Col span={24} className="offers-list-wrapper">
            <Col span={24} className="offers-list">
              <Col className="offer-item offer-item--first" />

              {extra_offers.map((elem) => (
                <Col className={`offer-item ${elem.extraClass}`}>
                  <Col>
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
            <img src={image} alt='car' />
          </Col>
        </Col>
      </Col>
    </Row>
  )
}

export default MainView;