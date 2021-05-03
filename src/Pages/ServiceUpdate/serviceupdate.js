import React, { useState } from "react";
import { Grid, TextField, Snackbar } from "@material-ui/core";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./serviceupdate.css"

export default function ServiceUPdate(){
    return(
        <div>
          <Header/>

          <div className="container">
  <div className="page-header"><h1>Service Updates</h1></div>
  <div className="gap gap-small" />
  <div className="col-lg-6">
    <div className="fb-page" data-href="https://www.facebook.com/BusSeat.lk" data-width={500} data-height={1000} data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="true">
      <div className="fb-xfbml-parse-ignore">
        <blockquote cite="https://www.facebook.com/BusSeat.lk"><a href="https://www.facebook.com/BusSeat.lk">BusSeat.lk</a>
        </blockquote>
      </div>
    </div>
  </div>
  <div className="col-lg-6">
    <iframe id="twitter-widget-0" scrolling="no" frameBorder={0} allowTransparency="true" allowFullScreen="true" className="twitter-timeline twitter-timeline-rendered" style={{position: 'static', visibility: 'visible', display: 'inline-block', width: 520, height: 600, padding: 0, border: 'none', maxWidth: '100%', minWidth: 180, marginTop: 0, marginBottom: 0, minHeight: 200}} data-widget-id="profile:BusSeat_lk" title="Twitter Timeline" />
  </div>
</div>
     <Footer/>
          </div>
    )
}