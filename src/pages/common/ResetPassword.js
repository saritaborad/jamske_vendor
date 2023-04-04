import SideImg from "../../images/right_side_image.png";
import LogoSeller from "../../images/login-logo.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function ResetPassword() {

    const [confirm_password, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");

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
                                        <h1>Reset your password</h1>
                                        <p>Enter and confirm your new password below.</p>
                                    </div>
                                    <Formik
                                                    // innerRef={this.runforms}
                                                    enableReinitialize
                                                    initialValues={{
                                                        confirm_password: confirm_password,
                                                        password: password,
                                                    }}
                                                    validationSchema={Yup.object({
                                                        password: Yup.string().required("Password is required."),
                                                    confirm_password: Yup.string()
                                                        .when("password", {
                                                            is: (val) => (val && val.length > 0 ? true : false),
                                                            then: Yup.string().oneOf([Yup.ref("password")], "Password must match."),
                                                        })
                                                        .required("Confirmation of Password is required."),
                                                    })}
                                                    onSubmit={(formData, { resetForm }) => {
                                                        submitFormData(formData, resetForm);
                                                    }}
                                                >
                                                    {(runform) => (
                                        <form className="row" onSubmit={runform.handleSubmit}>
                                            <div className="col-12 mb-3">
                                                <label className="d-block login-label-text mb-2">Password</label>
                                                <input type="password" className="form-control login-comn-input" {...formAttr(runform, "password")} name="password" placeholder="*******" />
                                                {errorContainer(runform, "password")}
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="d-block login-label-text mb-2">Confirm Password</label>
                                                <input type="password" className="form-control login-comn-input" {...formAttr(runform, "confirm_password")} name="confirm_password" placeholder="*******" />
                                                {errorContainer(runform, "confirm_password")}
                                            </div>
                                            <div className="col-12 mb-3 pt-2 text-center">
                                                <button type="submit" className="btn-comn-class w-100">
                                                Save
                                                </button>
                                            </div>
                                        </form>)}</Formik>
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



export default ResetPassword;