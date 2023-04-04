import UserLayout from "../components/UserLayout";
import Dash_1 from "../images/dash-top-1.svg";
import Dash_2 from "../images/dash-top-2.svg";
import Dash_3 from "../images/dash-top-3.svg";
import Dash_4 from "../images/dash-top-4.svg";
import Dash_5 from "../images/dash-top-5.svg";
import Chart from "react-apexcharts";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

export default function Finance(params) {
// ========== table 1  ===========
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
        sort: false,
        pagination: false,
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

// ========== table 2  ===========
    const invoice_options = {
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
        sort: false,
        pagination: false,
        filter: false,
        filterType: "dropdown",
        toolbar: false,
        searchOpen: false,
        search: false,
    };
    const invoice_Request = [
        {
            Invoice_ID: "15464",
            Order_Name:"Joh Doe",
            Order_ID: "#1100",
            Invoice_Date: "4/17/2022",
            Price: "$230.67",
        },
        {
            Invoice_ID: "15463",
            Order_Name:"Joh Doe",
            Order_ID: "#1100",
            Invoice_Date: "4/17/2022",
            Price: "$230.67",
        },
        {
            Invoice_ID: "15462",
            Order_Name:"Joh Doe",
            Order_ID: "#1100",
            Invoice_Date: "4/17/2022",
            Price: "$230.67",
        },
        {
            Invoice_ID: "15461",
            Order_Name:"Joh Doe",
            Order_ID: "#1100",
            Invoice_Date: "4/17/2022",
            Price: "$230.67",
        },
        {
            Invoice_ID: "15460",
            Order_Name:"Joh Doe",
            Order_ID: "#1100",
            Invoice_Date: "4/17/2022",
            Price: "$230.67",
        },
        {
            Invoice_ID: "15464",
            Order_Name:"Joh Doe",
            Order_ID: "#1100",
            Invoice_Date: "4/17/2022",
            Price: "$230.67",
        },
        
    ];
    const invoice_columns = [
        {
            name: "Invoice_ID",
            label: "Invoice ID.",
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
                setCellProps: () => ({ className: "table-bold-font" }),
            },
        },
        {
            name: "Order_ID",
            label: "Order ID",
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
                setCellProps: () => ({ className: "table-bold-font" }),
            },
        },
        {
            name: "Price",
            label: "Price",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "cmn-blue-tbl-txt" }),
            },
        },  
    ];


