import React from "react";
import "./Signup.css";
import { useState } from "react";
import axios from "axios";

const initState = {
    email: "",
};

export const SignUp = () => {
    const [state, setState] = useState(initState);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, value } = e.target;
        setState({ ...state, [email]: value });
        const { data } = await axios.get("http://localhost:7733/users");
        console.log('data:', data)
        let isPresent = false;

        for (let i = 0; i < data.length; i++) {
            if (state.email === data[i].email) {
                isPresent = true;
                break;
            }
        }
        if (isPresent) {
           //Go to Enter Password Pop-up page     
        }
        else {
            axios.post("http://localhost:7733/users", state);
            //Go to Create Password Pop-up page
        }
    };





    return (
        <div className="main">
            <div className="login">
                <div className="log">Login or Create an account</div>
                <div className="cut">
                    <i className="in"></i>
                </div>
            </div>
            <div className="user">Email ID or Mobile Number</div>
            <input className="email" placeholder="Enter email ID or mobile number" type="text" />
            <div>
                <button className="btn1" onClick={handleSubmit}>CONTINUE</button>
            </div>
            <div>
                <div className="terms">By logging in, I understand and agree to EaseMyTrip terms of use and privacy policy</div>
            </div>    
        </div>
    )
}
