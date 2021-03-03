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
                <div>
                    <h4>To you It's more than an annuity, it's your retirement.</h4>
                </div>
            </div>
            <div className="iconsDiv">
                <div className="card iconsCard">
                    <div className="card-body">
                        <img src="https://d9hhrg4mnvzow.cloudfront.net/info.annuityalliance.com/2021_highest_rates_d/6920dffe-goodbank-low_1000000000000000000028.png" alt="money"></img>
                        <p className="pTitles">High Rates and No Fees</p>
                        <p>We shop ALL the Top A Rated companies and not just a select few to find the best annuity strategy for you.  We do not recommend products with fees.</p>
                    </div>
                </div>

                <div className="card iconsCard">
                    <div className="card-body">
                        <img src="https://d9hhrg4mnvzow.cloudfront.net/info.annuityalliance.com/2021_highest_rates_d/3870ca1a-goodbank-lock_1000000000000000000028.png" alt="money"></img>
                        <p className="pTitles">Protext your Gains</p>
                        <p>Enjoy market-like growth without the market volatility. 100% of your money is protected with guarantees.</p>
                    </div>
                </div>

                <div className="card iconsCard">
                    <div className="card-body">
                        <img src="https://d9hhrg4mnvzow.cloudfront.net/info.annuityalliance.com/2021_highest_rates_d/1f96866f-goodbank-direct_1000000000000000000028.png" alt="money"></img>
                        <p className="pTitles">Free Independent Review</p>
                        <p>Abrahamsen Financial Group works for you, not the insurance companies. We are an independent firm not tied to any company or product.</p>
                    </div>
                </div>
            </div>

            <div className="iconsDiv2">
                <div className="card iconsCard">
                    <div className="card-body">
                        <img src="https://d9hhrg4mnvzow.cloudfront.net/info.annuityalliance.com/2021_highest_rates_d/4a6d9972-goodbank-close_1000000000000000000028.png" alt="money"></img>
                        <p className="pTitles">Up-To-Date Rates</p>
                        <p>We have a team of 750 employees behind us making sure we, as a company, are offering the best annuities, strategies, and A Rated companies that are available on a daily basis.</p>
                    </div>
                </div>

                <div className="card iconsCard">
                    <div className="card-body">
                        <img src="https://d9hhrg4mnvzow.cloudfront.net/info.annuityalliance.com/2021_highest_rates_d/d023236b-goodbank-easy_1000000000000000000028.png" alt="money"></img>
                        <p className="pTitles">Retirement Income Report</p>
                        <p>We can analyze your retirement income strategy for free.We help people Reduce the following: Market, Risk, Taxes and Fees.</p> <p>We help people Increase the following: Growth, Protection, Income and Inflation Hedge.</p>
                    </div>
                </div>

                <div className="card iconsCard">
                    <div className="card-body">
                        <img src="https://d9hhrg4mnvzow.cloudfront.net/info.annuityalliance.com/2021_highest_rates_d/f0100a70-goodbank-mortgage_1000000000000000000028.png" alt="money"></img>
                        <p className="pTitles">Licensed Specialists:</p>
                        <p>We employ the top 1% of advisors and experts in the country. Your report is carefully put together by a true professional.</p>
                    </div>
                </div>
            </div>
            <div className="mainFormDiv">
                <div className=" card userForm">
                    <div className="card-body">
                        <form>
                            <label className="required">First Name</label>
                            <input type="text" placeholder="First Name" name="first_name" required></input>
                            <label className="required">Last Name</label>
                            <input type="text" placeholder="Last Name" name="last_name" required></input>
                            <label className="required">Age</label>
                            <input type="text" placeholder="Age" name="age" required></input>
                            <label className="required">Email</label>
                            <input type="email" placeholder="Email" name="email" required></input>
                            <label className="required">Phone Number</label>
                            <input type="text" placeholder="Phone Number" name="phone_number" required></input>
                            <label className="required">Zip Code</label>
                            <input type="text" placeholder="Zip Code" name="zip_code" required></input>
                            <label className="required">Annuity Amount</label>
                            <select name="annuity" required>
                                <option value="Under $100,000">Under $100,000</option>
                                <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                                <option value="$250,000 - $500,000">$250,000 - $500,000</option>
                                <option value="$500,000 - $1,000,000">$500,000 - $1,000,000</option>
                                <option value="$1,000,000 - $2,000,000">$1,000,000 - $2,000,000</option>
                                <option value="Multiple Seven Figures">Multiple Seven Figures</option>
                            </select>
                            <button type="submit">Get My Report</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
