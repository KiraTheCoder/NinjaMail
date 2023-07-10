import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="container-fluid mt-5 ">
                <div className="row getStarted-text-container  d-flex align-items-center  justify-content-center">
                    <p>Get started today!</p>
                    <p className='btn'>PICK A PLAN</p>
                </div>
            </div>


            <div className="container-fluid mt-3 footer-row">
                <div className="row">
                    <div className="col col-12 col-lg-3 col-md-3 col-sm-12 d-flex align-items-center ">
                        <img className='footer-above-ninja-icon' src="./assets/mailimage1.png" alt="logo" />
                        <p className="footer-above-text-ninja">NinjaMail</p>
                    </div>

                    <div className="col col-lg-9 col-md-9 col-sm-12">
                        <div className="row align-items-start footer-above-text">
                            <div className="col col-lg-3 col-md-3  col-sm-6">
                                <ul >
                                    <li>
                                        Features
                                    </li>
                                    <li>
                                        Pricing
                                    </li>
                                    <li>
                                        Services
                                    </li>
                                    <li>
                                        Partners
                                    </li>
                                    <li>
                                        Resources
                                    </li>
                                </ul>
                            </div>
                            <div className="col col-lg-3 col-md-3 col-sm-6">
                                <ul>
                                    <li>
                                        About Us
                                    </li>
                                    <li>
                                        Tutorials
                                    </li>

                                    <li>
                                        Help Center
                                    </li>
                                    <li>
                                        Templates
                                    </li>
                                    <li>
                                        Case Studies
                                    </li>
                                </ul>
                            </div>
                            <div className="col col-lg-3 col-md-3 col-sm-6">
                                <ul>
                                    <li>
                                        Medium
                                    </li>
                                    <li>
                                        Twitter
                                    </li>
                                    <li>
                                        Facebook
                                    </li>
                                    <li>
                                        Instagram
                                    </li>
                                    <li>
                                        LinkedIn
                                    </li>
                                </ul>
                            </div>
                            <div className="col col-lg-3 col-md-3 col-sm-6">
                                <ul>
                                    <li>
                                        Contact Us
                                    </li>
                                    <li>
                                        Slack
                                    </li>
                                    <li>
                                        Jobs
                                    </li>
                                    <li>
                                        Ideas
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container-fluid mt-md-3">
                    <div className="row d-flex justify-content-between  ">
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-12  ">
                            <p className="footer-text  ">
                                NinjaMail is a sample project for Quest AI.
                                © 2023 Quest AI, All
                                rights reserved.
                            </p>
                        </div>
                        <div className="col col-lg-2 col-md-3 col-sm-6 ">
                            <p className="footer-text">Terms & Conditions</p>
                        </div>
                        <div className="col col-lg-2 col-md-3 col-sm-6 ">
                            <p className="footer-text ">Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer