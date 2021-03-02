import React from 'react';
import Boat from "./bluewater.jpg"
import "./home.css"

function Home() {
    return (
        <div>
            <div>
                <div className="imgDiv">
                    <img className="boat" src={Boat} alt="boat"></img>
                </div>
                <div className="card textDiv">
                    <div className="card-body">
                        <p className="headerText">Looking For The Best Annuities With Uncapped Growth And No Risk In 2021?</p>
                        <p className="headerTextUnder">Compare the largest database of annuities to find the BEST one for Your Retirement Strategy.</p>
                    </div>
                </div>
                <div className="boxDivs">
                    <div className="card percentageBox leftBox">
                        <div className="card-body">
                            <p>8.1%</p>
                            <p>Avg ROR</p>
                        </div>
                    </div>
                    <div className="card percentageBox rightBox">
                        <div className="card-body">
                            <p>A Rated Companies</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="annuityBtn">
                <button>Find The Right Annuity!</button>
            </div>
            <div className="businessTitle">
                <h1>Abrahamsen Financial Group</h1>
                <h4>Annuity Specialists</h4>
                <h6>Ranked by Forbes as one of The Top 10 Most Dependable Wealth Managers in the Mid- Atlantic Region, with the largest national network of over 200+ insurance companies,  Abrahamsen Financial Group has direct access to the Top A Rated Annuities in the United States. No other company can match our strength which ensures that you always get the best value for your money.</h6>
            </div>
        </div>
    )
}

export default Home
