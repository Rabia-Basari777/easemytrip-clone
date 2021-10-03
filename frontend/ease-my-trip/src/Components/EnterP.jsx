import "./EnterP.css"
import { useState } from "react";
import axios from "axios";

const initState = {
    password: "",
};
export const Enter = () => {
    const [state, setState] = useState(initState);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { password, value } = e.target;
        setState({ ...state, [password]: value });
        const { data } = await axios.get("http://localhost:7733/users");
        console.log('data:', data)
        let isPresent = false;

        for (let i = 0; i < data.length; i++) {
            if (state.password === data[i].password) {
                isPresent = true;
                break;
            }
        }
        if (isPresent) {
            //Go to home page
        }
        else {
            alert("Wrong Password");
        }
    };




    return (
        <div className="main">
            <div className="div1">
                <i className="back"></i>
                Password Authentication
            </div>
            <div className="cut">
                <i className="clr"></i>
            </div>
            <div className="div2">
                <div className="div3">
                    <div className="new">Please enter your password</div>
                    <div className="inp">
                        <input className="inp1" type="password" placeholder="********" />
                    </div>
                    <div>
                        <button className="btn" onClick={handleSubmit}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}