import React from "react";
import "../style/aboutease.css";

const AboutEase = () => {
  return (
    <>
      <div className="mid_pnl" style={{ marginTop: "40px" }}>
        <div className="innerWrap">
          <h4>Search Flights, Hotels, Bus and Holiday Packages</h4>
          <div
            className="para"
            style={{ fontStretch: "expanded", letterSpacing: "0.2px" }}
          >
            EaseMyTrip.com is one of the topmost travel companies of India and
            is a trusted name in the Indian travel industry. It is also known
            for providing the best travel deals to travelers. Being a strong
            network of 52,752 travel agents (as of September 30, 2019) and
            having more than 9.27 million direct customers, EaseMyTrip can
            satisfy all your travel needs. Here, You can book flight tickets,
            hotels, bus tickets, and holiday packages at a cost-effective price.
            So, why go anywhere else? Visit us for a memorable travel experience
            in your budget.
          </div>
        </div>
      </div>
    </>
  );
};

export { AboutEase };
