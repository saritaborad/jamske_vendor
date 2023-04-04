import SideImg from "../../images/right_side_image.png";
import LogoSeller from "../../images/login-logo.svg";
// import GoogleMapReact from 'google-map-react';
import React from "react";
import "toastr/build/toastr.min.css";


export default function RestaurantDetails() {
   
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 p-0 d-lg-block d-none">
                        <div className="login-side-img position-relative">
                            <img src={SideImg} alt="JAMSKE" className="w-100 side-img" />
                            <div className="logo-img-seller">
                                <img src={LogoSeller} alt="Seller" className="img-fluid" />
                                <span>Seller</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <div className="login-main-area">
                            <div className="login-main-part-scroll">
                                <div className="login-main-side">
                                    <div className="m-auto login-main-box login-main-box-details">
                                        <div className="mb-lg-5 mb-3 text-center">
                                            <h1>Store Address</h1>
                                        </div>
                                        <form className="row">
                                            <div className="cust-map-info">
                                                <iframe title="Restaurant Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.2265364880877!2d-95.51637703739718!3d30.173522172854813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x86473147c603385b%3A0xf1a4808e67c3df5d!2sThe%20Woodlands%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1652432126553!5m2!1sen!2sin" className="w-100" height="200" style={{ border: 0 }} loading="lazy"></iframe>
                                            </div>
                                        
                                            <div className="col-12 mb-3 mt-3">
                                                <label className="d-block login-label-text mb-2">Street Number</label>
                                                <input type="password" className="form-control login-comn-input" name="password" placeholder="485" />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="d-block login-label-text mb-2">Street Name</label>
                                                <input type="password" className="form-control login-comn-input" name="password" placeholder="Enter street name" />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="d-block login-label-text mb-2">Unit</label>
                                                <input type="password" className="form-control login-comn-input" name="password" placeholder="Enter your unit" />
                                            </div>
                                            <div className="col-6 mb-3">
                                                <label className="d-block login-label-text mb-2">City</label>
                                                <input type="password" className="form-control login-comn-input" name="password" placeholder="Manhattan" />
                                            </div>
                                            <div className="col-6 mb-3">
                                                <label className="d-block login-label-text mb-2">State</label>
                                                <input type="password" className="form-control login-comn-input" name="password" placeholder="New York" />
                                            </div>
                                            <div className="col-6 mb-3">
                                                <label className="d-block login-label-text mb-2">Country</label>
                                                <input type="password" className="form-control login-comn-input" name="password" placeholder="USA" />
                                            </div>
                                            <div className="col-6 mb-3">
                                                <label className="d-block login-label-text mb-2">Zipcodde</label>
                                                <input type="password" className="form-control login-comn-input" name="password" placeholder="10101" />
                                            </div>
                                            <div className="col-12 mb-3 pt-2 text-center">
                                                <button type="submit" className="btn-comn-class w-100">Continue</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}