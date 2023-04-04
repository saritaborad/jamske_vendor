import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";

export default function ItemReport() {
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
    const Items_Report = [
        {
            No:"1",
            Product_ID:"#12",
            Product_Name: "Norco ranch 12003 jumbo eggs",
            Categories: "Slides",
            Item_Price: "$15.45",
            Sales_Count: "15607",
        },
        {
            No:"2",
            Product_ID:"#12",
            Product_Name: "Norco ranch 12003 jumbo eggs",
            Categories: "Slides",
            Item_Price: "$15.45",
            Sales_Count: "15607",
        },
        {
            No:"3",
            Product_ID:"#12",
            Product_Name: "Norco ranch 12003 jumbo eggs",
            Categories: "Slides",
            Item_Price: "$15.45",
            Sales_Count: "15607",
        },
        {
            No:"4",
            Product_ID:"#12",
            Product_Name: "Norco ranch 12003 jumbo eggs",
            Categories: "Slides",
            Item_Price: "$15.45",
            Sales_Count: "15607",
        },
        {
            No:"5",
            Product_ID:"#12",
            Product_Name: "Norco ranch 12003 jumbo eggs",
            Categories: "Slides",
            Item_Price: "$15.45",
            Sales_Count: "15607",
        },
        {
            No:"6",
            Product_ID:"#12",
            Product_Name: "Norco ranch 12003 jumbo eggs",
            Categories: "Slides",
            Item_Price: "$15.45",
            Sales_Count: "15607",
        },
        {
            No:"7",
            Product_ID:"#12",
            Product_Name: "Norco ranch 12003 jumbo eggs",
            Categories: "Slides",
            Item_Price: "$15.45",
            Sales_Count: "15607",
        },
        {
            No:"8",
            Product_ID:"#12",
            Product_Name: "Norco ranch 12003 jumbo eggs",
            Categories: "Slides",
            Item_Price: "$15.45",
            Sales_Count: "15607",
        },
        {
            No:"9",
            Product_ID:"#12",
            Product_Name: "Norco ranch 12003 jumbo eggs",
            Categories: "Slides",
            Item_Price: "$15.45",
            Sales_Count: "15607",
        },
        {
            No:"10",
            Product_ID:"#12",
            Product_Name: "Norco ranch 12003 jumbo eggs",
            Categories: "Slides",
            Item_Price: "$15.45",
            Sales_Count: "15607",
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
            name: "Product_ID",
            label: "Product ID",
            options: {
                filter: false,
                sort: false,
               
            },
        },
        {
            name: "Product_Name",
            label: "Product Name",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "table-bold-font-2" }),
               
            },
        },
        {
            name: "Categories",
            label: "Categories",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            name: "Item_Price",
            label: "Item Price",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            name: "Sales_Count",
            label: "Sales Count",
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
                                            Items Report
                                        </h1>
                                    </div>
                                    <div className="payment-rgt-part ms-auto mt-md-0 mt-3 d-block  d-md-flex">
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
                                    <MUIDataTable data={Items_Report} columns={columns} options={options} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </UserLayout>
    </>
  )
}
