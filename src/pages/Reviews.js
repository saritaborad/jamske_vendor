import UserLayout from "../components/UserLayout";
import Profile from "../images/chat-profile.png";
import { Rating } from 'react-simple-star-rating'
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Reviews() {

const chatboxactive = () => {
    document.getElementById("chat-main").classList.toggle("active");
};

const  chatboxclose = () => {
    document.getElementById("chat-main").classList.remove("active");
};

const [rating, setRating] = useState(0)

const handleRating = (rate) => {
    setRating(rate)
    
  }


  return (
    <>
        <UserLayout>
            <div className="content-main-section">
                <div className="container-fluid">
                    <div className="row mt-3">
                        <div className="col-lg-8  pe-lg-0">
                            <div className="chat-lft-part-main">
                                <div className="chat-left-part-head d-block d-sm-flex align-items-center">
                                    <div className=" position-relative">
                                        <input type="search" className="form-control login-input-search searchbar ps-5 w-100" placeholder="Search..."/>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#6C6A81" className="bi bi-search fix-in-icon" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </div> 
                                    <div className="ms-auto chat-box">
                                        <select className="form-select  w-100 ms-2 ms-sm-0" name="all">
                                            <option>All</option>
                                            <option>123</option>
                                            <option>456</option>
                                        </select>
                                    </div> 
                                </div>
                                <div className="chat-left-part-btm">                                   
                                    <div className="chat-people-info bg-gray-div  d-flex align-items-center cmn-blue-tbl-txt">
                                        Today
                                    </div>
                                    <div className="chat-div">
                                        <div className="chat-people-info" onClick={chatboxactive}>
                                            <div className="chat-pro-div d-flex align-items-center">
                                                <div className="chat-profile">
                                                    <img src={Profile} alt=""/>
                                                </div>                                      
                                                <bdi>Jone Doe</bdi>
                                                <div className="d-flex align-items-center rating-star-div">
                                                    <div className="cmn-blue-tbl-txt star-count">4</div>
                                                    <Rating onClick={handleRating} ratingValue={rating} iconsCount={1} size={22} emptyColor={"#DFB300"} fillColor={"#DFB300"}/>
                                                </div>
                                                <div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                                </div>
                                                
                                                <div className="ms-auto ">
                                                    <span className="chat-date-date-month-div">Wed Feb 24</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-people-info " onClick={chatboxactive}>
                                            <div className="chat-pro-div d-flex align-items-center">
                                                <div className="chat-profile">
                                                    <img src={Profile} alt=""/>
                                                </div>                                      
                                                <bdi>Jone Doe</bdi>
                                                <div className="d-flex align-items-center rating-star-div">
                                                    <div className="cmn-blue-tbl-txt star-count" >3</div>
                                                    <Rating onClick={handleRating} ratingValue={rating} iconsCount={1} size={22} emptyColor={"#DFB300"} fillColor={"#DFB300"}/>
                                                </div>
                                                <div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                                </div>
                                                <div className="ms-auto ">
                                                    <span className="chat-date-date-month-div">Wed Feb 24</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-people-info" onClick={chatboxactive}>
                                            <div className="chat-pro-div d-flex align-items-center">
                                                <div className="chat-profile">
                                                    <img src={Profile} alt=""/>
                                                </div>                                      
                                                <bdi>Jone Doe</bdi>
                                                <div className="d-flex align-items-center rating-star-div">
                                                    <div className="cmn-blue-tbl-txt star-count">4</div>
                                                    <Rating onClick={handleRating} ratingValue={rating} iconsCount={1} size={22} emptyColor={"#DFB300"} fillColor={"#DFB300"}/>
                                                </div>
                                                <div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                                </div>
                                                <div className="ms-auto ">
                                                    <span className="chat-date-date-month-div">Wed Feb 24</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-people-info" onClick={chatboxactive}>
                                            <div className="chat-pro-div d-flex align-items-center">
                                                <div className="chat-profile">
                                                    <img src={Profile} alt=""/>
                                                </div>                                      
                                                <bdi>Jone Doe</bdi>
                                                <div className="d-flex align-items-center rating-star-div">
                                                    <div className="cmn-blue-tbl-txt star-count">2</div>
                                                    <Rating onClick={handleRating} ratingValue={rating} iconsCount={1} size={22} emptyColor={"#DFB300"} fillColor={"#DFB300"}/>
                                                </div>
                                                <div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                                </div>
                                                <div className="ms-auto ">
                                                    <span className="chat-date-date-month-div">Wed Feb 24</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" chat-people-info bg-gray-div d-flex align-items-center cmn-blue-tbl-txt">
                                        Yesterday
                                    </div>
                                    <div className="chat-div">
                                        <div className="chat-people-info" onClick={chatboxactive}>
                                            <div className="chat-pro-div d-flex align-items-center">
                                                <div className="chat-profile">
                                                    <img src={Profile} alt=""/>
                                                </div>                                      
                                                <bdi>Jone Doe</bdi>
                                                <div className="d-flex align-items-center rating-star-div">
                                                    <div className="cmn-blue-tbl-txt star-count">5</div>
                                                    <Rating onClick={handleRating} ratingValue={rating} iconsCount={1} size={22} emptyColor={"#DFB300"} fillColor={"#DFB300"}/>
                                                </div>
                                                <div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                                </div>
                                                <div className="ms-auto ">
                                                    <span className="chat-date-date-month-div">Wed Feb 24</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-people-info" onClick={chatboxactive}>
                                            <div className="chat-pro-div d-flex align-items-center">
                                                <div className="chat-profile">
                                                    <img src={Profile} alt=""/>
                                                </div>                                      
                                                <bdi>Jone Doe</bdi>
                                                <div className="d-flex align-items-center rating-star-div">
                                                    <div className="cmn-blue-tbl-txt star-count">5</div>
                                                    <Rating onClick={handleRating} ratingValue={rating} iconsCount={1} size={22} emptyColor={"#DFB300"} fillColor={"#DFB300"}/>
                                                </div>
                                                <div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                                </div>
                                                <div className="ms-auto ">
                                                    <span className="chat-date-date-month-div">Wed Feb 24</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-people-info" onClick={chatboxactive}>
                                            <div className="chat-pro-div d-flex align-items-center">
                                                <div className="chat-profile">
                                                    <img src={Profile} alt=""/>
                                                </div>                                      
                                                <bdi>Jone Doe</bdi>
                                                <div className="d-flex align-items-center rating-star-div">
                                                    <div className="cmn-blue-tbl-txt star-count">4</div>
                                                    <Rating onClick={handleRating} ratingValue={rating} iconsCount={1} size={22} emptyColor={"#DFB300"} fillColor={"#DFB300"}/>
                                                </div>
                                                <div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                                </div>
                                                <div className="ms-auto ">
                                                    <span className="chat-date-date-month-div">Wed Feb 24</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-people-info" onClick={chatboxactive}>
                                            <div className="chat-pro-div d-flex align-items-center">
                                                <div className="chat-profile">
                                                    <img src={Profile} alt=""/>
                                                </div>                                      
                                                <bdi>Jone Doe</bdi>
                                                <div className="d-flex align-items-center rating-star-div">
                                                    <div className="cmn-blue-tbl-txt star-count">4</div>
                                                    <Rating onClick={handleRating} ratingValue={rating} iconsCount={1} size={22} emptyColor={"#DFB300"} fillColor={"#DFB300"}/>
                                                </div>
                                                <div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                                </div>
                                                <div className="ms-auto ">
                                                    <span className="chat-date-date-month-div">Wed Feb 24</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-people-info" onClick={chatboxactive}>
                                            <div className="chat-pro-div d-flex align-items-center">
                                                <div className="chat-profile">
                                                    <img src={Profile} alt=""/>
                                                </div>                                      
                                                <bdi>Jone Doe</bdi>
                                                <div className="d-flex align-items-center rating-star-div">
                                                    <div className="cmn-blue-tbl-txt star-count">3</div>
                                                    <Rating onClick={handleRating} ratingValue={rating} iconsCount={1} size={22} emptyColor={"#DFB300"} fillColor={"#DFB300"}/>
                                                </div>
                                                <div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                                </div>
                                                <div className="ms-auto ">
                                                    <span className="chat-date-date-month-div">Wed Feb 24</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-people-info" onClick={chatboxactive}>
                                            <div className="chat-pro-div d-flex align-items-center">
                                                <div className="chat-profile">
                                                    <img src={Profile} alt=""/>
                                                </div>                                      
                                                <bdi>Jone Doe</bdi>
                                                <div className="d-flex align-items-center  rating-star-div">
                                                    <div className="cmn-blue-tbl-txt star-count">2</div>
                                                    <Rating onClick={handleRating} ratingValue={rating} iconsCount={1} size={22} emptyColor={"#DFB300"} fillColor={"#DFB300"}/>
                                                </div>
                                                <div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                                </div>
                                                <div className="ms-auto">
                                                    <span className="chat-date-date-month-div">Wed Feb 24</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-people-info" onClick={chatboxactive}> 
                                            <div className="chat-pro-div d-flex align-items-center">
                                                <div className="chat-profile">
                                                    <img src={Profile} alt=""/>
                                                </div>                                      
                                                <bdi>Jone Doe</bdi>
                                                <div className="d-flex align-items-center rating-star-div">
                                                    <div className="cmn-blue-tbl-txt star-count">1</div>
                                                    <Rating onClick={handleRating} ratingValue={rating} iconsCount={1} size={22} emptyColor={"#DFB300"} fillColor={"#DFB300"}/>
                                                </div>
                                                <div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                                </div>
                                                <div className="ms-auto">
                                                    <span className="chat-date-date-month-div">Wed Feb 24</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-people-info border-0" onClick={chatboxactive}>
                                            <div className="chat-pro-div d-flex align-items-center">
                                                <div className="chat-profile">
                                                    <img src={Profile} alt=""/>
                                                </div>                                      
                                                <bdi>Jone Doe</bdi>
                                                <div className="d-flex align-items-center rating-star-div">
                                                    <div className="cmn-blue-tbl-txt star-count">5</div>
                                                    <Rating onClick={handleRating} ratingValue={rating} iconsCount={1} size={22} emptyColor={"#DFB300"} fillColor={"#DFB300"}/>
                                                </div>
                                                <div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                                </div>
                                                <div className="ms-auto ">
                                                    <span className="chat-date-date-month-div">Wed Feb 24</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 ps-0 ">
                            <div className="chat-display p-0" id="chat-main">
                                <div className="chat-rgt-head">
                                    <div className="rgt-pro-info d-flex align-items-center">
                                        <div className="d-lg-none">
                                            <button className="bg-transparent border-0 pe-2" onClick={chatboxclose}>
                                                <i className="bi bi-arrow-left"></i>
                                            </button>
                                        </div>
                                        <div className="chat-profile">
                                            <img src={Profile} alt=""/>
                                        </div>
                                        <div className="ms-auto chat-user-options">
                                            <div className="table-ed-drop">
                                                <Dropdown drop="left">
                                                    <Dropdown.Toggle className="table-dropdown-btn" id="dropdown-basic">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                        </svg>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>                                                     
                                                            <Link to="#">Delete</Link>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-main-area">
                                    <div className="cht-main-box-inner">
                                        <div className="d-flex mb-2">
                                            <span className="table-bold-font">#152630</span>
                                            <span className="cmn-blue-tbl-txt ms-auto">$20.50</span>
                                        </div>
                                        <bdi>24/02/2022 8:20 PM</bdi>
                                        <div className="d-flex align-items-center me-4 my-2">
                                            <div className="cmn-dark-blue-txt star-count me-2">4.5</div>
                                            <Rating onClick={handleRating}  size={22} fillColor={"#DFB300"} emptyColor={"#fff"} initialValue={4.5} readonly/>
                                        </div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                    </div>
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
