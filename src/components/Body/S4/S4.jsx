import React from 'react'
import "./S4.css"
const ImageCard = () => {
    return (
        <>
            {/* <!-- ---------------------3 images and innner text-------------------- --> */}
            < div className="container-fluid  d-flex justify-content-center">
                <div className="row d-flex justify-content-center">
                    <div className="col col-lg-4 col-md-4 col-sm-12 col-12 audience-card">
                        <img className="audience-photo" src="./assets//photo1.png" alt="photo" />
                        <div className='audience-text-container'>
                            <p className="audience-text-heading">Frankie</p>
                            <p className="audience-text-para">Member since 2016</p>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-4 col-sm-12 col-12 audience-card">
                        <img className="audience-photo " src="./assets//photo2.png" alt="photo" />
                        <div className='audience-text-container'>
                            <p className="audience-text-heading">Camile</p>
                            <p className="audience-text-para">Member since 2012</p>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-4 col-sm-12 col-12 audience-card">
                        <img className="audience-photo" src="./assets//photo3.png" alt="photo" />
                        <div className='audience-text-container'>
                            <p className="audience-text-heading">Elayne</p>
                            <p className="audience-text-para">Member since 2018</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ImageCard