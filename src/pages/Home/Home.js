import React from 'react';
import Boat from "./bluewater.jpg";
import "./home.css";
import emailjs from "emailjs-com";


function Home() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_ID1, process.env.REACT_APP_ID2, e.target, process.env.REACT_APP_ID3)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        setTimeout(() => {
            window.location.href = "/thankyou"
        }, 500);
    }

    function scroller() {
        let scroll = document.getElementById("scrollToMe")
        scroll.scrollIntoView()
    }

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
                            <p className="bigandthick">8.1%</p>
                            <p>Average Return</p>
                        </div>
                    </div>
                    <div className="card percentageBox rightBox">
                        <div className="card-body">
                            <p className="bigandthick">A+</p>
                            <p>Rated Companies</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="annuityBtn">
                <button onClick={scroller}>Find The Right Annuity!</button>
            </div>
            <div className="businessTitle">
                <h1>Zero Stress Retirement</h1>
                <h4>Annuity Specialists</h4>
                <h6>Ranked as one of The Top 10 Most Dependable Wealth Managers in the Mid-Atlantic Region, as published by Forbes, with the largest national network of over 200+ insurance companies, Zero Stress Retirement has direct access to the Top A Rated Annuities in the United States. No other company can match our strength which ensures that you always get the best value for your money.</h6>
                <div>
                    <h4 className="italics">To you it's more than an annuity, it's your retirement.</h4>
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
                        <p className="pTitles">Protect your Gains</p>
                        <p>Enjoy market-like growth without the market volatility. 100% of your money is protected with guarantees.</p>
                    </div>
                </div>

                <div className="card iconsCard">
                    <div className="card-body">
                        <img src="https://d9hhrg4mnvzow.cloudfront.net/info.annuityalliance.com/2021_highest_rates_d/1f96866f-goodbank-direct_1000000000000000000028.png" alt="money"></img>
                        <p className="pTitles">Free Independent Review</p>
                        <p>Zero Stress Retirement works for you, not the insurance companies. We are an independent firm not tied to any company or product.</p>
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
                        <p>We can analyze your retirement income strategy for free.</p> <p>We help people Reduce the following: Market Risk, Taxes, and Fees.</p> <p>We help people Increase the following: Growth, Protection, Income, and Inflation Hedge.</p>
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
            <div className="mainFormDiv" id="scrollToMe">
                <div className=" card userForm">
                    <div className="card-body">
                        <form onSubmit={sendEmail}>
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
                            <button>Find The Right Annuity!</button>
                        </form>
                    </div>
                </div>
                <div className="testi">
                    <div>
                        <p className="antMorg">"I was impressed with the level of knowledge they had. The growth annuity we ended up getting was perfect for our retirement plan and we didn't have to replace our other advisors to work with them."</p>
                        <p className="antMorg2">- Anthony and Morgan Parrino</p> <p className="antMorgcity">Belmar, New Jersey</p>
                    </div>
                    <div>
                        <p className="antMorg">"They showed me how to protect a significant portion of my assets while still getting serious growth using annuities. I highly recommend them to anyone looking to add some safety to their plan without having to keep money in the bank at .5%!"</p>
                        <p className="antMorg2">- Kevin and Katie Clark</p> <p className="antMorgcity"> Ocean Township, New Jersey</p>
                    </div>
                    <div>
                        <p className="antMorg">"They definitely know their stuff! I finally have peace of mind knowing my money is safe."</p>
                        <p className="antMorg2">- Michael and Jennifer Clayton</p> <p className="antMorgcity"> Colts Neck, New Jersey</p>
                    </div>
                </div>
            </div>
            <div className="earnDiv">
                <p className="earnTitle">Earn Market-Like Returns Without The Market-Like Volatility</p>
                <p className="earnText">Grow your wealth risk-free starting today.</p>
            </div>
            <div className="beniList">
                <p className="beniTitle">Enjoy All The Benefits That Top Annuities Have To Offer</p>
                <ul className="beniUL">
                    <li>Financially Secure A+ Rated Insurance Companies</li>
                    <li>Up to 40% More Guaranteed Lifetime Income</li>
                    <li>Uncapped Annual Growth</li>
                    <li>Zero Risk</li>
                    <li>Zero Fees</li>
                    <li>Full Protection from Stock Market Losses</li>
                    <li>Tax Deferral of All Gains </li>
                    <li>RMD Distribution Planning</li>
                </ul>
            </div>
            <div className="whatIsAnnuDiv">
                <div>
                    <p className="whatIsAnnuTitle">What is an Annuity?</p>
                    <p className="whatIsAnnuText">An annuity is a contract between you and an insurance company that allows your earnings to grow tax-deferred. Annuities are a popular choice for investors who want to receive a steady stream of income in retirement. The income you receive can be paid out monthly, quarterly, annually or even as a lump sum payment. If you choose to defer the income then your money will grow tax-deferred.  It is also an excellent spot to put money with no downside risk, only upside potential.</p>
                </div>
                <div>
                    <p className="whatIsAnnuTitle">What can an Annuity do for ME?</p>
                    <p className="whatIsAnnuText"><strong>Growth Potential - </strong>A fixed index annuity has the potential for higher earnings than a traditional fixed annuity with a guaranteed minimum rate. There’s also no direct downside market risk to your money. Your principal is protected from market fluctuations.</p>
                    <p className="whatIsAnnuText"><strong>Helps you sleep better - </strong>An annuity can help you protect and grow your money on a tax-deferred basis and can guarantee you’ll never lose that money for life. So no matter how volatile the markets are, you have a pool of money that can go in only one direction: UP.</p>
                    <p className="whatIsAnnuText"><strong>Fills in the gaps - </strong>Sometimes pensions, IRAs and Social Security don’t provide enough income for you to live the way you want during retirement. A fixed index annuity can help supplement your retirement income.</p>
                </div>
            </div>
            <div className="annuityBtn">
                <button onClick={scroller}>Find The Right Annuity</button>
            </div>
            <br />
        </div>
    )
}

export default Home
