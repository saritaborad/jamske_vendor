import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";
import { Dropdown } from "react-bootstrap";

export default function Invoices() {

    const options = {
        page: 1,
        show: false,
        sizePerPage: 5,
        totalSize: 12,
        responsive: "standard",
        onColumnSortChange: (changedColumn, direction) => console.log("changedColumn: ", changedColumn, "direction: ", direction),
        onChangeRowsPerPage: (numberOfRows) => console.log("numberOfRows: ", numberOfRows),
        onChangePage: (currentPage) => console.log("currentPage: ", currentPage),
        selectableRows: false,
        download: false,
        print: false,
        viewColumns: false,
        sort: true,
        pagination: true,
        filter: false,
        filterType: "dropdown",
        toolbar: false,
        searchOpen: false,
        search: false,
    };
    const Invoices = [
        {
            Invoice_ID: "#1495",
            Order_Name:"John Doe",
            Order_Id: "#1",
            Invoice_Date: "10th April 22 7:20 Am",
            Quantity: "3",
            Total_Bill: "$15.20",
        },
        {
            Invoice_ID: "#1495",
            Order_Name:"John Doe",
            Order_Id: "#2",
            Invoice_Date: "10th April 22 7:20 Am",
            Quantity: "5",
            Total_Bill: "$15.20",
        },
        {
            Invoice_ID: "#1495",
            Order_Name:"John Doe",
            Order_Id: "#3",
            Invoice_Date: "10th April 22 7:20 Am",
            Quantity: "4",
            Total_Bill: "$15.20",
        },
        {
            Invoice_ID: "#1495",
            Order_Name:"John Doe",
            Order_Id: "#4",
            Invoice_Date: "10th April 22 7:20 Am",
            Quantity: "11",
            Total_Bill: "$15.20",
        },
        {
            Invoice_ID: "#1495",
            Order_Name:"John Doe",
            Order_Id: "#8",
            Invoice_Date: "10th April 22 7:20 Am",
            Quantity: "3",
            Total_Bill: "$15.20",
        },
        {
            Invoice_ID: "#1495",
            Order_Name:"John Doe",
            Order_Id: "#3",
            Invoice_Date: "10th April 22 7:20 Am",
            Quantity: "3",
            Total_Bill: "$15.20",
        },
        {
            Invoice_ID: "#1495",
            Order_Name:"John Doe",
            Order_Id: "#7",
            Invoice_Date: "10th April 22 7:20 Am",
            Quantity: "2",
            Total_Bill: "$15.20",
        },
        {
            Invoice_ID: "#1495",
            Order_Name:"John Doe",
            Order_Id: "#8",
            Invoice_Date: "10th April 22 7:20 Am",
            Quantity: "6",
            Total_Bill: "$15.20",
        },
        {
            Invoice_ID: "#1495",
            Order_Name:"John Doe",
            Order_Id: "#9",
            Invoice_Date: "10th April 22 7:20 Am",
            Quantity: "6",
            Total_Bill: "$15.20",
        },
        {
            Invoice_ID: "#1495",
            Order_Name:"John Doe",
            Order_Id: "#10",
            Invoice_Date: "10th April 22 7:20 Am",
            Quantity: "9",
            Total_Bill: "$15.20",
        },
    ];
    const columns = [
        {
            name: "Invoice_ID",
            label: "Invoice ID",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "table-bold-font" }),
            },
        },
        {
            name: "Order_Name",
            label: "Order Name",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            name: "Order_Id",
            label: "Order Id",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "table-bold-font" }),
            },
        },
        {
            name: "Invoice_Date",
            label: "Invoice Date",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "table-bold-font-2" }),
            },
        },
        {
            name: "Quantity",
            label: "Quantity",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "table-bold-font-2" }),
            },
        },
        {
            name: "Total_Bill",
            label: "Total Bill",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "cmn-blue-tbl-txt" }),
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
                                    <span className="ms-2">View Invoice</span>
                                </div>  
                                      
                              </Dropdown.Item>
                              <Dropdown.Item href="/">
                                <div>
                                    <span className="ms-2">Print Invoice</span>
                                </div> 
                              </Dropdown.Item>
                              <Dropdown.Item href="/">
                                <div>
                                    <span className="ms-2">Share Invoice</span>
                                </div> 
                              </Dropdown.Item>
                              <Dropdown.Item href="/">
                                <div>
                                    <span className="ms-2">Download Invoice</span>
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
                                <div className="comn-title-main d-block  d-md-flex align-items-center justify-content-between">
                                    <div className="comn-title-main">
                                        <h1 className="mb-0">
                                            Invoices
                                        </h1>
                                    </div>
                                    <div className="payment-rgt-part ms-auto mt-md-0   d-block  d-md-flex mt-3">
                                        <input type="date" className="form-control login-comn-input-3-gray mb-md-0 mb-2" />
                                        <span>To</span>
                                        <input type="date" className="form-control login-comn-input-3-gray mt-md-0 mt-2" />
                                        <button type="submit" className="btn-comnn-lightblue w-100 mt-md-0 mt-3 ms-0 ms-md-3">
                                            Export To CSV
                                        </button> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="bx-white-main comn-table-box">
                                    <MUIDataTable data={Invoices} columns={columns} options={options} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </UserLayout>
    </>
  )
}
