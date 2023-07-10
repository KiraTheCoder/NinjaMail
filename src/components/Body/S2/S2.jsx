import React from 'react'
import "./S2.css"
const VideoCard = () => {
    return (
        <div className="container-fluid d-flex justify-content-center mt-5 ">
            <div className="row video-img-row">
                <div>
                    <img className='Videoimg' src="./assets/VIDEO.png" alt=".." />
                    <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                        <h5 className="card-title reach-customer-title">Reach More Customers</h5>

                        <button className="card-text reach-customer-btn  border-light">
                            <p>LEARN HOW</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;