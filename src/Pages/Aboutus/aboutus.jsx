import React from 'react';
import {tooltrip} from "antd";
import "./aboutus.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default function AboutUs(){
    return(
        <div>
          <Header/>
            <div className="container">
  <div className="page-header"><h1>About Us</h1></div>
  <div className="gap gap-small" />
  <div className="row">
    <div className="col-md-8">
      <p><strong>Techkitez (Pvt) Ltd</strong> developed "<strong>BusSeat.lk</strong>" - an innovative online bus ticket booking platform,
        envisioning a hassle-free and enhanced public transportation system in Sri Lanka.
        Since our inception in 2015, we have managed to effectively capture a plethora of returning</p>
      <p>Public transport, specifically travel by bus is a large growing business in Sri Lanka and other countries;
        hence innovatory mechanisms towards bus ticket booking systems is imperative to adequately provide a
        user-friendly interface for the passenger to reserve a seat on a journey, and an effective compilation
        and maintenance of individual records for bus companies and regulatory bodies. </p>
      <p>In the Sri Lankan context, it is deduced that almost all aspects of information relative to bus transport
        has been traditionally operated manually. This includes the publishing of schedules, bookings and
        reservations, and the individual data relevant to each bus in the system. This leads to a tremendous
        backlog, and with the continually growing demand for public transport, it is essential that an
        all-encompassing system is implemented by us,the largest bus booking software provider governing
        all aspects of bus transportation in Sri Lanka, for an effective and productive transportation system. </p>
      <p>An efficient transport system is the key for the betterment of a country. Although the transport system
        in Sri Lanka has seen many improvements over time, the bus ticket booking platform still lacks a significant
        technology advantage. Pens and papers are unable to cope with  the massive booking requests from passengers
        all over the Island. Since our inception, we have seen that the general public and tourists alike are
        not completely aware of bus timetables and how to find a bus, and where to find it. After using our platform,
        Around 100,000 people from all parts of the country have given us very positive feedback that the online
        bus ticket booking platform has improved their journey with efficiency and convenience, two pertinent
        and fundamental factors necessary to improve Sri Lanka's transport system.
      </p>
      <p>A transport system is the main connecting bridge between two places. As Sri Lanka's tourism potential
        continues to unravel, its transport system has to evolve parallelly to cater to the growing demand for
        an effective transport network, not just from the general public but from tourists as well. With more
        tourists projected to arrive on Sri Lanka's shores every year, each individual tourist expects
        an efficient transport system to make their travel in Sri Lanka a memorable one. Most  developed countries
        have a form of online bus ticket booking available. Thereby as Sri Lanka develops its infrastructure into
        South Asia's emerging hotspots, it is imperative that its transport and technological infrastructure is
        developed as well.
        BusSeat.lk is helping the tourist industry by way of providing a very user-friendly platform for the
        tourists to review and book buses to travel to their preferred destination, according to their itinerary.
        Currently, Busseat.lk services bus routes to almost all tourism hotspots around the island. Hence,
        we are proud to say that we have played a role in assisting a lot of tourists to find buses and pre book
        them. Tourists pre book the bus seats from their own country before visiting  Sri Lanka..
      </p>
    </div>
    <div className="col-md-4">
      <img src="../../static/images/logo.png" className="img-responsive" alt="BusSeat.lk logo" />
    </div>
  </div>
  <div className="gap" />
</div>
        <Footer/>
        </div>
    )
    
}