
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "../Pages/HomePage/HomePage";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import SeatsPage from "../Pages/SeatsPage/SeatsPage";
import BookingPage from "../Pages/BookingPage/BookingPage";
import ContractUs from "../Pages/ContactUs/contactus";
import Privacyx from "../Pages/Privacy/Privacy";
import AboutUs from '../Pages/Aboutus/aboutus';
import Faq from '../Pages/FAQ/faq';
import Termsandcondition from '../Pages/Termsandcondition/termsandcondition';
import Offers from '../Pages/Offers/offers';
import Agents from '../Pages/Agents/agents';
import Busoperators from '../Pages/BusOperators/busoperators';
import route from '../Pages/Routes/route';
import ServiceUPdate from '../Pages/ServiceUpdate/serviceupdate'

export default function AppRoute() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/buses/:departure/:arrival/:date" component={CheckoutPage} />
      <Route
        path="/seats/:id/:departure/:arrival/:date"
        component={SeatsPage}
      />
      <Route path="/booking/:date/:id" component={BookingPage} />
      <Route path="/contactus" component={ContractUs} />
      <Route path="/privacypolicy" component={Privacyx} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/faq" component={Faq} />
      <Route path="/termsandcondition" component={Termsandcondition} />
      <Route path="/offers" component={Offers} />
      <Route path="/agents" component={Agents} />
      <Route path="/busoperators" component={Busoperators} />
      <Route path="/routes" component={route} />
      <Route path="/serviceupdates" component={ServiceUPdate} />
    </Router>
  );
}
