import SideImg from "../../images/right_side_image.png";
import LogoSeller from "../../images/login-logo.svg";
import "toastr/build/toastr.min.css";


function AccountNumber() {

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
                                    <div className="mb-md-5 mb-3 text-center">
                                        <h1>Bank Details</h1>
                                    </div>
                                    <form className="row">
                                        <div className="col-12 mb-3">
                                            <label className="d-block login-label-text mb-2">Bank Name</label>
                                            <select class="form-select login-comn-input" aria-label="Default select example">
                                                <option selected>Choose a bank</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label className="d-block login-label-text mb-2">Account Type</label>
                                            <select class="form-select login-comn-input" aria-label="Default select example">
                                                <option selected>Choose a bank account type</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-12 mb-3">
                                                <label className="d-block login-label-text mb-2">Account Holder Name</label>
                                                <input type="password" className="form-control login-comn-input" name="password" placeholder="Enter account name" />
                                        </div>
                                        <div className="col-12 mb-3">
                                                <label className="d-block login-label-text mb-2">Bank Account Number</label>
                                                <input type="password" className="form-control login-comn-input" name="password" placeholder="Enter account number" />
                                        </div>
                                        <div className="col-12 mb-3">
                                                <label className="d-block login-label-text mb-2">Routing Number</label>
                                                <input type="password" className="form-control login-comn-input" name="password" placeholder="Enter Routing Number" />
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



export default AccountNumber;