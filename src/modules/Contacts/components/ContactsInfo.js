import { Tooltip } from "antd";
import { useEffect, useState } from "react";

const ContactsInfo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, [])


  return (
    <div className="contacts-info">
      <div className="contacts-info__row">
        <div className="contacts-info__item">
          <h3>Реквизиты</h3>
          <div>ИП Гапонов Николай Анатольевич УНП 491626991 BY57 ALFA 3013 2C31 2100 1027 0000 ЗАО "Альфа-Банк" 220013,г. Минск, ул. Сурганова, 43-47 ALFABY2X</div>
        </div>
        <div className="contacts-info__item contacts-info__item--second">
          {!isMobile
            ? (
              <>
                <h3>Адрес</h3>
                <div>Гомель,ул.Ветковская 1</div>
              </>
            )
            : (
              <>
                <div className="contacts-info__item--mob">
                  <h3>Адрес</h3>
                  <div className="address-block"><span>Гомель, </span><span>ул.Ветковская 1</span></div>
                </div>
                <div className="contacts-info__item--mob">
                  <h3>Email</h3>
                  <div className="mail-block"><span>usakoreaby</span><span>@yandex.ru</span></div>
                </div>
              </>
            )
          }
        </div>
      </div>
      <div className="contacts-info__row">
        <div className="contacts-info__item">
          <h3>Телефоны</h3>
          <div>
            <Tooltip title="Николай" color="#122e74" placement="right">
              <div className="phone-num-item">+375 29 694 34 30</div>
            </Tooltip>
            <Tooltip title="Александр" color="#122e74" placement="right">
              <div className="phone-num-item">+375 44 564 67 36</div>
            </Tooltip>
            <Tooltip title="Яков" color="#122e74" placement="right">
              <div className="phone-num-item">+375 44 720 73 75</div>
            </Tooltip>
          </div>

        </div>
        {!isMobile && (
          <div className="contacts-info__item contacts-info__item--last">
            <h3>Email</h3>
            <div>usakoreaby@yandex.ru</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactsInfo;
