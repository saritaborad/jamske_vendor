import UserLayout from "../components/UserLayout";
import React from "react";
import { Link } from "react-router-dom";

export default function Notification() {
    return (
        <>
            <UserLayout>
                <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 my-3">
                                <div className="comn-title-main d-block  d-sm-flex justify-content-between">
                                    <h1 className="mb-0">Notification</h1>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="notify-main d-block  d-lg-flex">
                                    <div className="notify-innr-left">
                                        <div className="d-flex align-items-center">
                                            <bdi className="d-flex align-items-center justify-content-center">
                                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 15H17L15.5951 13.5951C15.2141 13.2141 15 12.6973 15 12.1585V9C15 6.38757 13.3304 4.16509 11 3.34142V3C11 1.89543 10.1046 1 9 1C7.89543 1 7 1.89543 7 3V3.34142C4.66962 4.16509 3 6.38757 3 9V12.1585C3 12.6973 2.78595 13.2141 2.40493 13.5951L1 15H6M12 15V16C12 17.6569 10.6569 19 9 19C7.34315 19 6 17.6569 6 16V15M12 15H6" stroke="#3E55AB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </bdi>
                                            <span className="ms-3">Notification</span>
                                        </div>
                                        
                                    </div>
                                    <div className="notify-innr-mid my-2 my-lg-0">
                                        <div>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                        </div>
                                    </div>
                                    <div className="notify-innr-right ms-auto">
                                        <p>5:22 PM</p>
                                    </div>
                                </div>
                                <div className="notify-main d-block  d-lg-flex ">
                                    <div className="notify-innr-left">
                                        <div className="d-flex align-items-center">
                                            <bdi className="d-flex align-items-center justify-content-center">
                                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 4L8.8906 9.2604C9.5624 9.70827 10.4376 9.70827 11.1094 9.2604L19 4M3 15H17C18.1046 15 19 14.1046 19 13V3C19 1.89543 18.1046 1 17 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15Z" stroke="#3E55AB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </bdi>
                                            <span className="ms-3">Bag Alert</span>
                                        </div>
                                        
                                    </div>
                                    <div className="notify-innr-mid my-2 my-lg-0">
                                        <div>
                                            When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </div>
                                    </div>
                                    <div className="notify-innr-right ms-auto">
                                        <p>12 Apr 10:22 PM</p>
                                    </div>
                                </div>
                                <div className="notify-main d-block  d-lg-flex ">
                                    <div className="notify-innr-left">
                                        <div className="d-flex align-items-center">
                                            <bdi className="d-flex align-items-center justify-content-center">
                                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13 9V5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5V9M2 7H16L17 19H1L2 7Z" stroke="#3E55AB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </bdi>
                                            <span className="ms-3">New Order</span>
                                        </div>
                                        
                                    </div>
                                    <div className="notify-innr-mid my-2 my-lg-0">
                                        <div>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.
                                        </div>
                                        <Link  to='/#' ><bdi>View Order</bdi></Link>
                                    </div>
                                    <div className="notify-innr-right ms-auto">
                                        <p>12 Apr 10 PM</p>
                                    </div>
                                </div>
                                <div className="notify-main d-block  d-lg-flex ">
                                    <div className="notify-innr-left">
                                        <div className="d-flex align-items-center">
                                            <bdi className="d-flex align-items-center justify-content-center">
                                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 6H19M5 11H6M10 11H11M4 15H16C17.6569 15 19 13.6569 19 12V4C19 2.34315 17.6569 1 16 1H4C2.34315 1 1 2.34315 1 4V12C1 13.6569 2.34315 15 4 15Z" stroke="#3E55AB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </bdi>
                                            <span className="ms-3">Transction Done</span>
                                        </div>
                                        
                                    </div>
                                    <div className="notify-innr-mid my-2 my-lg-0">
                                        <div>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                                        </div>
                                    </div>
                                    <div className="notify-innr-right ms-auto">
                                        <p>12 Apr 9:30 PM</p>
                                    </div>
                                </div>
                                <div className="notify-main d-block  d-lg-flex ">
                                    <div className="notify-innr-left">
                                        <div className="d-flex align-items-center">
                                            <bdi className="d-flex align-items-center justify-content-center">
                                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11 12H12H11ZM11 4H10V4L11 4ZM15.2929 3.29289L16 2.58579L16 2.58579L15.2929 3.29289ZM18.7071 6.70711L19.4142 6V6L18.7071 6.70711ZM2 2H10V0H2V2ZM10 2V12H12V2H10ZM2 12V2H0V12H2ZM3 12H2V14H3V12ZM10 12H7V14H10V12ZM0 12C0 13.1046 0.89543 14 2 14V12H0ZM10 12V14C11.1046 14 12 13.1046 12 12H10ZM10 2H10H12C12 0.89543 11.1046 0 10 0V2ZM2 0C0.895431 0 0 0.89543 0 2H2V2V0ZM12 12L12 4L10 4L10 12H12ZM12 4H14.5858V2H12V4ZM18 7.41421V12H20V7.41421H18ZM14.5858 4L18 7.41421L19.4142 6L16 2.58579L14.5858 4ZM13 12H12V14H13V12ZM18 12H17V14H18V12ZM20 7.41421C20 6.88378 19.7893 6.37507 19.4142 6L18 7.41421L18 7.41421H20ZM14.5858 4L14.5858 4L16 2.58579C15.6249 2.21071 15.1162 2 14.5858 2V4ZM10 12C10 13.1046 10.8954 14 12 14V12H12H10ZM18 12V14C19.1046 14 20 13.1046 20 12H18ZM12 4V4V2C10.8954 2 10 2.89543 10 4H12ZM6 13C6 13.5523 5.55228 14 5 14V16C6.65685 16 8 14.6569 8 13H6ZM5 14C4.44772 14 4 13.5523 4 13H2C2 14.6569 3.34315 16 5 16V14ZM4 13C4 12.4477 4.44772 12 5 12V10C3.34315 10 2 11.3431 2 13H4ZM5 12C5.55228 12 6 12.4477 6 13H8C8 11.3431 6.65685 10 5 10V12ZM16 13C16 13.5523 15.5523 14 15 14V16C16.6569 16 18 14.6569 18 13H16ZM15 14C14.4477 14 14 13.5523 14 13H12C12 14.6569 13.3431 16 15 16V14ZM14 13C14 12.4477 14.4477 12 15 12V10C13.3431 10 12 11.3431 12 13H14ZM15 12C15.5523 12 16 12.4477 16 13H18C18 11.3431 16.6569 10 15 10V12Z" fill="#3E55AB"/>
                                                </svg>
                                            </bdi>
                                            <span className="ms-3">Order Deliverd</span>
                                        </div>
                                        
                                    </div>
                                    <div className="notify-innr-mid my-2 my-lg-0">
                                        <div>
                                        There are many variations of passages of Lorem Ipsum available, but the majority 
                                        have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                                        </div>
                                    </div>
                                    <div className="notify-innr-right ms-auto">
                                        <p>12 Apr 9:30 PM</p>
                                    </div>
                                </div>
                                <div className="notify-main d-block  d-lg-flex ">
                                    <div className="notify-innr-left">
                                        <div className="d-flex align-items-center">
                                            <bdi className="d-flex align-items-center justify-content-center">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 6V19M10 6C10 6 10 4.50722 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C11.4027 6 10 6 10 6ZM10 6C10 6 10 4.06291 10 3.5C10 2.11929 8.88071 1 7.5 1C6.11929 1 5 2.11929 5 3.5C5 4.88071 6.11929 6 7.5 6C8.3178 6 10 6 10 6ZM3 10H17M3 10C1.89543 10 1 9.10457 1 8C1 6.89543 1.89543 6 3 6H17C18.1046 6 19 6.89543 19 8C19 9.10457 18.1046 10 17 10M3 10L3 17C3 18.1046 3.89543 19 5 19H15C16.1046 19 17 18.1046 17 17V10" stroke="#3E55AB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </bdi>
                                            <span className="ms-3">New Promocode</span>
                                        </div>
                                        
                                    </div>
                                    <div className="notify-innr-mid my-2 my-lg-0">
                                        <div>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                        </div>
                                    </div>
                                    <div className="notify-innr-right ms-auto">
                                        <p>12 Apr 9:30 PM</p>
                                    </div>
                                </div>
                                <div className="notify-main d-block  d-lg-flex ">
                                    <div className="notify-innr-left">
                                        <div className="d-flex align-items-center">
                                            <bdi className="d-flex align-items-center justify-content-center">
                                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 1L9.44721 0.105573C9.16569 -0.0351909 8.83431 -0.0351909 8.55279 0.105573L9 1ZM17 5H18C18 4.62123 17.786 4.27496 17.4472 4.10557L17 5ZM1 5L0.552786 4.10557C0.214002 4.27496 0 4.62123 0 5H1ZM17 15L17.4472 15.8944C17.786 15.725 18 15.3788 18 15H17ZM9 19L8.55279 19.8944C8.83431 20.0352 9.16569 20.0352 9.44721 19.8944L9 19ZM1 15H0C0 15.3788 0.214002 15.725 0.552786 15.8944L1 15ZM8.55279 1.89443L16.5528 5.89443L17.4472 4.10557L9.44721 0.105573L8.55279 1.89443ZM16.5528 4.10557L8.55279 8.10557L9.44721 9.89443L17.4472 5.89443L16.5528 4.10557ZM9.44721 8.10557L1.44721 4.10557L0.552786 5.89443L8.55279 9.89443L9.44721 8.10557ZM1.44721 5.89443L9.44721 1.89443L8.55279 0.105573L0.552786 4.10557L1.44721 5.89443ZM16.5528 14.1056L8.55279 18.1056L9.44721 19.8944L17.4472 15.8944L16.5528 14.1056ZM9.44721 18.1056L1.44721 14.1056L0.552786 15.8944L8.55279 19.8944L9.44721 18.1056ZM2 15V5H0V15H2ZM18 15V5H16V15H18ZM8 9V19H10V9H8Z" fill="#3E55AB"/>
                                                </svg>
                                            </bdi>
                                            <span className="ms-3">Stock</span>
                                        </div>
                                        
                                    </div>
                                    <div className="notify-innr-mid my-2 my-lg-0">
                                        <div>
                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
                                        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form
                                        </div>
                                    </div>
                                    <div className="notify-innr-right ms-auto">
                                        <p>12 Apr 9:30 PM</p>
                                    </div>
                                </div>
                                <div className="notify-main d-block  d-lg-flex ">
                                    <div className="notify-innr-left">
                                        <div className="d-flex align-items-center">
                                            <bdi className="d-flex align-items-center justify-content-center">
                                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13 9V5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5V9M2 7H16L17 19H1L2 7Z" stroke="#3E55AB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </bdi>
                                            <span className="ms-3">New Order</span>
                                        </div>
                                        
                                    </div>
                                    <div className="notify-innr-mid my-2 my-lg-0">
                                        <div>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                                        </div>
                                    </div>
                                    <div className="notify-innr-right ms-auto">
                                        <p>12 Apr 10 PM</p>
                                    </div>
                                </div>
                                <div className="notify-main d-block  d-lg-flex ">
                                    <div className="notify-innr-left">
                                        <div className="d-flex align-items-center">
                                            <bdi className="d-flex align-items-center justify-content-center">
                                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13 9V5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5V9M2 7H16L17 19H1L2 7Z" stroke="#3E55AB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </bdi>
                                            <span className="ms-3">New Order</span>
                                        </div>
                                        
                                    </div>
                                    <div className="notify-innr-mid my-2 my-lg-0">
                                        <div>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                                        </div>
                                    </div>
                                    <div className="notify-innr-right ms-auto">
                                        <p>12 Apr 10 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    )
}