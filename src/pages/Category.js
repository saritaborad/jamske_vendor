import UserLayout from "../components/UserLayout";
import { Formik } from "formik";
import MUIDataTable from "mui-datatables";
import { Dropdown } from "react-bootstrap";
import React from "react";

export default function Categories() {

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
        pagination: false,
        filter: false,
        filterType: "dropdown",
        toolbar: false,
        searchOpen: false,
        search: false,
    };
    const Category = [
        {
            No: "1",
            Category_name: "Starters",
            Type: "Non Veg",
        },
        {
            No: "2",
            Category_name: "Pizzas",
            Type: "Non Veg",
        },
        {
            No: "3",
            Category_name: "Burges",
            Type: "Non Veg",
        },
        {
            No: "4",
            Category_name: "Chef Special",
            Type: "Non Veg",
        },
        {
            No: "5",
            Category_name: "Sandwichs",
            Type: "Non Veg",
        },
        {
            No: "6",
            Category_name: "Slides",
            Type: "Non Veg",
        },
        {
            No: "7",
            Category_name: "Soft Drinks",
            Type: "Non Veg",
        },
        {
            No: "8",
            Category_name: "Salads",
            Type: "Non Veg",
        },
        {
            No: "9",
            Category_name: "Beverage",
            Type: "Non Veg",
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
            name: "Category_name",
            label: "Category name",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Type",
            label: "Type",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "table-bold-font" }),
            },
        },
        {
            name: "Status",
            label: "Status",
            options: {
                filter: false,
                sort: true,
                customBodyRenderLite: (dataIndex) => {
                    return <span className="comn-status-class available-class">available</span>;
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
                              <Dropdown.Item href="/EditCategory">
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
                        <div className="d-flex align-items-center">
                            <div className="comn-title-main">
                                <h1 className="mb-0">
                                    Categories
                                </h1>
                            </div>
                            <div className="ms-auto">
                                <button type="submit" className="btn-comnn-lightblue w-100">
                                    Bulk Update
                                </button>                                                                         
                            </div> 
                        </div>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="dash-top-box p-0 h-auto">
                                        <div className="new-cate-head">
                                            <span>Create new categories</span>
                                        </div>
                                        <div className="cate-form-bdy">
                                        <Formik>       
                                            <form className="row">
                                                <div className="col-12 mb-3">
                                                    <label className="d-block login-label-text mb-2">Categories Name</label>
                                                    <input type="text" className="form-control login-comn-input"  name="category" placeholder="Enter category name"/>
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <label className="d-block login-label-text mb-2">Categories Type</label>
                                                    <select className="form-select login-comn-input" name="categories-Type">
                                                        <option>Choose Type</option>
                                                        <option>123</option>
                                                        <option>456</option>
                                                    </select>
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <label className="d-block login-label-text mb-2">Status</label>
                                                    <select className="form-select login-comn-input" name="Status">
                                                        <option>Choose Status</option>
                                                        <option>123</option>
                                                        <option>456</option>
                                                    </select>
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit" className="btn-comn-class w-100">
                                                        Create
                                                    </button>
                                                </div>
                                            </form>
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 mt-lg-0 mt-2">
                                <div className="bx-white-main comn-table-box new-brd-class">
                                    <MUIDataTable data={Category} columns={columns} options={options} />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </UserLayout>
    </>
  )
}
