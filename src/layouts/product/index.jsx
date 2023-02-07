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
import ListTableProduct from "./components/ListTableProduct";
import { Routes, Route } from "react-router-dom";
import { MainUIProvider } from "./MainUIContext";
import CreateProduct from "./components/CreateProduct";
import DetailProduct from "./components/DetailProduct";

function Product() {
  return (
    <DashboardLayout>
      <MainUIProvider>
        <DashboardNavbar />
        <Routes>
          <Route path="list-product" element={<ListTableProduct />} />
          <Route path="create" element={<CreateProduct />} />
          <Route path=":id" element={<DetailProduct />} />
        </Routes>
        <Footer />
      </MainUIProvider>
    </DashboardLayout>
  );
}

export default Product;
