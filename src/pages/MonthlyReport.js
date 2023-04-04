import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";

export default function MonthlyReport() {
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
    const Monthly_Report = [
        {
            Date: "2022-04-01",
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
            Date: "2022-04-02",
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
            Date: "2022-04-03",
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
            Date: "2022-04-04",
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
            Date: "2022-04-03",
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
            Date: "2022-04-05",
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
            Date: "2022-04-06",
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
            Date: "2022-04-07",
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
            Date: "2022-04-08",
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
            Date: "2022-04-09",
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
            name: "Date",
            label: "Date",
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
                                    <div className="payment-rgt-part ms-auto mt-md-0 mt-3">
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
