import React from 'react'
import "./S1.css"
const Stunning = () => {
    return (
        <>
            {/* <!-- Stunning text and image Section --> */}
            < div className="container-fluid d-flex justify-content-center mt-5" >
                <div className="row">
                    <div className="col col-lg-6 -md-12  col-sm-12 mt-lg-3 mt-sm-3">
                        <div className="card border-light  Stunning-card" >
                            <div className="card-body">
                                <p className="card-text stunning-head">Create Stunning
                                    Email Campaigns</p>
                                <p className="stunning-para">Create and launch email campaigns that captivate
                                    your customers in just a few clicks.</p>
                            </div>
                            <div className="btn-container d-flex justify-content-center  ">
                                <button className="stunning-btn-1 border-light">TRY NOW</button>
                                <button className="stunning-btn-2">GET A DEMO</button>
                            </div>
                        </div>
                    </div>

                    <div className="col col-lg-6 col-sm-12">
                        <div className="card border-light mt-lg-4 stunning-card-img">
                            <img src="./assets/photo6.png" />
                        </div>
                    </div>


                    {/* svg elements */}

                    <span className='Stunning-circle-1 z-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <circle cx="5.5" cy="5.5" r="5" fill="white" stroke="#707070" />
                        </svg>
                    </span>

                    <span className='Stunning-circle-2 z-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <circle cx="5.5" cy="5.5" r="5" fill="white" stroke="#707070" />
                        </svg>
                    </span>


                    <span className='Stunning-circle-3 z-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <circle cx="5.49999" cy="5.5" r="5" fill="white" stroke="#707070" />
                        </svg>
                    </span>

                    <span className='Stunning-circle-4 z-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                            <circle cx="18.5" cy="18.5" r="18.5" fill="#D9F4F2" />
                        </svg>
                    </span>


                    <span className='Stunning-rectangle-1 z-4'>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="30" fill="#EFE1BC" />
                        </svg>
                    </span>



                    <span className='Stunning-rectangle-3 z-4'>
                        <svg width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="41.1829" y="0.640457" width="57.8858" height="57.8858" transform="rotate(45 41.1829 0.640457)" fill="black" />
                        </svg>
                    </span>

                    <span className='Stunning-rectangle-4 z-4'>

                    </span>
                </div>
            </div >
        </>
    )
}

export default Stunning