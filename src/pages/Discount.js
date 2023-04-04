import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";
import { Dropdown } from "react-bootstrap";

export default function Discount() {
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
    const Discount = [
        {
            No: "#1",
            Title: "Get 20% on first 5 orders",
            Promo_Code: "WELCOME20",
            Discount: "60 %",
            Flat_Discount: "$ 0",
            Start_Date:"10/10/2021",
            End_Date:"-",
        },
        {
            No: "#2",
            Title: "Lorem Ipsum is simply dummy text....",
            Promo_Code: "BIT20",
            Discount: "20 %",
            Flat_Discount: "$ 0",
            Start_Date:"-",
            End_Date:"10/10/2021",
        },
        {
            No: "#3",
            Title: "Up to 60% Discount on easter day",
            Promo_Code: "EASTER60",
            Discount: "0 %",
            Flat_Discount: "$ 15",
            Start_Date:"10/10/2021",
            End_Date:"10/10/2021",
        },
        {
            No: "#4",
            Title: "Free delivery on $80 orders",
            Promo_Code: "DELIVERY80",
            Discount: "10 %",
            Flat_Discount: "$ 0",
            Start_Date:"10/10/2021",
            End_Date:"10/10/2021",
        },
        {
            No: "#5",
            Title: "Lorem is simply dummy text ",
            Promo_Code: "DUMMY",
            Discount: "30 %",
            Flat_Discount: "$ 25",
            Start_Date:"10/10/2021",
            End_Date:"10/10/2021",
        },
        {
            No: "#6",
            Title: "Lorem is dummy text....",
            Promo_Code: "LOREM",
            Discount: "15 %",
            Flat_Discount: "$ 0",
            Start_Date:"10/10/2021",
            End_Date:"10/10/2021",
        },
        {
            No: "#7",
            Title: "Happy meal",
            Promo_Code: "MEAL15",
            Discount: "0 %",
            Flat_Discount: "$ 10",
            Start_Date:"10/10/2021",
            End_Date:"10/10/2021",
        },
        {
            No: "#8",
            Title: "Lorem is simply dummy text....",
            Promo_Code: "WELCOME20",
            Discount: "5 %",
            Flat_Discount: "$ 20",
            Start_Date:"10/10/2021",
            End_Date:"10/10/2021",
        },
        {
            No: "#9",
            Title: "Lorem is simply dummy text....",
            Promo_Code: "WELCOME20",
            Discount: "0 %",
            Flat_Discount: "$ 0",
            Start_Date:"10/10/2021",
            End_Date:"10/10/2021",
        },
        {
            No: "#20",
            Title: "Lorem is simply dummy text....",
            Promo_Code: "simply",
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
                                            Discount
                                        </h1>
                                    </div>
                                    <div className="ms-auto d-block d-sm-flex  mt-3 mt-sm-0">
                                        <div className="ms-auto mt-3 mt-sm-0 d-flex align-items-center promo-status-txt ">
                                            <div>
                                                <span>Status :</span>
                                            </div>
                                            <div className="ms-5 login-comn-select-blue">
                                                <select className="form-select " name="category">
                                                    <option>All</option>
                                                    <option>123</option>
                                                    <option>456</option>  
                                                </select>
                                            </div>                                                                         
                                        </div> 
                                        <div className=" mt-3 mt-sm-0 ms-0 ms-sm-3">
                                            <button type="submit" className="btn-comnn-blue-bdr w-100">
                                                Creat a offer
                                            </button>
                                        </div> 
                                    </div>

                                    
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="bx-white-main comn-table-box">
                                    <MUIDataTable data={Discount} columns={columns} options={options} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </UserLayout>
    </>
  )
}
