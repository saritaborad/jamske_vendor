import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";
// import { Dropdown } from "react-bootstrap";

export default function SalesReport() {

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
    const Sales_Report = [
        {
            No: "1",
            Order_Date:"19/04/2022",
            Order_Id: "#1569",
            Order_Name: "John Doe",
            Order_Type: "Pick Up",
            Total_Amount: "$50",
            Payment_Method: "Credit card",
            Zipcode: "10134",
            Your_Earning: "$05",
        },
        {
            No: "2",
            Order_Date:"19/04/2022",
            Order_Id: "#1569",
            Order_Name: "John Doe",
            Order_Type: "Delivery",
            Total_Amount: "$50",
            Payment_Method: "Credit card",
            Zipcode: "10134",
            Your_Earning: "$05",
        },
        {
            No: "3",
            Order_Date:"19/04/2022",
            Order_Id: "#1569",
            Order_Name: "John Doe",
            Order_Type: "Delivery",
            Total_Amount: "$50",
            Payment_Method: "Credit card",
            Zipcode: "10134",
            Your_Earning: "$05",
        },
        {
            No: "4",
            Order_Date:"19/04/2022",
            Order_Id: "#1569",
            Order_Name: "John Doe",
            Order_Type: "Pick Up",
            Total_Amount: "$50",
            Payment_Method: "Credit card",
            Zipcode: "10134",
            Your_Earning: "$05",
        },
        {
            No: "5",
            Order_Date:"19/04/2022",
            Order_Id: "#1569",
            Order_Name: "John Doe",
            Order_Type: "Delivery",
            Total_Amount: "$50",
            Payment_Method: "Credit card",
            Zipcode: "10134",
            Your_Earning: "$05",
        },
        {
            No: "6",
            Order_Date:"19/04/2022",
            Order_Id: "#1569",
            Order_Name: "John Doe",
            Order_Type: "Pick Up",
            Total_Amount: "$50",
            Payment_Method: "Credit card",
            Zipcode: "10134",
            Your_Earning: "$05",
        },
        {
            No: "7",
            Order_Date:"19/04/2022",
            Order_Id: "#1569",
            Order_Name: "John Doe",
            Order_Type: "Delivery",
            Total_Amount: "$50",
            Payment_Method: "Credit card",
            Zipcode: "10134",
            Your_Earning: "$05",
        },
        {
            No: "8",
            Order_Date:"19/04/2022",
            Order_Id: "#1569",
            Order_Name: "John Doe",
            Order_Type: "Pick Up",
            Total_Amount: "$50",
            Payment_Method: "Credit card",
            Zipcode: "10134",
            Your_Earning: "$05",
        },
        {
            No: "9",
            Order_Date:"19/04/2022",
            Order_Id: "#1569",
            Order_Name: "John Doe",
            Order_Type: "Delivery",
            Total_Amount: "$50",
            Payment_Method: "Credit card",
            Zipcode: "10134",
            Your_Earning: "$05",
        },
        {
            No: "10",
            Order_Date:"19/04/2022",
            Order_Id: "#1569",
            Order_Name: "John Doe",
            Order_Type: "Delivery",
            Total_Amount: "$50",
            Payment_Method: "Credit card",
            Zipcode: "10134",
            Your_Earning: "$05",
        },
    ];
    const columns = [
        {
            name: "No",
            label: "No",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "table-bold-font" }),
            },
        },
        {
            name: "Order_Date",
            label: "Order Date",
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
            name: "Order_Name",
            label: "Order Name",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            name: "Order_Type",
            label: "Order Type",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "cmn-blue-tbl-txt" }),
            },
        },
        {
            name: "Total_Amount",
            label: "Total Amount",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            name: "Payment_Method",
            label: "Payment Method",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            name: "Zipcode",
            label: "Zipcode",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            name: "Order_Status",
            label: "Order Status",
            options: {
                filter: false,
                sort: true,
                customBodyRenderLite: (dataIndex) => {
                    return <span className="comn-status-class deliverd-class">Deliverd</span>;
                },
            },
        },
        {
            name: "Your_Earning",
            label: "Your Earning",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "cmn-blue-tbl-txt" }),
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
                                <div className="comn-title-main d-block  d-lg-flex align-items-center justify-content-between">
                                    <div className="comn-title-main">
                                        <h1 className="mb-0">
                                            Sales Report
                                        </h1>
                                    </div>
                                    <div className="payment-rgt-part ms-auto mt-lg-0 d-block  d-lg-flex  mt-3">
                                        <div className=" comn-gray-form-select">
                                            <select className="form-select  w-100" name="all">
                                                <option>All</option>
                                                <option>123</option>
                                                <option>456</option>
                                            </select>
                                        </div>
                                        <input type="date" className="form-control login-comn-input-3-gray mb-lg-0 mb-2 ms-0 ms-lg-3 mt-lg-0 mt-3" />
                                        <span>To</span>
                                        <input type="date" className="form-control login-comn-input-3-gray mt-sm-0 mt-2" />
                                        <button type="submit" className="btn-comnn-lightblue w-100 mt-lg-0 mt-3 ms-0 ms-lg-3">
                                            Export To CSV
                                        </button> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="bx-white-main comn-table-box">
                                    <MUIDataTable data={Sales_Report} columns={columns} options={options} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </UserLayout>
    </>
  )
}
