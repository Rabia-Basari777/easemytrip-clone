import styles from "../Styles/Travellers.module.css";
import rup from "./imav/rupees-icon-2.jpg";
import rus from "./imav/mant1.png";
import female from "./imav/female1.png";
import rupee from "./imav/rupee.jpg";
import redrupee from "./imav/redrupee.png";
import flight from "./imav/flight.png";
import gg from "./imav/G8.png";
import traveller from "./imav/travellers.jpg";
import CreditCard from "./imav/CreditCard.png";
import netbanking from "./imav/netbanking.png";
import wallets from "./imav/wallets.png";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
function Travellers() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "20px" }} className={styles.Pricesummary}>
        <div className={styles.Pricesummaryinnerbox}>
          <div className={styles.Pricesummaryinnerboxnext}>
            <img
              style={{ width: "30px", height: "30px", marginLeft: "5px" }}
              src={rup}
            ></img>
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
            <img
              style={{
                width: "20px",
                height: "20px",
                marginLeft: "40px",
                marginTop: "4px",
              }}
              src={rus}
            ></img>
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
            <img
              style={{
                width: "12px",
                height: "20px",
                marginLeft: "20px",
                marginTop: "4px",
              }}
              src={female}
            ></img>
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

          <img
            style={{
              width: "12px",
              height: "18px",
              marginLeft: "170px",
              marginTop: "6px",
            }}
            src={rupee}
          ></img>

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

          <img
            style={{
              width: "12px",
              height: "18px",
              marginLeft: "150px",
              marginTop: "6px",
            }}
            src={rupee}
          ></img>

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

          <img
            style={{
              width: "12px",
              height: "14px",
              marginLeft: "135px",
              marginTop: "8px",
            }}
            src={redrupee}
          ></img>

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
      {/* <div className={styles.Pricesummarysecond}>
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
            Congratulations! Zero Convenience Coupon has been applied
            successfully. You have saved Rs.300 per passenger per sector as
            convenience fees.<span className={styles.aftecongratulation}></span>
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
              <h4
                style={{
                  fontSize: "10px",
                  fontFamily: "sans-serif",
                  fontWeight: "lighter",
                  margin: "0",
                  textAlign: "left",
                  marginLeft: "3px",
                }}
              >
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
              <h4
                style={{
                  fontSize: "10px",
                  fontFamily: "sans-serif",
                  fontWeight: "lighter",
                  margin: "0",
                  textAlign: "left",
                  marginLeft: "3px",
                }}
              >
                Use this coupan and get Rs.893 OFF for payments made only via
                Bank of Baroda Master Credit Cards.
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
              <h4
                style={{
                  fontSize: "10px",
                  fontFamily: "sans-serif",
                  fontWeight: "lighter",
                  margin: "0",
                  textAlign: "left",
                  marginLeft: "3px",
                }}
              >
                Use this coupan and get Rs.500 OFF for payments made only via
                ICICI Amazone Co-Branded Credit Cart.
              </h4>
            </label>
          </div>
        </div>
      </div>
      <div className={styles.bookingtopbox}>
        <div className={styles.flightlogo}>
          <img
            style={{ width: "30px", height: "30px", marginLeft: "20px" }}
            src={flight}
          ></img>
          <h6
            style={{
              fontSize: "16px",
              fontFamily: "sans-serif",
              color: "#1A1A1A",
              fontWeight: "lighter",
              marginLeft: "10px",
              marginTop: "5px",
            }}
          >
            Flight Detail
          </h6>
        </div>
        <div className={styles.bookingunder}>
          <div className={styles.leftsmallbox}>
            <div className={styles.logoandflightdetails}>
              <div className={styles.logosetting}>
                <img
                  style={{ width: "30px", height: "30px", marginTop: "10px" }}
                  src={flight}
                ></img>
              </div>
              <div className={styles.textafterlogo}>
                <h5
                  style={{
                    fontFamily: "sans-serif",
                    position: "absolute",
                    margin: "0",
                  }}
                >
                  Delhi to Mumbai
                </h5>
              </div>
            </div>
            <div className={styles.anotherdetails}>
              <div className={styles.anotherdetailslogo}>
                <img
                  style={{ width: "30px", height: "30px", marginTop: "10px" }}
                  src={gg}
                ></img>
              </div>
              <div className={styles.anotherdetailsextra}>
                <p style={{ fontSize: "12px", margin: "0 " }}>Go FIRST</p>
                <p style={{ fontSize: "12px", margin: "0" }}>G8-2501</p>
              </div>
            </div>
            <div className={styles.Gosmart}>
              <h1
                style={{
                  fontSize: "8px",
                  margin: "0",
                  marginTop: "2px",
                  color: "#000000",
                }}
              >
                GoSmart
              </h1>
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
                  <h1
                    style={{
                      fontSize: "18px",
                      margin: "0",
                      color: "#000000",
                      fontFamily: "sans-serif",
                    }}
                  >
                    02:40
                  </h1>
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
                  <h2
                    style={{
                      fontSize: "12px",
                      margin: "0",
                      fontFamily: "sans-serif",
                      color: "#000000",
                      fontWeight: "lighter",
                      color: "#6A6A68",
                    }}
                  >
                    Sun-31 Oct2021
                  </h2>
                </div>
                <div className={styles.timeofdeparture}>
                  <h2
                    style={{
                      fontSize: "12px",
                      margin: "0",
                      fontFamily: "sans-serif",
                      color: "#000000",
                      fontWeight: "lighter",
                      color: "#6A6A68",
                    }}
                  >
                    Terminal-2
                  </h2>
                </div>
              </div>
            </div>

            <div className={styles.middlelogo}>
              <div className={styles.timeofdeparturess}>
                <div className={styles.hdhdhhd}>
                  <span
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "12px",
                      color: "#6A6868",
                    }}
                  >
                    02h 15m
                  </span>
                </div>
                <div className={styles.hdhdhhd}>
                  <img
                    style={{ width: "25px", height: "25px" }}
                    src={flight}
                    alt=""
                  />
                </div>
                <div className={styles.hdhdhhd}>
                  <div
                    style={{
                      width: "60px",
                      height: "13px",
                      border: "1px solid green",
                      marginTop: "5px",
                      marginLeft: "50px",
                      borderRadius: "50px",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "8px",
                        margin: "0",
                        marginTop: "3px",
                        color: "#2DCA1C",
                        fontFamily: "sans-serif",
                      }}
                    >
                      REFUNDABLE
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.lastdetails}>
              <div className={styles.departuredetails}>
                <div className={styles.timeofdeparture}>
                  <h1
                    style={{
                      fontSize: "18px",
                      margin: "0",
                      color: "#000000",
                      fontFamily: "sans-serif",
                    }}
                  >
                    04:55
                  </h1>
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
                  <h2
                    style={{
                      fontSize: "12px",
                      margin: "0",
                      fontFamily: "sans-serif",
                      color: "#000000",
                      fontWeight: "lighter",
                      color: "#6A6A68",
                    }}
                  >
                    Sun-31 Oct2021
                  </h2>
                </div>
                <div className={styles.timeofdeparture}>
                  <h2
                    style={{
                      fontSize: "12px",
                      margin: "0",
                      fontFamily: "sans-serif",
                      color: "#000000",
                      fontWeight: "lighter",
                      color: "#6A6A68",
                    }}
                  >
                    Terminal-1
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className={styles.travellers}>
        <div className={styles.travellersdetails}>
          <img
            style={{
              width: "30px",
              height: "30px",
              marginLeft: "20px",
              marginTop: "2px",
            }}
            src={traveller}
          ></img>
          <h6
            style={{
              fontSize: "16px",
              fontFamily: "sans-serif",
              color: "#1A1A1A",
              fontWeight: "lighter",
              marginLeft: "10px",
              marginTop: "5px",
            }}
          >
            Travellers Details
          </h6>
          <img
            style={{
              width: "15px",
              height: "15px",
              marginLeft: "150px",
              marginTop: "10px",
            }}
            src="https://flight.easemytrip.com/M_Content/img/g-id-icon.png"
          ></img>
          <p
            style={{
              fontSize: "12px",
              fontFamily: "sans-serif",
              color: "#2196f3",
              fontWeight: "lighter",
              marginLeft: "3px",
              marginTop: "10px",
            }}
          >
            Name should be same as in Government ID proof
          </p>
        </div>
        <div className={styles.adult}>
          <h1
            style={{
              fontSize: "14px",
              margin: "0",
              marginLeft: "18px",
              fontFamily: "sans-serif",
              color: "#333333",
              fontWeight: "600",
              textAlign: "left",
            }}
          >
            ADULT
          </h1>
        </div>
        <div className={styles.justboundary}>
          <div className={styles.defaultcheckboxforaddress}>
            <input style={{ marginLeft: "18px" }} type="checkbox"></input>
          </div>
          <div className={styles.travellersform}>
            <div className={styles.selectcheckbox}>
              <div>
                <label>Title</label>
              </div>
              <div>
                <select className={styles.selectid}>
                  {/* <option value>Title</option> */}
                  <option value="Mr">MR</option>
                  <option value="Ms">MS</option>
                  <option value="Mrs">Mrs</option>
                </select>
              </div>
            </div>
            <div className={styles.afterselecting}>
              <div>
                <label>(First Name & (Middle name, if any )</label>
              </div>
              <div>
                <input
                  className={styles.inputid}
                  type="text"
                  placeholder="Enter First Name"
                ></input>
              </div>
            </div>
            <div className={styles.afterselectinglastname}>
              <div>
                <label style={{ textAlign: "left", marginRight: "180px" }}>
                  Last Name
                </label>
              </div>
              <div>
                <input
                  className={styles.inputid}
                  type="text"
                  placeholder="Enter Last Name"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.Iagreetocondition}>
        <input style={{ marginTop: "5px" }} type="checkbox"></input>
        <h4
          style={{
            fontWeight: "500",
            fontFamily: "sans-serif",
            fontSize: "13px",
            margin: "0",
            marginTop: "4.5px",
            color: "#302F2f",
          }}
        >
          I understand and agree to the rules,{" "}
          <span
            style={{
              color: "#2196f3",
              fontSize: "13px",
              fontFamily: "sans-serif",
              fontWeight: "500",
            }}
          >
            Privacy Policy, User Agreement
          </span>{" "}
          and
          <span
            style={{
              color: "#2196f3",
              fontSize: "13px",
              fontFamily: "sans-serif",
              fontWeight: "500",
            }}
          >
            {" "}
            Terms & Conditions
          </span>{" "}
          of EaseMyTrip{" "}
        </h4>
      </div>

      <div className={styles.paymentlogobox}>
        <img
          style={{
            width: "25px",
            height: "25px",
            marginLeft: "5px",
            marginTop: "2px",
          }}
          src={rup}
        ></img>
        <h3
          style={{
            fontSize: "14px",
            fontWeight: "lighter",
            fontFamily: "sans-serif, Open Sans",
            color: "#1a1a1a",
            margin: "0",
            marginTop: "6px",
            marginLeft: "6px",
            cursor: "pointer",
          }}
        >
          Payment Mode
        </h3>
      </div>

      <div className={styles.mainpaymentbox}>
        <div className={styles.paymentlogo}></div>
        <div className={styles.cardsdiv}>
          <div className={styles.cardmainblockdiv}>
            <div className={styles.creditcard}>
              <img
                style={{ width: "30px", height: "30px" }}
                src={CreditCard}
              ></img>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: "lighter",
                  fontFamily: "sans-serif",
                  color: "black",
                  margin: "0",
                  marginTop: "8px",
                  marginLeft: "4px",
                  cursor: "pointer",
                }}
              >
                Credit/Debit/ATM
              </h3>
            </div>
            <div className={styles.creditcard}>
              <img
                style={{ width: "30px", height: "30px" }}
                src={netbanking}
              ></img>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: "lighter",
                  fontFamily: "sans-serif",
                  color: "#000000",
                  margin: "0",
                  marginTop: "8px",
                  marginLeft: "4px",
                  cursor: "pointer",
                }}
              >
                Net Banking
              </h3>
            </div>
            <div className={styles.creditcard}>
              <img
                style={{ width: "30px", height: "30px" }}
                src={wallets}
              ></img>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: "lighter",
                  fontFamily: "sans-serif",
                  color: "#000000",
                  margin: "0",
                  marginTop: "8px",
                  marginLeft: "4px",
                  cursor: "pointer",
                }}
              >
                Wallets
              </h3>
            </div>
            <div className={styles.creditcard}>
              <img
                style={{
                  width: "30px",
                  height: "25px",
                  marginTop: "2px",
                  cursor: "pointer",
                }}
                src="https://flight.easemytrip.com/Content/img/traveller/upi.png"
              ></img>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: "lighter",
                  fontFamily: "sans-serif",
                  color: "#000000",
                  margin: "0",
                  marginTop: "8px",
                  marginLeft: "4px",
                  cursor: "pointer",
                }}
              >
                UPI
              </h3>
            </div>
            <div className={styles.creditcard}>
              <img
                style={{
                  width: "30px",
                  height: "25px",
                  marginTop: "2px",
                  cursor: "pointer",
                }}
                src="https://flight.easemytrip.com/Content/img/traveller/emi.png"
              ></img>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: "lighter",
                  fontFamily: "sans-serif",
                  color: "#000000",
                  margin: "0",
                  marginTop: "8px",
                  marginLeft: "4px",
                }}
              >
                EMI
              </h3>
            </div>
            <div className={styles.creditcard}>
              <img
                style={{
                  width: "30px",
                  height: "25px",
                  marginTop: "2px",
                  cursor: "pointer",
                }}
                src="	https://flight.easemytrip.com/Content/img/traveller/bajaj-finserv-active.png
                "
              ></img>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: "lighter",
                  fontFamily: "sans-serif",
                  color: "#000000",
                  margin: "0",
                  marginTop: "8px",
                  marginLeft: "4px",
                }}
              >
                Bajaj Finserv
              </h3>
            </div>
            <div className={styles.creditcard}>
              <img
                style={{
                  width: "30px",
                  height: "25px",
                  marginTop: "2px",
                  cursor: "pointer",
                }}
                src="https://flight.easemytrip.com/Content/img/traveller/giftcard-icon-grey.png"
              ></img>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: "lighter",
                  fontFamily: "sans-serif",
                  color: "#000000",
                  margin: "0",
                  marginTop: "8px",
                  marginLeft: "4px",
                }}
              >
                Gift Card
              </h3>
            </div>

            <div className={styles.creditcard}>
              <img
                style={{
                  width: "30px",
                  height: "25px",
                  marginTop: "2px",
                  cursor: "pointer",
                }}
                src="https://flight.easemytrip.com/Content/img/traveller/gpay-grey.png"
              ></img>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: "lighter",
                  fontFamily: "sans-serif",
                  color: "#000000",
                  margin: "0",
                  marginTop: "8px",
                  marginLeft: "4px",
                }}
              >
                Google Pay
              </h3>
            </div>
          </div>
        </div>
        <div className={styles.cardinputdiv}>
          <div className={styles.cardinputdivunder}>
            <div>
              <label style={{ marginRight: "225px" }}>Enter your Card No</label>
            </div>
            <div>
              <input
                style={{ height: "30px" }}
                className={styles.inputid}
                type="text"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              ></input>
            </div>
            <div>
              <label style={{ marginRight: "190px" }}>
                Enter Card Holder Name
              </label>
            </div>
            <div>
              <input
                style={{ height: "30px" }}
                className={styles.inputid}
                type="text"
                placeholder="Card Holder Name"
              ></input>
            </div>
            <div className={styles.expirydates}>
              <div className={styles.expirydatesfirstbox}>
                <div className={styles.mainwork}>
                  <label style={{ marginRight: "30px" }}>Expiry Date</label>
                  <select
                    style={{
                      width: "80px",
                      height: "30px",
                      marginRight: "30px",
                      marginTop: "10px",
                    }}
                  >
                    <option value="Month">Month</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
              </div>
              <div className={styles.mainworkcentre}>
                <div className={styles.mainwork}>
                  <label style={{ marginRight: "30px" }}>Expiry Year</label>
                  <select
                    style={{
                      width: "80px",
                      height: "30px",
                      marginRight: "30px",
                      marginTop: "10px",
                    }}
                  >
                    <option value="Month">Year</option>
                    <option value="01">2021</option>
                    <option value="02">2022</option>
                    <option value="03">2023</option>
                    <option value="04">2024</option>
                    <option value="05">2025</option>
                    <option value="06">2026</option>
                    <option value="07">2027</option>
                    <option value="08">2028</option>
                    <option value="09">2029</option>
                    <option value="10">2030</option>
                    <option value="11">2031</option>
                    <option value="12">2032</option>
                  </select>
                </div>
              </div>
              <div className={styles.cvv}>
                <div className={styles.cvvmain}>
                  <label style={{ marginRight: "30px" }}>CVV</label>
                  <input
                    style={{ height: "18px", width: "80px", marginTop: "9px" }}
                    className={styles.inputid}
                    type="password"
                    placeholder="cvv"
                  ></input>
                </div>
              </div>
            </div>
            <div className={styles.totalfare}>
              <h1
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "#333333",
                }}
              >
                Total Fare :{" "}
              </h1>
              <img
                style={{
                  width: "15px",
                  height: "15px",
                  marginLeft: "10px",
                  marginTop: "15px",
                }}
                src={rus}
              ></img>
              <h1
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "#FF0000",
                  marginLeft: "10px",
                }}
              >
                5954
              </h1>
              <Link to="/flights/bookingpage/travellers/success">
                <button
                  style={{
                    border: "1px solid #eaeaea",
                    fontSize: "19px",
                    fontFamily: "sans-serif",
                    width: "150px",
                    height: "30px",
                    marginLeft: "14px",
                    marginTop: "6px",
                    borderRadius: "4px",
                    background: "#EF6614",
                    color: "#FFFFFF",
                    cursor: "pointer",
                  }}
                >
                  Make Payment
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className={styles.modals}></div> */}
      </div>
      <Footer />
    </div>
  );
}

export { Travellers };
