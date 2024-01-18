import { Col, Row } from 'antd';

import './howWeWorkRoot.css';

import image from '../../../assets/how-we-work-car.png';

const howWeWorkList = [
  { count: '01', title: 'Заключение договора и оплата наших услуг' },
  { count: '02', title: 'Подбор автомобиля, торги и покупка автомобиля на аукционе' },
  { count: '03', title: 'Оплата авто, вывоз на стоянку, фотофиксация вашей покупки' },
  { count: '04', title: 'Бронь контейнера, получение букинга, загрузка авто' },
  { count: '05', title: 'Отправление контейнера и доставка в Клайпеду' },
  { count: '06', title: 'Доставка в Беларусь, фотофиксация, сообщаем вам' },
  { count: '07', title: 'Растаможка автомобиля самостоятельно или с нашей помощью' },
]

const HowWeWorkRoot = () => {
  return (
    <>
      <section id='howWeWork' />

      <Row className='how-we-work-root'>
        <Col span={24} className='we-wort-block'>
          <div className='we-work__left'>
            <div className='we-work__left-inside'>
              <h1>Как мы работаем?</h1>
              <div>
                <img src={image} alt='image' />
              </div>
            </div>
          </div>

          <div className='we-work__right'>
            <div className='we-work__right-inside'>
              {howWeWorkList.map((item) => (
                <div className='we-work__right-inside__item'>
                  <div className='we-work-item__count'>{item.count}</div>
                  <div className='we-work-item__title'>{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default HowWeWorkRoot;
