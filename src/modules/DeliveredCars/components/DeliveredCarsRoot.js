import { Col, Image, Row } from "antd";

import deliveredCar1 from '../../../assets/deliveredCar1.png';
import deliveredCar2 from '../../../assets/deliveredCar2.png';
import deliveredCar3 from '../../../assets/deliveredCar1.png';
import deliveredCar4 from '../../../assets/deliveredCar2.png';

import './deliveredCarsRoot.css';

import Carousel from "../../../components/Carousel/Carousel";
import { useEffect, useState } from "react";
import { getDeliveredCarsForShow } from "../../../lib/api/deliveredCars";

const DeliveredCarsRoot = () => {
  const [deliveredCars, setDeliveredCars] = useState([]);

  const fetchDeliveredCars = async () => {
    try {
      const data = await getDeliveredCarsForShow();
      setDeliveredCars(data);
    } catch (error) {}
  }

  useEffect(() => {
    fetchDeliveredCars()
  }, [])
  return (
    <Row className="delivered-cars-root">
      <Col span={24} className="delivered-cars-wrapper">
        <Col span={24} className="delivered-cars-block">
          <Carousel maxLength={deliveredCars.length} title='Доставленные автомобили для наших клиентов'>
            {deliveredCars.map((item) => (
              <div className="carousel_item">
                <img src={`http://localhost:5000/${item.image}`} alt="image" />
              </div>
            ))}
          </Carousel>
        </Col>
      </Col>
    </Row>
  )
}

export default DeliveredCarsRoot;
