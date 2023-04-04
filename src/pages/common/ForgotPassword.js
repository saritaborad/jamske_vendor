import SideImg from "../../images/right_side_image.png";
import LogoSeller from "../../images/login-logo.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function ForgotPassword() {
    const [email, setEmail] = useState("");

    const submitFormData = (formData, resetForm) => {
        console.log("form :: ", formData);
    };

    const errorContainer = (form, field) => {
        return form.touched[field] && form.errors[field] ? <span className="error text-danger">{form.errors[field]}</span> : null;
    };

    const formAttr = (form, field) => ({
        onBlur: form.handleBlur,
        onChange: form.handleChange,
        value: form.values[field],
    });
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
                                    <div className="mb-5">
                                        <h1>Forgot your Password?</h1>
                                        <p>Type the email address you used during the registration.</p>
                                    </div>
                                    <Formik
                                                    // innerRef={this.runforms}
                                                    // enableReinitialize
                                                    initialValues={{
                                                        email: email,
                                                    }}
                                                    validationSchema={Yup.object({
                                                        email: Yup.string().email("Enter proper email address.").required("Email Address is required."),
                                                    })}
                                                    onSubmit={(formData, { resetForm }) => {
                                                        submitFormData(formData, resetForm);
                                                    }}
                                                >
                                                    {(runform) => (
                                        <form className="row" onSubmit={runform.handleSubmit}>
                                        <div className="col-12 mb-3">
                                            <label className="d-block login-label-text mb-2">Email Address</label>
                                            <input type="email" className="form-control login-comn-input" name="email"  {...formAttr(runform, "email")} placeholder="Ex. Johndeo@gmail.com" />
                                            {errorContainer(runform, "email")}
                                        </div>
                                        <div className="col-12 mb-3 pt-2 text-center">
                                            <button type="submit" className="btn-comn-class w-100">
                                                Send
                                            </button>
                                        </div> 
                                    </form>)}</Formik>
                                </div>
                                <div className="login-btm-link text-center">
                                    <p>
                                        Remember password? <Link to="/login"> Login</Link>  
                                    </p>
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



export default ForgotPassword;