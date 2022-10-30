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
import ListTableAppointment from "./components/ListTableAppointment";
import { Route, Routes } from "react-router-dom";
import { AppointmentUIProvider } from "./appointmentUIContext";
import DetailAppointment from "./components/DetailAppointment";

function Appointment() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <AppointmentUIProvider>
        <Routes>
          <Route path="list-appointment" element={<ListTableAppointment />} />
          <Route path=":id" element={<DetailAppointment />} />
        </Routes>
      </AppointmentUIProvider>
      <Footer />
    </DashboardLayout>
  );
}

export default Appointment;
