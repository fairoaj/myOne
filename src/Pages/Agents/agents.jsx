import React from 'react';
import {tooltrip} from "antd";
import "./agents.css"
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default function Agents(){
    return(
        <div>
               <Header/>
  <div className="container">
    <div className="page-header"><h1>Bus Booking Agent Application</h1></div>
    <div className="gap gap-small" />
    <div className="row">
      <div className="col-md-12">
        <h4>We think that agents can do bus booking without calling each bus operator asking for seats and then confirming via multiple telephone calls.
          You can select a bus, view the seat chart, complete booking without a single call to inform or confirm your bookings with bus operator.
          In order to achieve this, we have developed an <a href="https://play.google.com/store/apps/details?id=com.techkitez.agent">Agent Bus Booking Application</a>
          to enable all the bus booking agents to book their seat request through an app within few clicks. Get your bus agent account today to save time and telephone bills</h4>
        <h4>Currently more than 156 agents using this application to attend their bus booking requirements</h4>
      </div>
    </div>
    <div className="gap gap-small" />
  </div>
  <div className="bg-holder">
    <div className="bg-mask" />
    {/*<div class="bg-blur" style="background-image:url(img/1280x848.png);"></div>*/}
    <div className="bg-content">
      <div className="container">
        <div className="gap" />
        <h1 className="text-center text-white mb20">Why do agents love this app?</h1>
        <div className="row row-wrap">
          <div className="col-md-4">
            {/* START TESTIMONIAL */}
            <div className="testimonial text-white">
              <div className="testimonial-inner">
                <blockquote>
                  <p>We are using this agent app since 2016 and it has helped us to reduce phone bill cost
                    and a lot of time on calling bus operators to get a seat. Now we are serving our customers in just few
                    clicks to fulfill their booking requirements.</p>
                </blockquote>
              </div>
              <div className="testimonial-author">
                <p className="testimonial-author-name">Vathana </p><cite><h4>Mahaluxmy Booking Center, Wellawatta</h4></cite>
              </div>
            </div>
            {/* END TESTIMONIAL */}
          </div>
          <div className="col-md-4">
            {/* START TESTIMONIAL */}
            <div className="testimonial text-white">
              <div className="testimonial-inner">
                <blockquote>
                  <p>I have been using this app more since 2015. I do not have worries about bus operators
                    forgetting to mark our requested seats. Also I could able to get rid of multiple
                    communication with bus operators to get a seat and to confirm it</p>
                </blockquote>
              </div>
              <div className="testimonial-author">
                <p className="testimonial-author-name">Fawas Mohamed</p><cite><h4>Lagaan Bus Booking Center, Akkaraipattu</h4></cite>
              </div>
            </div>
            {/* END TESTIMONIAL */}
          </div>
          <div className="col-md-4">
            {/* START TESTIMONIAL */}
            <div className="testimonial text-white">
              <div className="testimonial-inner">
                <blockquote>
                  <p>After started to use this app, we are able to access all the bus seat chart in real time
                    and able to book a seat quickly. The automatic journey sms with our contact detail
                    to passenger enabled convenient bookings. </p>
                </blockquote>
              </div>
              <div className="testimonial-author">
                <p className="testimonial-author-name">Maheswaran Athavan</p><cite><h4>MAM Digital Studio, Chavakacheri</h4></cite>
              </div>
            </div>
            {/* END TESTIMONIAL */}
          </div>
        </div>
        <div className="gap-small gap" />
      </div>
    </div>
  </div>
  <div className="container">
    <div className="gap-small gap" />
    <div className="row">
      <div className="col-lg-12">
        <div className="well well-lg">
          <h1 className="text-center">Are you a bus booking agent? Get your account today - <a href="/contact-us"><strong>Contact Us</strong></a></h1>
        </div>
      </div>
    </div>
    <div className="gap gap-small" />
    <h1>Who are using?</h1>
    <div className="row">
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>A.B.I Lanka </h4>
              <address>Valvettithurai</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>A.G.N Multishop</h4>
              <address>Nelliady</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>ABI</h4>
              <address>Nelliady</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>ASR Hotel</h4>
              <address>Jaffna Town</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Abi Velan Vanibam</h4>
              <address>Kuncharkadai</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Achchuvely Liberty</h4>
              <address>Achchuvely</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Ad Communication</h4>
              <address>Akkaraipattu</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Aircom Travels</h4>
              <address>Jaffna</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Amsha Booking Center</h4>
              <address>Neervely &amp; Thaddatheru Jn</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Annai Muthumari Booking Centre</h4>
              <address>Nelliady</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Annai Muthumari Travels</h4>
              <address>Valvettithurai</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Astraluxumie Book Shop</h4>
              <address>Pettah</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Avro</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Aynkaran</h4>
              <address>Jaffna</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Bahawan Booking Center</h4>
              <address>Kotahena</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Benedict Express</h4>
              <address>Kilinochchi</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Bismilla Lodge Booking Center</h4>
              <address>Maradana</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Bus Zone</h4>
              <address>Nelliady</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Buy1.lk</h4>
              <address>Batticaloa</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Celcet</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>City Bake House</h4>
              <address>Point Pedro</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>City Communication</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>City Communication</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Colombo Guest 119</h4>
              <address>Maradana</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Country Travel Discoveries</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Data Com</h4>
              <address />
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Easy Taxies and Tours</h4>
              <address>Ragama</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Eire Ceylon Travels</h4>
              <address>Srimath Bandaranayaka Mawatha, Colombo  12</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Elanko Booking Centre</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Euro Phone World</h4>
              <address>Batticaloa</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Geetha Communication</h4>
              <address>Armour Street</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Global Express</h4>
              <address>Valvettithurai</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Golden Dragon Booking</h4>
              <address>Jaffna Town</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Green Grass Hotel</h4>
              <address>Jaffna</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Green Lodge Booking Center</h4>
              <address>Maradana</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Guna Communication</h4>
              <address>Kotahena</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Happy Communication</h4>
              <address>Kotahena</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Harris Tours</h4>
              <address>Kotahena</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Hotel Lovely</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Hotel South Asia</h4>
              <address>Pettah</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>JK Communication</h4>
              <address>Kotahena</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>JK fitness</h4>
              <address>Point Pedro</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>JRM Textiles</h4>
              <address>Point Pedro</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Jarat Booking</h4>
              <address>Kotahena</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Jasmine Printers</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Javi Travels</h4>
              <address>Nallur</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>K.T.K Fancy &amp; Book Shop</h4>
              <address>Udupiddy</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Kajamugan Multi Center</h4>
              <address>Puttur</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Kajan Star Travels</h4>
              <address>Jaffna</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Keerthi Enterprises</h4>
              <address>Mullaitivu</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Kesawan Bus Booking</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>King Star Travels</h4>
              <address>Jaffna Town</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Kochikadai Post Office</h4>
              <address>Kochikadai</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Kopay Kajamugan Communication</h4>
              <address>Kopay</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Krish Technologies</h4>
              <address>Point Pedro</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Lagan Bus Booking Center</h4>
              <address>Akkaraipattu</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Laksmi Booking Center</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Laxmi Transport</h4>
              <address>Hulftsdorp</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Lucky Bus Booking Service</h4>
              <address>Kochikadai</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Lucky7 Booking Center</h4>
              <address>Maradana</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Lyra Net Com</h4>
              <address>Avarangal</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>MAM Digital Studio</h4>
              <address>Chavakacheri</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>MSD Booking</h4>
              <address>Valvettithurai</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Madonna Travels</h4>
              <address>Kotahena</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Mahaluxmy Booking Center</h4>
              <address>Point Pedro</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Mahaluxmy Booking Center</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Mahanet Technologies</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Mallakam Ranjan Booking</h4>
              <address>Mallakam</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Mano Travels</h4>
              <address>Jaffna</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Manthikai Ambal Communication</h4>
              <address>Manthikai</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Maruthy Booking Center</h4>
              <address>Jaffna Town</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Mayoora Booking Center</h4>
              <address>Pettah</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Mayuri Booking Center</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Medobal Lanka </h4>
              <address>Jaffna</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Mega Bus Booking (Kesawan)</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Muththu Booking Center</h4>
              <address>Kotahena</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Muththu Booking Center</h4>
              <address>Kotahena</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>My Communication</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Mysoor Booking</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>NCG Booking Center</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Nadisha Booking</h4>
              <address>Vavuniya</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Nagapoosani Booking Center</h4>
              <address>Thondamanaru</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Nallur Kanthan Travels</h4>
              <address>Nallur</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Naren Communication</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>New eTours Lanka</h4>
              <address>Pettah</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Newstar Booking Center</h4>
              <address />
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Nithilam Booking</h4>
              <address>Urumpirai</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Nixon Booking</h4>
              <address>Wattala</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>North West</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Nusa Inn</h4>
              <address>Dam Street Pettah</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>PK Booking Center</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>PMT Travel &amp; Tours</h4>
              <address>Company Theru</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>PPN Booking</h4>
              <address>Kotahena</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>PPN Booking</h4>
              <address>Jaffna</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>PPN Booking</h4>
              <address>Kotahena</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Pannai Vikki Booking</h4>
              <address>Pannai</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Peak Route Communication</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Phothigai</h4>
              <address>Chavakacheri</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Pirasanth VVT</h4>
              <address>Valvettithurai</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Pragash Electronics</h4>
              <address>Point Pedro</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Prashanna Booking</h4>
              <address>Jaffna</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Prince Booking</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Print Art</h4>
              <address>Jaffna</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>RSK Brothers</h4>
              <address>Kotahena</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Rahuman Lodge</h4>
              <address>Kotahena</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Rainbow Cabs</h4>
              <address>Valvettithurai</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Raj Booking</h4>
              <address>Polikandy</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Raja Travels Booking Center</h4>
              <address>Batticaloa</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Rajan Booking Center</h4>
              <address>Point Pedro</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Rameyaa Video</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Ranja Cabs</h4>
              <address>Velvettithurai</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Ratna Shopping Center</h4>
              <address>Thikkam Road, Alvai West</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Royal Booking Center</h4>
              <address>Akkaraipattu</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>S.N Com</h4>
              <address>Jaffna</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>SS Booking Center</h4>
              <address>Maradana</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>STK Tour</h4>
              <address>Kodikamam</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>STS Travels and Tours</h4>
              <address>Kotahena</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>SVK Electricals</h4>
              <address>Achchuvely</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Safe Travels</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Sarathi Booking</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Saravanaa Booking Center</h4>
              <address>Kotahena</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Shankar Booking</h4>
              <address>Kotahena</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Shri Ram Book Centre</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Siva VVT Booking</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Sky Rose Booking</h4>
              <address>Jaffna</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Skynet</h4>
              <address>Valvettithurai</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Sri Book Center</h4>
              <address>Chavakacheri</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Sri Murukan Siruppiddy</h4>
              <address>Siruppiddy</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Star Link Phone Shop</h4>
              <address>Point Pedro</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Studio Green</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Suja Fashion World</h4>
              <address>Valvettithurai</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Sumo Pharmacy</h4>
              <address>Kotahena</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Sunrise</h4>
              <address>Thondaimanaru</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Sunsakthy Traders</h4>
              <address>Jaffna</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Suriyan Rest</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>TCN Express</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>TUS Bala Booking</h4>
              <address>Negombo</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Tech Hub</h4>
              <address>Kotahena</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Thana Beauty Bar</h4>
              <address>Jaffna</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Thanarajah Booking</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Tharsan Booking Center</h4>
              <address>Kotahena</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Thas Booking VVT</h4>
              <address>Valvettithurai</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>The Phone Shop</h4>
              <address>Nelliady</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Theme Vision Studio</h4>
              <address>Nelliady</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Thulasi Travels</h4>
              <address>Udupiddy</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>V2 Travels</h4>
              <address>Vavuniya</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>VK Phone Shop</h4>
              <address>Valvettithurai</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>VSK Inn</h4>
              <address>Jaffna Town</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Vadashery Booking Center</h4>
              <address>Periyavillan</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Varany Booking Center</h4>
              <address>Jaffna Town</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Vayuputhraa</h4>
              <address>Jaffna Town</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Velavan Express</h4>
              <address>Jaffna</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Vibirana Store</h4>
              <address>Thondamanaru</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Vicknah Communication</h4>
              <address>Kondavil</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>Yarl Express</h4>
              <address>Kotahena</address>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="booking-list">
          <li>
            <div className="booking-item booking-item-small">
              <h4>iBus Booking</h4>
              <address>Wellawatta</address>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <h4><strong>Conditions:</strong></h4>
        <ul>
          <li>
            <p>Bus operator has to approve you to be an agent for their buses</p>
          </li>
          <li>
            <p>Seat cancellation is allowed through bus operator</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
      <Footer/>


        </div>
    )
}