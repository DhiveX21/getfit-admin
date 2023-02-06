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
import ListTableVideo from "./components/ListTableVideo";
import { Routes, Route } from "react-router-dom";
import { MainUIProvider } from "./MainUIContext";
import CreateVideo from "./components/CreateVideo";
import DetailVideo from "./components/DetailVideo";

function Video() {
  return (
    <DashboardLayout>
      <MainUIProvider>
        <DashboardNavbar />
        <Routes>
          <Route path="list-video" element={<ListTableVideo />} />
          <Route path="create" element={<CreateVideo />} />
          <Route path=":id" element={<DetailVideo />} />
        </Routes>
        <Footer />
      </MainUIProvider>
    </DashboardLayout>
  );
}

export default Video;
