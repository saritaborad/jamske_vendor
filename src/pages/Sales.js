import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";

export default function Sales() {
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
        viewColumns: false,
        sort: true,
        pagination: true,
        filter: false,
        filterType: "dropdown",
        toolbar: false,
        searchOpen: false,
        search: false,
    };
    const Monthly_Report = [
        {
            Month: "January 2022",
            Orders:"1968",
            Subtotal: "$10,000",
            Taxes: "$1,100",
            Clients_Tips: "$100",
            Discount: "$500",
            Total_Amount:"$10,950",
            Commission_Paid:"$1095",
            Ally_Earning:"$10,105",
        },
        {
            Month: "December 2021",
            Orders:"1500",
            Subtotal: "$10,000",
            Taxes: "$1,100",
            Clients_Tips: "$100",
            Discount: "$500",
            Total_Amount:"$10,950",
            Commission_Paid:"$1095",
            Ally_Earning:"$10,105",
        },
        {
            Month: "November 2021",
            Orders:"1785",
            Subtotal: "$10,000",
            Taxes: "$1,100",
            Clients_Tips: "$100",
            Discount: "$500",
            Total_Amount:"$10,950",
            Commission_Paid:"$1095",
            Ally_Earning:"$10,105",
        },
        {
            Month: "Octomber 2021",
            Orders:"1657",
            Subtotal: "$10,000",
            Taxes: "$1,100",
            Clients_Tips: "$100",
            Discount: "$500",
            Total_Amount:"$10,950",
            Commission_Paid:"$1095",
            Ally_Earning:"$10,105",
        },
        {
            Month: "September 2021",
            Orders:"1689",
            Subtotal: "$10,000",
            Taxes: "$1,100",
            Clients_Tips: "$100",
            Discount: "$500",
            Total_Amount:"$10,950",
            Commission_Paid:"$1095",
            Ally_Earning:"$10,105",
        },
        {
            Month: "August 2021",
            Orders:"1338",
            Subtotal: "$10,000",
            Taxes: "$1,100",
            Clients_Tips: "$100",
            Discount: "$500",
            Total_Amount:"$10,950",
            Commission_Paid:"$1095",
            Ally_Earning:"$10,105",
        },
        {
            Month: "September 2021",
            Orders:"1689",
            Subtotal: "$10,000",
            Taxes: "$1,100",
            Clients_Tips: "$100",
            Discount: "$500",
            Total_Amount:"$10,950",
            Commission_Paid:"$1095",
            Ally_Earning:"$10,105",
        },
        {
            Month: "August 2021",
            Orders:"1338",
            Subtotal: "$10,000",
            Taxes: "$1,100",
            Clients_Tips: "$100",
            Discount: "$500",
            Total_Amount:"$10,950",
            Commission_Paid:"$1095",
            Ally_Earning:"$10,105",
        },
        {
            Month: "September 2021",
            Orders:"1689",
            Subtotal: "$10,000",
            Taxes: "$1,100",
            Clients_Tips: "$100",
            Discount: "$500",
            Total_Amount:"$10,950",
            Commission_Paid:"$1095",
            Ally_Earning:"$10,105",
        },
        {
            Month: "August 2021",
            Orders:"1338",
            Subtotal: "$10,000",
            Taxes: "$1,100",
            Clients_Tips: "$100",
            Discount: "$500",
            Total_Amount:"$10,950",
            Commission_Paid:"$1095",
            Ally_Earning:"$10,105",
        },
    ];
    const columns = [
        {
            name: "Month",
            label: "Month",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "table-bold-font" }),
            },
        },
        {
            name: "Orders",
            label: "Orders",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            name: "Subtotal",
            label: "Subtotal",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "table-bold-font" }),
            },
        },
        {
            name: "Taxes",
            label: "Taxes",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            name: "Clients_Tips",
            label: "Clients Tips",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            name: "Discount",
            label: "Discount",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            name: "Total_Amount",
            label: "Total Amount",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "cmn-blue-tbl-txt" }),
            },
        },
        {
            name: "Commission_Paid",
            label: "Commission Paid",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            name: "Ally_Earning",
            label: "Ally Earning",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "cmn-blue-tbl-txt" }),
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
                        <button className="border-0 bg-transparent">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#232222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2.45825 12C3.73253 7.94288 7.52281 5 12.0004 5C16.4781 5 20.2684 7.94291 21.5426 12C20.2684 16.0571 16.4781 19 12.0005 19C7.52281 19 3.73251 16.0571 2.45825 12Z" stroke="#232222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
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
                                            Monthly Report
                                        </h1>
                                    </div>
                                    <div className="ms-auto d-block  d-md-flex">
                                        <div className="mt-md-0 mt-3 comn-gray-form-select">
                                            <select className="form-select  w-100">
                                                <option>1 Month</option>
                                                <option>Monthly</option>
                                                <option>Yearly</option>
                                            </select>
                                        </div>
                                        <div className="mt-md-0 mt-3 ms-0 ms-md-3 d-flex position-relative align-items-center">
                                            <input type="tel" className="login-comn-input-3-gray w-100" placeholder="2022" />
                                            <div className="position-absolute calender-div pe-3">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H7V2H9V4H15V2H17V4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM17 18H15V16H17V18ZM13 18H11V16H13V18ZM9 18H7V16H9V18ZM17 14H15V12H17V14ZM13 14H11V12H13V14ZM9 14H7V12H9V14Z" fill="#6C6A81"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="mt-md-0 mt-3 ms-0 ms-md-3">
                                            <button type="submit" className="btn-comnn-lightblue w-100">
                                                Export To CSV
                                            </button> 
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="bx-white-main comn-table-box">
                                    <MUIDataTable data={Monthly_Report} columns={columns} options={options} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </UserLayout>
    </>
  )
}
