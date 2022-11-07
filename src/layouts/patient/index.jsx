import Footer from "components/extend/Footer";
import DashboardLayout from "components/extend/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/extend/Navbars/DashboardNavbar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPatient from "./components/DetailPatient/Index";
import ListTablePatient from "./components/ListTablePatient";
import { PatientUIProvider } from "./patientUIContext";

export default function Patient() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <PatientUIProvider>
        <Routes>
          <Route path="list-patient" element={<ListTablePatient />} />
          <Route path=":id" element={<DetailPatient />} />
        </Routes>
      </PatientUIProvider>
      <Footer />
    </DashboardLayout>
  );
}
