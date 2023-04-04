import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import ForgotPassword from "./pages/common/ForgotPassword";
import Login from './pages/common/Login';
import RestaurantDetails from "./pages/common/RestaurantDetails";
import RestaurantLocation from "./pages/common/RestaurantLocation";
import ResturantHours from "./pages/common/ResturantHours";
import AccountNumber from "./pages/common/AccountNumber";
import StoreImage from "./pages/common/StoreImage";
import ResetPassword from "./pages/common/ResetPassword";
import SignUp from "./pages/common/SignUp";
import Submit from "./pages/common/Submit";
import NewOrderDetails from "./pages/NewOrderDetails";
import AcceptedOrderDetails from "./pages/AcceptedOrderDetails";
import PreparingOrderDetails from "./pages/PreparingOrderDetails";
import Menu from "./pages/Menu";
import Category from './pages/Category';
import EditCategory from './pages/EditCategory';
import AddProduct from './pages/AddProduct';
import Promocode from './pages/Promocode';
import Discount from './pages/Discount';
import CreateDiscount from './pages/CreateDiscount';
import Finance from './pages/Finance';
import MonthlyReport from './pages/MonthlyReport';
import Sales from './pages/Sales';
import Invoices from "./pages/Invoices";
import InvoiceDetails from "./pages/InvoiceDetails";
import Settlements from "./pages/Settlements";
import SalesReport from "./pages/SalesReport";
import MonthlyReportPending from "./pages/MonthlyReportPending";
import ItemReport from "./pages/ItemReport";
import OrderIsReadyOrdersDetails from "./pages/OrderIsReadyOrdersDetails";
import InTransitOrdersDetails from "./pages/InTransitOrdersDetails";
import CompletedOrdersDetails from "./pages/CompletedOrdersDetails";
import CanceledOrdersDetails from "./pages/CanceledOrdersDetails";
import Account from "./pages/Account";
import Notification from './pages/Notification';
import Reviews from './pages/Reviews';

export default function RoutesMain() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<Login />} />
                        <Route path="/login" exact element={<Login />} />
                        <Route path="/forgotpassword" exact element={<ForgotPassword />} />
                        <Route path="/resetpassword" exact element={<ResetPassword />} />
                        <Route path="/signup" exact element={<SignUp />} />
                        <Route path="/submit" exact element={<Submit />} />
                        <Route path="/dashboard" exact element={<Dashboard />} />
                        <Route path="/orders" exact element={<Orders />} />
                        <Route path="/neworderdetails" exact element={<NewOrderDetails/>} />
                        <Route path="/acceptedorderdetails" exact element={<AcceptedOrderDetails/>} />
                        <Route path="/preparingorderdetails" exact element={<PreparingOrderDetails/>} />
                        <Route path="/menu" exact element={<Menu/>} />
                        <Route path="/category" exact element={<Category />} />
                        <Route path="/editcategory" exact element={<EditCategory />} />
                        <Route path="/addproduct" exact element={<AddProduct />} />
                        <Route path="/promocode" exact element={<Promocode />} />
                        <Route path="/discount" exact element={<Discount />} />
                        <Route path="/creatediscount" exact element={<CreateDiscount />} />
                        <Route path="/finance" exact element={<Finance />} />
                        <Route path="/monthlyreport" exact element={<MonthlyReport/>} />
                        <Route path="/sales" exact element={<Sales/>} />
                        <Route path="/invoices" exact element={<Invoices/>} />
                        <Route path="/invoicedetails" exact element={<InvoiceDetails/>} />
                        <Route path="/settlements" exact element={<Settlements/>} />
                        <Route path="/salesreport" exact element={<SalesReport/>} />
                        <Route path="/monthlyreportpending" exact element={<MonthlyReportPending/>} />
                        <Route path="/itemReport" exact element={<ItemReport/>} />
                        <Route path="/orderisreadyordersdetails" exact element={<OrderIsReadyOrdersDetails/>} />
                        <Route path="/intransitordersdetails" exact element={<InTransitOrdersDetails/>} />
                        <Route path="/completedordersdetails" exact element={<CompletedOrdersDetails/>} />
                        <Route path="/canceledordersdetails" exact element={<CanceledOrdersDetails/>} />
                        <Route path="/Account" exact element={<Account/>} />
                        <Route path="/notification" exact element={<Notification/>}  />
                        <Route path="/reviews" exact element={<Reviews/>}  />  
                        <Route path="/account" exact element={<Account/>} />      
                        <Route path="/restaurantdetails" exact element={<RestaurantDetails/>} />  
                        <Route path="/restaurantlocation" exact element={<RestaurantLocation/>} />  
                        <Route path="/resturanthours" exact element={<ResturantHours/>} />  
                        <Route path="/accountnumber" exact element={<AccountNumber/>} />  
                        <Route path="/storeimage" exact element={<StoreImage/>} />    
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
