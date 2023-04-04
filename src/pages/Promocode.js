import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";

export default function Promocode() {
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
    const Promocode = [
        {
            No: "#1",
            Title: "Get 60 % Dicount using paypal ....",
            Promo_Code: "SAVE60",
            Discount: "60 %",
            Flat_Discount: "$ 0",
            Start_Date:"10/10/2021",
            End_Date:"10/10/2021",
        },
        {
            No: "#2",
            Title: "Lorem Ipsum is simply dummy text....",
            Promo_Code: "PROMOCODE",
            Discount: "20 %",
            Flat_Discount: "$ 0",
            Start_Date:"10/10/2021",
            End_Date:"10/10/2021",
        },
        {
            No: "#3",
            Title: "Lorem Ipsum is simply dummy text....",
            Promo_Code: "PROMOCODE",
            Discount: "0 %",
            Flat_Discount: "$ 15",
            Start_Date:"10/10/2021",
            End_Date:"10/10/2021",
        },
        {
            No: "#4",
            Title: "Lorem Ipsum is simply dummy text....",
            Promo_Code: "PROMOCODE",
            Discount: "10 %",
            Flat_Discount: "$ 0",
            Start_Date:"10/10/2021",
            End_Date:"10/10/2021",
        },
        {
            No: "#5",
            Title: "Lorem is dummy text of the printing....",
            Promo_Code: "PROMOCODE",
            Discount: "30 %",
            Flat_Discount: "$ 25",
            Start_Date:"10/10/2021",
            End_Date:"10/10/2021",
        },
        {
            No: "#6",
            Title: "Lorem is dummy text of the printing....",
            Promo_Code: "PROMOCODE",
            Discount: "15 %",
            Flat_Discount: "$ 0",
            Start_Date:"10/10/2021",
            End_Date:"10/10/2021",
        },
        {
            No: "#7",
            Title: "Lorem Ipsum is simply dummy text....",
            Promo_Code: "PROMOCODE",
            Discount: "0 %",
            Flat_Discount: "$ 10",
            Start_Date:"10/10/2021",
            End_Date:"10/10/2021",
        },
        {
            No: "#8",
            Title: "Lorem is simply dummy text....",
            Promo_Code: "PROMOCODE",
            Discount: "5 %",
            Flat_Discount: "$ 20",
            Start_Date:"10/10/2021",
            End_Date:"10/10/2021",
        },
        {
            No: "#9",
            Title: "Lorem is simply dummy text....",
            Promo_Code: "PROMOCODE",
            Discount: "0 %",
            Flat_Discount: "$ 0",
            Start_Date:"10/10/2021",
            End_Date:"10/10/2021",
        },
        {
            No: "#10",
            Title: "Lorem is simply dummy text....",
            Promo_Code: "PROMOCODE",
            Discount: "10 %",
            Flat_Discount: "$ 0",
            Start_Date:"10/10/2021",
            End_Date:"10/10/2021",
        },
        
    ];
    const columns = [
        {
            name: "No",
            label: "No",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "table-bold-font" }),
            },
        },
        {
            name: "Title",
            label: "Title",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "table-comnn-title" }),
            },
        },
        {
            name: "Promo_Code",
            label: "Promo Code",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "cmn-blue-tbl-txt" }),
            },
        },
        {
            name: "Discount",
            label: "Discount (%)",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "table-bold-font" }),
            },
        },
        {
            name: "Flat_Discount",
            label: "Flat Discount",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "table-bold-font" }),
            },
        },
        {
            name: "Start_Date",
            label: "Start Date",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "End_Date",
            label: "End Date",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Status",
            label: "Status",
            options: {
                filter: false,
                sort: true,
                customBodyRenderLite: (dataIndex) => {
                    return <span className="comn-status-class active-class">active</span>;
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
                                <div className="d-block d-sm-flex align-items-center">
                                    <div className="comn-title-main">
                                        <h1 className="mb-0">
                                            Promocode
                                        </h1>
                                    </div>
                                    <div className="ms-auto mt-3 mt-sm-0 d-flex align-items-center promo-status-txt ">
                                        <div>
                                            <span>Status :</span>
                                        </div>
                                        <div className="ms-5 login-comn-select-blue">
                                            <select className="form-select" name="category">
                                                <option>All</option>
                                                <option>123</option>
                                                <option>456</option>  
                                            </select>
                                        </div>                                                                          
                                    </div> 
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="bx-white-main comn-table-box">
                                    <MUIDataTable data={Promocode} columns={columns} options={options} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </UserLayout>
    </>
  )
}
