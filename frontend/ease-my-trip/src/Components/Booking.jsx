import "../style/booking.css";
import "../style/dropdown.css";
import Dropdown from "./Dropdown";
import { useState } from "react";
import Dropdownre from "./Dropdownre";
import arrow from "../image/arrow.png";

const Bookingmenu = () => {
  const [selected, setSelected] = useState("From");
  const [select, setselect] = useState("To");

  return (
    <>
      <div className="Bookinghead">
        <h1>
          <i className="fl_hp_i"></i>
          Search Lowest Airfare
        </h1>
        <div className="trip">
          <div>
            <button>One-Way</button>
          </div>
          <div id="same">Round-Trip</div>
          <div id="same">Multi-City</div>
        </div>
        <div
          style={{
            marginLeft: "11%",
            marginTop: "20px",
            display: "flex",
          }}
        >
          <Dropdown selected={selected} setSelected={setSelected} />
          <Dropdownre select={select} setselect={setselect} />
          <div className="dateand">
            <input type="date" placeholder="Departure"></input>
          </div>
          <div id="datea">
            <p> 1 Traveller(s)</p>
            <img src={arrow} alt="" />{" "}
          </div>
          <div id="datea">
            <p>Economy</p>
            <img src={arrow} alt="" />{" "}
          </div>
          <div className="butt">
            <img src="https://www.easemytrip.com/images/flight-img/search-icon-hp.png" />
            SEARCH{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export { Bookingmenu };

//  var selectField = document.getElementById("selectField");
//  var selectText = document.getElementById("selectText");
//
//  var list = document.getElementById("list");
//  var arrowIcon = document.getElementById("arrowIcon");

//  selectField.onclick = function () {
//    list.classList.toggle("hide");
//    arrowIcon.classList.toggle("rotate");
//  };

//  for (option of options) {
//    option.onclick = function () {
//      selectText.innerHTML = this.textContent;
//      list.classList.toggle("hide");
//      arrowIcon.classList.toggle("rotate");
//    };
//  }
