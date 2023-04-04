import SideImg from "../../images/right_side_image.png";
import LogoSeller from "../../images/login-logo.svg";
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
                                            <div className="col-12 mb-3 mt-3">
                                                <div className="form-check form-switch ps-0">
                                                    <label className="login-label-text mb-2" for="flexSwitchCheckChecked">Sunday</label>
                                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                </div>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <div className="input-time d-flex">
                                                    <input type="password" className="form-control login-comn-input" name="password" placeholder="10:00 AM" />
                                                    <input type="password" className="form-control login-comn-input ms-3" name="password" placeholder="1:00 AM" />
                                                    <button className="btn ms-auto p-0 ps-3">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C19.9939 15.5203 15.5203 19.9939 10 20ZM2 10.172C2.04732 14.5732 5.64111 18.1095 10.0425 18.086C14.444 18.0622 17.9995 14.4875 17.9995 10.086C17.9995 5.68451 14.444 2.10977 10.0425 2.086C5.64111 2.06246 2.04732 5.59876 2 10V10.172ZM11 15H9V11H5V9H9V5H11V9H15V11H11V15Z" fill="#6C6A81"/></svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-3 mt-3">
                                                <div className="form-check form-switch ps-0">
                                                    <label className="login-label-text mb-2" for="flexSwitchCheckChecked">Monday</label>
                                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked /> 
                                                </div>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <div className="input-time d-flex">
                                                    <input type="password" className="form-control login-comn-input" name="password" placeholder="10:00 AM" />
                                                    <input type="password" className="form-control login-comn-input ms-3" name="password" placeholder="1:00 AM" />
                                                    <button className="btn ms-auto p-0 ps-3">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C19.9939 15.5203 15.5203 19.9939 10 20ZM2 10.172C2.04732 14.5732 5.64111 18.1095 10.0425 18.086C14.444 18.0622 17.9995 14.4875 17.9995 10.086C17.9995 5.68451 14.444 2.10977 10.0425 2.086C5.64111 2.06246 2.04732 5.59876 2 10V10.172ZM11 15H9V11H5V9H9V5H11V9H15V11H11V15Z" fill="#6C6A81"/></svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-3 mt-3">
                                                <div className="form-check form-switch ps-0">
                                                    <label className="login-label-text mb-2" for="flexSwitchCheckChecked">Tuesday</label>
                                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                </div>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <div className="input-time d-flex">
                                                    <input type="password" className="form-control login-comn-input" name="password" placeholder="10:00 AM" />
                                                    <input type="password" className="form-control login-comn-input ms-3" name="password" placeholder="1:00 AM" />
                                                    <button className="btn ms-auto p-0 ps-3">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C19.9939 15.5203 15.5203 19.9939 10 20ZM2 10.172C2.04732 14.5732 5.64111 18.1095 10.0425 18.086C14.444 18.0622 17.9995 14.4875 17.9995 10.086C17.9995 5.68451 14.444 2.10977 10.0425 2.086C5.64111 2.06246 2.04732 5.59876 2 10V10.172ZM11 15H9V11H5V9H9V5H11V9H15V11H11V15Z" fill="#6C6A81"/></svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-3 mt-3">
                                                <div className="form-check form-switch ps-0">
                                                    <label className="login-label-text mb-2" for="flexSwitchCheckChecked">Wednesday</label>
                                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                </div>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <div className="input-time d-flex">
                                                    <input type="password" className="form-control login-comn-input" name="password" placeholder="10:00 AM" />
                                                    <input type="password" className="form-control login-comn-input ms-3" name="password" placeholder="1:00 AM" />
                                                    <button className="btn ms-auto p-0 ps-3">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C19.9939 15.5203 15.5203 19.9939 10 20ZM2 10.172C2.04732 14.5732 5.64111 18.1095 10.0425 18.086C14.444 18.0622 17.9995 14.4875 17.9995 10.086C17.9995 5.68451 14.444 2.10977 10.0425 2.086C5.64111 2.06246 2.04732 5.59876 2 10V10.172ZM11 15H9V11H5V9H9V5H11V9H15V11H11V15Z" fill="#6C6A81"/></svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-3 mt-3">
                                                <div className="form-check form-switch ps-0">
                                                    <label className="login-label-text mb-2" for="flexSwitchCheckChecked">Tursday</label>
                                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                </div>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <div className="input-time d-flex">
                                                    <input type="password" className="form-control login-comn-input" name="password" placeholder="10:00 AM" />
                                                    <input type="password" className="form-control login-comn-input ms-3" name="password" placeholder="1:00 AM" />
                                                    <button className="btn ms-auto p-0 ps-3">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C19.9939 15.5203 15.5203 19.9939 10 20ZM2 10.172C2.04732 14.5732 5.64111 18.1095 10.0425 18.086C14.444 18.0622 17.9995 14.4875 17.9995 10.086C17.9995 5.68451 14.444 2.10977 10.0425 2.086C5.64111 2.06246 2.04732 5.59876 2 10V10.172ZM11 15H9V11H5V9H9V5H11V9H15V11H11V15Z" fill="#6C6A81"/></svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <div className="input-time d-flex">
                                                    <input type="password" className="form-control login-comn-input" name="password" placeholder="10:00 AM" />
                                                    <input type="password" className="form-control login-comn-input ms-3" name="password" placeholder="1:00 AM" />
                                                    <button className="btn ms-auto p-0 ps-3">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C19.9939 15.5203 15.5203 19.9939 10 20ZM2 10.172C2.04732 14.5732 5.64111 18.1095 10.0425 18.086C14.444 18.0622 17.9995 14.4875 17.9995 10.086C17.9995 5.68451 14.444 2.10977 10.0425 2.086C5.64111 2.06246 2.04732 5.59876 2 10V10.172ZM11 15H9V11H5V9H9V5H11V9H15V11H11V15Z" fill="#6C6A81"/></svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-3 mt-3">
                                                <div className="form-check form-switch ps-0">
                                                    <label className="login-label-text mb-2" for="flexSwitchCheckChecked">Friday</label>
                                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                                </div>
                                            </div>
                                            <div className="col-12 mb-3 mt-3">
                                                <div className="form-check form-switch ps-0">
                                                    <label className="login-label-text mb-2" for="flexSwitchCheckChecked">Saturday</label>
                                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                                </div>
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