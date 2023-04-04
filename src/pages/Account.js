import UserLayout from "../components/UserLayout";
import CoverImage from "../images/background-account.png";
import Placeholder from "../images/ac-peofile.svg";
import { Tab, Nav, TabContent, TabPane } from "react-bootstrap";
import Store1 from "../images/store-1.svg";
import Store2 from "../images/store-2.svg";
import Store3 from "../images/store-3.svg";
import Store4 from "../images/store-4.svg";
import UploadImg from "../images/upload-cloud.svg";
import { Accordion } from 'react-bootstrap'
import MUIDataTable2 from "mui-datatables";

export default function Account() {
// =========  Deliverytable ======
    const Delivery_options = {
        page: 1,
        show: false,
        sizePerPage: 5,
        totalSize: 10,
        responsive: "standard",
        onColumnSortChange: (changedColumn, direction) => console.log("changedColumn: ", changedColumn, "direction: ", direction),
        onChangeRowsPerPage: (numberOfRows) => console.log("numberOfRows: ", numberOfRows),
        onChangePage: (currentPage) => console.log("currentPage: ", currentPage),
        selectableRows: false,
        download: false,
        print: false,
        viewColumns: false,
        sort: true,
        pagination: false,
        filter: false,
        filterType: "dropdown",
        toolbar: false,
        searchOpen: false,
        search: false,
    };
    const Delivery = [
        {
            Day: "Sunday",
            Status:"1968",
            OpenTime: "$1,100",
            CloseTime: "$100",
            Action: "$500",
            
        },
        {
            Day: "Monday",
            Status:"1968",
            OpenTime: "$1,100",
            CloseTime: "$100",
            Action: "$500",
            },
        {
            Day: "Tuesday",
            Status:"1968",
            OpenTime: "$1,100",
            CloseTime: "$100",
            Action: "$500",
            },
        {
            Day: "Wednesday",
            Status:"1968",
            OpenTime: "$1,100",
            CloseTime: "$100",
            Action: "$500",
            },
        {
            Day: "Thursday",
            Status:"1968",
            OpenTime: "$1,100",
            CloseTime: "$100",
            Action: "$500",
            },
        {
            Day: "Friday",
            Status:"1968",
            OpenTime: "$1,100",
            CloseTime: "$100",
            Action: "$500",
            },
        {
            Day: "Saturday",
            Status:"1968",
            OpenTime: "$1,100",
            CloseTime: "$100",
            Action: "$500",
            },
    ];
    const Delivery_columns = [
        {
            name: "Day",
            label: "Day",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "table-bold-font" }),
            },
        },
        {
            name: "Status",
            label: "Status",
            options: {
                filter: false,
                sort: false,
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <div className='status-class'>
                           <div className="form-check form-switch d-flex align-items-center">
                                    <input className="form-check-input" type="checkbox" id="status" />
                                    <label className="form-check-label inactive-class ms-2" htmlFor="status">
                                        Off
                                    </label>
                                    <label className="form-check-label active-class ms-2" htmlFor="status">
                                        On
                                    </label>
                                </div>
                        </div>
                    );
                },
            },
        },
        {
            name: "24 Hours",
            label: "24 Hours",
            options: {
                filter: false,
                sort: false,
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <div className='status-class'>
                           <div className="form-check form-switch d-flex align-items-center">
                                    <input className="form-check-input" type="checkbox" id="status" />
                                    <label className="form-check-label inactive-class ms-2" htmlFor="status">
                                        Off
                                    </label>
                                    <label className="form-check-label active-class ms-2" htmlFor="status">
                                        On
                                    </label>
                                </div>
                        </div>
                    );
                   
                },  
            },
        },
        {
            name: "Open Time",
            label: "Open Time",
            options: {
                filter: false,
                sort: false,
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <div>
                            <input type="time" className="form-control login-comn-input w-100"></input>
                        </div>
                    );
                   
                },  
            },

        },
        {
            name: "Close Time",
            label: "Close Time",
            options: {
                filter: false,
                sort: false,
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <div>
                            <input type="time" className="form-control login-comn-input w-100"></input>
                        </div>
                    );
                   
                },  
            },
        },
        
        {
            name: "Action",
            label: "Action",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "text-center" }),
                setCellHeaderProps: () => ({ className: "text-center" }),
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <div>
                           <button type="button" className="border-0 bg-transparent d-none">
                                <div className="minus-action">
                                </div> 
                            </button>
                            <button type="button" className="border-0 bg-transparent">
                                <div className="add-action">
                                </div> 
                            </button>
                        </div>
                    
                    );
                },
            },
        },
    ];

// ========= Pickuptable ======
const Pickup_options = {
    page: 1,
    show: false,
    sizePerPage: 5,
    totalSize: 10,
    responsive: "standard",
    onColumnSortChange: (changedColumn, direction) => console.log("changedColumn: ", changedColumn, "direction: ", direction),
    onChangeRowsPerPage: (numberOfRows) => console.log("numberOfRows: ", numberOfRows),
    onChangePage: (currentPage) => console.log("currentPage: ", currentPage),
    selectableRows: false,
    download: false,
    print: false,
    viewColumns: false,
    sort: true,
    pagination: false,
    filter: false,
    filterType: "dropdown",
    toolbar: false,
    searchOpen: false,
    search: false,
};
const Pickup = [
    {
        Day: "Sunday",
        Status:"1968",
        OpenTime: "$1,100",
        CloseTime: "$100",
        Action: "$500",
        
    },
    {
        Day: "Monday",
        Status:"1968",
        OpenTime: "$1,100",
        CloseTime: "$100",
        Action: "$500",
        },
    {
        Day: "Tuesday",
        Status:"1968",
        OpenTime: "$1,100",
        CloseTime: "$100",
        Action: "$500",
        },
    {
        Day: "Wednesday",
        Status:"1968",
        OpenTime: "$1,100",
        CloseTime: "$100",
        Action: "$500",
        },
    {
        Day: "Thursday",
        Status:"1968",
        OpenTime: "$1,100",
        CloseTime: "$100",
        Action: "$500",
        },
    {
        Day: "Friday",
        Status:"1968",
        OpenTime: "$1,100",
        CloseTime: "$100",
        Action: "$500",
        },
    {
        Day: "Saturday",
        Status:"1968",
        OpenTime: "$1,100",
        CloseTime: "$100",
        Action: "$500",
        },
];
const Pickup_columns = [
    {
        name: "Day",
        label: "Day",
        options: {
            filter: false,
            sort: false,
            setCellProps: () => ({ className: "table-bold-font" }),
        },
    },
    {
        name: "Status",
        label: "Status",
        options: {
            filter: false,
            sort: false,
            customBodyRenderLite: (dataIndex) => {
                return (
                    <div className='status-class'>
                       <div className="form-check form-switch d-flex align-items-center">
                                <input className="form-check-input" type="checkbox" id="status" />
                                <label className="form-check-label inactive-class ms-2" htmlFor="status">
                                    Off
                                </label>
                                <label className="form-check-label active-class ms-2" htmlFor="status">
                                    On
                                </label>
                            </div>
                    </div>
                );
            },
        },
    },
    {
        name: "24 Hours",
        label: "24 Hours",
        options: {
            filter: false,
            sort: false,
            customBodyRenderLite: (dataIndex) => {
                return (
                    <div className='status-class'>
                       <div className="form-check form-switch d-flex align-items-center">
                                <input className="form-check-input" type="checkbox" id="status" />
                                <label className="form-check-label inactive-class ms-2" htmlFor="status">
                                    Off
                                </label>
                                <label className="form-check-label active-class ms-2" htmlFor="status">
                                    On
                                </label>
                            </div>
                    </div>
                );
               
            },  
        },
    },
    {
        name: "Open Time",
        label: "Open Time",
        options: {
            filter: false,
            sort: false,
            customBodyRenderLite: (dataIndex) => {
                return (
                    <div>
                        <input type="time" className="form-control login-comn-input w-100"></input>
                    </div>
                );
               
            },  
        },

    },
    {
        name: "Close Time",
        label: "Close Time",
        options: {
            filter: false,
            sort: false,
            customBodyRenderLite: (dataIndex) => {
                return (
                    <div>
                        <input type="time" className="form-control login-comn-input w-100"></input>
                    </div>
                );
               
            },  
        },
    },
    
    {
        name: "Action",
        label: "Action",
        options: {
            filter: false,
            sort: false,
            setCellProps: () => ({ className: "text-center" }),
            setCellHeaderProps: () => ({ className: "text-center" }),
            customBodyRenderLite: (dataIndex) => {
                return (
                    <div>
                        <button type="button" className="border-0 bg-transparent ">
                            <div className="minus-action">
                            </div> 
                        </button>
                        <button type="button" className="border-0 bg-transparent d-none">
                            <div className="add-action">
                            </div> 
                        </button>
                    </div>
                );
            },
        },
    },
];
    return (
        <>
            <UserLayout>
                <div className="content-main-section ">
                    <div className="container-fluid">
                        <div className="row">
                            <form>
                                <div className="col-12 ">
                                    <div className="change-bg-image-section position-relative">
                                        <div className="mt-3 account-bg-change-upload position-relative">
                                            <div className="avatar-upload">
                                                <div className="avatar-edit">
                                                    <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" name="profile" className="d-none" />
                                                    <label htmlFor="imageUpload">
                                                    </label>
                                                </div>
                                                <div className="avatar-preview">
                                                    <img src={Placeholder} alt="Upload File" className="img-fluid" />
                                                </div>
                                            </div>
                                            <label htmlFor="account-bg-upload" className="account-bg-img">
                                                <img src={CoverImage} alt="Upload File" />
                                            </label>
                                            <input id="account-bg-upload" accept="image/*" name="upload_offer_img" type="file" className="d-none" />
                                        </div>

                                        <div className="pass-btn-div">
                                            <button type="button" className="btn-comn-class-transparent">
                                                Change Password
                                            </button>
                                        </div>
                                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                            <div className="account-tab-sec">
                                                <Nav variant="pills">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="first">Profile</Nav.Link>
                                                    </Nav.Item>

                                                    <Nav.Item>
                                                        <Nav.Link eventKey="second">Opration Time</Nav.Link>
                                                    </Nav.Item>

                                                    <Nav.Item>
                                                        <Nav.Link eventKey="third">Notification Settings</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </div>
                                            <div className="tab-content-sec">
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="first">
                                                        <div className="dash-part-hdr mt-3 ">
                                                            <Accordion defaultActiveKey="0" className="">
                                                                <Accordion.Item eventKey="0">
                                                                    <Accordion.Header><label className="d-block login-label-text">Personal Information</label></Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <div className="dash-part-btm mt-3">
                                                                            <div className="row">
                                                                                <div className="col-md-4 mb-3 ">
                                                                                    <label className="d-block login-label-text mb-2">First Name</label>
                                                                                    <input type="text" className="form-control login-comn-input" placeholder="John" name="F_name" />
                                                                                </div>
                                                                                <div className="col-md-4 mb-3 ">
                                                                                    <label className="d-block login-label-text mb-2">Last Name</label>
                                                                                    <input type="text" className="form-control login-comn-input" placeholder="Doe" name="L_name" />
                                                                                </div>
                                                                                <div className="col-md-4 mb-3 ">
                                                                                    <label className="d-block login-label-text mb-2">Seller Name</label>
                                                                                    <input type="text" className="form-control login-comn-input" placeholder="jamkse" name="seller_name" />
                                                                                </div>
                                                                                <div className="col-md-4 mb-3 ">
                                                                                    <label className="d-block login-label-text mb-2">Email Address</label>
                                                                                    <input type="email" className="form-control login-comn-input" placeholder="john@jamkse.com" name="email" />
                                                                                </div>
                                                                                <div className="col-md-4 mb-3 ">
                                                                                    <label className="d-block login-label-text mb-2">Contact Number</label>
                                                                                    <input type="tel" className="form-control login-comn-input" placeholder="+1 515 516 0624" name="phonenumber" />
                                                                                </div>
                                                                                <div className="col-md-4 mb-3 ">
                                                                                    <label className="d-block login-label-text mb-2">Store Category</label>
                                                                                    <div className="acc-category-store d-flex align-items-center">
                                                                                        <span>Restaurants</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                            </Accordion>
                                                        </div>     

                                                        <div className="dash-part-hdr mt-3">
                                                            <Accordion defaultActiveKey="0">
                                                                <Accordion.Item eventKey="0">
                                                                    <Accordion.Header><label className="d-block login-label-text">Location</label></Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <div className="dash-part-btm">
                                                                            <div className="row mt-3">
                                                                                <div className="col-md-4 mb-3">
                                                                                    <label className="d-block login-label-text mb-2">Street Number</label>
                                                                                    <input type="text" className="form-control login-comn-input" placeholder="485" name="s_num" />
                                                                                </div>
                                                                                <div className="col-md-4 mb-3 ">
                                                                                    <label className="d-block login-label-text mb-2">Street Name</label>
                                                                                    <input type="text" className="form-control login-comn-input" placeholder="6th avenuee" name="s_name" />
                                                                                </div>
                                                                                <div className="col-md-4 mb-3 ">
                                                                                    <label className="d-block login-label-text mb-2">Unit</label>
                                                                                    <input type="text" className="form-control login-comn-input" placeholder="jamkse" name="unit" />
                                                                                </div>
                                                                                <div className="col-md-3 mb-3">
                                                                                    <label className="d-inline-flex align-items-center login-label-text mb-2">City</label>
                                                                                    <select className="form-select login-comn-input" name="city">
                                                                                        <option>Manhattan</option>
                                                                                        <option>Surat</option>
                                                                                        <option>Ahmedabad</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div className="col-md-3 mb-3">
                                                                                    <label className="d-inline-flex align-items-center login-label-text mb-2">State</label>
                                                                                    <select className="form-select login-comn-input" name="state">
                                                                                        <option>New York</option>
                                                                                        <option>Gujrat</option>
                                                                                        <option>Maharashtra</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div className="col-md-3 mb-3 ">
                                                                                    <label className="d-inline-flex align-items-center login-label-text mb-2">Country</label>
                                                                                    <select className="form-select login-comn-input" name="country">
                                                                                        <option>USA</option>
                                                                                        <option>India</option>
                                                                                        <option>Rasia</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div className="col-md-3 mb-3 ">
                                                                                    <label className="d-block login-label-text mb-2">Zipcodde</label>
                                                                                    <input type="text" className="form-control login-comn-input" placeholder="10101" name="zipcodde" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                            </Accordion>
                                                        </div>

                                                        <div className="dash-part-hdr mt-3">
                                                            <Accordion defaultActiveKey="0">
                                                                <Accordion.Item eventKey="0">
                                                                    <Accordion.Header><label className="d-block login-label-text">Bank Details</label></Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <div className="dash-part-btm">
                                                                            <div className="row mt-3">
                                                                                <div className="col-md-4 mb-3">
                                                                                    <label className="d-block login-label-text mb-2">Bank Name</label>
                                                                                    <input type="text" className="form-control login-comn-input" placeholder="Bank Of America" name="bank_name" />
                                                                                </div>
                                                                                <div className="col-md-4 mb-3 ">
                                                                                    <label className="d-inline-flex align-items-center login-label-text mb-2">Account Type</label>
                                                                                    <select className="form-select login-comn-input" name="business">
                                                                                        <option>Business</option>
                                                                                        <option>123</option>
                                                                                        <option>456</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div className="col-md-4 mb-3 ">
                                                                                    <label className="d-block login-label-text mb-2">Account Holder Name</label>
                                                                                    <input type="text" className="form-control login-comn-input" placeholder="Jamkse Store" name="account_h_name" />
                                                                                </div>
                                                                                <div className="col-md-4 mb-3">
                                                                                    <label className="d-block login-label-text mb-2">Bank Account Number</label>
                                                                                    <input type="text" className="form-control login-comn-input" placeholder="5894 58967 6984" name="bank_ac_num" />
                                                                                </div>
                                                                                <div className="col-md-4 mb-3">
                                                                                    <label className="d-block login-label-text mb-2">Routing Number</label>
                                                                                    <input type="text" className="form-control login-comn-input" placeholder="1562 87952" name="routing_num" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                            </Accordion>
                                                        </div>

                                                        <div className="dash-part-hdr mt-3">
                                                            <Accordion defaultActiveKey="0">
                                                                <Accordion.Item eventKey="0">
                                                                    <Accordion.Header><label className="d-block login-label-text">Store Images</label></Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <div className="dash-part-btm mt-3">
                                                                            <div className="store-img-div">
                                                                                <div className="mb-3"><img src={Store1} alt="store-img" className="store-img-item" /></div>
                                                                                <div className="mb-3"><img src={Store2} alt="store-img" className="store-img-item" /></div>
                                                                                <div className="mb-3"><img src={Store3} alt="store-img" className="store-img-item" /></div>
                                                                                <div className="mb-3"><img src={Store4} alt="store-img" className="store-img-item" /></div>
                                                                                <div className="mb-3">
                                                                                    <label className="store-img" htmlFor="store-img-upload">
                                                                                        <img src={UploadImg} alt="Upload File" className="img-fluid" />
                                                                                        <div className="upload-text">Upload File</div>
                                                                                    </label>
                                                                                    <input id="store-img-upload" accept="image/*" name="upload_offer_img" type="file" className="d-none" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                            </Accordion>
                                                        </div>


                                                    </Tab.Pane>

                                                    <Tab.Pane eventKey="second">
                                                        <div className="col-12 mt-3">    
                                                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                                                <div className="dash-part-hdr">
                                                                    <div className="product-hdr p-0">
                                                                        <div className="operations-tab-sec d-block d-sm-flex ">
                                                                            <Nav variant="pills" className="">
                                                                                <Nav.Item>
                                                                                    <Nav.Link eventKey="first">Delivery</Nav.Link>
                                                                                </Nav.Item>

                                                                                <Nav.Item>
                                                                                    <Nav.Link eventKey="second">Pickup</Nav.Link>
                                                                                </Nav.Item>
                                                                            </Nav>
                                                                            <div className="d-flex align-items-center ms-auto comn-title-main pe-3  my-sm-0 my-3">
                                                                                <span className="pe-2 ms-sm-0 ms-3">Accepting Orders</span>
                                                                                <div className="form-check form-switch">
                                                                                    <input className="form-check-input mt-0" type="checkbox" id="offer-status" /> 
                                                                                </div>
                                                                            </div>
                                                                        </div> 
                                                                    </div>
                                                                    <div className="dash-part-btm my-3">
                                                                        <TabContent>
                                                                            <TabPane eventKey="first">
                                                                                <div className="bx-white-main comn-table-box operation-table">
                                                                                    <MUIDataTable2 data={Delivery} columns={Delivery_columns} options={Delivery_options} />
                                                                                </div>
                                                                                <div className="my-3 col-12  col-md-4 col-lg-3">
                                                                                    <button type="submit" className="btn-comn-class w-100">
                                                                                        Update Time
                                                                                    </button>
                                                                                </div>
                                                                            </TabPane>

                                                                            <TabPane eventKey="second">
                                                                            <div className="custom-checkbox my-3">
                                                                                <label className="custom-lbl-part">
                                                                                    <input type="checkbox" id="rememberme" />
                                                                                    <span className="custom-checkbox-class"></span>
                                                                                        Same as a delivery time
                                                                                </label>
                                                                            </div>
                                                                                <div className="bx-white-main comn-table-box operation-table">
                                                                                    <MUIDataTable2 data={Pickup} columns={Pickup_columns} options={Pickup_options} />
                                                                                </div>
                                                                                <div className="my-3 col-12  col-md-4 col-lg-3">
                                                                                    <button type="submit" className="btn-comn-class w-100">
                                                                                        Update Time
                                                                                    </button>
                                                                                </div>
                                                                            </TabPane>

                                                                        </TabContent>
                                                                    </div>
                                                                </div>
                                                                   
                                                                
                                                            </Tab.Container>
                                                            
                                                            
                                                        </div>
                                                    </Tab.Pane>

                                                    <Tab.Pane eventKey="third">
                                                        <div className="mt-4">
                                                            <div className="set-box-head mb-4 pb-4">
                                                                <div className="set-comn-title col-12">
                                                                    <h2>Activity</h2>
                                                                </div>
                                                                <div className=" set-noti-part col-12">
                                                                    <div className="row ms-0  mt-3">
                                                                        <div className="col-12 my-2">
                                                                            <div className="comn-title-main">
                                                                                <div className="form-check form-switch row notification-setting-div">
                                                                                    <input className="form-check-input col-1" type="checkbox" id="set_not1" />
                                                                                    <label className="form-check-label ms-2 col-11" htmlFor="set_not1">
                                                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 my-2">
                                                                            <div className="comn-title-main">
                                                                                <div className="form-check form-switch row notification-setting-div">
                                                                                    <input className="form-check-input col-1" type="checkbox" id="set_not2" />
                                                                                    <label className="form-check-label ms-2  col-11" htmlFor="set_not1">
                                                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 my-2">
                                                                            <div className="comn-title-main">
                                                                                <div className="form-check form-switch row notification-setting-div" >
                                                                                    <input className="form-check-input col-1" type="checkbox" id="set_not3" />
                                                                                    <label className="form-check-label ms-2  col-11" htmlFor="set_not1">
                                                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="set-box-head border-0">
                                                                <div className="set-comn-title col-12">
                                                                    <h2>System</h2>
                                                                </div>
                                                                <div className=" set-noti-part col-12">
                                                                    <div className="row ms-0 mt-3">
                                                                        <div className="col-12 my-2">
                                                                            <div className="comn-title-main">
                                                                                <div className="form-check form-switch row notification-setting-div">
                                                                                    <input className="form-check-input col-1" type="checkbox" id="set-not-4" />
                                                                                    <label className="form-check-label ms-2 col-11" htmlFor="set_not4">
                                                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 my-2">
                                                                            <div className="comn-title-main">
                                                                                <div className="form-check form-switch row notification-setting-div">
                                                                                    <input className="form-check-input col-1" type="checkbox" id="set_not5" />
                                                                                    <label className="form-check-label  ms-2  col-11" htmlFor="set_not1">
                                                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 my-2">
                                                                            <div className="comn-title-main">
                                                                                <div className="form-check form-switch row notification-setting-div">
                                                                                    <input className="form-check-input col-1" type="checkbox" id="set_not6" />
                                                                                    <label className="form-check-label ms-2  col-11" htmlFor="set_not1">
                                                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 my-2">
                                                                            <div className="comn-title-main">
                                                                                <div className="form-check form-switch row notification-setting-div">
                                                                                    <input className="form-check-input col-1" type="checkbox" id="set_not7" />
                                                                                    <label className="form-check-label  ms-2  col-11" htmlFor="set_not1">
                                                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 my-2">
                                                                            <div className="comn-title-main">
                                                                                <div className="form-check form-switch row notification-setting-div">
                                                                                    <input className="form-check-input col-1" type="checkbox" id="set_not8" />
                                                                                    <label className="form-check-label ms-2  col-11" htmlFor="set_not1">
                                                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mt-3">
                                                                <button type="submit" className="btn-comn-class">
                                                                    Save Changes
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </div>
                                        </Tab.Container>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
}
