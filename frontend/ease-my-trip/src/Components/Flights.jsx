import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
// import Carousel from "react-elastic-carousel";
import styles from "./Flights.module.css";
import moment from "moment";
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

export const Flights = () => {
  const [value, onChange] = useState(5955);
  // const [value2, onChange2] = useState(1);
  const [flights, setFlights] = useState([]);

  const getFlights = () => {
    axios.get("http://localhost:7733/flights").then((res) => {
      console.log("response: ", res.data);
      setFlights(res.data);
    });
  };


    useEffect(() => {
        getFlights();
        const ele = document.querySelector(".bubble");
        if (ele) {
            ele.style.left = `${Number(value / 4)}px`;
        }
    }, [])

    const CalenderSliderContent = styled.div`
        width: 13%;
        // margin-left: 2px;
        border: 1px solid rgb(228,228,228);
        border-right: none;
        text-align: center;
        // background-color: grey;
    `;

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
    <div className={styles.flightsMainBody}>
      <div className={styles.searchDiv}>
        <p>Search functionality goes here</p>
      </div>
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
            <p style={{ marginTop: "10px", color: "rgb(51,51,51)" }}>0 Hr - 24 Hr</p>
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
                <input style={{ marginTop: "20px", marginLeft: "15px" }} type="checkbox" name="showall" />
                <p style={{ fontSize: "14px", marginTop: "16px", marginLeft: "5px", color: "rgb(51,51,51)" }}>Show all</p>
              </div>
            </div>
            <div className={`${styles.stops}`}>
              <input type="checkbox" name="nonstop" />
              <p style={{ fontSize: "14px", marginTop: "16px", marginLeft: "5px", color: "rgb(51,51,51)" }}>Nonstop</p>
            </div>
            <div className={styles.stops}>
              <input type="checkbox" name="1 Stop" />
              <p style={{ fontSize: "14px", marginTop: "16px", marginLeft: "5px", color: "rgb(51,51,51)" }}>1 Stop</p>
            </div>
            <div className={styles.stops}>
              <input type="checkbox" name="2 Stops" />
              <p style={{ fontSize: "14px", marginTop: "16px", marginLeft: "5px", color: "rgb(51,51,51)" }}>2 Stops</p>
            </div>
          </div>
          <div className={`${styles.filterDivs} ${styles.flightIconDiv}`}>
            <div className={styles.filterSubDiv}>
              <img src={downArrow} alt="" />
              <p>Airlines</p>
              <div style={{ display: "flex" }}>
                <input style={{ marginTop: "20px", marginLeft: "15px" }} type="checkbox" name="showall" />
                <p style={{ fontSize: "14px", marginTop: "16px", marginLeft: "5px", color: "rgb(51,51,51)" }}>Show all</p>
              </div>
            </div>
            <div className={`${styles.stops}`}>
              <input type="checkbox" name="nonstop" />
              <img className={styles.flightIcon} src={indigo} alt="" />
              <p style={{ fontSize: "13px", marginTop: "16px", marginLeft: "5px", color: "rgb(51,51,51)" }}>Indigo</p>
              <p style={{ fontSize: "13px", marginTop: "16px", marginLeft: "45px", color: "rgb(51,51,51)" }}>Rs. 5870</p>
            </div>
            <div className={styles.stops}>
              <input type="checkbox" name="1 Stop" />
              <img className={styles.flightIcon} src={spicejet} alt="" />
              <p style={{ fontSize: "13px", marginTop: "16px", marginLeft: "5px", color: "rgb(51,51,51)" }}>Spicejet</p>
              <p style={{ fontSize: "13px", marginTop: "16px", marginLeft: "37px", color: "rgb(51,51,51)" }}>Rs. 5955</p>
            </div>
            <div className={styles.stops}>
              <input type="checkbox" name="2 Stops" />
              <img className={styles.flightIcon} src={airAsia} alt="" />
              <p style={{ fontSize: "13px", marginTop: "16px", marginLeft: "5px", color: "rgb(51,51,51)" }}>AirAsia</p>
              <p style={{ fontSize: "13px", marginTop: "16px", marginLeft: "42px", color: "rgb(51,51,51)" }}>Rs. 5953</p>
            </div>
            <div className={styles.stops}>
              <input type="checkbox" name="2 Stops" />
              <img className={styles.flightIcon} src={vistara} alt="" />
              <p style={{ fontSize: "13px", marginTop: "16px", marginLeft: "5px", color: "rgb(51,51,51)" }}>Vistara</p>
              <p style={{ fontSize: "13px", marginTop: "16px", marginLeft: "42px", color: "rgb(51,51,51)" }}>Rs. 5955</p>
            </div>
            <div className={styles.stops}>
              <input type="checkbox" name="2 Stops" />
              <img className={styles.flightIcon} src={goFirst} alt="" />
              <p style={{ fontSize: "13px", marginTop: "16px", marginLeft: "5px", color: "rgb(51,51,51)" }}>GO FIRST</p>
              <p style={{ fontSize: "13px", marginTop: "16px", marginLeft: "27px", color: "rgb(51,51,51)" }}>Rs. 5954</p>
            </div>
            <div className={styles.stops}>
              <input type="checkbox" name="2 Stops" />
              <img className={styles.flightIcon} src={airIndia} alt="" />
              <p style={{ fontSize: "13px", marginTop: "16px", marginLeft: "5px", color: "rgb(51,51,51)" }}>Air India</p>
              <p style={{ fontSize: "13px", marginTop: "16px", marginLeft: "32px", color: "rgb(51,51,51)" }}>Rs. 5955</p>
            </div>
            <p style={{ marginTop: "5px", fontSize: "13px", color: "rgb(33,150,243)" }}>More +</p>
          </div>
        </div>
        <div className={styles.rightDiv}>
            <div className={styles.calendarSlider}>
                <div className={styles.sliderLeft}>
                    <div>
                        <img style={{marginTop: "15px", paddingLeft: "8px", marginRight: "5px"}} src={leftArrow} alt=""/>
                    </div>
                    <CalenderSliderContent>
                        <p style={{lineHeight: "0cm", paddingTop: "5px", fontSize: "15px"}}>Oct 03</p>
                        <div className={styles.calenderData}>
                            <img src={rupee} alt="" />
                            <p>7845</p>
                        </div>
                    </CalenderSliderContent>
                    <CalenderSliderContent>
                        <p style={{lineHeight: "0cm", paddingTop: "5px", fontSize: "15px"}}>Oct 04</p>
                        <div className={styles.calenderData}>
                            <img src={rupee} alt="" />
                            <p>5954</p>
                        </div>
                    </CalenderSliderContent>
                    <CalenderSliderContent>
                        <p style={{lineHeight: "0cm", paddingTop: "5px", fontSize: "15px"}}>Oct 05</p>
                        <div className={styles.calenderData}>
                            <img src={rupee} alt="" />
                            <p>4155</p>
                        </div>
                    </CalenderSliderContent>
                    <CalenderSliderContent>
                        <p style={{lineHeight: "0cm", paddingTop: "5px", fontSize: "15px"}}>Oct 06</p>
                        <div className={styles.calenderData}>
                            <img src={rupee} alt="" />
                            <p>5953</p>
                        </div>
                    </CalenderSliderContent>
                    <CalenderSliderContent>
                        <p style={{lineHeight: "0cm", paddingTop: "5px", fontSize: "15px"}}>Oct 07</p>
                        <div className={styles.calenderData}>
                            <img src={rupee} alt="" />
                            <p>5495</p>
                        </div>
                    </CalenderSliderContent>
                    <CalenderSliderContent>
                        <p style={{lineHeight: "0cm", paddingTop: "5px", fontSize: "15px"}}>Oct 08</p>
                        <div className={styles.calenderData}>
                            <img src={rupee} alt="" />
                            <p>5953</p>
                        </div>
                    </CalenderSliderContent>
                    <CalenderSliderContent>
                        <p style={{lineHeight: "0cm", paddingTop: "5px", fontSize: "15px"}}>Oct 09</p>
                        <div className={styles.calenderData}>
                            <img src={rupee} alt="" />
                            <p>4155</p>
                        </div>
                    </CalenderSliderContent>
                    <div style={{height: "100%", marginTop: "15px", paddingLeft: "5px", borderLeft: "1px solid rgb(228,228,228)"}}>
                        <img src={rightArrow} alt=""/>
                    </div>
                </div>
                <div className={styles.sliderRight}>
                    <img src={calendar} alt="" />
                </div>
            </div>
            <div className={styles.menuItems}>
                <p style={{marginLeft: "3px"}}>AIRLINES</p>
                <p>DEPART</p>
                <p>DURATION</p>
                <p>ARRIVE</p>
                <p>PRICE</p>
                <div style={{display: "flex"}}>
                    <p>RECOMMENDED</p>
                    <label className={styles.toggleSwitch} style={{marginTop: "12px", marginLeft: "5px", marginRight: "2px"}}>
                        <input className={ styles.toggleInput} type="checkbox" />
                        <span className={ styles.toggleSlider}/>
                    </label>
                </div>
            </div>
            {flights.map((e) => {
                return <div key={e.id} className={styles.flightDetailDiv}>
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
                            <hr/>
                            <p>{e.flightType}</p>
                        </div>
                        <div className={styles.arriveDetails}>
                            <p>{e.arrivalTime}</p>
                            <p>{e.arrivalPlace}</p>
                        </div>
                        <div className={styles.priceDetails}>
                            <div style={{display: "flex"}}>
                                <img height="15px" width="15px" style={{marginTop: "22px"}} src={rupee} alt="" />
                                <p>{e.totalPrice}</p>
                            </div>
                            <button>+ More Fare</button>
                        </div>
                        <button className={styles.bookButton}>BOOK NOW</button>
                    </div>
                    <div className={styles.offPriceDiv}>
                        <p>Use Promo code: EASEFLY to get Rs. { e.offPrice} instant discount on this flight</p>
                    </div>
                    <div className={styles.lastDetailDiv}>
                        <p>Flight Detail</p>
                    </div>   
                </div>
            })}
        </div>
           
        </div>
    </div>
  );
};

// !$*RHkYRh*73Y@7
