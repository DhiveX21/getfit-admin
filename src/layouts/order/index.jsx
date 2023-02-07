/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import DashboardLayout from "components/extend/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/extend/Navbars/DashboardNavbar";
import Footer from "components/extend/Footer";
import { MainUIProvider } from "./MainUIContext";
import { Routes, Route } from "react-router-dom";
import ListTableOrder from "./components/ListTableOrder";
import OrderDetail from "./components/DetailOrder";

function Order() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MainUIProvider>
        <Routes>
          <Route path="list-order" element={<ListTableOrder />}/>
          <Route path=":id" element={<OrderDetail />}/>
        </Routes>
      </MainUIProvider>
      <Footer />
    </DashboardLayout>
  );
}

export default Order;
