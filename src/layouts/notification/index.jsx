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
import ListTableNotification from "./components/ListTableNotification";
import CreateNotification from "./components/CreateNotification";
import { Routes, Route } from "react-router-dom";
import { MainUIProvider } from "./MainUIContext";
import DetailNotification from "./components/DetailNotification";

function Notification() {
  return (
    <DashboardLayout>
      <MainUIProvider>
        <DashboardNavbar />
        <Routes>
          <Route path="list-notification" element={<ListTableNotification />} />
          <Route path="create" element={<CreateNotification />} />
          <Route path=":id" element={<DetailNotification />} />
        </Routes>
        <Footer />
      </MainUIProvider>
    </DashboardLayout>
  );
}

export default Notification;
