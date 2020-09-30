import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Help from "../HelpPage/Help";
import HomePage from "../HomePage/HomePage";
import BusOperater from "../BusOperater/BusOperater";
import OnwerOne from "../BusTravellersComponent/OwneroneComponent/OnwerOne";
import OnwerTwo from "../BusTravellersComponent/OnwertwoComponent/OnwerTwo";
import OnwerThree from "../BusTravellersComponent/OnwerThreeComponent/OnwerThree";
import Contact from "../ContactPage/Contact";
import Aboutus from "../AboutUsPage/AboutUs";
import Privacy from "../PrivacyPage/privacy";

export default function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/Privacy">
            <Privacy />
          </Route>
          <Route path="/Aboutus">
            <Aboutus />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/OnwerThree">
            <OnwerThree />
          </Route>
          <Route path="/OnwerTwo">
            <OnwerTwo />
          </Route>
          <Route path="/OnwerOne">
            <OnwerOne />
          </Route>
          <Route path="/BusOperater">
            <BusOperater />
          </Route>
          <Route path="/Help">
            <Help />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
