import React from 'react';
import Accordion from 'react-bootstrap/Accordion'

export default function NavSidebar(params) {
    
   const sidebar_change = (name) => {
        if (name) {
            window.location.href = '/' + name
            document.getElementById('root').classList.remove('dash-main-class-add')
        }
    }

 const urlName = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
        return (
            <React.Fragment>
                <div className="sidebar-main-section">
                    <div className="sidebar-main-section-inner">
                        <ul className="sidebar-main-inner-menu">
                            <li onClick={() => {sidebar_change('dashboard') }} >
                                <bdi className={urlName === 'dashboard' ? 'active' : ''}>
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 19H3C2.44772 19 2 18.5523 2 18V9.99998H0L9.292 0.706983C9.47957 0.519206 9.73409 0.413696 9.9995 0.413696C10.2649 0.413696 10.5194 0.519206 10.707 0.706983L20 9.99998H18V18C18 18.5523 17.5523 19 17 19ZM8 12H12V17H16V8.82798L10 2.82798L4 8.82798V17H8V12Z" fill="#6C6A81"/>
                                </svg>
                                    <span>Dashboard</span>
                                </bdi>
                            </li>
                            <li onClick={() => {sidebar_change('orders') }} >
                                <bdi className={urlName === 'orders' ? 'active' : ''}>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 4.50004H12C12 2.47421 10.21 0.833374 8 0.833374C5.79 0.833374 4 2.47421 4 4.50004H2C0.9 4.50004 0 5.32504 0 6.33337V17.3334C0 18.3417 0.9 19.1667 2 19.1667H14C15.1 19.1667 16 18.3417 16 17.3334V6.33337C16 5.32504 15.1 4.50004 14 4.50004ZM8 2.66671C9.1 2.66671 10 3.49171 10 4.50004H6C6 3.49171 6.9 2.66671 8 2.66671ZM14 17.3334H2V6.33337H4V8.16671C4 8.67087 4.45 9.08337 5 9.08337C5.55 9.08337 6 8.67087 6 8.16671V6.33337H10V8.16671C10 8.67087 10.45 9.08337 11 9.08337C11.55 9.08337 12 8.67087 12 8.16671V6.33337H14V17.3334Z" fill="#6C6A81"/>
                                </svg>
                                    <span>Orders</span>
                                </bdi>
                            </li>
                            <li>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header  className={urlName === 'menus' ? 'active' : ''}>
                                        <bdi>
                                            <svg width="16" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 0H18V2H8V0ZM8 4H14V6H8V4ZM8 10H18V12H8V10ZM8 14H14V16H8V14ZM0 0H6V6H0V0ZM2 2V4H4V2H2ZM0 10H6V16H0V10ZM2 12V14H4V12H2Z" fill="#6C6A81"/>
                                            </svg>
                                            <span>Menus</span>
                                        </bdi>
                                    </Accordion.Header>
                                        <Accordion.Body>
                                        <li onClick={() => {sidebar_change('menu') }} >
                                            <bdi className={urlName === 'menu' ? 'active' : ''}>
                                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 9C7.44772 9 7 9.44771 7 10C7 10.5523 7.44772 11 8 11V9ZM11 11C11.5523 11 12 10.5523 12 10C12 9.44771 11.5523 9 11 9V11ZM8 13C7.44772 13 7 13.4477 7 14C7 14.5523 7.44772 15 8 15V13ZM11 15C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13V15ZM5 9C4.44772 9 4 9.44771 4 10C4 10.5523 4.44772 11 5 11V9ZM5.01 11C5.56228 11 6.01 10.5523 6.01 10C6.01 9.44771 5.56228 9 5.01 9V11ZM5 13C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15V13ZM5.01 15C5.56228 15 6.01 14.5523 6.01 14C6.01 13.4477 5.56228 13 5.01 13V15ZM14 5V17H16V5H14ZM13 18H3V20H13V18ZM2 17V5H0V17H2ZM3 4H5V2H3V4ZM11 4H13V2H11V4ZM3 18C2.44772 18 2 17.5523 2 17H0C0 18.6569 1.34315 20 3 20V18ZM14 17C14 17.5523 13.5523 18 13 18V20C14.6569 20 16 18.6569 16 17H14ZM16 5C16 3.34315 14.6569 2 13 2V4C13.5523 4 14 4.44772 14 5H16ZM2 5C2 4.44772 2.44772 4 3 4V2C1.34315 2 0 3.34315 0 5H2ZM8 11H11V9H8V11ZM8 15H11V13H8V15ZM7 2H9V0H7V2ZM9 4H7V6H9V4ZM7 4C6.44772 4 6 3.55228 6 3H4C4 4.65685 5.34315 6 7 6V4ZM10 3C10 3.55228 9.55228 4 9 4V6C10.6569 6 12 4.65685 12 3H10ZM9 2C9.55228 2 10 2.44772 10 3H12C12 1.34315 10.6569 0 9 0V2ZM7 0C5.34315 0 4 1.34315 4 3H6C6 2.44772 6.44772 2 7 2V0ZM5 11H5.01V9H5V11ZM5 15H5.01V13H5V15Z" fill="#6C6A81"/>
                                            </svg>
                                                <span>Menu</span>
                                            </bdi>
                                        </li>
                                        <li onClick={() => {sidebar_change('category') }} >
                                            <bdi className={urlName === 'category' ? 'active' : ''}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 22C7.664 22 4 19.965 4 17.556V6.444C4 4.035 7.664 2 12 2C16.336 2 20 4.035 20 6.444V17.556C20 19.965 16.337 22 12 22ZM6 14.9V17.559C6.07 18.112 8.309 19.781 12 19.781C15.691 19.781 17.931 18.107 18 17.553V14.9C16.1794 15.9554 14.1039 16.4905 12 16.447C9.89606 16.4906 7.82058 15.9554 6 14.9ZM6 9.341V12C6.07 12.553 8.309 14.222 12 14.222C15.691 14.222 17.931 12.548 18 11.994V9.341C16.1795 10.3968 14.104 10.9323 12 10.889C9.89596 10.9323 7.82046 10.3968 6 9.341ZM12 4.222C8.308 4.222 6.069 5.896 6 6.451C6.07 7 8.311 8.666 12 8.666C15.689 8.666 17.931 6.992 18 6.438C17.93 5.887 15.689 4.222 12 4.222Z" fill="#6C6A81"/>
                                            </svg>
                                                <span>Category</span>
                                            </bdi>
                                        </li>
                                        <li onClick={() => {sidebar_change('addproduct') }} >
                                            <bdi className={urlName === 'addproduct' ? 'active' : ''}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.12954 3.00772C5.48563 2.38457 6.14831 2 6.86603 2H17.134C17.8517 2 18.5144 2.38457 18.8704 3.00772L20.0133 5.00772C20.6612 6.14163 20.0618 7.51107 18.9235 7.89532C18.9276 7.97661 18.9269 8.0591 18.9209 8.14249L18.0638 20.1425C17.989 21.1891 17.1181 22 16.0689 22H7.9311C6.88182 22 6.01094 21.1891 5.93618 20.1425L5.07904 8.14249C5.07308 8.0591 5.07231 7.97661 5.07645 7.89531C3.93813 7.51105 3.33874 6.14162 3.98668 5.00772L5.12954 3.00772ZM7.07396 8L7.28824 11H16.7117L16.926 8H7.07396ZM7.71681 17L7.9311 20H16.0689L16.2831 17H7.71681ZM18.2768 6L17.134 4L6.86603 4L5.72317 6H18.2768Z" fill="#6C6A81"/>
                                            </svg>
                                                <span>Add Product</span>
                                            </bdi>
                                        </li>            
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>    
                            </li>
                            <li>
                                <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header className={urlName === 'offers' ? 'active' : ''}>
                                            <bdi >
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 3.88218V17.2402C9 18.2121 8.2121 19 7.24018 19C6.49646 19 5.83302 18.5325 5.58288 17.8321L3.43647 11.6829M16 11C17.6569 11 19 9.65685 19 8C19 6.34315 17.6569 5 16 5M3.43647 11.6829C2.0043 11.0741 1 9.65433 1 8C1 5.79086 2.79086 4 4.99999 4H6.83208C10.9327 4 14.4569 2.7659 16 1L16 15C14.4569 13.2341 10.9327 12 6.83208 12L4.99998 12C4.44518 12 3.91677 11.887 3.43647 11.6829Z" stroke="#6C6A81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                                <span>Offers</span>
                                            </bdi>
                                        </Accordion.Header>
                                            <Accordion.Body>
                                            <li onClick={() => {sidebar_change('promocode') }} >
                                                <bdi className={urlName === 'promocode' ? 'active' : ''}>
                                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.897 18.968C9.36598 18.9696 8.85641 18.7586 8.482 18.382L0.648001 10.547C0.23459 10.1348 0.0226111 9.56207 0.068001 8.98001L0.568001 2.41401C0.639299 1.4264 1.4262 0.641631 2.414 0.573012L8.98 0.0730117C9.031 0.0620117 9.083 0.0620117 9.134 0.0620117C9.66385 0.063372 10.1717 0.273991 10.547 0.648012L18.382 8.48201C18.7572 8.85711 18.9681 9.36594 18.9681 9.89651C18.9681 10.4271 18.7572 10.9359 18.382 11.311L11.311 18.382C10.9368 18.7583 10.4277 18.9693 9.897 18.968ZM9.133 2.06201L2.562 2.56201L2.062 9.13301L9.897 16.968L16.967 9.89801L9.133 2.06201ZM5.654 7.65402C4.69984 7.65422 3.87841 6.98037 3.69208 6.04458C3.50575 5.10879 4.00641 4.17169 4.88787 3.80639C5.76933 3.44109 6.78609 3.74933 7.31633 4.54259C7.84656 5.33586 7.74259 6.39322 7.068 7.06801C6.69383 7.44433 6.18468 7.65534 5.654 7.65402Z" fill="#6C6A81"/>
                                                </svg>
                                                    <span>Promocode</span>
                                                </bdi>
                                            </li>
                                            <li onClick={() => {sidebar_change('discount') }} >
                                                <bdi className={urlName === 'discount' ? 'active' : ''}>
                                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 12L11 6M5.50003 6.5H5.51003M10.5 11.5H10.51M15 19V3C15 1.89543 14.1046 1 13 1H3C1.89543 1 1 1.89543 1 3V19L4.5 17L8 19L11.5 17L15 19ZM6 6.5C6 6.77614 5.77614 7 5.5 7C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6C5.77614 6 6 6.22386 6 6.5ZM11 11.5C11 11.7761 10.7761 12 10.5 12C10.2239 12 10 11.7761 10 11.5C10 11.2239 10.2239 11 10.5 11C10.7761 11 11 11.2239 11 11.5Z" stroke="#6C6A81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                    <span>Discount</span>
                                                </bdi>
                                            </li>          
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>    
                            </li>
                            <li>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className={urlName === 'finance' ? 'active' : ''}>
                                        <bdi  onClick={() => {sidebar_change('finance') }}>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15 16H17V9H15V16ZM7 16H9V11H7V16ZM11 16H13V6H11V16Z" fill="#6C6A81"/>
                                        </svg>
                                            <span>Finance</span>
                                        </bdi>
                                    </Accordion.Header>
                                        <Accordion.Body>
                                        <li onClick={() => {sidebar_change('sales') }} >
                                            <bdi className={urlName === 'sales' ? 'active' : ''}>
                                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 15V13M8 15V11M11 15V9M13 19H3C1.89543 19 1 18.1046 1 17V3C1 1.89543 1.89543 1 3 1H8.58579C8.851 1 9.10536 1.10536 9.29289 1.29289L14.7071 6.70711C14.8946 6.89464 15 7.149 15 7.41421V17C15 18.1046 14.1046 19 13 19Z" stroke="#6C6A81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                                <span>Sales</span>
                                            </bdi>
                                        </li>
                                        <li onClick={() => {sidebar_change('invoices') }} >
                                            <bdi className={urlName === 'invoices' ? 'active' : ''}>
                                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 10H11M5 14H11M13 19H3C1.89543 19 0.999998 18.1046 0.999998 17V3C0.999998 1.89543 1.89543 1 3 1H8.58579C8.851 1 9.10536 1.10536 9.29289 1.29289L14.7071 6.70711C14.8946 6.89464 15 7.149 15 7.41421V17C15 18.1046 14.1046 19 13 19Z" stroke="#6C6A81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                                <span>Invoices</span>
                                            </bdi>
                                        </li>
                                        <li onClick={() => {sidebar_change('settlements') }} >
                                            <bdi className={urlName === 'settlements' ? 'active' : ''}>
                                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.0833 9.99083L18.8467 7.43333L19.1583 4.05083L15.8492 3.29917L14.1167 0.375L11 1.71333L7.88333 0.375L6.15083 3.29917L2.84167 4.04167L3.15333 7.43333L0.916666 9.99083L3.15333 12.5483L2.84167 15.94L6.15083 16.6917L7.88333 19.625L11 18.2775L14.1167 19.6158L15.8492 16.6917L19.1583 15.94L18.8467 12.5575L21.0833 9.99083ZM17.4625 11.3475L16.9492 11.9433L17.0225 12.7225L17.1875 14.51L15.4458 14.9042L14.6758 15.0783L14.2725 15.7567L13.365 17.2967L11.7333 16.5908L11 16.2792L10.2758 16.5908L8.64417 17.2967L7.73667 15.7658L7.33333 15.0875L6.56333 14.9133L4.82167 14.5192L4.98667 12.7225L5.06 11.9433L4.54667 11.3475L3.36417 10L4.54667 8.64333L5.06 8.0475L4.9775 7.25917L4.8125 5.48083L6.55417 5.08667L7.32417 4.9125L7.7275 4.23417L8.635 2.69417L10.2667 3.4L11 3.71167L11.7242 3.4L13.3558 2.69417L14.2633 4.23417L14.6667 4.9125L15.4367 5.08667L17.1783 5.48083L17.0133 7.26833L16.94 8.0475L17.4533 8.64333L18.6358 9.99083L17.4625 11.3475Z" fill="#6C6A81"/>
                                                <path d="M9.24929 11.6044L7.12263 9.46852L5.76596 10.8344L9.24929 14.3269L15.9776 7.58019L14.621 6.21436L9.24929 11.6044Z" fill="#6C6A81"/>
                                            </svg>
                                                <span>Settlements</span>
                                            </bdi>
                                        </li>            
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>    
                            </li>
                            <li>
                                <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header className={urlName === 'reports' ? 'active' : ''}>
                                            <bdi >
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 9H3M17 9C18.1046 9 19 9.89543 19 11V17C19 18.1046 18.1046 19 17 19H3C1.89543 19 1 18.1046 1 17V11C1 9.89543 1.89543 9 3 9M17 9V7C17 5.89543 16.1046 5 15 5M3 9V7C3 5.89543 3.89543 5 5 5M5 5V3C5 1.89543 5.89543 1 7 1H13C14.1046 1 15 1.89543 15 3V5M5 5H15" stroke="#6C6A81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                                <span>Reports</span>
                                            </bdi>
                                        </Accordion.Header>
                                            <Accordion.Body>
                                            <li onClick={() => {sidebar_change('salesReport') }} >
                                                <bdi className={urlName === 'salesReport' ? 'active' : ''}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 1.05493C4.50005 1.55238 1 5.36745 1 10C1 14.9706 5.02944 19 10 19C14.6326 19 18.4476 15.5 18.9451 11H9V1.05493Z" stroke="#6C6A81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M18.4878 7H13V1.5123C15.5572 2.41613 17.5839 4.44285 18.4878 7Z" stroke="#6C6A81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                    <span>Sales Report</span>
                                                </bdi>
                                            </li>
                                            <li onClick={() => {sidebar_change('itemReport') }} >
                                                <bdi className={urlName === 'itemReport' ? 'active' : ''}>
                                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 12L11 6M5.50003 6.5H5.51003M10.5 11.5H10.51M15 19V3C15 1.89543 14.1046 1 13 1H3C1.89543 1 1 1.89543 1 3V19L4.5 17L8 19L11.5 17L15 19ZM6 6.5C6 6.77614 5.77614 7 5.5 7C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6C5.77614 6 6 6.22386 6 6.5ZM11 11.5C11 11.7761 10.7761 12 10.5 12C10.2239 12 10 11.7761 10 11.5C10 11.2239 10.2239 11 10.5 11C10.7761 11 11 11.2239 11 11.5Z" stroke="#6C6A81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                    <span>Item Report</span>
                                                </bdi>
                                            </li>          
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>    
                            </li>
                            <li onClick={() => {sidebar_change('reviews') }} >
                                <bdi className={urlName === 'reviews' ? 'active' : ''}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.17157 12.8284C8.73367 14.3905 11.2663 14.3905 12.8284 12.8284M13 8H12.99M7 8H6.99M1 10C1 14.9706 5.02944 19 10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10Z" stroke="#6C6A81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Reviews</span>
                                </bdi>
                            </li>
                            <li>
                                <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header className={urlName === 'settings' ? 'active' : ''}>
                                            <bdi >
                                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.6683 19.1671H7.33168C6.90096 19.1671 6.52828 18.8673 6.4361 18.4466L6.06302 16.7196C5.56531 16.5015 5.09339 16.2288 4.65593 15.9065L2.97202 16.4427C2.56135 16.5737 2.11492 16.4009 1.89952 16.0275L0.227516 13.1391C0.0144711 12.7655 0.0878692 12.2944 0.404432 12.0033L1.71068 10.8117C1.65128 10.2718 1.65128 9.72714 1.71068 9.18732L0.404432 7.99841C0.0874029 7.70725 0.0139757 7.23548 0.227516 6.86174L1.89585 3.97149C2.11125 3.59813 2.55768 3.42528 2.96835 3.55624L4.65227 4.09249C4.87599 3.92672 5.10889 3.7737 5.34985 3.63416C5.58116 3.50371 5.81922 3.3856 6.06302 3.28032L6.43702 1.55516C6.52875 1.13438 6.90102 0.834193 7.33168 0.83374H10.6683C11.099 0.834193 11.4713 1.13438 11.563 1.55516L11.9407 3.28124C12.1981 3.39446 12.4487 3.5224 12.6914 3.66441C12.9178 3.79532 13.1366 3.93885 13.3469 4.09432L15.0317 3.55807C15.4421 3.4276 15.888 3.60039 16.1033 3.97332L17.7716 6.86357C17.9846 7.2371 17.9112 7.70829 17.5947 7.99932L16.2884 9.19099C16.3478 9.73081 16.3478 10.2755 16.2884 10.8153L17.5947 12.007C17.9112 12.298 17.9846 12.7692 17.7716 13.1427L16.1033 16.033C15.888 16.4059 15.4421 16.5787 15.0317 16.4482L13.3469 15.912C13.1337 16.069 12.9121 16.2144 12.6832 16.3474C12.4429 16.4867 12.195 16.6124 11.9407 16.7242L11.563 18.4466C11.4709 18.867 11.0987 19.1667 10.6683 19.1671ZM4.98502 13.877L5.73668 14.427C5.90613 14.5518 6.08274 14.6666 6.2656 14.7707C6.43766 14.8704 6.61482 14.961 6.79635 15.0421L7.6516 15.417L8.07052 17.3337H9.93135L10.3503 15.4161L11.2055 15.0412C11.5789 14.8765 11.9333 14.6718 12.2624 14.4307L13.015 13.8807L14.8859 14.4765L15.8164 12.865L14.3653 11.5422L14.4679 10.6146C14.513 10.2088 14.513 9.79933 14.4679 9.39358L14.3653 8.46591L15.8173 7.14041L14.8859 5.52799L13.015 6.12382L12.2624 5.57382C11.9332 5.33156 11.5788 5.12535 11.2055 4.95874L10.3503 4.58382L9.93135 2.66707H8.07052L7.64977 4.58474L6.79635 4.95874C6.61467 5.03853 6.43749 5.12819 6.2656 5.22732C6.08386 5.33121 5.90818 5.44537 5.73943 5.56924L4.98685 6.11924L3.11685 5.52341L2.1846 7.14041L3.63568 8.46132L3.53302 9.38991C3.48792 9.79566 3.48792 10.2052 3.53302 10.6109L3.63568 11.5386L2.1846 12.8613L3.11502 14.4728L4.98502 13.877ZM8.99635 13.6671C6.97131 13.6671 5.32968 12.0255 5.32968 10.0004C5.32968 7.97536 6.97131 6.33374 8.99635 6.33374C11.0214 6.33374 12.663 7.97536 12.663 10.0004C12.6605 12.0244 11.0203 13.6646 8.99635 13.6671ZM8.99635 8.16707C7.9948 8.16809 7.17941 8.97268 7.16506 9.97414C7.15071 10.9756 7.9427 11.8032 8.94381 11.8329C9.94493 11.8626 10.7846 11.0834 10.8297 10.0829V10.4496V10.0004C10.8297 8.98789 10.0089 8.16707 8.99635 8.16707Z" fill="#6C6A81"/>
                                                </svg>
                                                <span>Settings</span>
                                            </bdi>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                            <li onClick={() => {sidebar_change('account') }} >
                                                <bdi className={urlName === 'account' ? 'active' : ''}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 12.2554C16.2207 13.3805 13.1827 14 10 14C6.8173 14 3.7793 13.3805 1 12.2554M14 5V3C14 1.89543 13.1046 1 12 1H8C6.89543 1 6 1.89543 6 3V5M10 11H10.01M3 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19Z" stroke="#6C6A81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                <span>Account</span>
                                                </bdi>
                                            </li>
                                            <li onClick={() => {sidebar_change('oprationtime') }} >
                                                <bdi className={urlName === 'oprationtime' ? 'active' : ''}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 6V10L13 13M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#6C6A81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                    <span>Opration Time</span>
                                                </bdi>
                                            </li>          
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>    
                            </li>
                        </ul>
                        {/* <div className='log-fix-btm'>
                            <button className='border-0 bg-transparent'>
                            <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 18H2C0.89543 18 0 17.1046 0 16V12H2V16H16V2H2V6H0V2C0 0.89543 0.89543 0 2 0H16C17.1046 0 18 0.89543 18 2V16C18 17.1046 17.1046 18 16 18ZM8 13V10H0V8H8V5L13 9L8 13Z" fill="#232222"/>
                            </svg>
                            <span>Log Out</span>
                            </button>
                        </div> */}
                    </div>
                </div>
            </React.Fragment>
        )

}


