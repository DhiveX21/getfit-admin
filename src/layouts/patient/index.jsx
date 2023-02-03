import Footer from "components/extend/Footer";
import DashboardLayout from "components/extend/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/extend/Navbars/DashboardNavbar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPatient from "./components/Detail";
import MainListTable from "./components/ListTable";
import { MainUIProvider as PatientUIProvider } from "./MainUIContext";
import CreatePatient from "./components/CreatePatient";

export default function Patient() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <PatientUIProvider>
        <Routes>
          <Route path="list-patient" element={<MainListTable />} />
          <Route path=":id" element={<DetailPatient />} />
          <Route path="create" element={<CreatePatient />} />
        </Routes>
      </PatientUIProvider>
      <Footer />
    </DashboardLayout>
  );
}
