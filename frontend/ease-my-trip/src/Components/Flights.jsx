import { useState, useEffect, useContext } from "react";
import { Bookingmenu } from "./Booking";
import { Navbar } from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import Carousel from "react-elastic-carousel";
import styles from "./Flights.module.css";
// import moment from "moment";
import downArrow from "./images/downArrow.png";
import indigo from "./images/indigo.png";
import spicejet from "./images/spicejet.png";
import airAsia from "./images/airAsia.png";
import vistara from "./images/vistara.png";
import goFirst from "./images/goFirst.png";
import airIndia from "./images/airIndia.png";
import rupee from "./images/rupee.png";
import leftArrow from "./images/leftArrow.png";
import rightArrow from "./images/rightArrow.png";
import calendar from "./images/calendar.png";
// import { FlightDetails } from "./FlightDetails";
import { FlightInfo } from "./FlightInfo";
import { FlightDetailContext } from "../Context/FlightDetailContextProvider";

// import Flight from "../../../../backend/src/models/flight.model";

export const Flights = () => {
  const [value, onChange] = useState(5955);
  // const [value2, onChange2] = useState(1);
  const [flights, setFlights] = useState([]);
  // const [details, setDetails] = useState(false);
  const [isNonStop, setIsNonStop] = useState(false);
  const [isOneStop, setIsOneStop] = useState(false);
  const [isTwoStop, setIsTwoStop] = useState(false);
  const [isIndigo, setIsIndigo] = useState(false);
  const [isAirAsia, setIsAirAsia] = useState(false);
  const [isVistara, setIsVistara] = useState(false);
  const [isSpiceJet, setIsSpiceJet] = useState(false);
  const [isGoFirst, setIsGoFirst] = useState(false);
  const [isAirIndia, setIsAirIndia] = useState(false);
  const { isDropDown, setIsDropDown } = useContext(FlightDetailContext);
  const [count, setCount] = useState(1);

  const getFlights = () => {
    axios.get("http://localhost:7733/flights").then((res) => {
      console.log("response: ", res.data);
      setFlights(res.data);
      // console.log("I am flights: ", flights);
    });
  };

  useEffect(() => {
    getFlights();
    const ele = document.querySelector(".bubble");
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  }, []);

  const CalenderSliderContent = styled.div`
    width: 13%;
    // margin-left: 2px;
    border: 1px solid rgb(228, 228, 228);
    border-right: none;
    text-align: center;
    // background-color: grey;
  `;

  const handleChecked = (x) => {
    if (x === "non-stop") {
      setIsNonStop(!isNonStop);
    }
    if (x === "1-stop") {
      setIsOneStop(!isOneStop);
    }
    if (x === "2-stops") {
      setIsTwoStop(!isTwoStop);
    }
    if (x === "Indigo") {
      setIsIndigo(!isIndigo);
    }
    if (x === "AirAsia") {
      setIsAirAsia(!isAirAsia);
    }
    if (x === "Vistara") {
      setIsVistara(!isVistara);
    }
    if (x === "GO FIRST") {
      setIsGoFirst(!isGoFirst);
    }
    if (x === "Air India") {
      setIsAirIndia(!isAirIndia);
    }
    if (x === "SpiceJet") {
      setIsSpiceJet(!isSpiceJet);
    }
  };

  let filteredFlights = flights.filter((e) => {
    if (isNonStop && e.flightType === "non-stop") {
      return true;
    }
    if (isOneStop && e.flightType === "1-stop") {
      return true;
    }
    if (isTwoStop && e.flightType === "2-stops") {
      return true;
    }
    if (isIndigo && e.flightName === "Indigo") {
      console.log("I am Indigo", isIndigo);
      return true;
    }
    if (isAirAsia && e.flightName === "AirAsia") {
      return true;
    }
    if (isVistara && e.flightName === "Vistara") {
      return true;
    }
    if (isGoFirst && e.flightName === "GO FIRST") {
      return true;
    }
    if (isAirIndia && e.flightName === "Air India") {
      return true;
    }
    if (isSpiceJet && e.flightName === "SpiceJet") {
      return true;
    }
    if (
      !isSpiceJet &&
      !isAirIndia &&
      !isGoFirst &&
      !isVistara &&
      !isAirAsia &&
      !isIndigo &&
      !isNonStop &&
      !isOneStop &&
      !isTwoStop
    ) {
      return true;
    }

    return false;
  });

  const handleClick = (id) => {
    if (count % 2 === 1) {
      setIsDropDown(id);
    } else {
      setIsDropDown("");
    }
  };
  // const date = moment().format('ll');

  // const calendarSlider = {
  //     height: "60px",
  //     width: "100%",
  //     borderRadius: "5px",
  //     border: "1px solid rgb(226, 226, 226)",
  //     backgroundColor: "rgb(255,255,255)"
  // }

  // useEffect(() => {
  //     const ele2 = document.querySelector(".bubble");
  //     if (ele2) {
  //         ele2.style.left = `${Number(value2 / 4)}px`;
  //     }
  // })

  return (
    <>
      <div className={styles.flightsMainBody}>
        <Navbar />
        <Bookingmenu />
        <div className={styles.bodyDiv}>
          <div className={styles.filterDiv}>
            <div className={styles.filterHead}>
              <p>FILTER</p>
              <p>CLEAR ALL</p>
            </div>
            <div className={styles.filterDivs}>
              <div className={styles.filterSubDiv}>
                <img src={downArrow} alt="" />
                <p>Price Range</p>
              </div>
              <div className={styles.sliderParent}>
                <input
                  type="range"
                  min="5955"
                  max="23281"
                  value={value}
                  onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}
                />
                {/* <div className={styles.bubble}>
                                {value}
                            </div> */}
              </div>
              <p>Rs. 5955 - Rs. 23281</p>
            </div>
            <div className={styles.filterDivs}>
              <div className={styles.filterSubDiv}>
                <img src={downArrow} alt="" />
                <p>Departure time from Delhi</p>
              </div>
              <div className={styles.sliderParent}>
                <input
                  type="range"
                  min="5955"
                  max="23281"
                  value={value}
                  onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}
                />
                {/* <div className={styles.bubble}>
                                {value2}
                            </div> */}
              </div>
              <p style={{ marginTop: "10px", color: "rgb(51,51,51)" }}>
                0 Hr - 24 Hr
              </p>
            </div>
            <div className={styles.filterDivs}>
              <div className={styles.filterSubDiv}>
                <img src={downArrow} alt="" />
                <p>Arrival time at Mumbai</p>
              </div>
              <div className={styles.sliderParent}>
                <input
                  type="range"
                  min="5955"
                  max="23281"
                  value={value}
                  onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}
                />
                {/* <div className={styles.bubble}>
                                {value}
                            </div> */}
              </div>
              <p styles={{ color: "rgb(51,51,51)" }}>0 Hr - 24 Hr</p>
            </div>
            <div className={`${styles.filterDivs} ${styles.stopsDiv}`}>
              <div className={styles.filterSubDiv}>
                <img src={downArrow} alt="" />
                <p>Stops</p>
                <div style={{ display: "flex" }}>
                  <input
                    style={{ marginTop: "20px", marginLeft: "15px" }}
                    type="checkbox"
                    name="showall"
                  />
                  <p
                    style={{
                      fontSize: "14px",
                      marginTop: "16px",
                      marginLeft: "5px",
                      color: "rgb(51,51,51)",
                    }}
                  >
                    Show all
                  </p>
                </div>
              </div>
              {/* Making functions for filters */}
              <div className={`${styles.stops}`}>
                <input
                  type="checkbox"
                  name="nonstop"
                  onClick={() => {
                    handleChecked("non-stop");
                  }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    marginTop: "16px",
                    marginLeft: "15px",
                    color: "rgb(51,51,51)",
                  }}
                >
                  Non Stop
                </p>
              </div>
              <div className={styles.stops}>
                <input
                  type="checkbox"
                  name="1 Stop"
                  onClick={() => {
                    handleChecked("1-stop");
                  }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    marginTop: "16px",
                    marginLeft: "15px",
                    color: "rgb(51,51,51)",
                  }}
                >
                  1 Stop
                </p>
              </div>
              <div className={styles.stops}>
                <input
                  type="checkbox"
                  name="2 Stops"
                  onClick={() => {
                    handleChecked("2-stops");
                  }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    marginTop: "16px",
                    marginLeft: "15px",
                    color: "rgb(51,51,51)",
                  }}
                >
                  2 Stops
                </p>
              </div>
            </div>
            <div className={`${styles.filterDivs} ${styles.flightIconDiv}`}>
              <div className={styles.filterSubDiv}>
                <img src={downArrow} alt="" />
                <p>Airlines</p>
                <div style={{ display: "flex" }}>
                  <input
                    style={{ marginTop: "20px", marginLeft: "15px" }}
                    type="checkbox"
                    name="showall"
                  />
                  <p
                    style={{
                      fontSize: "14px",
                      marginTop: "16px",
                      marginLeft: "5px",
                      color: "rgb(51,51,51)",
                    }}
                  >
                    Show all
                  </p>
                </div>
              </div>
              <div className={`${styles.stops}`}>
                <input
                  type="checkbox"
                  onClick={() => {
                    handleChecked("Indigo");
                  }}
                />
                <img className={styles.flightIcon} src={indigo} alt="" />
                <p
                  style={{
                    fontSize: "13px",
                    marginTop: "16px",
                    marginLeft: "5px",
                    color: "rgb(51,51,51)",
                  }}
                >
                  Indigo
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    marginTop: "16px",
                    marginLeft: "45px",
                    color: "rgb(51,51,51)",
                  }}
                >
                  Rs. 5870
                </p>
              </div>
              <div className={styles.stops}>
                <input
                  type="checkbox"
                  onClick={() => {
                    handleChecked("SpiceJet");
                  }}
                />
                <img className={styles.flightIcon} src={spicejet} alt="" />
                <p
                  style={{
                    fontSize: "13px",
                    marginTop: "16px",
                    marginLeft: "5px",
                    color: "rgb(51,51,51)",
                  }}
                >
                  Spicejet
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    marginTop: "16px",
                    marginLeft: "37px",
                    color: "rgb(51,51,51)",
                  }}
                >
                  Rs. 5955
                </p>
              </div>
              <div className={styles.stops}>
                <input
                  type="checkbox"
                  onClick={() => {
                    handleChecked("AirAsia");
                  }}
                />
                <img className={styles.flightIcon} src={airAsia} alt="" />
                <p
                  style={{
                    fontSize: "13px",
                    marginTop: "16px",
                    marginLeft: "5px",
                    color: "rgb(51,51,51)",
                  }}
                >
                  AirAsia
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    marginTop: "16px",
                    marginLeft: "42px",
                    color: "rgb(51,51,51)",
                  }}
                >
                  Rs. 5953
                </p>
              </div>
              <div className={styles.stops}>
                <input
                  type="checkbox"
                  onClick={() => {
                    handleChecked("Vistara");
                  }}
                />
                <img className={styles.flightIcon} src={vistara} alt="" />
                <p
                  style={{
                    fontSize: "13px",
                    marginTop: "16px",
                    marginLeft: "5px",
                    color: "rgb(51,51,51)",
                  }}
                >
                  Vistara
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    marginTop: "16px",
                    marginLeft: "42px",
                    color: "rgb(51,51,51)",
                  }}
                >
                  Rs. 5955
                </p>
              </div>
              <div className={styles.stops}>
                <input
                  type="checkbox"
                  onClick={() => {
                    handleChecked("GO FIRST");
                  }}
                />
                <img className={styles.flightIcon} src={goFirst} alt="" />
                <p
                  style={{
                    fontSize: "13px",
                    marginTop: "16px",
                    marginLeft: "5px",
                    color: "rgb(51,51,51)",
                  }}
                >
                  GO FIRST
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    marginTop: "16px",
                    marginLeft: "27px",
                    color: "rgb(51,51,51)",
                  }}
                >
                  Rs. 5954
                </p>
              </div>
              <div className={styles.stops}>
                <input
                  type="checkbox"
                  onClick={() => {
                    handleChecked("Air India");
                  }}
                />
                <img className={styles.flightIcon} src={airIndia} alt="" />
                <p
                  style={{
                    fontSize: "13px",
                    marginTop: "16px",
                    marginLeft: "5px",
                    color: "rgb(51,51,51)",
                  }}
                >
                  Air India
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    marginTop: "16px",
                    marginLeft: "32px",
                    color: "rgb(51,51,51)",
                  }}
                >
                  Rs. 5955
                </p>
              </div>
              <p
                style={{
                  marginTop: "5px",
                  fontSize: "13px",
                  color: "rgb(33,150,243)",
                }}
              >
                More +
              </p>
            </div>
          </div>
          <div className={styles.rightDiv}>
            <div className={styles.calendarSlider}>
              <div className={styles.sliderLeft}>
                <div>
                  <img
                    style={{
                      marginTop: "15px",
                      paddingLeft: "8px",
                      marginRight: "5px",
                    }}
                    src={leftArrow}
                    alt=""
                  />
                </div>
                <CalenderSliderContent>
                  <p
                    style={{
                      lineHeight: "0cm",
                      paddingTop: "5px",
                      fontSize: "15px",
                      marginTop: "10px",
                    }}
                  >
                    Oct 03
                  </p>
                  <div className={styles.calenderData}>
                    <img src={rupee} alt="" />
                    <p>7845</p>
                  </div>
                </CalenderSliderContent>
                <CalenderSliderContent>
                  <p
                    style={{
                      lineHeight: "0cm",
                      paddingTop: "5px",
                      fontSize: "15px",
                      marginTop: "10px",
                    }}
                  >
                    Oct 04
                  </p>
                  <div className={styles.calenderData}>
                    <img src={rupee} alt="" />
                    <p>5954</p>
                  </div>
                </CalenderSliderContent>
                <CalenderSliderContent>
                  <p
                    style={{
                      lineHeight: "0cm",
                      paddingTop: "5px",
                      fontSize: "15px",
                      marginTop: "10px",
                    }}
                  >
                    Oct 05
                  </p>
                  <div className={styles.calenderData}>
                    <img src={rupee} alt="" />
                    <p>4155</p>
                  </div>
                </CalenderSliderContent>
                <CalenderSliderContent>
                  <p
                    style={{
                      lineHeight: "0cm",
                      paddingTop: "5px",
                      fontSize: "15px",
                      marginTop: "10px",
                    }}
                  >
                    Oct 06
                  </p>
                  <div className={styles.calenderData}>
                    <img src={rupee} alt="" />
                    <p>5953</p>
                  </div>
                </CalenderSliderContent>
                <CalenderSliderContent>
                  <p
                    style={{
                      lineHeight: "0cm",
                      paddingTop: "5px",
                      fontSize: "15px",
                      marginTop: "10px",
                    }}
                  >
                    Oct 07
                  </p>
                  <div className={styles.calenderData}>
                    <img src={rupee} alt="" />
                    <p>5495</p>
                  </div>
                </CalenderSliderContent>
                <CalenderSliderContent>
                  <p
                    style={{
                      lineHeight: "0cm",
                      paddingTop: "5px",
                      fontSize: "15px",
                      marginTop: "10px",
                    }}
                  >
                    Oct 08
                  </p>
                  <div className={styles.calenderData}>
                    <img src={rupee} alt="" />
                    <p>5953</p>
                  </div>
                </CalenderSliderContent>
                <CalenderSliderContent>
                  <p
                    style={{
                      lineHeight: "0cm",
                      paddingTop: "5px",
                      fontSize: "15px",
                      marginTop: "10px",
                    }}
                  >
                    Oct 09
                  </p>
                  <div className={styles.calenderData}>
                    <img src={rupee} alt="" />
                    <p>4155</p>
                  </div>
                </CalenderSliderContent>
                <div
                  style={{
                    height: "100%",
                    marginTop: "15px",
                    paddingLeft: "15px",
                    borderLeft: "1px solid rgb(228,228,228)",
                  }}
                >
                  <img src={rightArrow} alt="" />
                </div>
              </div>
              <div className={styles.sliderRight}>
                <img src={calendar} alt="" />
              </div>
            </div>
            <div className={styles.menuItems}>
              <p style={{ marginLeft: "3px" }}>AIRLINES</p>
              <p>DEPART</p>
              <p>DURATION</p>
              <p>ARRIVE</p>
              <p>PRICE</p>
              <div style={{ display: "flex" }}>
                <p>RECOMMENDED</p>
                <label
                  className={styles.toggleSwitch}
                  style={{
                    marginTop: "0px",
                    marginLeft: "5px",
                    marginRight: "2px",
                  }}
                >
                  <input className={styles.toggleInput} type="checkbox" />
                  <span className={styles.toggleSlider} />
                </label>
              </div>
            </div>
            {filteredFlights.map((e) => {
              return (
                <div key={e.id}>
                  <div key={e.id} className={styles.flightDetailDiv}>
                    <div className={styles.flightDetails}>
                      <div className={styles.flightImage}>
                        <img src={e.image} alt="" />
                        <div>
                          <p>{e.flightName}</p>
                          <p>{e.flightNumber}</p>
                        </div>
                      </div>
                      <div className={styles.departDetails}>
                        <p>{e.departureTime}</p>
                        <div>{e.departurePlace}</div>
                      </div>
                      <div className={styles.durationDetails}>
                        <p>{e.duration}</p>
                        <hr />
                        <p>{e.flightType}</p>
                      </div>
                      <div className={styles.arriveDetails}>
                        <p>{e.arrivalTime}</p>
                        <p>{e.arrivalPlace}</p>
                      </div>
                      <div className={styles.priceDetails}>
                        <div style={{ display: "flex" }}>
                          <img
                            height="15px"
                            width="15px"
                            style={{ marginTop: "22px" }}
                            src={rupee}
                            alt=""
                          />
                          <p>{e.totalPrice}</p>
                        </div>
                        <button>+ More Fare</button>
                      </div>
                      <Link to="/flights/bookingpage">
                        {" "}
                        <button className={styles.bookButton}>BOOK NOW</button>
                      </Link>
                    </div>
                    <div className={styles.offPriceDiv}>
                      <p>
                        Use Promo code: EASEFLY to get Rs. {e.offPrice} instant
                        discount on this flight
                      </p>
                    </div>
                    {/* <FlightDetails style={{marginTop: "5px", marginBottom: "5px"}} {...e} /> */}
                    <div className={styles.lastDetailDiv}>
                      <p
                        onClick={() => {
                          handleClick(e._id);
                          setCount(count + 1);
                        }}
                      >
                        Flight Detail
                      </p>
                      {/* <div style={{ width: "500px", height: "200px", border: "1px solid black", backgroundColor: "peachpuff", position: "absolute" }}> {e.id}</div> */}
                    </div>
                  </div>
                  <FlightInfo id={e._id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

// !$*RHkYRh*73Y@7
