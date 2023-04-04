
import SideImg from "../../images/right_side_image.png";
import LogoSeller from "../../images/login-logo.svg";
import UploadImg from "../../images/UploadImage.svg";
import bookstore1 from "../../images/book-store-1.svg";
import bookstore2 from "../../images/book-store-2.svg";
import bookstore3 from "../../images/book-store-3.svg";
import bookstore4 from "../../images/book-store-4.svg";
import React from "react";
import { Accordion } from 'react-bootstrap'

export default function StoreImage() {
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
                                            <h1>Store Images</h1>
                                        </div>
                                        <div className="image-store-main">
                                        <form className="row">
                                            <div className="col-12 dash-part-hdr image-store mt-3">
                                                <Accordion defaultActiveKey="0">
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Body>
                                                            <div className="mt-3">
                                                                <div className="store-img-div image-store-box">
                                                                    <div className="mb-3"><img src={bookstore1} alt="book-store-1" className="store-img-item" /></div>
                                                                    <div className="mb-3 mx-3"><img src={bookstore2} alt="book-store-2" className="store-img-item" /></div>
                                                                    <div className="mb-3"><img src={bookstore3} alt="book-store-3" className="store-img-item" /></div>
                                                                    <div className="mb-3 ms-3"><img src={bookstore4} alt="book-store-4" className="store-img-item" /></div>
                                                                </div>
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="offer-bg-select mt-3" htmlFor="offer-bg-upload">
                                                    <img src={UploadImg} alt="Upload File" className="img-fluid" />
                                                    <div className="upload-logo-text mt-3">
                                                      <span>Upload a file </span>
                                                      <span> or drag and drop</span>
                                                      <div className="text-center">Png, Jpg</div>
                                                    </div>
                                                </label>
                                                <input id="offer-bg-upload" accept="image/*" name="upload_offer_img" type="file" className="d-none" />
                                            </div>
                                        </form>
                                        </div>
                                        
                                        <div className="col-12 mb-3 pt-2 text-center">
                                                <button type="submit" className="btn-comn-class w-100">Submit</button>
                                        </div>
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

