import UserLayout from "../components/UserLayout";
import UploadImg from "../images/upload-cloud.svg";
import React from "react";

export default function AddProduct() {

    const [open, setOpenForm] = React.useState(false);

    return (
        <>
            <UserLayout>
                <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row mt-3">
                            <div className="d-block d-sm-flex align-items-center">
                                <div className="comn-title-main">
                                    <h1 className="mb-0">
                                        Add Product
                                    </h1>
                                </div>
                                <div className="ms-auto d-flex mt-3 mt-sm-0">
                                    <div>
                                        <button type="submit" className="btn-comnn-lightblue w-100">
                                            Preview
                                        </button>
                                    </div>
                                    <div className="ms-3">
                                        <button type="submit" className="btn-comnn-blue-bdr w-100">
                                            Upload
                                        </button>
                                    </div>
                                </div>    
                            </div>
                            <div className="col-12 mt-3">
                                <form className="row">
                                    <div className="col-lg-8 ">
                                        <div className="dash-top-box">
                                            <div className="row">
                                                <div className="col-12 mb-3">
                                                    <label className="d-block login-label-text mb-2">Product Name</label>
                                                    <input type="text" className="form-control login-comn-input" placeholder="Enter product name" />
                                                </div>
                                                <div className="col-md-6 mb-3 ">
                                                    <label className="d-block login-label-text mb-2">Size</label>
                                                    <input type="text" className="form-control login-comn-input" placeholder="Ex. Small" />
                                                </div>
                                                <div className="col-md-6 mb-3 ">
                                                    <label className="d-inline-flex align-items-center login-label-text mb-2">
                                                        Price
                                                    </label>
                                                    <input className="form-control login-comn-input" type="text" placeholder="Ex. $12.50" />
                                                </div>
                                                <div className="col-12 mb-3 ">
                                                    <label className="d-inline-flex align-items-center login-label-text mb-2">
                                                        Description
                                                    </label>
                                                    <textarea className="form-control login-comn-input h-auto" rows={3} placeholder="Add description about your product " />
                                                </div>
                                                <div className="col-12 mb-3 ">
                                                    <label className="d-inline-flex align-items-center login-label-text mb-2">
                                                        Ingredients
                                                    </label>
                                                    <textarea className="form-control login-comn-input h-auto" rows={3} placeholder="Ex. Enriched Flour , Water, High Fructose Corn Syrup and/or Sugar, Yeast, Soybean Oil " />
                                                </div>
                                                <div className="col-12 mb-3 ">
                                                    <label className="d-inline-flex align-items-center login-label-text mb-2">
                                                        Nutritional Information<span className="iball-span">i</span>
                                                    </label>
                                                    <div className="order-table product-table table-responsive ">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Nutritional</th>
                                                                    <th className="text-center">Cal/gm</th>
                                                                    <th className="text-center">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Calories</td>
                                                                    <td className="text-center">800kcal</td>
                                                                    <td className="text-center btn-comnn-product  d-flex justify-content-center">
                                                                        <button>
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M12.2312 21.3491C7.04907 21.3491 2.84814 17.1481 2.84814 11.966C2.84814 6.78394 7.04907 2.58301 12.2312 2.58301C17.4133 2.58301 21.6142 6.78394 21.6142 11.966C21.6085 17.1458 17.4109 21.3434 12.2312 21.3491ZM4.72475 12.1274C4.76915 16.2571 8.14121 19.5753 12.2711 19.5532C16.401 19.5309 19.7372 16.1767 19.7372 12.0467C19.7372 7.9168 16.401 4.56262 12.2711 4.54031C8.14121 4.51822 4.76915 7.83634 4.72475 11.966V12.1274ZM16.9227 12.9043H7.53966V11.0277H16.9227V12.9043Z" fill="#232222"/>
                                                                            </svg>
                                                                        </button>
                                                                        <button>
                                                                            <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M11.4548 21.3491C6.2727 21.3491 2.07178 17.1481 2.07178 11.966C2.07178 6.78394 6.2727 2.58301 11.4548 2.58301C16.6369 2.58301 20.8378 6.78394 20.8378 11.966C20.8322 17.1458 16.6346 21.3434 11.4548 21.3491ZM3.94838 12.1274C3.99278 16.2571 7.36485 19.5753 11.4947 19.5532C15.6246 19.5309 18.9608 16.1767 18.9608 12.0467C18.9608 7.9168 15.6246 4.56262 11.4947 4.54031C7.36485 4.51822 3.99278 7.83634 3.94838 11.966V12.1274ZM12.3931 16.6576H10.5165V12.9043H6.76329V11.0277H10.5165V7.27452H12.3931V11.0277H16.1463V12.9043H12.3931V16.6576Z" fill="#232222"/>
                                                                            </svg>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Fat</td>
                                                                   
                                                                    <td className="text-center">136g</td>
                                                                    <td className="text-center btn-comnn-product  d-flex justify-content-center">
                                                                        <button>
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M12.2312 21.3491C7.04907 21.3491 2.84814 17.1481 2.84814 11.966C2.84814 6.78394 7.04907 2.58301 12.2312 2.58301C17.4133 2.58301 21.6142 6.78394 21.6142 11.966C21.6085 17.1458 17.4109 21.3434 12.2312 21.3491ZM4.72475 12.1274C4.76915 16.2571 8.14121 19.5753 12.2711 19.5532C16.401 19.5309 19.7372 16.1767 19.7372 12.0467C19.7372 7.9168 16.401 4.56262 12.2711 4.54031C8.14121 4.51822 4.76915 7.83634 4.72475 11.966V12.1274ZM16.9227 12.9043H7.53966V11.0277H16.9227V12.9043Z" fill="#232222"/>
                                                                            </svg>
                                                                        </button>
                                                                        <button>
                                                                            <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M11.4548 21.3491C6.2727 21.3491 2.07178 17.1481 2.07178 11.966C2.07178 6.78394 6.2727 2.58301 11.4548 2.58301C16.6369 2.58301 20.8378 6.78394 20.8378 11.966C20.8322 17.1458 16.6346 21.3434 11.4548 21.3491ZM3.94838 12.1274C3.99278 16.2571 7.36485 19.5753 11.4947 19.5532C15.6246 19.5309 18.9608 16.1767 18.9608 12.0467C18.9608 7.9168 15.6246 4.56262 11.4947 4.54031C7.36485 4.51822 3.99278 7.83634 3.94838 11.966V12.1274ZM12.3931 16.6576H10.5165V12.9043H6.76329V11.0277H10.5165V7.27452H12.3931V11.0277H16.1463V12.9043H12.3931V16.6576Z" fill="#232222"/>
                                                                            </svg>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Saturated Fat</td>
                                                                   
                                                                    <td className="text-center">8g</td>
                                                                    <td className="text-center btn-comnn-product  d-flex justify-content-center">
                                                                        <button>
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M12.2312 21.3491C7.04907 21.3491 2.84814 17.1481 2.84814 11.966C2.84814 6.78394 7.04907 2.58301 12.2312 2.58301C17.4133 2.58301 21.6142 6.78394 21.6142 11.966C21.6085 17.1458 17.4109 21.3434 12.2312 21.3491ZM4.72475 12.1274C4.76915 16.2571 8.14121 19.5753 12.2711 19.5532C16.401 19.5309 19.7372 16.1767 19.7372 12.0467C19.7372 7.9168 16.401 4.56262 12.2711 4.54031C8.14121 4.51822 4.76915 7.83634 4.72475 11.966V12.1274ZM16.9227 12.9043H7.53966V11.0277H16.9227V12.9043Z" fill="#232222"/>
                                                                            </svg>
                                                                        </button>
                                                                        <button>
                                                                            <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M11.4548 21.3491C6.2727 21.3491 2.07178 17.1481 2.07178 11.966C2.07178 6.78394 6.2727 2.58301 11.4548 2.58301C16.6369 2.58301 20.8378 6.78394 20.8378 11.966C20.8322 17.1458 16.6346 21.3434 11.4548 21.3491ZM3.94838 12.1274C3.99278 16.2571 7.36485 19.5753 11.4947 19.5532C15.6246 19.5309 18.9608 16.1767 18.9608 12.0467C18.9608 7.9168 15.6246 4.56262 11.4947 4.54031C7.36485 4.51822 3.99278 7.83634 3.94838 11.966V12.1274ZM12.3931 16.6576H10.5165V12.9043H6.76329V11.0277H10.5165V7.27452H12.3931V11.0277H16.1463V12.9043H12.3931V16.6576Z" fill="#232222"/>
                                                                            </svg>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Cholesterol</td>
                                                                   
                                                                    <td className="text-center">90mg</td>
                                                                    <td className="text-center btn-comnn-product d-flex justify-content-center">
                                                                        <button>
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M12.2312 21.3491C7.04907 21.3491 2.84814 17.1481 2.84814 11.966C2.84814 6.78394 7.04907 2.58301 12.2312 2.58301C17.4133 2.58301 21.6142 6.78394 21.6142 11.966C21.6085 17.1458 17.4109 21.3434 12.2312 21.3491ZM4.72475 12.1274C4.76915 16.2571 8.14121 19.5753 12.2711 19.5532C16.401 19.5309 19.7372 16.1767 19.7372 12.0467C19.7372 7.9168 16.401 4.56262 12.2711 4.54031C8.14121 4.51822 4.76915 7.83634 4.72475 11.966V12.1274ZM16.9227 12.9043H7.53966V11.0277H16.9227V12.9043Z" fill="#232222"/>
                                                                            </svg>
                                                                        </button>
                                                                        <button>
                                                                            <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M11.4548 21.3491C6.2727 21.3491 2.07178 17.1481 2.07178 11.966C2.07178 6.78394 6.2727 2.58301 11.4548 2.58301C16.6369 2.58301 20.8378 6.78394 20.8378 11.966C20.8322 17.1458 16.6346 21.3434 11.4548 21.3491ZM3.94838 12.1274C3.99278 16.2571 7.36485 19.5753 11.4947 19.5532C15.6246 19.5309 18.9608 16.1767 18.9608 12.0467C18.9608 7.9168 15.6246 4.56262 11.4947 4.54031C7.36485 4.51822 3.99278 7.83634 3.94838 11.966V12.1274ZM12.3931 16.6576H10.5165V12.9043H6.76329V11.0277H10.5165V7.27452H12.3931V11.0277H16.1463V12.9043H12.3931V16.6576Z" fill="#232222"/>
                                                                            </svg>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>  
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <label className="d-block login-label-text mb-2">Additional Nutrition Information</label>
                                                    <input type="text" className="form-control login-comn-input" placeholder="Ex. 2,000 calories a day is used for general nutrition advice but calorie needs vary." />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-lg-0 mt-3">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="dash-part-hdr">
                                                    <div className="product-hdr d-flex align-items-center">
                                                        <label className="d-block login-label-text">Product Image</label>
                                                    </div>
                                                    <div className="dash-part-btm">
                                                        <div className="mb-3">
                                                            <label className="offer-bg-select mt-3" htmlFor="offer-bg-upload">
                                                                <img src={UploadImg} alt="Upload File" className="img-fluid" />
                                                                <div className="upload-text">Upload File</div>
                                                            </label>
                                                            <input id="offer-bg-upload" accept="image/*" name="upload_offer_img" type="file" className="d-none" />
                                                        </div>
                                                        <div className="mb-3 ">
                                                            <label className="d-inline-flex align-items-center login-label-text mb-2">Category</label>
                                                            <select className="form-select login-comn-input" name="category">
                                                                <option>Ex. Fruits</option>
                                                                <option>123</option>
                                                                <option>456</option>  
                                                            </select>
                                                        </div>
                                                        <div className="mb-3 ">
                                                            <label className="d-inline-flex align-items-center login-label-text mb-2">Discount</label>
                                                            <input type="text" className="form-control login-comn-input"  name="discount" placeholder="Enter Discount % Or price  "/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3">
                                            {open ? (
                                                <div className="dash-part-hdr">
                                                    <div className="product-hdr d-flex align-items-center">
                                                        <label className="d-block login-label-text">Product Varient</label>
                                                    </div>
                                                    <div className="dash-part-btm">
                                                        <div className="mb-3 mt-3">
                                                            <label className="d-inline-flex align-items-center login-label-text mb-2">Product Name</label>
                                                            <input type="text" className="form-control login-comn-input"  name="product_name" placeholder="Farm skin superfood Blueberry  "/>
                                                        </div>
                                                        <div className="mb-3 ">
                                                            <label className="d-inline-flex align-items-center login-label-text mb-2">Size</label>
                                                            <input type="text" className="form-control login-comn-input"  name="size" placeholder="1.0 Pound  "/>
                                                        </div>
                                                        <div className="mb-3 ">
                                                            <label className="d-inline-flex align-items-center login-label-text mb-2">Price</label>
                                                            <input type="text" className="form-control login-comn-input"  name="price" placeholder="$5.00 "/>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <div className="col-12 mt-3">
                                            <div className="dash-top-box">                                  
                                                <button type="button" className="btn-comn-class-gray w-100" onClick={() => setOpenForm(true)} >
                                                    Add Product Variant
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
}
