import {Routes, Route} from "react-router-dom";
import {CustomerPg, DashboardPg, ErrorPg, MessagePg, OrderPg, OverviewPg, ProductPg, SettingPg} from "../pages/index"


const Router = () => {
 return(
    <Routes>
        <Route path="/" element={<DashboardPg/>} />
        <Route path="/dashboard" element={<DashboardPg/>} />
        <Route path="/orders" element={<OrderPg/>} />
        <Route path="/products" element={<ProductPg/>} />
        <Route path="/overview" element={<OverviewPg/>} />
        <Route path="/customers" element={<CustomerPg/>} />
        <Route path="/message" element={<MessagePg/>} />
        <Route path="/settings" element={<SettingPg/>} />
        <Route path="*" element={<ErrorPg/>} />
    </Routes>)
}

export default Router