import { useState } from "react";
import styles from "../Styles/BookingPage.module.css";

function Booking() {
  const [result, setShowresult] = useState(true);

  const handleclick = () => {
    setShowresult(false);
  };
  return (
    <div>
      {result ? (
        <div className={styles.Pricesummary}>
          <div className={styles.Pricesummaryinnerbox}>
            <div className={styles.Pricesummaryinnerboxnext}>
              <img style={{ width: "30px", height: "30px", marginLeft: "5px" }} src="Images/rupees-icon-2.jpg"></img>
              <h1
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "16px",
                  fontWeight: "normal",
                  margin: "0",
                  marginTop: "4px",
                  marginLeft: "5px",
                  color: "#1A1A1A",
                }}
              >
                Price Summary
              </h1>
              <img style={{ width: "20px", height: "20px", marginLeft: "40px", marginTop: "4px" }} src="Images/mant1.png"></img>
              <h4
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "12px",
                  fontWeight: "normal",
                  margin: "0",
                  marginTop: "8px",
                  marginLeft: "5px",
                  color: "#1A1A1A",
                }}
              >
                1
              </h4>
              <img style={{ width: "12px", height: "20px", marginLeft: "20px", marginTop: "4px" }} src="Images/female1.png"></img>
              <h4
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "12px",
                  fontWeight: "normal",
                  margin: "0",
                  marginTop: "8px",
                  marginLeft: "5px",
                  color: "#1A1A1A",
                }}
              >
                1
              </h4>
            </div>
          </div>
          <div className={styles.Pricesummaryinnerboxnextnext}>
            <h4
              style={{
                fontFamily: "sans-serif",
                fontSize: "12px",
                fontWeight: "normal",
                margin: "0",
                marginTop: "8px",
                marginLeft: "5px",
                color: "#1A1A1A",
                textAlign: "left",
              }}
            >
              Adult x 1
            </h4>

            <img style={{ width: "12px", height: "18px", marginLeft: "170px", marginTop: "6px" }} src="Images/rupee.jpg"></img>

            <h5
              style={{
                fontFamily: "sans-serif",
                fontSize: "12px",
                fontWeight: "normal",
                margin: "0",
                marginTop: "8px",

                color: "#1A1A1A",
                textAlign: "right",
              }}
            >
              5175
            </h5>
          </div>
          <div className={styles.Pricesummaryinnerboxnextnextnext}>
            <h4
              style={{
                fontFamily: "sans-serif",
                fontSize: "12px",
                fontWeight: "normal",
                margin: "0",
                marginTop: "8px",
                marginLeft: "5px",
                color: "#1A1A1A",
                textAlign: "left",
              }}
            >
              Total Taxes +
            </h4>

            <img style={{ width: "12px", height: "18px", marginLeft: "150px", marginTop: "6px" }} src="Images/rupee.jpg"></img>

            <h5
              style={{
                fontFamily: "sans-serif",
                fontSize: "12px",
                fontWeight: "normal",
                margin: "0",
                marginTop: "8px",

                color: "#1A1A1A",
                textAlign: "right",
              }}
            >
              779
            </h5>
          </div>
          <div className={styles.grandtotalbox}>
            <h4
              style={{
                fontFamily: "sans-serif",
                fontSize: "14px",
                fontWeight: "bold",
                margin: "0",
                marginTop: "8px",
                marginLeft: "5px",
                color: "#D63B05",
                textAlign: "left",
              }}
            >
              Grand Total
            </h4>

            <img style={{ width: "12px", height: "14px", marginLeft: "135px", marginTop: "8px" }} src="Images/redrupee.png"></img>

            <h5
              style={{
                fontFamily: "sans-serif",
                fontSize: "14px",
                fontWeight: "bold",
                margin: "0",
                marginTop: "8px",

                color: "#D63B05",
                textAlign: "right",
              }}
            >
              5954
            </h5>
          </div>
        </div>
      ) : null}

      <div className={styles.Pricesummarysecond}>
        <div className={styles.haveyoucoupan}>
          <h1
            style={{
              fontFamily: "sans-serif",
              fontSize: "14px",
              fontWeight: "bold",
              margin: "0",
              color: "white",
              marginTop: "5px",
            }}
          >
            Have a coupan code / Gift Voucher No ??
          </h1>
        </div>
        <div className={styles.ghhh}>
          <h1
            style={{
              fontFamily: "sans-serif",
              fontSize: "14px",
              fontWeight: "bold",
              margin: "0",
              marginTop: "8px",
              marginLeft: "10px",

              color: "#D63B05",
            }}
          >
            EMTNCF<span className={styles.hfhfhfh}></span>
          </h1>
          <div className={styles.clearborder}>
            <h1
              style={{
                fontFamily: "sans-serif",
                fontSize: "13px",
                fontWeight: "lighter",
                margin: "0",
                marginTop: "5px",
                marginLeft: "130px",
                padding: "2px",

                color: "#AFAFAF",
                border: "1px solid black",
                width: "70px",
                height: "15px",
                borderRadius: "4px",
              }}
            >
              CLEAR <strong>x</strong>
            </h1>
          </div>
        </div>
        <div className={styles.extrainformation}>
          <h4
            style={{
              fontFamily: "sans-serif",
              fontSize: "9px",
              fontWeight: "lighter",
              margin: "0",
              marginTop: "5px",
              padding: "2px",
              color: "#1A942B",
            }}
          >
            Congratulations! Zero Convenience Coupon has been applied successfully. You have saved Rs.300 per passenger per sector as convenience
            fees.<span className={styles.aftecongratulation}></span>
          </h4>
        </div>
        <div className={styles.tickmarkfirst}>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <div style={{ display: "block" }}>
            <label for="html">
              <h4
                style={{
                  fontSize: "12px",
                  fontFamily: "sans-serif",
                  fontWeight: "medium",
                  margin: "0",
                  textAlign: "left",
                  marginTop: "2px",
                  marginLeft: "3px",
                  color: "#33333",
                }}
              >
                EMTNCF
              </h4>
              <h4 style={{ fontSize: "10px", fontFamily: "sans-serif", fontWeight: "lighter", margin: "0", textAlign: "left", marginLeft: "3px" }}>
                ZERO Convenience Fees<span className={styles.khaask}></span>
              </h4>
            </label>
          </div>
        </div>
        <div className={styles.ticketsecond}>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <div style={{ display: "block" }}>
            <label for="html">
              <h4
                style={{
                  fontSize: "12px",
                  fontFamily: "sans-serif",
                  fontWeight: "medium",
                  margin: "0",
                  textAlign: "left",
                  marginTop: "2px",
                  marginLeft: "3px",
                  color: "#33333",
                }}
              >
                BOBMC
              </h4>
              <h4 style={{ fontSize: "10px", fontFamily: "sans-serif", fontWeight: "lighter", margin: "0", textAlign: "left", marginLeft: "3px" }}>
                Use this coupan and get Rs.893 OFF for payments made only via Bank of Baroda Master Credit Cards.
                <span className={styles.khaaskssajas}></span>
              </h4>
            </label>
          </div>
        </div>
        <div className={styles.ticketthird}>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <div style={{ display: "block" }}>
            <label for="html">
              <h4
                style={{
                  fontSize: "12px",
                  fontFamily: "sans-serif",
                  fontWeight: "medium",
                  margin: "0",
                  textAlign: "left",
                  marginTop: "2px",
                  marginLeft: "3px",
                  color: "#33333",
                }}
              >
                ICICIAMZ
              </h4>
              <h4 style={{ fontSize: "10px", fontFamily: "sans-serif", fontWeight: "lighter", margin: "0", textAlign: "left", marginLeft: "3px" }}>
                Use this coupan and get Rs.500 OFF for payments made only via ICICI Amazone Co-Branded Credit Cart.
              </h4>
            </label>
          </div>
        </div>
      </div>
      <button onClick={handleclick} className={styles.continuebooking}>
        <span style={{ fontWeight: "normal", fontSize: "18px", fontFamily: "sans-serif", color: "#ffffff" }}>Continue Booking</span>
      </button>
      <div className={styles.bookingtopbox}>
        <div className={styles.flightlogo}>
          <img style={{ width: "30px", height: "30px", marginLeft: "20px" }} src="Images/flight.png"></img>
          <h6 style={{ fontSize: "16px", fontFamily: "sans-serif", color: "#1A1A1A", fontWeight: "lighter", marginLeft: "10px", marginTop: "5px" }}>
            Flight Detail
          </h6>
        </div>
        <div className={styles.bookingunder}>
          <div className={styles.leftsmallbox}>
            <div className={styles.logoandflightdetails}>
              <div className={styles.logosetting}>
                <img style={{ width: "30px", height: "30px", marginTop: "10px" }} src="Images/flight.png"></img>
              </div>
              <div className={styles.textafterlogo}>
                <h5 style={{ fontFamily: "sans-serif", position: "absolute", margin: "0" }}>Delhi to Mumbai</h5>
              </div>
            </div>
            <div className={styles.anotherdetails}>
              <div className={styles.anotherdetailslogo}>
                <img style={{ width: "30px", height: "30px", marginTop: "10px" }} src="Images/G8.png"></img>
              </div>
              <div className={styles.anotherdetailsextra}>
                <p style={{ fontSize: "12px", margin: "0 " }}>Go FIRST</p>
                <p style={{ fontSize: "12px", margin: "0" }}>G8-2501</p>
              </div>
            </div>
            <div className={styles.Gosmart}>
              <h1 style={{ fontSize: "8px", margin: "0", marginTop: "2px", color: "#000000" }}>GoSmart</h1>
            </div>
          </div>

          <div className={styles.rightbigbox}>
            <div className={styles.departurestyles}>
              <div className={styles.dateofdeparture}>
                <h2
                  style={{
                    fontSize: "13px",
                    margin: "0",
                    textAlign: "left",
                    fontFamily: "sans-serif",
                    color: "#6A6A68",
                    fontWeight: "lighter",
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                >
                  Sun-31 Oct2021
                </h2>
              </div>
              <div className={styles.departuredetails}>
                <div className={styles.timeofdeparture}>
                  <h1 style={{ fontSize: "18px", margin: "0", color: "#000000", fontFamily: "sans-serif" }}>02:40</h1>
                </div>
                <div className={styles.timeofdeparture}>
                  <h3
                    style={{
                      fontSize: "12px",
                      margin: "0",
                      fontFamily: "sans-serif",
                      color: "#000000",
                      fontWeight: "lighter",
                      color: "black",
                      marginTop: "2px",
                    }}
                  >
                    Delhi(DEL)
                  </h3>
                </div>
                <div className={styles.timeofdeparture}>
                  <h2 style={{ fontSize: "12px", margin: "0", fontFamily: "sans-serif", color: "#000000", fontWeight: "lighter", color: "#6A6A68" }}>
                    Sun-31 Oct2021
                  </h2>
                </div>
                <div className={styles.timeofdeparture}>
                  <h2 style={{ fontSize: "12px", margin: "0", fontFamily: "sans-serif", color: "#000000", fontWeight: "lighter", color: "#6A6A68" }}>
                    Terminal-2
                  </h2>
                </div>
              </div>
            </div>

            <div className={styles.middlelogo}>
              <div className={styles.timeofdeparturess}>
                <div className={styles.hdhdhhd}>
                  <span style={{ fontFamily: "sans-serif", fontSize: "12px", color: "#6A6868" }}>02h 15m</span>
                </div>
                <div className={styles.hdhdhhd}>
                  <img style={{ width: "25px", height: "25px" }} src="Images/flight.png" alt="" />
                </div>
                <div className={styles.hdhdhhd}>
                  <div
                    style={{ width: "60px", height: "13px", border: "1px solid green", marginTop: "5px", marginLeft: "50px", borderRadius: "50px" }}
                  >
                    <h1 style={{ fontSize: "8px", margin: "0", marginTop: "3px", color: "#2DCA1C", fontFamily: "sans-serif" }}>REFUNDABLE</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.lastdetails}>
              <div className={styles.departuredetails}>
                <div className={styles.timeofdeparture}>
                  <h1 style={{ fontSize: "18px", margin: "0", color: "#000000", fontFamily: "sans-serif" }}>04:55</h1>
                </div>
                <div className={styles.timeofdeparture}>
                  <h3
                    style={{
                      fontSize: "12px",
                      margin: "0",
                      fontFamily: "sans-serif",
                      color: "#000000",
                      fontWeight: "lighter",
                      color: "black",
                      marginTop: "2px",
                    }}
                  >
                    Mumbai(BOM)
                  </h3>
                </div>
                <div className={styles.timeofdeparture}>
                  <h2 style={{ fontSize: "12px", margin: "0", fontFamily: "sans-serif", color: "#000000", fontWeight: "lighter", color: "#6A6A68" }}>
                    Sun-31 Oct2021
                  </h2>
                </div>
                <div className={styles.timeofdeparture}>
                  <h2 style={{ fontSize: "12px", margin: "0", fontFamily: "sans-serif", color: "#000000", fontWeight: "lighter", color: "#6A6A68" }}>
                    Terminal-1
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.medicalrefundpolicybox}>
        <div className={styles.topboxmedical}>
          <div className={styles.logostyles}>
            <img style={{ width: "40px", height: "40px", padding: "3px" }} src="Images/CoverageIcon.png"></img>
          </div>
          <div className={styles.nextbox}>
            <div className={styles.freemedicalrefund}>
              <h1
                style={{
                  fontSize: "12px",
                  fontWeight: "medium",
                  fontFamily: "sans-serif",
                  margin: "0",
                  textAlign: "left",
                  color: "#2196F3",
                  marginTop: "3px",
                }}
              >
                FREE Medical Refund Policy
              </h1>
              <img style={{ width: "16px", height: "16px", marginLeft: "5px", marginTop: "3px" }} src="Images/bluetick.png"></img>
              <h3
                style={{
                  fontSize: "10px",
                  fontWeight: "normal",
                  fontFamily: "sans-serif",
                  margin: "0",
                  textAlign: "right",
                  color: "#2196F3",
                  marginLeft: "350px",
                  marginTop: "3px",
                }}
              >
                Policy Coverage
              </h3>
            </div>
            <div style={{ width: "100%", height: "25px" }}>
              <h4 style={{ fontSize: "12px", fontFamily: "sans-serif", fontWeight: "lighter", margin: "0", textAlign: "left" }}>
                Get full airline refund, if you cancel tickets due to illness or sickness. This service is provided at sickness. This service is
                provided at <strong>ZERO additional charges.</strong>
              </h4>
            </div>
          </div>
          <div className={styles.getfullairlinerefund}></div>
        </div>

        <div className={styles.radiobuttonbox}>
          <div className={styles.yesradiobutton}>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">
              <h4 style={{ fontSize: "12px", fontFamily: "sans-serif", fontWeight: "lighter", margin: "0", textAlign: "left", marginTop: "4px" }}>
                Yes, I want to add Medical Refund Policy (FREE) to this flight
              </h4>
            </label>
            <br />
          </div>
          <div className={styles.yesradiobutton}>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">
              <h4 style={{ fontSize: "12px", fontFamily: "sans-serif", fontWeight: "lighter", margin: "0", textAlign: "left", marginTop: "4px" }}>
                No, I don't wish to add Medical Refund Policy (FREE) to this flight
              </h4>
            </label>
            <br />
          </div>
        </div>
      </div>
      <div className={styles.goodtoknowbox}>
        <div className={styles.goodtoknowmain}>
          <div className={styles.thumpsup}>
            <img style={{ width: "30px", height: "30px", padding: "3px" }} src="Images/f-icon-9.png"></img>
          </div>
          <div className={styles.goodtoknowcontent}>
            <h1 style={{ fontSize: "12px", fontWeight: "medium", fontFamily: "sans-serif", margin: "0", textAlign: "left", color: "#000000" }}>
              Good to Know
            </h1>
            <h3 style={{ fontSize: "10px", fontWeight: "lighter", fontFamily: "sans-serif", margin: "0", textAlign: "left", color: "#000000" }}>
              Information you should know
            </h3>
          </div>
        </div>
        <div className={styles.bulletpoint}>
          <ul>
            <li style={{ fontSize: "12px", fontFamily: "sans-serif", fontWeight: "lighter", textAlign: "left" }}>
              15 Kgs per passenger Check-in Baggage included for your selected flight on the sector Delhi to Mumbai
            </li>
            <li style={{ fontSize: "12px", fontFamily: "sans-serif", fontWeight: "lighter", textAlign: "left" }}>
              Airline Cancellation Fee is Rs 1843 per passenger for your selected flight on the sector Delhi to Mumbai
            </li>
            <li style={{ fontSize: "12px", fontFamily: "sans-serif", fontWeight: "lighter", textAlign: "left" }}>
              Certify your health status through the Aarogya Setu app or the self-declaration form at the airport
            </li>
            <li style={{ fontSize: "12px", fontFamily: "sans-serif", fontWeight: "lighter", textAlign: "left" }}>
              Remember to web check-in before arriving at the airport
            </li>
            <li style={{ fontSize: "12px", fontFamily: "sans-serif", fontWeight: "lighter", textAlign: "left" }}>Face masks are compulsory</li>
          </ul>
        </div>
      </div>
      <div className={styles.addtravelinsurence}>
        <div className={styles.firstlayer}>
          <img style={{ width: "30px", height: "30px", marginLeft: "5px", marginTop: "5px" }} src="Images/black.png"></img>
          <div className={styles.goodtoknowcontent}>
            <h1 style={{ fontSize: "12px", fontWeight: "medium", fontFamily: "sans-serif", margin: "0", textAlign: "left", color: "#000000" }}>
              Add Travel Insurance and Secure your Trip with ACKO Travel Insurance for Rs.199/Person
            </h1>
            <h3 style={{ fontSize: "10px", fontWeight: "lighter", fontFamily: "sans-serif", margin: "0", textAlign: "left", color: "#000000" }}>
              (Upon Selecting Travel Insurance ,You accept the Terms and Conditions of the travel insurance policy)
            </h3>
          </div>
        </div>
        <div className={styles.secondlayer}>
          <div className={styles.firstimg}>
            <img
              style={{ width: "30px", height: "30px", marginLeft: "5px" }}
              src="https://www.easemytrip.com/images/insurance/hospitalization-injury-v2.svg"
            ></img>
            <p style={{ fontSize: "13px", fontWeight: "bold", fontFamily: "sans-serif", margin: "0", textAlign: "center", color: "#000000" }}>
              Hospitalization
            </p>
            <p
              style={{
                fontSize: "10px",
                fontWeight: "medium",
                fontFamily: "sans-serif",
                margin: "0",
                textAlign: "center",
                color: "#000000",
                marginTop: "5px",
              }}
            >
              Sum Insured : INR 1,00,000
            </p>
          </div>
          <div className={styles.secondimg}>
            <img
              style={{ width: "30px", height: "30px", marginLeft: "5px" }}
              src="https://www.easemytrip.com/images/insurance/trip-cancellation-v2.svg"
            ></img>
            <p style={{ fontSize: "13px", fontWeight: "bold", fontFamily: "sans-serif", margin: "0", textAlign: "center", color: "#000000" }}>
              Trip Cancellation
            </p>
            <p
              style={{
                fontSize: "10px",
                fontWeight: "medium",
                fontFamily: "sans-serif",
                margin: "0",
                textAlign: "center",
                color: "#000000",
                marginTop: "5px",
              }}
            >
              Sum Insured : INR 20,000
            </p>
          </div>
          <div className={styles.secondimg}>
            <img
              style={{ width: "30px", height: "30px", marginLeft: "5px" }}
              src="	https://www.easemytrip.com/images/insurance/trip-delay-v2.svg"
            ></img>
            <p style={{ fontSize: "13px", fontWeight: "bold", fontFamily: "sans-serif", margin: "0", textAlign: "center", color: "#000000" }}>
              Trip Delay
            </p>
            <p
              style={{
                fontSize: "10px",
                fontWeight: "medium",
                fontFamily: "sans-serif",
                margin: "0",
                textAlign: "center",
                color: "#000000",
                marginTop: "5px",
              }}
            >
              Sum Insured : INR 10,000
            </p>
          </div>
          <div className={styles.secondimg}>
            <h1
              style={{
                fontSize: "32px",
                fontWeight: "lighter",
                fontFamily: "sans-serif",
                margin: "0",
                textAlign: "center",
                color: "#2196F3",
                marginTop: "12px",
              }}
            >
              +4
            </h1>
            <h1
              style={{
                fontSize: "16px",
                fontWeight: "lighter",
                fontFamily: "sans-serif",
                margin: "0",
                textAlign: "center",
                color: "#2193F3",
                marginTop: "2px",
              }}
            >
              More
            </h1>
          </div>
        </div>
        <div className={styles.thirdlayer}>
          <div className={styles.yesradiobutton}>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">
              <h4 style={{ fontSize: "12px", fontFamily: "sans-serif", fontWeight: "lighter", margin: "0", textAlign: "left", marginTop: "4px" }}>
                Yes, I want to secure my trip with insurance.
              </h4>
            </label>

            <br />
          </div>
          <div className={styles.middlebutton}>
            <h1
              style={{
                fontSize: "12px",
                fontFamily: "sans-serif",
                fontWeight: "lighter",
                margin: "0",
                textAlign: "center",
                marginTop: "4px",
                borderRadius: "4px",
                padding: "5px",
              }}
            >
              More then 36% of our customers choose to secure their trip
            </h1>
          </div>
          <div className={styles.yesradiobutton}>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">
              <h4 style={{ fontSize: "12px", fontFamily: "sans-serif", fontWeight: "lighter", margin: "0", textAlign: "left", marginTop: "4px" }}>
                No, I do not want to insure my trip
              </h4>
            </label>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
