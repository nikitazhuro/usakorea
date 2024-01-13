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
          <div>ИП Гапонов Николай Анатольевич УНП 491626991BY57 ALFA 3013 2C31 2100 1027 0000 ЗАО "Альфа-Банк" 220013,г. Минск, ул. Сурганова, 43-47 ALFABY2X</div>
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
                  <div>Гомель,ул.Ветковская 1</div>
                </div>
                <div className="contacts-info__item--mob">
                  <h3>Email</h3>
                  <div>usakoreaby@yandex.ru</div>
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
            <div>+375 29 694 34 30</div>
            <div>+375 44 757 92 57</div>
            <div>+375 33 636 88 89</div>
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