// ========== table 3  ===========
const Settlements_options = {
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
    sort: false,
    pagination: false,
    filter: false,
    filterType: "dropdown",
    toolbar: false,
    searchOpen: false,
    search: false,
};
const Settlements_Request = [
    {
        Duration: "01st April 22 - 7th April 22",
        Orders:"20",
        Total_Amount: "$230.67",
    },
    {
        Duration: "01st April 22 - 7th April 22",
        Orders:"20",
        Total_Amount: "$230.67",
    },
    {
        Duration: "01st April 22 - 7th April 22",
        Orders:"20",
        Total_Amount: "$230.67",
    },
    {
        Duration: "01st April 22 - 7th April 22",
        Orders:"20",
        Total_Amount: "$230.67",
    },
    {
        Duration: "01st April 22 - 7th April 22",
        Orders:"20",
        Total_Amount: "$230.67",
    },
    
       
];
const Settlements_columns = [
    {
        name: "Duration",
        label: "Duration",
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
            setCellProps: () => ({ className: "table-bold-font" }),
        },
    },
    {
        name: "Total_Amount",
        label: "Total Amount",
        options: {
            filter: false,
            sort: false,
            setCellProps: () => ({ className: "table-bold-font" }),
        },
    },
    {
        name: "Satus",
        label: "Satus",
        options: {
            filter: false,
            sort: false,
            customBodyRenderLite: (dataIndex) => {
                return <span className="comn-status-class paid-class">paid</span>;
            },
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
                          <Dropdown.Item href="/CreateDiscount">
                              <bdi className="d-flex align-items-center">
                                  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M10 14C8.35987 14.0204 6.7367 13.6664 5.254 12.965C4.10469 12.4042 3.07265 11.6297 2.213 10.683C1.30243 9.7041 0.585467 8.56164 0.1 7.31598L0 6.99998L0.105 6.68398C0.590815 5.43941 1.30624 4.29725 2.214 3.31698C3.07334 2.37029 4.10504 1.59584 5.254 1.03498C6.73671 0.333567 8.35988 -0.0204101 10 -2.11214e-05C11.6401 -0.0203749 13.2633 0.333601 14.746 1.03498C15.8953 1.59571 16.9274 2.37017 17.787 3.31698C18.6993 4.29453 19.4165 5.43734 19.9 6.68398L20 6.99998L19.895 7.31598C18.3262 11.3998 14.3742 14.0693 10 14ZM10 1.99998C6.59587 1.89331 3.47142 3.87507 2.117 6.99998C3.4712 10.1251 6.59579 12.1069 10 12C13.4041 12.1064 16.5284 10.1247 17.883 6.99998C16.5304 3.87356 13.4047 1.89106 10 1.99998ZM10 9.99998C8.55733 10.0095 7.30937 8.99734 7.02097 7.58375C6.73256 6.17017 7.48427 4.75 8.81538 4.19364C10.1465 3.63728 11.6852 4.10011 12.4885 5.29849C13.2919 6.49686 13.1354 8.09606 12.115 9.11598C11.5563 9.68124 10.7948 9.99954 10 9.99998Z"
                                          fill="#1A202C"
                                      />
                                  </svg>
                                  <span className="ms-2">Details</span>
                              </bdi>
                          </Dropdown.Item>
                          <Dropdown.Item href="/CreateDiscount">
                              <bdi className="d-flex align-items-center">
                                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M1.41999 19.079C1.13948 19.0785 0.872062 18.9603 0.682993 18.753C0.490439 18.5475 0.394758 18.2695 0.419993 17.989L0.664993 15.295L11.983 3.98103L15.52 7.51703L4.20499 18.83L1.51099 19.075C1.47999 19.078 1.44899 19.079 1.41999 19.079ZM16.226 6.81003L12.69 3.27403L14.811 1.15303C14.9986 0.965251 15.2531 0.859741 15.5185 0.859741C15.7839 0.859741 16.0384 0.965251 16.226 1.15303L18.347 3.27403C18.5348 3.4616 18.6403 3.71612 18.6403 3.98153C18.6403 4.24694 18.5348 4.50146 18.347 4.68903L16.227 6.80903L16.226 6.81003Z"
                                          fill="#1A202C"
                                      />
                                  </svg>
                                  <span className="ms-2">Edit</span>
                              </bdi>
                          </Dropdown.Item>
                          <Dropdown.Item>
                              <bdi className="d-flex align-items-center">
                                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M14 20H4C2.89543 20 2 19.1046 2 18V5H0V3H4V2C4 0.89543 4.89543 0 6 0H12C13.1046 0 14 0.89543 14 2V3H18V5H16V18C16 19.1046 15.1046 20 14 20ZM4 5V18H14V5H4ZM6 2V3H12V2H6ZM12 16H10V7H12V16ZM8 16H6V7H8V16Z"
                                          fill="#1A202C"
                                      />
                                  </svg>
                                  <span className="ms-2">Delete</span>
                              </bdi>
                          </Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
              </div>
                );
            },
        },
    },
];

const chart1 = {
    series: [
        {
            name: "Clients Overview",
            data: [5,8,10,13,22,23,29,16,10,15,20,25,30,23,35,40,30,23,36,45,49,50,36,25,45,30,35,29,18],
        },
    ],
    fill: {
        opacity: 1,
    },
    chart: {
        height: 300,
        type: "area",
        fontFamily: "DM Sans",
        zoom: {
            enabled: true,
        },
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    colors: ["#06038D"],
    stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        width: 2,
        dashArray: 0,
    },
    xaxis: {

        categories: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","29","30"],

        axisBorder: {
            show: false,
        },

        axisTicks: {
            show: false,
        },

        labels:{
            rotate:-60,
            style:{
                fontSize:"12px",
                fontWeight:"400",
                color:"#6C6A81",
                fontFamily:"DM Sans",
            },
            
        },
        
        },
    grid: {
        show: true,
        borderColor: 'rgba(35, 34, 34, .1)',
        strokeDashArray: 3,
        position: 'back',
        yaxis: {
            lines: {
                show: true
            }
        }, 
    },
    yaxis:{
        labels:{
            style:{
                fontSize:"12px",
                fontWeight:"400",
                color:"#6C6A81",
                fontFamily:"DM Sans",
            },
            
        },
        },
    responsive: [
        {
            breakpoint:576,
            options: {
                xaxis:{
                labels:{
                    rotate:-80,
                    style:{
                        fontSize:"9px",
                    },
                    
                },
                },
                yaxis:{
                labels:{
                    style:{
                        fontSize:"9px",
                    },
                    
                },
                }
            }
            },
        
        ] 
};


