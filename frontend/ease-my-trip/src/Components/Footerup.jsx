import React from "react";
import "../style/footerup.css";
const Footerup = () => {
  return (
    <>
      <div className="bottom_bdr_h">
        <div className="dark_clr_h">Why Book With Us?</div>
        <div className="light_clr_h">
          <div className="col_bot_1">
            <div className="img_col">
              <span className="eb_hp_i"></span>
            </div>
            <div className="rit_col">
              <h6>Easy Booking</h6>
              <p>
                We offer easy and convenient flight bookings with attractive
                offers.
              </p>
            </div>
          </div>
          <div className="col_bot_1">
            <div className="img_col">
              <span className="lp_hp_i"></span>
            </div>
            <div className="rit_col">
              <h6>Lowest Price</h6>
              <p>
                We ensure low rates on hotel reservation, holiday packages and
                on flight tickets.
              </p>
            </div>
          </div>
          <div className="col_bot_1">
            <div className="img_col">
              <span className="ed_hp_i"></span>
            </div>
            <div className="rit_col">
              <h6>Exciting Deals</h6>
              <p>
                Enjoy exciting deals on flights, hotels, buses, car rental and
                tour packages.
              </p>
            </div>
          </div>
          <div className="col_bot_1">
            <div className="img_col">
              <span className="sp_hp_i"></span>
            </div>
            <div className="rit_col">
              <h6>24/7 Support</h6>
              <p>
                Get assistance 24/7 on any kind of travel related query. We are
                happy to assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Footerup };
