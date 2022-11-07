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
import ListTableNotification from "./components/ListTableNotification";
import CreateNotification from "./components/CreateNotification";
import { Routes, Route } from "react-router-dom";
import { NotificationUIProvider } from "./notificationUIContext";

function Notification() {
  return (
    <DashboardLayout>
      <NotificationUIProvider>
        <DashboardNavbar />
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <Routes>
                  <Route path="list-notification" element={<ListTableNotification />} />
                  <Route path="create" element={<CreateNotification />} />
                  {/* <Route path=":id" element={<DetailMedicalRecord />} /> */}
                </Routes>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <Footer />
      </NotificationUIProvider>
    </DashboardLayout>
  );
}

export default Notification;
