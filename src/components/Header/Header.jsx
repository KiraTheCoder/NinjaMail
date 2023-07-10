import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <>
            <div className="container-fluid nav-bar-container ">
                <div className="NinjaMail-lmage-Text-conatiner"> <img src="/assets/mailimage1.png" alt="mail" className="mailImage" />
                    <p className="NinjaMailmageText">NinjaMail</p>
                </div>
                <ul className="nav-list d-flex">
                    <li className="navbar-item">
                        <a className="nav-link active  " href="#">FEATURES</a>
                    </li>
                    <li className="navbar-item">
                        <a className="nav-link active" href="#">PRICING</a>
                    </li>
                    <li className="navbar-item">
                        <a className="nav-link active" href="#">SERVICES</a>
                    </li>

                    <li className="navbar-item">
                        <a className="nav-link active" href="#">PARTNERS</a>
                    </li>
                </ul>
                <a className="navbar-btn btn" href="#">SIGN UP FREE</a>
            </div>
        </>
    )
}

export default Header