const chart2 = {
        series: [70, 20, 10],
            chart: {
                type: "donut",
                height: 300,
                fontFamily: "DM Sans",
                zoom: {
                    enabled: true,
                },
            },
            stroke: {
                show: true,
                curve: "smooth",
                lineCap: "butt",
                width: 0,
                dashArray: 0,
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "%"
                },
            },
            legend: {
                show:true,
                position: 'bottom',
                floating: false,
                verticalAlign: 'bottom',
                markers: {
                    radius: 3,
                },

                itemMargin: {
                    horizontal: 10,
                    vertical: 0,
                },
              },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                        },
                        size: "65%",
                    },
                },
            },
            tooltip: {
                y: {
                formatter: function(val) {
                    return val + '%'
                }
                }
            },
            labels: ["Earning", "Commissioin", "Sales Tex"],
          
            colors: ["#06038D", "#EE9D26", "#EB5757"],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: "100%",
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
    };

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
                                            Finance
                                        </h1>
                                    </div>
                                    <div className="payment-rgt-part ms-auto mt-md-0 mt-3">
                                        <input type="date" className="form-control login-comn-input-3-gray mb-sm-0 mb-2" />
                                        <span>To</span>
                                        <input type="date" className="form-control login-comn-input-3-gray mt-sm-0 mt-2" />
                                        <button type="submit" className="btn-comnn-lightblue w-100 mt-sm-0 mt-3 ms-0 ms-sm-3">
                                            Export To CSV
                                        </button> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="row me-0 justify-content-center">
                                    <div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
                                        <div className="dash-top-box fix-span">
                                            <span className="dash-span-1">
                                                <img src={Dash_1} alt="1" />
                                            </span>
                                            <p>$15659.90</p>
                                            <div className="dash-top-box-info d-flex align-items-center">
                                                <bdi>Total Sales</bdi>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
                                        <div className="dash-top-box fix-span">
                                            <span className="dash-span-2">
                                                <img src={Dash_2} alt="2" />
                                            </span>
                                            <p>25960</p>
                                            <div className="dash-top-box-info d-flex align-items-center">
                                                <bdi>Total Earnings</bdi>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
                                        <div className="dash-top-box fix-span">
                                            <span className="dash-span-5">
                                                <img src={Dash_5} alt="5" />
                                            </span>
                                            <p>21000</p>
                                            <div className="dash-top-box-info d-flex align-items-center">
                                                <bdi>Admin Commission	</bdi>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
                                        <div className="dash-top-box fix-span">
                                            <span className="dash-span-3">
                                                <img src={Dash_3} alt="3" />
                                            </span>
                                            <p>9631</p>
                                            <div className="dash-top-box-info d-flex align-items-center">
                                                <bdi>Total Sales Tax</bdi>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
                                        <div className="dash-top-box fix-span">
                                            <span className="dash-span-4">
                                                <img src={Dash_4} alt="4" />
                                            </span>
                                            <p>9631</p>
                                            <div className="dash-top-box-info d-flex align-items-center">
                                                <bdi>Pending Settlement</bdi>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-12 h-100">
                                <div className="row">  
                                    <div className="col-lg-4 ">
                                        <div className="dash-part-hdr">
                                            <div className="dash-part-hdr-top d-flex">
                                                <span>Sales</span>
                                                <span className="ms-auto chart-data">$15659.90</span>
                                            </div>

                                            <div className="chart-main-part mb-2"><Chart options={chart2} series={chart2.series} height={300} type="donut" /></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 mt-3 mt-lg-0">
                                        <div className="dash-part-hdr">
                                            <div className="dash-part-hdr-top  d-block  d-sm-flex align-items-center">
                                                <span>Sales overview</span>
                                                <div className="ms-auto mt-sm-0 mt-3">
                                                    <div className="mont-select-div pe-2">
                                                        <span className="d-block">last :</span>
                                                        <select className="login-comn-input-2  border-0 ms-auto">
                                                            <option>1 Month</option>
                                                            <option>Monthly</option>
                                                            <option>Yearly</option>
                                                        </select>
                                                    </div>
                                                </div>                                                                    
                                       
                                            </div>
                                            <div className="chart-main-part"><Chart options={chart1} series={chart1.series} height={300} type="area" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="dash-part-hdr">
                                    <div className="dash-part-table-hdr d-flex align-items-center">
                                        <span>Monthly Report</span>
                                        <div className="ms-auto">
                                            <Link to="#">See All</Link>
                                        </div>
                                    </div>
                                    <div className="bx-white-main new-brd-class  comnn-head-table">
                                        <MUIDataTable data={Monthly_Report} columns={columns} options={options} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 h-100 mt-3">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="dash-part-hdr">
                                            <div className="dash-part-table-hdr d-flex align-items-center">
                                                <span>Latest Invoices</span>
                                                <div className="ms-auto">
                                                    <Link to="#">See All</Link>
                                                </div>
                                            </div>
                                            <div className="bx-white-main new-brd-class  comnn-head-table">
                                                <MUIDataTable data={invoice_Request} columns={invoice_columns} options={invoice_options} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mt-3 mt-sm-0">
                                        <div className="dash-part-hdr">
                                            <div className="dash-part-table-hdr d-flex align-items-center">
                                                <span>Last Settlements</span>
                                                <div className="ms-auto">
                                                    <Link to="#">See All</Link>
                                                </div>
                                            </div>
                                            <div className="bx-white-main new-brd-class  comnn-head-table ">
                                                <MUIDataTable data={Settlements_Request} columns={Settlements_columns} options={Settlements_options} />
                                            </div>
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
