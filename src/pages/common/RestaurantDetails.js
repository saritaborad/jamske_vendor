
import SideImg from "../../images/right_side_image.png";
import LogoSeller from "../../images/login-logo.svg";
import UploadImg from "../../images/UploadImage.svg";
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
                                        <div className="mb-md-5 mb-3 text-sm-center">
                                            <h1>Let’s Create an Account</h1>
                                        </div>
                                        <form className="row">
                                            <div className="col-12 mb-3">
                                                <label className="d-block login-label-text mb-2">Seller Name</label>
                                                <input type="password" className="form-control login-comn-input" name="password" placeholder="Enter your name" />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="d-block login-label-text mb-2">Seller Logo</label>
                                                <label className="offer-bg-select mt-3" htmlFor="offer-bg-upload">
                                                    <img src={UploadImg} alt="Upload File" className="img-fluid" />
                                                    <div className="upload-logo-text mt-3">
                                                      <span>Upload a file</span>
                                                      <span>or drag and drop</span>
                                                      <div className="text-center">Png, Jpg</div>
                                                    </div>
                                                </label>
                                                <input id="offer-bg-upload" accept="image/*" name="upload_offer_img" type="file" className="d-none" />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="d-block login-label-text mb-2">Seller Licence Number</label>
                                                <input type="password" className="form-control login-comn-input" name="password" placeholder="Enter seller licence number" />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="d-block login-label-text mb-2">Seller licence</label>
                                                <label className="offer-bg-select mt-3" htmlFor="offer-bg-upload">
                                                    <img src={UploadImg} alt="Upload File" className="img-fluid" />
                                                    <div className="upload-logo-text mt-3">
                                                      <span>Upload a file</span>
                                                      <span>or drag and drop</span>
                                                      <div className="text-center">Png, Jpg</div>
                                                    </div>
                                                </label>
                                                <input id="offer-bg-upload" accept="image/*" name="upload_offer_img" type="file" className="d-none" />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="d-block login-label-text mb-2">Seller category</label>
                                                <input type="password" className="form-control login-comn-input" name="password" placeholder="Choose your seller category" />
                                            </div>
                                            <div className="col-12 mb-3 pt-2 text-center">
                                                <button type="submit" className="btn-comn-class w-100">Submit</button>
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
