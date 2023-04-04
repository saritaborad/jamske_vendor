import UserLayout from "../components/UserLayout";       
import React from "react";

export default function CreateDiscount() {

    return (
        <>
            <UserLayout>
                <div className="content-main-section">
                    <div className="container-fluid">
                                <form className="row mt-3">
                                <div className="col-lg-4 ">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="dash-part-hdr">
                                                    <div className="product-hdr d-flex align-items-center">
                                                        <label className="d-block login-label-text">Create Discount</label>
                                                    </div>
                                                    <div className="dash-part-btm">
                                                        <div className="mb-3 ">
                                                            <label className="d-inline-flex align-items-center login-label-text mb-2 mt-2">Title</label>
                                                            <input type="text" className="form-control login-comn-input"  name="offer_title " placeholder="Enter offer title  "/>
                                                        </div>
                                                        <div className="mb-3 ">
                                                            <label className="d-inline-flex align-items-center login-label-text mb-2">Offer Code</label>
                                                            <input type="text" className="form-control login-comn-input"  name="offer_code" placeholder="Enter offer code  "/>
                                                        </div>
                                                        <div className="mb-3 ">
                                                            <label className="d-inline-flex align-items-center login-label-text mb-2">Categories</label>
                                                            <select className="form-select login-comn-input" name="categories">
                                                                <option>Choose Categotires</option>
                                                                <option>123</option>
                                                                <option>456</option>  
                                                            </select>
                                                            <div className="categories-div mt-3">
                                                                <ul>
                                                                    <li>
                                                                        <label className="categories-box">
                                                                            <span className="d-flex align-items-center">
                                                                                <bdi>Fruit</bdi> 
                                                                                <span className="ms-auto">
                                                                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M7.99183 0.833008L5.00016 3.82467L2.0085 0.833008L0.833496 2.00801L3.82516 4.99967L0.833496 7.99134L2.0085 9.16634L5.00016 6.17467L7.99183 9.16634L9.16683 7.99134L6.17516 4.99967L9.16683 2.00801L7.99183 0.833008Z" fill="#061624"/>
                                                                                    </svg>
                                                                                </span>
                                                                            </span>  
                                                                        </label>
                                                                    </li>
                                                                    <li>
                                                                        <label className="categories-box">
                                                                            <span className="d-flex align-items-center">
                                                                                <bdi className="me-3">Beverage</bdi> 
                                                                                <span className="ms-auto">
                                                                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M7.99183 0.833008L5.00016 3.82467L2.0085 0.833008L0.833496 2.00801L3.82516 4.99967L0.833496 7.99134L2.0085 9.16634L5.00016 6.17467L7.99183 9.16634L9.16683 7.99134L6.17516 4.99967L9.16683 2.00801L7.99183 0.833008Z" fill="#061624"/>
                                                                                    </svg>
                                                                                </span>
                                                                            </span>  
                                                                        </label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-12 mb-3 mt-3">
                                                                <label className="d-inline-flex align-items-center login-label-text mb-2">
                                                                    Description
                                                                </label>
                                                                <textarea className="form-control login-comn-input h-auto" rows={4} placeholder="Ex. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  " />
                                                            </div>
                                                            <div className= "mb-3 text-center">
                                                                <button type="submit" className="btn-comn-class w-100">
                                                                    Create Offer
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 mt-lg-0 mt-3">
                                        <div className="dash-top-box">
                                            <div className="row">
                                                <div className="col-12 mb-3 ">
                                                    <label className="d-block login-label-text mb-2">Valid Till</label>
                                                    <div className="payment-rgt-part">
                                                        <input type="date" className="form-control login-comn-input mb-sm-0 mb-2"/>
                                                        <span>To</span>
                                                        <input type="date" className="form-control login-comn-input mt-sm-0 mt-2" />
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-3 ">
                                                    <label className="d-block login-label-text mb-2">Time Duration</label>
                                                    <div className="payment-rgt-part">
                                                        <input type="time" className="form-control login-comn-input mb-sm-0 mb-2" />
                                                        <span>To</span>
                                                        <input type="time" className="form-control login-comn-input mt-sm-0 mt-2" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3 ">
                                                    <label className="d-block login-label-text mb-2">Customer Count</label>
                                                    <input type="text" className="form-control login-comn-input" placeholder="Ex. First 100 Customers" />
                                                </div>
                                                <div className="col-md-6 mb-3 ">
                                                    <label className="d-block login-label-text mb-2">Minimum Perchase Amount</label>
                                                    <input type="text" className="form-control login-comn-input" placeholder="Ex. $ 150" />
                                                </div>
                                                <div className="col-md-6 mb-3 ">
                                                    <label className="d-block login-label-text mb-2">Discount %</label>
                                                    <input type="text" className="form-control login-comn-input" placeholder="Ex. 50%" />
                                                </div>
                                                <div className="col-md-6 mb-3 ">
                                                    <label className="d-block login-label-text mb-2">Max Discount %</label>
                                                    <input type="text" className="form-control login-comn-input" placeholder="Ex. $ 150" />
                                                </div>
                                                <div className="col-md-6 mb-3 ">
                                                    <label className="d-block login-label-text mb-2">Flate Discount $</label>
                                                    <input type="text" className="form-control login-comn-input" placeholder="Ex. 50%" />
                                                </div>
                                                <div className="col-md-6 mb-3 ">
                                                    <label className="d-block login-label-text mb-2">Max  Flate Discount $ </label>
                                                    <input type="text" className="form-control login-comn-input" placeholder="Ex. $ 150" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
            </UserLayout>
        </>
    );
}
