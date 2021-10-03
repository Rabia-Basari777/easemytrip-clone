import React from "react";
import "../style/flightroute.css";
import { Link } from "react-router-dom";
const FligthRouteDetail = () => {
  return (
    <>
      <div className="top">Top Flight Route</div>
      <div className="container">
        <div className="leftbox">
          <div className="eft">
            <p id="mar" class="destination">
              Delhi to Mumbai (DEL-BOM)
            </p>
            <p id="mar" class="destination">
              Mumbai to Delhi (BOM-DEL)
            </p>
            <p id="mar" class="destination">
              Delhi to Goa (DEL-GOI)
            </p>
            <p id="mar" class="destination">
              Delhi to Bangalore (DEL-BLR)
            </p>
            <p id="mar" class="destination">
              Mumbai to Goa (BOM-GOI)
            </p>
          </div>
          <div className="eft">
            <Link to="flights" id="mar1" class="button">
              Search Flight
            </Link>
            <Link to="/" id="mar1" class="button">
              Search Flight
            </Link>
            <Link id="mar1" class="button">
              Search Flight
            </Link>
            <Link id="mar1" class="button">
              Search Flight
            </Link>
            <Link id="mar1" class="button">
              Search Flight
            </Link>
          </div>
        </div>

        <div className="rightbox">
          <div className="eft">
            <p id="mar" class="destination">
              Delhi to Patna (DEL-PAT)
            </p>
            <p id="mar" class="destination">
              Delhi to Kolkata (DEL-CCU)
            </p>
            <p id="mar" class="destination">
              Delhi to Pune (DEL-PNQ)
            </p>
            <p id="mar" class="destination">
              Kolkata to Delhi (CCU-DEL)
            </p>
            <p id="mar" class="destination">
              Mumbai to Bangalore (BOM-BLR)
            </p>
          </div>
          <div className="eft">
            <Link id="mar1" class="button">
              Search Flight
            </Link>
            <Link id="mar1" class="button">
              Search Flight
            </Link>
            <Link id="mar1" class="button">
              Search Flight
            </Link>
            <Link id="mar1" class="button">
              Search Flight
            </Link>
            <Link id="mar1" class="button">
              Search Flight
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export { FligthRouteDetail };
