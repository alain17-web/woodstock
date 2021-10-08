import React from 'react'
import './Main.css'
import about from '../img/about.png'
import shop from '../img/shop.png'


const Main = () => {
    return(
        <div className="container-fluid mb-5">
            <div className="row gx-5">
                <div className="col-sm-6">
                    <img src={about} className="img-fluid" alt="about" />
                </div>
                <div className="col-sm-6 mt-5 mb-5">
                    <h3 className="fs-5"><span id="about">|</span> ABOUT US</h3>
                    <p className="pt-3">Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin'house, fuckin'up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'coz I'll kill the motherfucker. know what I'm sayin' ?</p>
                    <button className="mt-5 bg-light py-2 px-3">LEARN MORE</button>
                </div>
            </div>
            <div className="row mt-5 mb-5 pb-5">
                <div className="col-sm-6 mt-5">
                    <h3 className="fs-5"><span id="shop">|</span> SHOP</h3>
                    <p className="pt-3">Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin'house, fuckin'up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'coz I'll kill the motherfucker. know what I'm sayin' ?</p>
                    <button className="mt-5 bg-light py-2 px-3">Go Shopping</button>
                </div>
                <div className="col-sm-6">
                    <img src={shop} className="img-fluid" alt="shop"/>
                </div>
            </div>
        </div>
    
    )
}

export default Main