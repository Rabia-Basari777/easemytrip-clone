import React from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div>
          <img
            className="mainlogo"
            src="https://www.easemytrip.com/images/brandlogo/emtlogo_new4.svg"
            alt=""
          />
        </div>
        <div className="navbaroption">
          <ul>
            <li>
              <Link className="flight" to="/flights">
                FLIGHTS
              </Link>
            </li>{" "}
            <li className="flight">HOTELS</li>
            <li className="flight">TRAINS</li>
            <li className="flight">BUS</li>
            <li className="flight">HOLIDAYS</li>
            <li className="flight">CABS</li>
            <li className="flight">ACTIVITIES</li>
            <li className="flight">GIFTCARDS</li>
            <li className="flight">CHARTERS</li>
            <li className="flight" id="last">
              MORE
              <i className="down_arw"></i>
            </li>
          </ul>
        </div>
        <div className="support">
          <div className="hsupport">
            <div className="supportst">
              <div id="marg" className="supporticon"></div>
              <div id="marg">
                <b>24x7 Helpline</b>
              </div>
              <div id="marg">
                <i className="down_arw"></i>
              </div>
            </div>
            <div className="supportst">
              <div id="marg" className="supporticon"></div>
              <div id="marg">
                <b>English</b>
              </div>
              <div id="marg">
                <i className="down_arw"></i>
              </div>
            </div>
          </div>
          <div id="account" className="supportst">
            <div id="marg" className="supporticons"></div>
            <div id="marg">
              <b>nn@gmail.com</b>
            </div>
            <div id="marg">
              <i className="down_arw"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Navbar };
