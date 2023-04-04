import UserLayout from "../components/UserLayout";
import Logo from "../images/logo.svg";


export default function InvoiceDetails() {
    return (
        <>
            <UserLayout>
                <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-3">
                                    <div className="d-block d-md-flex align-items-center">
                                        <div className="comn-title-main">
                                            <h1 className="mb-0">
                                                #1495
                                            </h1>
                                        </div>
                                        <div className="ms-auto d-block d-md-flex  mt-3 mt-md-0">
                                            <div>
                                                <button type="submit" className="btn-comn-class w-100">
                                                    <div>
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M15 15H17C18.1046 15 19 14.1046 19 13V9C19 7.89543 18.1046 7 17 7H3C1.89543 7 1 7.89543 1 9V13C1 14.1046 1.89543 15 3 15H5M7 19H13C14.1046 19 15 18.1046 15 17V13C15 11.8954 14.1046 11 13 11H7C5.89543 11 5 11.8954 5 13V17C5 18.1046 5.89543 19 7 19ZM15 7V3C15 1.89543 14.1046 1 13 1H7C5.89543 1 5 1.89543 5 3V7H15Z" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                        <span className="ms-3">Print Invoice</span>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="mx-0 mx-md-3 mt-3 mt-md-0">
                                                <button type="submit" className="btn-comnn-lightblue w-100">
                                                    <div>
                                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 2H3C1.89543 2 1 2.89543 1 4V16C1 17.1046 1.89543 18 3 18H15C16.1046 18 17 17.1046 17 16V4C17 2.89543 16.1046 2 15 2H13M9 1V9M9 9L12 6M9 9L6 6M1 11H3.58579C3.851 11 4.10536 11.1054 4.29289 11.2929L6.70711 13.7071C6.89464 13.8946 7.149 14 7.41421 14H10.5858C10.851 14 11.1054 13.8946 11.2929 13.7071L13.7071 11.2929C13.8946 11.1054 14.149 11 14.4142 11H17" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                        <span className="ms-3">Download</span>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className=" mt-3 mt-md-0">
                                                <button type="submit" className="btn-comnn-black w-100">
                                                    <div>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.68387 11.3419C6.88616 10.9381 7 10.4824 7 10C7 9.51763 6.88616 9.06185 6.68387 8.65807M6.68387 11.3419C6.19134 12.3251 5.17449 13 4 13C2.34315 13 1 11.6569 1 10C1 8.34315 2.34315 7 4 7C5.17449 7 6.19134 7.67492 6.68387 8.65807M6.68387 11.3419L13.3161 14.6581M6.68387 8.65807L13.3161 5.34193M13.3161 5.34193C13.8087 6.32508 14.8255 7 16 7C17.6569 7 19 5.65685 19 4C19 2.34315 17.6569 1 16 1C14.3431 1 13 2.34315 13 4C13 4.48237 13.1138 4.93815 13.3161 5.34193ZM13.3161 14.6581C13.1138 15.0619 13 15.5176 13 16C13 17.6569 14.3431 19 16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.8255 13 13.8087 13.6749 13.3161 14.6581Z" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                        <span className="ms-3">Share Invoice</span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                            </div>
                            <div className="col-12 mt-3">
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
                                                        <td>
                                                            <span className="text-black fw-bold">$9.49</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>

                                                        <td>Coco Strawberry Pancake</td>
                                                        <td>$2.50</td>
                                                        <td>2</td>
                                                        <td>
                                                            <span className="text-black fw-bold">$5.50</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>

                                                        <td>Coco Strawberry Pancake</td>
                                                        <td>$2.50</td>
                                                        <td>2</td>
                                                        <td>
                                                            <span className="text-black fw-bold">$5.50</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="3" className="border-bottom-0 ">
                                                            
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
                                                            <div className="order-label">
                                                                <span className="text-black fw-bold">Total Amount</span>
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
                        </div>
                    </div>
                 </div>
            </UserLayout>
        </>
    );
}
