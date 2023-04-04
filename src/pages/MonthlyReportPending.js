import UserLayout from "../components/UserLayout";
import React from "react"
import MUIDataTable from "mui-datatables";
import {
    TableCell,
    TableFooter,
    TableRow,
  } from "@material-ui/core";

export default function MonthlyReportPending() {
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
        customTableBodyFooterRender: (opts) => {
            return (
            <>
              <TableFooter className="cust-table-footer">
               <TableRow>
                   <TableCell>
                        <div className="table-bold-font">
                            total
                        </div>
                   </TableCell>
                   <TableCell >
                   </TableCell>
                   <TableCell >
                        <div className="cmn-blue-tbl-txt">
                            $5,20,485
                        </div>
                   </TableCell>
                   <TableCell >
                        <div className="total-comn-font">
                            $59,250
                        </div>
                   </TableCell>
                   <TableCell >
                        <div className="total-comn-font">
                            $5,256
                        </div>
                   </TableCell>
                   <TableCell >
                        <div className="total-comn-font">
                            $6,492
                        </div>
                   </TableCell>
                   <TableCell >
                        <div className="cmn-blue-tbl-txt">
                            $5,91,483
                        </div>
                   </TableCell>
                   <TableCell >
                        <div className="total-comn-font">
                            $88,722.45
                        </div>
                   </TableCell>
                   <TableCell >
                        <div className="cmn-blue-tbl-txt">
                            $5,02,760.55
                        </div>
                   </TableCell>
                   <TableCell >
                       
                   </TableCell>

    
              </TableRow>
             </TableFooter>
            </>
            );
            }
    };
    const Monthly_Report = [
        {
            Order_Id: "#1596",
            Deliverd_Time:"2022-04-01 7:20PM",
            Subtotal: "$10,000",
            Cart_Taxes: "$250",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount:"$10,950",
            Commission_Paid:"$1095",
            Ally_Earning:"$10,105",
        },
        {
            Order_Id: "#1599",
            Deliverd_Time:"2022-04-01 7:20PM",
            Subtotal: "$10,000",
            Cart_Taxes: "$250",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount:"$10,950",
            Commission_Paid:"$1095",
            Ally_Earning:"$10,105",
        },
        {
            Order_Id: "#1602",
            Deliverd_Time:"2022-04-01 7:20PM",
            Subtotal: "$10,000",
            Cart_Taxes: "$250",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount:"$10,950",
            Commission_Paid:"$1095",
            Ally_Earning:"$10,105",
        },
        {
            Order_Id: "#1603",
            Deliverd_Time:"2022-04-01 7:20PM",
            Subtotal: "$10,000",
            Cart_Taxes: "$250",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount:"$10,950",
            Commission_Paid:"$1095",
            Ally_Earning:"$10,105",
        },
        {
            Order_Id: "#1604",
            Deliverd_Time:"2022-04-01 7:20PM",
            Subtotal: "$10,000",
            Cart_Taxes: "$250",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount:"$10,950",
            Commission_Paid:"$1095",
            Ally_Earning:"$10,105",
        },
        {
            Order_Id: "#1605",
            Deliverd_Time:"2022-04-01 7:20PM",
            Subtotal: "$10,000",
            Cart_Taxes: "$250",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount:"$10,950",
            Commission_Paid:"$1095",
            Ally_Earning:"$10,105",
        },
        {
            Order_Id: "#1606",
            Deliverd_Time:"2022-04-01 7:20PM",
            Subtotal: "$10,000",
            Cart_Taxes: "$250",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount:"$10,950",
            Commission_Paid:"$1095",
            Ally_Earning:"$10,105",
        },
        {
            Order_Id: "#1607",
            Deliverd_Time:"2022-04-01 7:20PM",
            Subtotal: "$10,000",
            Cart_Taxes: "$250",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount:"$10,950",
            Commission_Paid:"$1095",
            Ally_Earning:"$10,105",
        },
        {
            Order_Id: "#1608",
            Deliverd_Time:"2022-04-01 7:20PM",
            Subtotal: "$10,000",
            Cart_Taxes: "$250",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount:"$10,950",
            Commission_Paid:"$1095",
            Ally_Earning:"$10,105",
        },
        {
            Order_Id: "#1609",
            Deliverd_Time:"2022-04-01 7:20PM",
            Subtotal: "$10,000",
            Cart_Taxes: "$250",
            Clients_Tips: "$100",
            Coupon_Discount: "$500",
            Total_Amount:"$10,950",
            Commission_Paid:"$1095",
            Ally_Earning:"$10,105",
        },
        
    ];
    const columns = [
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
            name: "Deliverd_Time",
            label: "Deliverd Time",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "table-bold-font-2" }),
            },
        },
        {
            name: "Subtotal",
            label: "Subtotal",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "cmn-blue-tbl-txt" }),
            },
        },
        {
            name: "Cart_Taxes",
            label: "Cart Taxes",
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
            name: "Coupon_Discount",
            label: "Coupon Discount",
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
                                <div className="comn-title-main d-block  d-sm-flex align-items-center justify-content-between">
                                    <div className="comn-title-main">
                                        <h1 className="mb-0">
                                            01st Apr 22 - 7th Apr 22
                                        </h1>
                                    </div>
                                    <div className=" ms-auto mt-md-0 mt-3">
                                        <div className="ms-auto d-block d-sm-flex  mt-3 mt-sm-0">
                                            <div>
                                                <button type="submit" className="btn-comnn-yellow w-100">
                                                    Pending
                                                </button>
                                            </div>
                                            <div className="ms-0 ms-sm-3 mt-3 mt-sm-0">
                                                <button type="submit" className="btn-comnn-lightblue w-100">
                                                    Export To CSV
                                                </button>
                                            </div>
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
