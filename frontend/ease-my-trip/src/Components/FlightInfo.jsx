import styles from "./FlightDetails.module.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import flightDetails1 from "./images/flightDetails1.PNG";
import arrowForward from "./images/arrowForward.png";
import clock from "./images/clock.png";
import { FlightDetailContext } from "../Context/FlightDetailContextProvider";


export const FlightInfo = ({ id }) => {
    const [flightDetail, setFlightDetail] = useState({});
    const { isDropDown, setIsDropDown } = useContext(FlightDetailContext);
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    useEffect(() => {
        getFlightDetails();
        return () => {
           
        }
    }, [])


    const getFlightDetails = () => {
        axios.get(`http://localhost:7733/flights/${id}`)
            .then((res) => {
                console.log("response: ", res.data);
                setFlightDetail(res.data);
            })
    }

    return (
    <>
        { id === isDropDown ? <div className={styles.detailDiv}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Flight Information" value="1" sx={{fontSize: "16px", paddingRight: "15px"}} />
                            <Tab label="Fare Details And Rules" value="2" sx={{fontSize: "16px", paddingRight: "15px", marginLeft: "25px"}} />
                            <Tab label="Baggage Information" value="3" sx={{fontSize: "16px", paddingRight: "15px", marginLeft: "10px"}} />
                            <Tab label="Cancellation And Change Rules" value="4" sx={{fontSize: "16px", paddingRight: "15px", marginLeft: "10px"}} />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <div style={{display: "flex", paddingTop: "0px"}}>
                            <p style={{paddingTop: "0px", marginTop: "0px"}}>{flightDetail.departureCode}</p>
                            <img src={ arrowForward } alt="" style={{height: "20px", width: "25px"}} />
                            <p style={{paddingTop: "0px", marginTop: "0px"}}>{ flightDetail.arrivalCode}</p>
                        </div>
                        <div style={{display: "flex"}}>
                            <img src={flightDetail.image} alt="" style={{height: "40px", width: "40px", marginLeft: "0px", marginTop: "20px"}} />
                            <div style={{marginLeft: "30px", marginTop: "0px", paddingTop: "0px"}}>
                                <p stlye={{lineHeight: "0cm", marginTop: "0px", paddingTop: "0px",}}>{flightDetail.flightName}</p>
                                <p stlye={{ lineHeight: "0cm" }}>{flightDetail.flightNumber }</p>
                            </div>
                            <div style={{marginLeft: "120px"}}>
                                <p style={{lineHeight: "0.5cm", fontWeight: "bold", fontSize: "18px"}}>{flightDetail.departureTime}</p>
                                <p style={{lineHeight: "0.5cm", color: "rgb(136, 135, 135)"}}>{flightDetail.departurePlace} ({flightDetail.departureCode})</p>
                                <p style={{lineHeight: "0.5cm"}}>{flightDetail.departureDate}</p>
                                <p style={{lineHeight: "0.5cm"}}>Terminal - {flightDetail.departureTerminal }</p>
                                </div>
                            <div style={{marginLeft: "250px"}}>
                                <img src={clock} alt="" style={{paddingleft: "15px", marginTop: "5px"}} />
                                <p style={{marginLeft: "0px", paddingLeft: "0px"}}>{ flightDetail.duration}</p>
                            </div>
                            <div style={{marginLeft: "180px", paddingTop: "0px"}}>
                                <p style={{lineHeight: "0.5cm", fontWeight: "bold", fontSize: "18px"}}>{flightDetail.arrivalTime}</p>
                                <p style={{lineHeight: "0.5cm", color: "rgb(136, 135, 135)"}}>{flightDetail.arrivalPlace} ({flightDetail.arrivalCode})</p>
                                <p style={{ lineHeight: "0.5cm" }}>{flightDetail.arrivalTime}</p>
                                <p style={{lineHeight: "0.5cm"}}>Terminal - { flightDetail.arrivalTerminal}</p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                        <div style={{ width: "1052px", display: "flex", justifyContent: "space-evenly"}}>
                            <div style={{border: "1px solid rgb(204,204,204)", width: "35%"}}>
                                <div style={{display: "flex", justifyContent: "space-between"}}>
                                    <p style={{marginLeft: "15px"}}>1 x Adult</p>
                                    <p style={{marginRight: "15px"}}>Rs. { flightDetail.basePrice}</p>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", borderTop: "1px solid rgb(204,204,204)"}}>
                                    <p style={{fontWeight: "bold", marginLeft: "15px"}}>Total (Base Fare)</p>
                                    <p style={{marginRight: "15px"}}>Rs. { flightDetail.basePrice}</p>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", borderTop: "1px solid rgb(204,204,204)"}}>
                                    <p style={{fontWeight: "bold", marginLeft: "15px"}}>Total Tax</p>
                                    <p style={{marginRight: "15px"}}>Rs. { flightDetail.taxPrice}</p>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", borderTop: "1px solid rgb(204,204,204)"}}>
                                    <p style={{fontWeight: "bold", marginLeft: "15px"}}>Total (Fee + Surcharge)</p>
                                    <p style={{marginRight: "15px"}}>Rs. { flightDetail.totalPrice}</p>
                                </div>
                            </div>
                            <div style={{width: "58%", marginRight: "15px"}}>
                                <h3>Terms & Conditions: </h3>
                                <ul style={{fontSize: "12px"}}>
                                    <li>Total Rescheduling Charges Airlines Rescheduling fees Fare Difference if applicable + EMT Fees.</li>
                                    <li>The airline cancel reschedule fees is indicative and can be changed without any prior notice by the airlines..</li>
                                    <li>EaseMyTrip does not guarantee the accuracy of cancel reschedule fees..</li>
                                    <li>Partial cancellation is not allowed on the flight tickets which are book under special round trip discounted fares.</li>
                                    <li>Airlines doesnt allow any additional baggage allowance for any infant added in the booking</li>
                                    <li>In certain situations of restricted cases, no amendments and cancellation is allowed</li>
                                    <li>Airlines cancel reschedule should be reconfirmed before requesting for a cancellation or amendment</li>
                                </ul>
                            </div>  
                        </div>
                    </TabPanel>
                    <TabPanel value="3">
                            <div style={{width: "100%"}}>
                                    <div style={{ width: "95%", marginLeft: "2.5%", border: "1px solid rgb(204,204,204)", display: "flex" }}>
                                    <div style={{width: "33%", textAlign: "center", borderRight: "1px solid rgb(204,204,204)"}}>
                                        <p>Airline</p>
                                    </div>
                                    <div style={{ width: "33%", textAlign: "center", borderRight: "1px solid rgb(204,204,204)" }}>
                                        <p>Check-in Baggage</p>
                                    </div>
                                    <div style={{ width: "33%", textAlign: "center" }}>
                                        <p>Cabin Baggage</p>
                                    </div>
                                </div>
                                <div style={{width: "96%", marginLeft: "2.5%", display: "flex" }}>
                                    <div style={{display: "flex", borderLeft: "1px solid rgb(204,204,204)", borderRight: "1px solid rgb(204,204,204)", width: "32.6%", textAlign: "center"}}>
                                        <img src={flightDetail.image} alt="" style={{marginLeft: "105px", height: "40px", width: "40px", marginTop: "10px"}} />
                                        <div style={{marginLeft: "15px"}}>
                                            <p style={{fontSize: "13px"}}>{flightDetail.flightName}</p>
                                            <p style={{fontSize: "12px", lineHeight: "0cm"}}>{flightDetail.flightNumber}</p>
                                        </div>
                                    </div>
                                    <div style={{width: "32.7%", textAlign: "center"}}>
                                        <p>{flightDetail.checkinBaggage}Kgs</p>
                                    </div>
                                    <div style={{borderLeft: "1px solid rgb(204,204,204)", borderRight: "1px solid rgb(204,204,204)", width: "33.4%", textAlign: "center"}}>
                                        <p>{flightDetail.cabinBaggage}Kgs</p>
                                    </div>
                                </div>
                                <div style={{width: "95%", marginLeft: "2.5%", border: "1px solid rgb(204,204,204)", fontSize: "13px"}}>
                                    <ul>
                                        <li>Baggage information mentioned above is obtained from airline's reservation system, EaseMyTrip does not guarantee the accuracy of this information.</li>
                                        <li>The baggage allowance may vary according to stop-overs, connecting flights. changes in airline rules. etc.</li>
                                    </ul>
                                </div>
                            </div>
                    </TabPanel>
                    <TabPanel value="4">
                        <div style={{width: "95%", marginLeft: "2.5%", border: "1px solid rgb(204,204,204)", borderRadius: "3px"}}>
                            <h3 style={{marginLeft: "15px"}}>Terms & Conditions</h3>   
                            <ul style={{fontSize: "13px"}}>
                                <li>Total Rescheduling Charges Airlines Rescheduling fees Fare Difference if applicable + EMT Fees.</li>
                                <li>The airline cancel reschedule fees is indicative and can be changed without any prior notice by the airlines..</li>
                                <li>EaseMyTrip does not guarantee the accuracy of cancel reschedule fees..</li>
                                <li>Partial cancellation is not allowed on the flight tickets which are book under special round trip discounted fares..</li>
                                <li>Airlines doesnt allow any additional baggage allowance for any infant added in the booking</li>
                                <li>In certain situations of restricted cases, no amendments and cancellation is allowed</li>
                                <li>Airlines cancel reschedule should be reconfirmed before requesting for a cancellation or amendment</li>
                            </ul>
                        </div>
                    </TabPanel>
                </TabContext>
            </Box>
        </div> : null }
    </> 
    )
}
