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
import ListTable from "./components/ListTable";
import MainCreate from "./components/Create";
import { Routes, Route } from "react-router-dom";
import { MainUIProvider } from "./MainUIContext";
import MainDetail from "./components/Detail";

function Therapist() {
  return (
    <DashboardLayout>
      <MainUIProvider>
        <DashboardNavbar />
        <Routes>
          <Route path="list-therapist" element={<ListTable />} />
          <Route path="create" element={<MainCreate />} />
          <Route path=":id" element={<MainDetail />} />
        </Routes>
        <Footer />
      </MainUIProvider>
    </DashboardLayout>
  );
}

export default Therapist;
