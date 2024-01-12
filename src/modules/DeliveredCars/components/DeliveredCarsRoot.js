import { Col, Row } from "antd";

import './deliveredCarsRoot.css';

import image1 from '../../../assets/a2ed4d97-34b4-4f44-9c4c-463f88f6f2c9.avif';
import image2 from '../../../assets/2715aa80-be29-480d-ae0d-09f5298cd734.avif';
import image3 from '../../../assets/be6dd1dd-31d5-4f77-9020-d5844fc0d324.png';

import Carousel from "../../../components/Carousel/Carousel";
import { useEffect, useState } from "react";
import { getDeliveredCarsForShow } from "../../../lib/api/deliveredCars";

const DeliveredCarsRoot = () => {
  const [deliveredCars, setDeliveredCars] = useState([
    {
      createdAt: "2024-01-02T18:46:47.507Z",
      id: 11,
      image: image1,
      show: true,
      updatedAt: "2024-01-02T18:46:52.561Z"
    },
    {
      createdAt: "2024-01-02T18:46:47.507Z",
      id: 11,
      image: image2,
      show: true,
      updatedAt: "2024-01-02T18:46:52.561Z"
    },
    {
      createdAt: "2024-01-02T18:46:47.507Z",
      id: 11,
      image: image3,
      show: true,
      updatedAt: "2024-01-02T18:46:52.561Z"
    }
  ]);

  const fetchDeliveredCars = async () => {
    try {
      // const data = await getDeliveredCarsForShow();
      // console.log(data, 'data');
      // setDeliveredCars(data);
    } catch (error) { }
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
                <img src={item.image} alt="image" />
              </div>
            ))}
          </Carousel>
        </Col>
      </Col>
    </Row>
  )
}

export default DeliveredCarsRoot;
