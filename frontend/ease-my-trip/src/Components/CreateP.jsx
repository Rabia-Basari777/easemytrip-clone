import "./CreateP.css"
import { useState } from "react";
import axios from "axios";

const initState = {
    password: "",
};
export const Create = () => {
    const [state, setState] = useState(initState);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { password, value } = e.target;
        setState({ ...state, [password]: value });
        axios.post("http://localhost:7733/users", state);
        //Go to homepage
    }
    return (
        <div className="main">
            <div className="div1">
                <i className="back"></i>
                Create Password
            </div>
            <div className="cut">
                <i className="clr"></i>
            </div>
            <div className="div2">
                <div className="div3">
                    <div className="new">Enter new password</div>
                    <div className="inp">
                        <input className="inp1" type="password" placeholder="Enter new password here" />
                    </div>
                    <div>
                        <button className="btn" onClick={handleSubmit}>Create My Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}