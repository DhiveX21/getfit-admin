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
import ListTableVideo from "./components/ListTableVideo";
import CreateVideo from "./components/CreateVideo";

import { Routes, Route } from "react-router-dom";
import { VideoUIProvider } from "./videoUIContext";
import DetailVideo from "./components/DetailVideo";

function Video() {
  return (
    <DashboardLayout>
      <VideoUIProvider>
        <DashboardNavbar />
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <Routes>
                  <Route path="list-video" element={<ListTableVideo />} />
                  <Route path="create" element={<CreateVideo />} />
                  <Route path=":id" element={<DetailVideo />} />
                </Routes>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <Footer />
      </VideoUIProvider>
    </DashboardLayout>
  );
}

export default Video;
