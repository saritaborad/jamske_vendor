import UserLayout from "../components/UserLayout";
import Dash_1 from "../images/dash-top-1.svg";
import Dash_2 from "../images/dash-top-2.svg";
import Dash_3 from "../images/dash-top-3.svg";
import Dash_4 from "../images/dash-top-4.svg";
import Dash_5 from "../images/dash-top-5.svg";
import Btm_1 from "../images/btm-1.svg";
import Btm_2 from "../images/btm-2.svg";
import Btm_3 from "../images/btm-3.svg";
import Btm_4 from "../images/btm-4.svg";
import Chart from "react-apexcharts";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";
import { Rating } from 'react-simple-star-rating'
import { useState } from "react";

export default function Dashboard(params) {
const [rating, setRating] = useState(0)

const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }

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
    const Latest_Orders = [
        {
            No: "1",
            Order_ID: "#1593195485",
            Name: "Joh Doe",
            Type: "Pickup",
            Date: "1/17/2022",
            Price: "$23.67",
        },
        {
            No: "2",
            Order_ID: "#1593195485",
            Name: "Joh Doe",
            Type: "Delivery",
            Date: "1/17/2022",
            Price: "$23.67",
        },
        {
            No: "3",
            Order_ID: "#1593195485",
            Name: "Joh Doe",
            Type: "Pickup",
            Date: "1/17/2022",
            Price: "$23.67",
        },
        {
            No: "4",
            Order_ID: "#1593195485",
            Name: "Joh Doe",
            Type: "Delivery",
            Date: "1/17/2022",
            Price: "$23.67",
        },
        {
            No: "5",
            Order_ID: "#1593195485",
            Name: "Joh Doe",
            Type: "Delivery",
            Date: "1/17/2022",
            Price: "$23.67",
        },
    ];
    const columns = [
        {
            name: "No",
            label: "No.",
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
            },
        },
        {
            name: "Name",
            label: "Name",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            name: "Type",
            label: "Type",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "table-bold-font" }),
            },
        },
        {
            name: "Date",
            label: "Date",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            name: "Price",
            label: "Price",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "price-text-class" }),
            },
        },
        {
            name: "",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "p-0" }),
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <button className="dash-table-btn">
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    );
                },
            },
        },
    ];
    const chart1 = {
        series: [
            {
                name: "Clients Overview",
                data: [0, 25, 15, 30, 15, 30, 20],
            },
        ],
        fill: {
            opacity: 1,
        },
        chart: {
            height: 300,
            type: "area",
            fontFamily: "Rubik",
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
        colors: ["#0066B9"],
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            width: 2,
            dashArray: 0,
        },
        xaxis: {

            categories: ["11","12","13","14","15","16","17"],

            axisBorder: {
                show: false,
            },

            axisTicks: {
                show: false,
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
    };
const chart2 = {
        series: [70, 20, 10],
            chart: {
                type: "donut",
                height: 300,
                fontFamily: "Rubik",
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
                fontSize: '16px',
                fontFamily:'Dm sans',
                fontWeight: 500,
                color: "#6C6A81",
                markers: {
                    radius: 3,
                },

                itemMargin: {
                    horizontal: 15,
                    vertical: 0,
                },
              },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            total: {
                                show: false,
                                color: "#1081E8",
                                fontSize: "24px",
                            },
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
            labels: ["Delivery", "Pickup", "Cancel"],
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
const chart3 = {
        series: [
            {
                name: "Orders",
                data: [2, 4, 4, 6, 3, 5, 4],
            },
            {
                name: "View",
                data: [7, 9, 7, 9, 9, 10, 7],
            },
        ],

            chart: {
                type: "bar",
                height: 300,
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 9,
                    columnWidth: "50%",
                },
            },
            colors: ["#EE9D26", "#3E55AB"],
            dataLabels: {
                enabled: false,
            },
            legend: {
                position: "top",
                horizontalAlign: "right",
                fontSize: "16px",
                fontFamily:'Dm sans',
                fontWeight: 500,
                color: "#6C6A81",

                markers: {
                    radius: 3,
                },

                itemMargin: {
                    horizontal: 15,
                    vertical: 0,
                },
            },
            stroke: {
                show: true,
                width: 3,
                colors: ["transparent"],
            },
            xaxis: {
                categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],

                axisBorder: {
                    show: false,
                },

                axisTicks: {
                    show: false,
                },
            },

            yaxis: {
                categories: ["0", "2", "4", "8", "10", "12"],
                labels:{
                    formatter: function (val) {
                        return  val + "k";
                    },
                }
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return  val + "k";
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

            responsive: [
                {
                    breakpoint:540,
                    options: {
                      plotOptions: {
                          bar: {
                              borderRadius:6,
                            },
                        },
                    }
                  },
                {
                    breakpoint:375,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius:3,
                                },
                            },
                        }
                    }
                ]

    };




    return (
        <>
            <UserLayout>
            <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 my-3">
                                <div className="comn-title-main d-block  d-sm-flex justify-content-between">
                                    <h1 className="mb-0">Dashboard</h1>
                                    <div className="d-flex align-items-center">
                                        <span className="pe-2">Acceptiong Orders</span>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input mt-0" type="checkbox" id="offer-status" /> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2">
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
                                                <bdi>Orders</bdi>
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
                                                <bdi>Orders Delivered</bdi>
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
                                                <bdi>Total Items</bdi>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 h-100">
                                <div className="row me-0">
                                    <div className="col-xxl-7 mb-3">
                                        <div className="row">
                                            <div className="col-md-6 pe-0">
                                                <div className="dash-part-hdr">
                                                    <div className="dash-part-hdr-top">
                                                        <span>Order’s Overview</span>
                                                    </div>
                                                    <div className="chart-main-part"><Chart options={chart1} series={chart1.series} height={300} type="area" /></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 pe-0 mt-3 mt-md-0">
                                                <div className="dash-part-hdr">
                                                    <div className="dash-part-hdr-top d-flex">
                                                        <span>Orders</span>
                                                        <span className="ms-auto chart-data">25960</span>
                                                    </div>
                                                    <div className="chart-main-part"><Chart options={chart2} series={chart2.series} height={300} type="donut" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-5 mb-3">
                                        <div className="row">
                                            <div className="col-12 pe-0">
                                                <div className="dash-part-hdr">
                                                    <div className="dash-part-hdr-top">
                                                        <span>Users/Orders</span>
                                                    </div>
                                                    <div className="chart-main-part" id="responsive-chart"><Chart options={chart3} series={chart3.series} type="bar" height={300} /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 h-100">
                                <div className="row ">
                                    <div className="col-xxl-4 mb-3">
                                        <div className="dash-part-hdr">
                                            <div className="dash-part-table-hdr d-flex align-items-center">
                                                <span>Top Selling Prodcts</span>
                                                <div className="ms-auto">
                                                    <Link to="#">See All</Link>
                                                </div>
                                            </div>
                                            <div className="dash-part-btm">
                                                <div className="dash-btm-info-comn">
                                                    <div className="dash-btm-info-img">
                                                        <img src={Btm_1} alt="btm-1"/>
                                                    </div>
                                                    <div className="ms-3">
                                                        <h5>Pesto Sandwich</h5>
                                                        <p>
                                                            $5
                                                        </p>
                                                    </div>
                                                    <div className="ms-auto dash-btm-rgt-info">
                                                        <div className="d-flex justify-content-end">
                                                            <div className="d-flex align-items-center mb-2">
                                                                <Rating onClick={handleRating} ratingValue={rating} iconsCount={1} size={23} emptyColor={"#DFB300"} fillColor={"#DFB300"}/>
                                                                <h6 className="ps-2 m-0">4.5</h6>
                                                            </div>
                                                        </div>
                                                        <p>1692 Sales</p>
                                                    </div>
                                                </div>
                                                <div className="dash-btm-info-comn">
                                                    <div className="dash-btm-info-img ">
                                                        <img src={Btm_2} alt="btm-2"/>
                                                    </div>
                                                    <div className="ms-3">
                                                        <h5>Chicken Burger</h5>
                                                        <p>
                                                            $18
                                                        </p>
                                                    </div>
                                                    <div className="ms-auto dash-btm-rgt-info">
                                                        <div className="d-flex justify-content-end">
                                                            <div className="d-flex align-items-center mb-2">
                                                                <Rating onClick={handleRating} ratingValue={rating} iconsCount={1} size={23} emptyColor={"#DFB300"} fillColor={"#DFB300"}/>
                                                                <h6 className="ps-2 m-0">4.5</h6>
                                                            </div>
                                                        </div>
                                                        <p>1500 Sales</p>
                                                    </div>
                                                </div>
                                                <div className="dash-btm-info-comn">
                                                    <div className="dash-btm-info-img">
                                                        <img src={Btm_3} alt="btm-3"/>
                                                    </div>
                                                    <div className="ms-3">
                                                        <h5>Garlic Breads</h5>
                                                        <p>
                                                            $6
                                                        </p>
                                                    </div>
                                                    <div className="ms-auto dash-btm-rgt-info">
                                                        <div className="d-flex justify-content-end">
                                                            <div className="d-flex align-items-center mb-2">
                                                                <Rating onClick={handleRating} ratingValue={rating} iconsCount={1} size={23} emptyColor={"#DFB300"} fillColor={"#DFB300"}/>
                                                                <h6 className="ps-2 m-0">4.5</h6>
                                                            </div>
                                                        </div>
                                                        <p>1450 Sales</p>
                                                    </div>
                                                </div>
                                                <div className="dash-btm-info-comn border-0">
                                                    <div className="dash-btm-info-img logo-color-4">
                                                        <img src={Btm_4} alt="btm-4"/>
                                                    </div>
                                                    <div className="ms-3">
                                                        <h5>Rocket Burger</h5>
                                                        <p>
                                                            $10
                                                        </p>
                                                    </div>
                                                    <div className="ms-auto dash-btm-rgt-info">
                                                        <div className="d-flex justify-content-end">
                                                            <div className="d-flex align-items-center mb-2">
                                                                <Rating onClick={handleRating} ratingValue={rating} iconsCount={1} size={23} emptyColor={"#DFB300"} fillColor={"#DFB300"}/>
                                                                <h6 className="ps-2 m-0">4.5</h6>
                                                            </div>
                                                        </div>
                                                        <p>1268 Sales</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-8 mb-3">
                                        <div className="dash-part-hdr">
                                            <div className="dash-part-table-hdr d-flex align-items-center">
                                                <span>Latest Orders</span>
                                                <div className="ms-auto">
                                                    <Link to="#">See All</Link>
                                                </div>
                                            </div>
                                            <div className="bx-white-main new-brd-class  diff-head-table comnn-head-table">
                                                <MUIDataTable data={Latest_Orders} columns={columns} options={options} />
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
