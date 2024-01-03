
import AboutUsRoot from "../../../modules/AboutUs";
import ContactsRoot from "../../../modules/Contacts";
import DeliveredCarsRoot from "../../../modules/DeliveredCars";
import DeliveryReasonsRoot from "../../../modules/DeliveryReasons";
import FooterRoot from "../../../modules/Footer";
import HowWeWorkRoot from "../../../modules/HowWeWork";
import NeedConsultationRoot from "../../../modules/NeedConsultation";
import PartnersRoot from "../../../modules/Partners";
import PriceListRoot from "../../../modules/PriceList";
import ReviewsRoot from "../../../modules/Reviews";
import WhatCanDeliverRoot from "../../../modules/WhatCanDeliver";
import MainView from "./MainView/MainView";

import './mainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <MainView />
      <WhatCanDeliverRoot />
      <NeedConsultationRoot />
      <AboutUsRoot />
      <PartnersRoot />
      <HowWeWorkRoot />
      <DeliveredCarsRoot />
      {/* <DeliveryReasonsRoot />
      <PriceListRoot />
      <ReviewsRoot />
      <ContactsRoot />
      <FooterRoot /> */}
    </div>
  )
}

export default MainPage;