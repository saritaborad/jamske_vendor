import UserLayout from "../components/UserLayout";
import Logo from "../images/logo.svg";
import DriverProfile from "../images/driver-pro.svg";
import SealPack1 from "../images/seal-pack-1.svg";
import SealPack2 from "../images/seal-pack-2.svg";
import SealPack3 from "../images/seal-pack-3.svg";

export default function CompletedOrdersDetails() {
    return (
        <>
            <UserLayout>
                <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row mt-4">
                            <div className="col-lg-9">
                                <div className="order-main-part">
                                    <div className="order-bill-box">
                                        <div className=" invoice-sec-padding">
                                            <div className="invoice-sec d-flex flex-column">
                                                <div className="d-flex align-items-center">
                                                    <div className="invoice-logo mb-3">
                                                        <img src={Logo} alt="JAMSKE" className="img-fluid" />
                                                    </div>
                                                    <div className=" invoice-details ms-auto mb-3">
                                                        <bdi>
                                                            Invoice<b className="ms-2">#9582</b>
                                                        </bdi>
                                                    </div>
                                                </div>
                                                <div className="invoice-details d-block d-sm-flex mb-4">
                                                    <div>
                                                        <p>1180 5th avenue, Manhattan,NY,US 10101</p>
                                                        <p>+1 (123) 456 7891, +44 (876) 543 2198</p>
                                                        <p>sales@autosky.com</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="d-flex">
                                                            <span className="me-3">Date Issued :</span>
                                                            <bdi>06/10/2021</bdi>
                                                        </div>
                                                        <div className=" d-flex">
                                                            <span className="me-3">Time : </span>
                                                            <bdi>8:20 PM</bdi>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="payment-detail-sec  d-block d-sm-flex  invoice-sec-padding mb-3">
                                            <div className="invoice-details">
                                                <p>Invoice To</p>
                                                <p>
                                                    <b>John Doe</b>
                                                </p>
                                                <p>Yang, Hansen and Hart PLC</p>
                                                <p>01871 Kristy Square, USA</p>
                                                <p>+1 (123) 645 7987</p>
                                                <p>johndeo@gmail.com</p>
                                            </div>
                                            <div className="ms-auto invoice-details">
                                                <p>
                                                    <b>Payment Details:</b>
                                                </p>
                                                <div className="d-flex">
                                                    <span className="me-3">Total Amout :</span>
                                                    <bdi>$19.49</bdi>
                                                </div>
                                                <div className="d-flex succsess-font">
                                                    <span className="me-3">Status :</span>
                                                    <bdi>Successful</bdi>
                                                </div>
                                                <div className="d-flex">
                                                    <span className="me-3">Transation Id :</span>
                                                    <bdi>#12316548915</bdi>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="order-table table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">No.</th>
                                                        <th scope="col">Product</th>
                                                        <th scope="col">Rate</th>
                                                        <th scope="col">Quantity</th>
                                                        <th scope="col">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>

                                                        <td>Coco Strawberry Pancake</td>
                                                        <td>$9.49</td>
                                                        <td>1</td>
                                                        <td className="order-comn-black">
                                                            <span >$9.49</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>

                                                        <td>Coco Strawberry Pancake</td>
                                                        <td>$2.50</td>
                                                        <td>2</td>
                                                        <td className="order-comn-black">
                                                            <span >$5.50</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>

                                                        <td>Coco Strawberry Pancake</td>
                                                        <td>$2.50</td>
                                                        <td>2</td>
                                                        <td className="order-comn-black">
                                                            <span>$5.50</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="3" className="border-bottom-0 order-comn-black">
                                                            <span>Order Suggestions</span>
                                                            <div className="order-suggestion mt-2">
                                                                <p className="m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="order-label">
                                                                <span>Subtotal</span>
                                                                <span>Taxes</span>
                                                                <span>Commission</span>
                                                                <span>Discount</span>
                                                                <span>Seller Tip</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="order-amount">
                                                                <span>$19.49</span>
                                                                <span>+$0.49</span>
                                                                <span>$5.49</span>
                                                                <span>$0.49</span>
                                                                <span>$1.20</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="3"></td>
                                                        <td>
                                                            <div className="order-label order-comn-black">
                                                                <span>Total Amount</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="order-amount">
                                                                <span className="total">$20.20</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mt-3 mt-md-0">
                                <div className="main-order-acc-sec">
                                    <div className="order-bill-box invoice-sec-padding  ">
                                        <div className="total-border-btm">
                                            <div className="mb-3 text-center">
                                                <button type="submit" className="btn-comnn-green  w-100">
                                                Deliverd
                                                </button>
                                            </div>
                                        </div>
                                        <div className=" mt-3 total-border-btm">
                                            <div className="mb-3 invoice-details">
                                                <p>
                                                    <b>Shipping Method</b>
                                                </p>
                                                <div className="d-flex succsess-font">
                                                    <span className="me-3">Today</span>
                                                    <bdi className="ms-auto">Delivery</bdi>
                                                </div>
                                                <span>8:30 PM - 9:00 PM</span>
                                            </div>
                                        </div>
                                        <div className=" mt-3 total-border-btm">
                                            <div className="mb-3 invoice-details">
                                                <p>
                                                    <b>Preparing Time</b>
                                                </p>
                                                <div className="mb-2">
                                                    <span>Estimation time for a preparing</span>
                                                </div>
                                                <div className="d-flex invoice-details">
                                                    <bdi>10 min</bdi>
                                                    <bdi className="ms-auto">8:40 PM</bdi>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3 total-border-btm total-border-top">
                                            <div className="invoice-details">
                                                <div className="my-3">
                                                    <p className="m-0">
                                                        <b>Jamske Driver</b>
                                                    </p>
                                                </div>
                                                <div className="driver-pro-sec mb-3">
                                                    <div  className="d-flex align-items-center  ">
                                                        <img src={DriverProfile} alt="driver-jamske" />
                                                        <div className="invoice-details ms-3">                                         
                                                            <b  className="d-block mb-1">Harry P. Mills</b> 
                                                            <span>+1 321 654 9870</span>
                                                        </div>
                                                    </div>
                                                    
                                                </div>        
                                            </div>
                                        </div>
                                        <div className=" mt-3">
                                            <div className=" invoice-details">
                                                <p>
                                                    <b>Delivery Address</b>
                                                </p>
                                                <p>
                                                    <b>John Doe</b>
                                                </p>
                                                <span>1180 6th Ave, New York, NY 10036, USA</span>
                                                <div className="d-flex align-items-center mt-2">                                                  
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 22.5C6.47715 22.5 2 18.0228 2 12.5C2 6.97715 6.47715 2.5 12 2.5C17.5228 2.5 22 6.97715 22 12.5C21.9939 18.0203 17.5203 22.4939 12 22.5ZM11.984 20.5H12C16.4167 20.4956 19.9942 16.9127 19.992 12.496C19.9898 8.07929 16.4087 4.5 11.992 4.5C7.57528 4.5 3.99421 8.07929 3.992 12.496C3.98979 16.9127 7.56729 20.4956 11.984 20.5ZM10 17.5L6 13.5L7.41 12.09L10 14.67L16.59 8.08L18 9.5L10 17.5Z" fill="#219653"/>
                                                    </svg>
                                                    <span className="mb-0  ms-1">Order deliverd on 10th june, 8:20PM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-bill-box invoice-sec-padding mt-3 pb-0 ">
                                        <div className="total-border-btm">
                                            <div className="invoice-details">
                                                <p>
                                                    <b>Order Package Number</b>
                                                </p>
                                                
                                            </div>
                                            <div className="order-num-div mt-3">
                                                    <ul>
                                                        <li className="mb-3">
                                                            <label className="order-num-box" >
                                                                <bdi className="d-flex align-items-center justify-content-center">58426</bdi>       
                                                            </label>    
                                                        </li>
                                                        <li className="mb-3">
                                                            <label className="order-num-box" >
                                                                <bdi className="d-flex align-items-center justify-content-center">58427</bdi>     
                                                            </label>    
                                                        </li>  
                                                        <li className="mb-3">
                                                            <label className="order-num-box" >
                                                                <bdi className="d-flex align-items-center justify-content-center">58428</bdi>       
                                                            </label>    
                                                        </li> 
                                                        <li className="mb-3">
                                                            <label className="order-num-box" >
                                                                <bdi className="d-flex align-items-center justify-content-center">58429</bdi>     
                                                            </label>    
                                                        </li> 

                                                    </ul>
                                            </div>
                                        </div>
                                        <div className=" mt-3">
                                            <div className=" invoice-details">
                                                <p>
                                                    <b>Seal Pack Packages Images</b>
                                                </p>
                                                <div className="seal-pack-img-div">
                                                    <img src={SealPack1} alt="seal-pack" className="mb-3" />
                                                    <img src={SealPack2} alt="seal-pack"  className="mb-3"/>
                                                    <img src={SealPack3} alt="seal-pack" className="mb-3"/>
                                                </div>
                                                         
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
}
