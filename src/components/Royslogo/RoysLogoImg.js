import React from 'react';
import RoysLogo from "./RoysLogoImg2.PNG";
import "./royslogo.css";

function RoysLogoImg() {
    return (
        <div>
            <div className="logoDiv">
                <img className="logo" src={RoysLogo} alt="royslogo"></img>
            </div>
        </div>
    )
}

export default RoysLogoImg
