import { Col, Row } from "antd";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './contactsRoot.css';

import ContactsInfo from "./ContactsInfo";

const ContactsRoot = () => {
  return (
    <>
      <section id="contacts" />
      <Row className="contacts-root">
        <Col span={24} className="contacts-wrapper">
          <Col span={24} className="contacts-block">
            <h1>Контакты</h1>
            <div className="contacts-content">
              <ContactsInfo />
              <div className="map">
                <YMaps>
                  <Map className="yandex-map" defaultState={{ center: [52.434385, 31.000097], zoom: 13 }}>
                    <Placemark geometry={[52.434385, 31.000097]} />
                  </Map>
                </YMaps>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </>
  )
}

export default ContactsRoot;
