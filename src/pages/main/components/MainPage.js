
import AboutUsRoot from "../../../modules/AboutUs";
import DeliveredCarsRoot from "../../../modules/DeliveredCars";
import NeedConsultationRoot from "../../../modules/NeedConsultation";
import PartnersRoot from "../../../modules/Partners";
import PriceListRoot from "../../../modules/PriceList";
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
      <DeliveredCarsRoot />
      <PriceListRoot />
    </div>
  )
}

export default MainPage;