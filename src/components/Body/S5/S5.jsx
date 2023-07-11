import React from 'react'
import './S5.css';
const InputAndBrandText = () => {
    return (
        <>
            <div class="container-fluid mt-lg-5 mt-md-2 mt-3  d-flex justify-content-center">
                <div className="row col-lg-12 col-md-12 col-sm-12  d-flex align-items-center  justify-content-center">
                    <p class="learn-text">Learn how others are reaching their audience easier than ever before.</p>
                </div>
            </div>
            <div>
                <div class="container-fluid mt-3 mt-md-0 mt-lg-0  d-flex justify-content-center ">
                    <div class="row d-flex justify-content-center">
                        <div class="col col-12 col-lg-8 col-md-8 col-sm-11 text-center">
                            <input type="text" class="email-input" placeholder="Enter your email" />
                            <p class="thanksEmail pt-1">
                                Thanks! Email received.
                            </p>
                        </div>
                        <div class="col col-12 col-lg-4 col-md-4 col-sm-11 d-flex justify-content-center">
                            <button class="btn joinBtn"> JOIN OUR LIST</button>
                        </div>
                    </div>
                </div>


                <div class=" container-fluid mt-2  d-flex justify-content-center ">
                    <h6 class="best-brand-text">All the best brands <br />
                        already use us.</h6>
                </div>

                <div class=" container-fluid mt-0 d-flex justify-content-center justify-space-between align-items-center">
                    <div class="row mt-0 logos-container d-flex justify-content-center align-items-center">
                        <div class="col  col-lg-2 col-md-3  col-6  text-center brand-img-container">
                            <img class="brand-img-1" src="../assets/Image1.png" alt="img1" />
                        </div>
                        <div class="col col-lg-2 col-md-3   col-6  text-center brand-img-container">
                            <img class="brand-img-2" src="../assets/Image2.png" alt="img2" />
                        </div>
                        <div class="col  col-lg-2 col-md-3   col-6  text-center brand-img-container">
                            <img class="brand-img-3" src="../assets/Image3.png" alt="img3" />
                        </div>
                        <div class="col  col-lg-2 col-md-3   col-6 text-center brand-img-container">
                            <img class="brand-img-4" src="../assets/Image4.png" alt="img4" />
                        </div>
                        <div class="col col-lg-3 col-md-3  col-6  text-center brand-img-container">
                            <img class="brand-img-5" src="../assets/Image5.png" alt="img5" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputAndBrandText