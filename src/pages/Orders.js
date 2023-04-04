import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";
import { Dropdown } from "react-bootstrap";


export default function Orders(params) {
    const options = {
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
        searchAlwaysOpen: true, 
        viewColumns: false,
        sort: true,
        pagination: true,
        filter: false,
        filterType: "dropdown",
        toolbar: false,
        searchOpen: true,
        search:true,
    };
    const Orders = [
        {
            Order_ID: "#1569",
            Customer_Name: "John Deo",
            Items: "1",
            Type: "Pickup",
            Payment: "Online",
            Time: "1/17/2022  8:20 PM",
            Amount: "$5.00",
        },
        {
            Order_ID: "#1569",
            Customer_Name: "John Deo",
            Items: "6",
            Type: "Delivery",
            Payment: "Online",
            Time: "1/17/2022  8:20 PM",
            Amount: "$25.45",
        },
        {
            Order_ID: "#1569",
            Customer_Name: "John Deo",
            Items: "12",
            Type: "Pickup",
            Payment: "Online",
            Time: "1/17/2022  8:20 PM",
            Amount: "$160.47",
        },
        {
            Order_ID: "#1569",
            Customer_Name: "John Deo",
            Items: "2",
            Type: "Delivery",
            Payment: "Online",
            Time: "1/17/2022  8:20 PM",
            Amount: "$15.00",
        },
        {
            Order_ID: "#1569",
            Customer_Name: "John Deo",
            Items: "6",
            Type: "Pickup",
            Payment: "Online",
            Time: "1/17/2022  8:20 PM",
            Amount: "$13.00",
        },
        {
            Order_ID: "#1569",
            Customer_Name: "John Deo",
            Items: "6",
            Type: "Delivery",
            Payment: "Online",
            Time: "1/17/2022  8:20 PM",
            Amount: "$9.00",
        },
        {
            Order_ID: "#1569",
            Customer_Name: "John Deo",
            Items: "8",
            Type: "Delivery",
            Payment: "Online",
            Time: "1/17/2022  8:20 PM",
            Amount: "$36.00",
        },
        {
            Order_ID: "#1569",
            Customer_Name: "John Deo",
            Items: "4",
            Type: "Pickup",
            Payment: "Online",
            Time: "1/17/2022  8:20 PM",
            Amount: "$45.00",
        },
        {
            Order_ID: "#1569",
            Customer_Name: "John Deo",
            Items: "5",
            Type: "Pickup",
            Payment: "Online",
            Time: "1/17/2022  8:20 PM",
            Amount: "$89.00",
        },
        {
            Order_ID: "#1569",
            Customer_Name: "John Deo",
            Items: "8",
            Type: "Pickup",
            Payment: "Online",
            Time: "1/17/2022  8:20 PM",
            Amount: "$185.00",
        },
        
    ];
    const columns = [
        {
            name: "Order_ID",
            label: "Order ID",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "table-bold-font" }),
            },
        },
        {
            name: "Customer_Name",
            label: "Customer Name",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Items",
            label: "Items",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Type",
            label: "Type",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "cmn-blue-tbl-txt" }),
            },
        },
        {
            name: "Payment",
            label: "Payment",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "cmn-online-payment" }),
            },
        },
        {
            name: "Time",
            label: "Time",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Amount",
            label: "Amount",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            label: "Action",
            name: "Action",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "text-center" }),
                setCellHeaderProps: () => ({ className: "text-center" }),
                customBodyRenderLite: (dataIndex) => {
                    return (
                      <div className="table-ed-drop">
                      <Dropdown drop="left">
                          <Dropdown.Toggle className="table-dropdown-btn" id="dropdown-basic">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                              </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                              <Dropdown.Item href="/">
                                <div>
                                    <span className="ms-2">View</span>
                                </div>  
                                      
                              </Dropdown.Item>
                              <Dropdown.Item href="/">
                                <div>
                                    <span className="ms-2">Accept</span>
                                </div> 
                              </Dropdown.Item>
                              <Dropdown.Item href="/">
                                <div>
                                    <span className="ms-2">Preparing</span>
                                </div> 
                              </Dropdown.Item>
                              <Dropdown.Item href="/">
                                <div>
                                    <span className="ms-2">Orders Is Ready</span>
                                </div> 
                              </Dropdown.Item>
                              <Dropdown.Item href="/">
                                <div className="cancel-order-txt">
                                    <span className="ms-2">Cancel Order</span>
                                </div> 
                              </Dropdown.Item>

                          </Dropdown.Menu>
                      </Dropdown>
                  </div>
                    );
                },
            },
        },
    ];
    
    return (
        <>
            <UserLayout>
            <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-3">
                                <div className="d-md-flex d-block align-items-center">
                                    <div className="comn-title-main">
                                        <h1 className="mb-0">Orders</h1>
                                    </div>
                                    <div className="payment-rgt-part ms-auto mt-md-0 mt-3">
                                        <input type="date" className="form-control login-comn-input-3-gray mb-sm-0 mb-2" />
                                        <span>To</span>
                                        <input type="date" className="form-control login-comn-input-3-gray mt-sm-0 mt-2" /> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className=" orders-main-box">
                                    {/* <div className="order-search-btn position-relative my-3 ms-3">
                                        <input type="search" className="form-control login-comn-input-2 searchbar ps-5 w-auto" placeholder="Search..."/>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#6C6A81" className="bi bi-search fix-in-icon" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </div>   */}
                                    <div className="order-btn-sec product-hdr">
                                        <div className="cust-radio-box d-flex align-items-center">
                                            <input name="plan" type="radio" id="plan-1" defaultChecked/>
                                            <label className="cust-radio-main d-flex align-items-center new-order" htmlFor="plan-1">
                                                <span>New orders</span>
                                                <bdi className="new-order-btn comn-order-btn ms-3">32</bdi>
                                            </label>
                                        </div>
                                        <div className="cust-radio-box d-flex align-items-center ">
                                            <input name="plan" type="radio" id="plan-2" defaultChecked/>
                                            <label className="cust-radio-main d-flex align-items-center upcoming-order" htmlFor="plan-2">
                                                <span>Upcoming orders</span>
                                                <bdi className="upcoming-order-btn comn-order-btn ms-3">4</bdi>
                                            </label>
                                        </div>
                                        <div className="cust-radio-box d-flex align-items-center">
                                            <input name="plan" type="radio" id="plan-3" defaultChecked/>
                                            <label className="cust-radio-main d-flex align-items-center accepted-order" htmlFor="plan-3">
                                                <span>Accepted</span>
                                                <bdi className="accepted-order-btn comn-order-btn ms-3">15</bdi>
                                            </label>
                                        </div>
                                        <div className="cust-radio-box d-flex align-items-center">
                                            <input name="plan" type="radio" id="plan-4" defaultChecked/>
                                            <label className="cust-radio-main d-flex align-items-center preparing-order" htmlFor="plan-4">
                                                <span>Preparing</span>
                                                <bdi className="preparing-order-btn comn-order-btn ms-3">20</bdi>
                                            </label>
                                        </div>
                                        <div className="cust-radio-box d-flex align-items-center">
                                            <input name="plan" type="radio" id="plan-5" defaultChecked/>
                                            <label className="cust-radio-main d-flex align-items-center order-is-ready-order" htmlFor="plan-5">
                                                <span>Order is ready</span>
                                                <bdi className="order-is-ready-order-btn comn-order-btn ms-3">10</bdi>
                                            </label>
                                        </div>
                                        <div className="cust-radio-box d-flex align-items-center">
                                            <input name="plan" type="radio" id="plan-6" defaultChecked/>
                                            <label className="cust-radio-main d-flex align-items-center in-transit-order" htmlFor="plan-6">
                                                <span>In transit</span>
                                                <bdi className="in-transit-order-btn comn-order-btn ms-3">150</bdi>
                                            </label>
                                        </div>
                                        <div className="cust-radio-box d-flex align-items-center">
                                            <input name="plan" type="radio" id="plan-7" defaultChecked/>
                                            <label className="cust-radio-main d-flex align-items-center completed-order" htmlFor="plan-7">
                                                <span>Completed</span>
                                                <bdi className="completed-order-btn comn-order-btn ms-3">2604</bdi>
                                            </label>
                                        </div>
                                        <div className="cust-radio-box d-flex align-items-center">
                                            <input name="plan" type="radio" id="plan-8" defaultChecked/>
                                            <label className="cust-radio-main d-flex align-items-center cancel-order" htmlFor="plan-8">
                                                <span>Cancel</span>
                                                <bdi className="cancel-order-btn comn-order-btn ms-3">471</bdi>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="dash-part-btm">   
                                        <div className="bx-white-main comn-table-box mt-3 ">
                                            <MUIDataTable data={Orders} columns={columns} options={options} />
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
