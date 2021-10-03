import React from "react";
import { Link } from "react-router-dom";
import "../style/block.css";
const Block = () => {
  return (
    <>
      <div class="to_s">
        <div className="box">
          <div className="alertadv" id="box1">
            <div className="advHd" style={{ color: "#856404" }}>
              <strong>Important Info:</strong> To cancel/claim refund or
              reschedule/modify your <br />
              booking. <Link> click here</Link>
            </div>
          </div>
          <div className="alertadv2" id="box2">
            <div className="advHd" style={{ color: "#31708f" }}>
              <strong>Travel Guide:</strong>{" "}
              <Link>
                Get latest information on airlines & airports guidelines, <br />
                state-wise quarantine rules, travel checklists, web-checkin etc.
              </Link>
              <i className="arwright" style={{ top: "25px" }}></i>
            </div>
          </div>
        </div>
        <div className="clr"></div>
        <div className="alertadv-v2">
          <div className="advHd" style={{ color: "#155724" }}>
            <strong>FREE Full Refund due to Medical Reasons:</strong> EaseMyTrip
            brings an extraordinary offer in these tough times!
            <br />
            Get full refund for domestic ticket in case you cancel it due to
            medical sickness. Best Part - There are ZERO extra charges for this
            service. <Link>(View Coverage)</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export { Block };
