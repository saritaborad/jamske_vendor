import SideImg from "../../images/right_side_image.png";
import LogoSeller from "../../images/login-logo.svg";
import HelloHand from "../../images/hello-hand.svg";
import SilverStone from "../../images/silver-stone-logo.svg";
import Logo from "../../images/logo.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Submit() {
    return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 p-0 d-lg-block d-none">
                    <div className="login-side-img position-relative">
                        <img src={SideImg} alt="JAMSKE" className="w-100 side-img" />
                        <div className="logo-img-seller">
                            <img src={LogoSeller} alt="Seller"  className="img-fluid"/>
                            <span>Seller</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <div className="login-main-area">
                        <div className="login-main-part-scroll">
                            <div className="login-main-side">
                                <div className="m-auto login-main-box">
                                    <div className="w-100 text-center mb-5">
                                        <img src={Logo} alt="JAMSKE" className="img-fluid" />
                                    </div>
                                    <div className="mb-3">
                                        <h1 className="d-flex align-items-center mb-4">
                                            Hello, John Deo
                                            <img src={HelloHand} alt="hand" className="img-fluid ms-3"/>
                                        </h1>
                                        <p>We’re Feeling very happy to have you a part of the Jamske.</p>
                                    </div>
                                    <form className="row">
                                        <div className="col-12  submit-txt">
                                            <p className="mb-3">
                                                Your account request is a pending for a approval by our administration, 
                                                we’ll send you verification on your registred mail Id <span>Johndoe@gmail.com</span>
                                            </p> 
                                            <p className="mb-3">
                                                It’s take aprrox 24hr for account approval.
                                            </p>
                                            <p className="mb-3">
                                                If you have any quairy please contact us.
                                            </p> 
                                        </div>
                                        <div className="col-12 d-flex flex-column submit-txt ">
                                            <bdi>Thank You,</bdi>
                                            <span className="mb-1">Jamkse</span>
                                            <p>+1 (515) 516 0624</p>
                                            <p>support@jamske.com</p>
                                        </div>
                                        <div className="col-12 mt-5 mb-5">
                                            <div className="silver-store-btn d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center justify-content-beetween silver-store-btn-inner-right">
                                                    <img src={SilverStone} alt="silver-stone" className="img-fluid"/>
                                                    <div className="silver-inner-txt d-flex flex-column ps-3">
                                                        <span>Silvern Store</span>
                                                        <bdi>Manhatan, NY</bdi>
                                                    </div>
                                                </div>
                                                <div className="silver-store-btn-inner-btn ">
                                                    <bdi>
                                                        <i className="bi bi-chevron-right"></i>
                                                    </bdi>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button type="submit" className="btn-comn-class w-100">
                                                Contact Us
                                            </button>
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



export default Submit;