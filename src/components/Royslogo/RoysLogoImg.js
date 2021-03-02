import React from 'react';
import RoysLogo from "./royslogo.png";
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
