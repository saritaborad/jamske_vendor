import UserLayout from "../components/UserLayout";
import Logo from "../images/logo.svg";

export default function AcceptedOrderDetails() {
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
                                                        <td className="order-label-td" >
                                                            <div className="order-label">
                                                                <span>Subtotal</span>
                                                                <span>Taxes</span>
                                                                <span>Commission</span>
                                                                <span>Discount</span>
                                                                <span>Seller Tip</span>
                                                            </div>
                                                        </td>
                                                        <td className="order-amount-td">
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
                            <div className="col-lg-3 mt-3 mt-lg-0">
                                <div className="main-order-acc-sec">
                                    <div className="order-bill-box invoice-sec-padding  ">
                                        <div className="total-border-btm">
                                            <div className="mb-3 text-center">
                                                <button type="submit" className="btn-comn-class w-100">
                                                    Accept
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
                                                    <bdi className="ms-auto">Pick Up</bdi>
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
                                    </div>
                                    <div className="order-bill-box invoice-sec-padding mt-3 ">
                                        <div className="total-border-btm">
                                            <div className="mb-3 invoice-details">
                                                <p>
                                                    <b>Order Package Number</b>
                                                </p>
                                                <div className="mt-3">
                                                    <input type="text" className="form-control login-comn-input" name="order_package_number"  placeholder="Enter Manually" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" mt-3">
                                            <div className=" invoice-details">
                                                <p>
                                                    <b>Seal Pack Packages Images</b>
                                                </p>
                                                <label htmlFor="upload-img" className="w-100">
                                                    <div className="seal_package_sec mt-3 d-flex align-items-center justify-content-center flex-column invoice-details">
                                                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16 19.5H2V5.5H11V3.5H2C0.9 3.5 0 4.4 0 5.5V19.5C0 20.6 0.9 21.5 2 21.5H16C17.1 21.5 18 20.6 18 19.5V10.5H16V19.5ZM8.21 16.33L6.25 13.97L3.5 17.5H14.5L10.96 12.79L8.21 16.33ZM18 3.5V0.5H16V3.5H13C13.01 3.51 13 5.5 13 5.5H16V8.49C16.01 8.5 18 8.49 18 8.49V5.5H21V3.5H18Z" fill="#6C6A81"/>
                                                        </svg>
                                                        <p className="mt-2"><strong>Upload or drop image</strong></p>
                                                    </div>
                                                    <input type="file" id="upload-img" name="upload-img" hidden/>
                                                </label>     
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
