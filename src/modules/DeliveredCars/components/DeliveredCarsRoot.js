import { Col, Row } from "antd";

import deliveredCar1 from '../../../assets/deliveredCar1.png';
import deliveredCar2 from '../../../assets/deliveredCar2.png';
import deliveredCar3 from '../../../assets/deliveredCar1.png';
import deliveredCar4 from '../../../assets/deliveredCar2.png';

import './deliveredCarsRoot.css';

import Carousel from "../../../components/Carousel/Carousel";

const DeliveredCarsRoot = () => {
  return (
    <Row className="delivered-cars-root">
      <Col span={24} className="delivered-cars-wrapper">
        <Col span={24} className="delivered-cars-block">
          <Carousel title='Доставленные автомобили для наших клиентов'>
            <div className="carousel_item">
              <img src={deliveredCar1} alt="image" />
            </div>
            <div className="carousel_item">
              <img src={deliveredCar2} alt="image" />
            </div>
            <div className="carousel_item">
              <img src={deliveredCar1} alt="image" />
            </div>
            <div className="carousel_item">
              <img src={deliveredCar2} alt="image" />
            </div>
          </Carousel>
        </Col>
      </Col>
    </Row>
  )
}

export default DeliveredCarsRoot;
