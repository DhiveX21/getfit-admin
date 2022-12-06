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

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import DashboardLayout from "components/extend/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/extend/Navbars/DashboardNavbar";
import Footer from "components/extend/Footer";
import ListTableMedicalRecord from "./components/ListTableMedicalRecord";
import DetailMedicalRecord from "./components/DetailMedicalRecord";
import CreateMedicalRecord from "./components/CreateMedicalRecord";
import { Routes, Route } from "react-router-dom";
import { MedicalRecordUIProvider } from "./medicalRecordUIContext";

function MedicalRecord() {
  return (
    <DashboardLayout>
      <MedicalRecordUIProvider>
        <DashboardNavbar />
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <Routes>
                  <Route path="list-medical-record" element={<ListTableMedicalRecord />} />
                  <Route path="create" element={<CreateMedicalRecord />} />
                  <Route path=":id" element={<DetailMedicalRecord />} />
                </Routes>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <Footer />
      </MedicalRecordUIProvider>
    </DashboardLayout>
  );
}

export default MedicalRecord;
