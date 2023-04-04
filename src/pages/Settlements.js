import UserLayout from "../components/UserLayout";
import { Accordion } from "react-bootstrap";
import MUIDataTable from "mui-datatables";
import React from "react";


// table_1

export default function Settlements() {

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
    const Pendding_Settlements = [
        {
            Duration: "15th Apr 22 - 21st Apr 22",
            Orders: "1968",
            Subtotal: "$10,000",
            Cart_Taxes: "$1,100",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount: "$10,950",
            Commission_Paid: "$1095",
            Ally_Earning: "$10,105",
        },
        {
            Duration: "08th Apr 22 - 14th Apr 22",
            Orders: "1968",
            Subtotal: "$10,000",
            Cart_Taxes: "$1,100",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount: "$10,950",
            Commission_Paid: "$1095",
            Ally_Earning: "$10,105",
        },
        {
            Duration: "01st Apr 22 - 7th Apr 22",
            Orders: "1968",
            Subtotal: "$10,000",
            Cart_Taxes: "$1,100",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount: "$10,950",
            Commission_Paid: "$1095",
            Ally_Earning: "$10,105",
        },
        
    ];
    const columns = [
        {
            name: "Duration",
            label: "Duration",
            options: {
                filter: false,
                sort: true,
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
                sort: true,
                setCellProps: () => ({ className: "table-bold-font" }),
            },
        },

        {
            name: "Cart_Taxes",
            label: "Cart Taxes",
            options: {
                filter: false,
                sort: true,
            },
        },

        {
            name: "Clients_Tips",
            label: "Clients Tips",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Coupon_Discount",
            label: "Coupon Discount",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Total_Amount",
            label: "Total Amount",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "cmn-blue-tbl-txt" }),
            },
        },
        {
            name: "Commission_Paid",
            label: "Commission Paid",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Ally_Earning",
            label: "Ally Earning",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "cmn-blue-tbl-txt" }),
            },
        },
        {
            name: "Status",
            label: "Status",
            options: {
                filter: false,
                sort: true,
                customBodyRenderLite: (dataIndex) => {
                    return <span className="comn-status-class pending-class">pending</span>;
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

// table_2

    const Processed_Settlements_options = {
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
    const Processed_Settlements = [
        {
            Duration: "25th Mar 22 - 31st Mar 22",
            Orders: "1968",
            Subtotal: "$10,000",
            Cart_Taxes: "$1,100",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount: "$10,950",
            Commission_Paid: "$1095",
            Ally_Earning: "$10,105",
        },
        {
            Duration: "08th Apr 22 - 14th Apr 22",
            Orders: "1968",
            Subtotal: "$10,000",
            Cart_Taxes: "$1,100",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount: "$10,950",
            Commission_Paid: "$1095",
            Ally_Earning: "$10,105",
        },
        {
            Duration: "11th Mar 22 - 17th Mar 22",
            Orders: "1968",
            Subtotal: "$10,000",
            Cart_Taxes: "$1,100",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount: "$10,950",
            Commission_Paid: "$1095",
            Ally_Earning: "$10,105",
        },
        {
            Duration: "11th Mar 22 - 17th Mar 22",
            Orders: "1968",
            Subtotal: "$10,000",
            Cart_Taxes: "$1,100",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount: "$10,950",
            Commission_Paid: "$1095",
            Ally_Earning: "$10,105",
        },
        {
            Duration: "04th Mar 22 - 10th Mar 22",
            Orders: "1968",
            Subtotal: "$10,000",
            Cart_Taxes: "$1,100",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount: "$10,950",
            Commission_Paid: "$1095",
            Ally_Earning: "$10,105",
        },
        {
            Duration: "27th Feb 22 - 03th Feb 22",
            Orders: "1968",
            Subtotal: "$10,000",
            Cart_Taxes: "$1,100",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount: "$10,950",
            Commission_Paid: "$1095",
            Ally_Earning: "$10,105",
        }, {
            Duration: "20th Feb 22 - 26th Feb 22",
            Orders: "1968",
            Subtotal: "$10,000",
            Cart_Taxes: "$1,100",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount: "$10,950",
            Commission_Paid: "$1095",
            Ally_Earning: "$10,105",
        },
        {
            Duration: "13th Feb 22 - 19th Feb 22",
            Orders: "1968",
            Subtotal: "$10,000",
            Cart_Taxes: "$1,100",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount: "$10,950",
            Commission_Paid: "$1095",
            Ally_Earning: "$10,105",
        },
        {
            Duration: "06th Feb 22 - 12th Apr 22",
            Orders: "1968",
            Subtotal: "$10,000",
            Cart_Taxes: "$1,100",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount: "$10,950",
            Commission_Paid: "$1095",
            Ally_Earning: "$10,105",
        },
        {
            Duration: "08th April 22 - 14th April 22",
            Orders: "1968",
            Subtotal: "$10,000",
            Cart_Taxes: "$1,100",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount: "$10,950",
            Commission_Paid: "$1095",
            Ally_Earning: "$10,105",
        },
    ];
    const Processed_Settlements_columns = [
        {
            name: "Duration",
            label: "Duration",
            options: {
                filter: false,
                sort: true,
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
                sort: true,
                setCellProps: () => ({ className: "table-bold-font" }),
            },
        },

        {
            name: "Cart_Taxes",
            label: "Cart Taxes",
            options: {
                filter: false,
                sort: true,
            },
        },

        {
            name: "Clients_Tips",
            label: "Clients Tips",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Coupon_Discount",
            label: "Coupon Discount",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Total_Amount",
            label: "Total Amount",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "cmn-blue-tbl-txt" }),
            },
        },
        {
            name: "Commission_Paid",
            label: "Commission Paid",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Ally_Earning",
            label: "Ally Earning",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "cmn-blue-tbl-txt" }),
            },
        },
        {
            name: "Status",
            label: "Status",
            options: {
                filter: false,
                sort: true,
                customBodyRenderLite: (dataIndex) => {
                    return <span className="comn-status-class paid-class">paid</span>;
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
                                            Settlements
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
                                <div className="vendor-products comn-accordian-2">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Pendding Settlements</Accordion.Header>
                                            <Accordion.Body className="px-0">
                                                <div className="bx-white-main comn-table-box">
                                                    <MUIDataTable data={Pendding_Settlements} columns={columns} options={options} />
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="vendor-products comn-accordian-2">
                                    <Accordion defaultActiveKey="1">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Processed Settlements</Accordion.Header>
                                            <Accordion.Body className="px-0">
                                                <div className="bx-white-main comn-table-box">
                                                    <MUIDataTable data={Processed_Settlements} columns={Processed_Settlements_columns} options={Processed_Settlements_options} />
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
}
