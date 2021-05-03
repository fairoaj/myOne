import React from 'react';
import {tooltrip} from "antd";
import "./faq.css"
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default function Faq(){
    return(
        <div>
<Header/>
<div className="container">
  <div className="page-header"><h1>FAQ - Frequently Asked Questions</h1></div>
  <div className="gap gap-small" />
  <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" id="heading1">
        <h4 className="panel-title">
          <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="false" aria-controls="collapse1">
            BUS SEAT BOOKING
          </a>
        </h4>
      </div>
      <div id="collapse1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1" aria-expanded="false" style={{height: 0}}>
        <div className="panel-body">
          <p><strong>How to book your bus tickets with BusSeat.lk?</strong></p>
          <p>Search buses as per your route and journey date =&gt; Select preferred bus =&gt; Choose preferred seats
            and give passenger details =&gt; Pay =&gt; Get tickets via SMS/Email
          </p>
        </div>
      </div>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" id="heading2">
        <h4 className="panel-title">
          <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="false" aria-controls="collapse2">
            PAYMENT METHODS
          </a>
        </h4>
      </div>
      <div id="collapse2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2" aria-expanded="false" style={{height: 0}}>
        <div className="panel-body">
          <p><strong>Online Payments:</strong> Any Credit cards (VISA, MASTER, AMEX), Debit cards (should be activated by
            your bank to do online payments), eZ Cash (Dialog, Etisalat, and Hutch), FriMi, mCash.</p>
          <p><strong>Offline Payments:</strong> Deposit total amount to our bank accounts (Nation Trust Bank or
            Hatton National Bank) by calling our hotline to book the seats. But this is hassle for you to go to
            bank unless you have online banking to do CEFT trasnfers. We do not accept SLIPS transfer which
            will not be immediately credit money to our bank accounts</p>
          <p>Partial deposits are not accepted and it will lead to cancellation if the full amount is not deposited</p>
          <p><i>We encourage online payments for hassle free and fast booking experiece</i></p>
        </div>
      </div>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" id="heading3">
        <h4 className="panel-title">
          <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="false" aria-controls="collapse3">
            CANCELLATION
          </a>
        </h4>
      </div>
      <div id="collapse3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3" aria-expanded="false" style={{height: 0}}>
        <div className="panel-body">
          Call us <strong>076 676 4848</strong> from 8 am to 5 pm daily to cancel your tickets.
          If you could not reach the hotline, Email us to <strong><a href="mailto:info@busseat.lk">info@busseat.lk</a></strong>
          with the details. Please read the terms and condtions to know about cancellation of booked tickets.
        </div>
      </div>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" id="heading4">
        <h4 className="panel-title">
          <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="false" aria-controls="collapse4">
            REFUNDS
          </a>
        </h4>
      </div>
      <div id="collapse4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4" aria-expanded="false" style={{height: 0}}>
        <div className="panel-body">
          <p><strong>How can I get refund in case I cancel my bus ticket?</strong></p>
          <p>Refund amount is calculated as per cancellation policy. The amount will be credited to any bank
            accounts in Sri Lanka or to a PayPal account. Unfortunately we are unable to refund to the original
            payment account</p>
          <p><strong>I have given wrong account for refund. What should I do?</strong></p>
          <p>You have to inform us and if the refund is not initiated at that time, we can process the refund to
            correct account. If the refund is already initiated and it is successful, we cannot do anything from
            our end. But if the refund is returned to us, we can process refund again with applicable charges occured </p>
        </div>
      </div>
    </div>
  </div>
</div>

             <Footer/> 

        </div>
        )

    }