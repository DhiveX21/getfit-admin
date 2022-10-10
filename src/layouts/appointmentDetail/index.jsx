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

// @mui material components
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "components/extend/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/extend/Navbars/DashboardNavbar";
import Footer from "components/extend/Footer";
import { Card } from "@mui/material";
import MDButton from "components/MDButton";
import BackButton from "components/extend/Button/BackButton";

function AppointmentDetail() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                display="flex"
                gap="20px"
                alignItems="center"
              >
                <BackButton to="/medical-record" />
                <MDTypography variant="h6" color="white">
                  Appointment Detail
                </MDTypography>
              </MDBox>

              <div className="flex">
                <div className="w-1/2 p-[20px]">
                  <MDTypography color="gray" fontSize="20px" fontWeight="bold">
                    Pattient Detail
                  </MDTypography>
                  <div className=" flex gap-[10px] ">
                    <MDTypography width="40%" color="text" fontSize="14px">
                      Patient Name
                    </MDTypography>
                    <MDTypography width="10%" color="text" fontSize="14px">
                      :
                    </MDTypography>
                    <MDTypography width="50%" color="text" fontSize="14px">
                      Muhammad Ardhiansyah
                    </MDTypography>
                  </div>
                  <div className=" flex gap-[10px] ">
                    <MDTypography width="40%" color="text" fontSize="14px">
                      Patient Address
                    </MDTypography>
                    <MDTypography width="10%" color="text" fontSize="14px">
                      :
                    </MDTypography>
                    <MDTypography width="50%" color="text" fontSize="14px">
                      Link Harum manis RT.04/02 Kel.Cirimekar, Kec.Cibinong, Kab.Bogor
                    </MDTypography>
                  </div>
                  <div className=" flex gap-[10px] ">
                    <MDTypography width="40%" color="text" fontSize="14px">
                      Birthdate
                    </MDTypography>
                    <MDTypography width="10%" color="text" fontSize="14px">
                      :
                    </MDTypography>
                    <MDTypography width="50%" color="text" fontSize="14px">
                      12 Juni 1997
                    </MDTypography>
                  </div>
                </div>

                <div className="w-1/2 p-[20px]">
                  <MDTypography color="gray" fontSize="20px" fontWeight="bold">
                    Appointment Detail
                  </MDTypography>

                  <div className=" flex gap-[10px] ">
                    <MDTypography width="40%" color="text" fontSize="14px">
                      Appointment Date
                    </MDTypography>
                    <MDTypography width="10%" color="text" fontSize="14px">
                      :
                    </MDTypography>
                    <MDTypography width="50%" color="text" fontSize="14px">
                      09 Oktober 2022
                    </MDTypography>
                  </div>
                  <div className=" flex gap-[10px] ">
                    <MDTypography width="40%" color="text" fontSize="14px">
                      Appointment Hours
                    </MDTypography>
                    <MDTypography width="10%" color="text" fontSize="14px">
                      :
                    </MDTypography>
                    <MDTypography width="50%" color="text" fontSize="14px">
                      15:00 WIB - 16:00 WIB
                    </MDTypography>
                  </div>
                  <div className=" flex gap-[10px] ">
                    <MDTypography width="40%" color="text" fontSize="14px">
                      Physiotherapy
                    </MDTypography>
                    <MDTypography width="10%" color="text" fontSize="14px">
                      :
                    </MDTypography>
                    <MDTypography width="50%" color="text" fontSize="14px">
                      Rifa Rahmalia. S. Kes
                    </MDTypography>
                  </div>
                </div>
              </div>

              <div className="w-full p-[20px] flex flex-col justify-center">
                <MDTypography color="gray" fontSize="20px" fontWeight="bold">
                  Progress Status
                </MDTypography>
                <div className="w-full flex gap-[10px]">
                  <div className="w-full bg-green-500 rounded-xl p-[10px]">
                    <MDTypography width="60%" color="white" fontSize="14px">
                      Looking For Physio
                    </MDTypography>
                  </div>
                  <div className="w-full bg-green-500 rounded-xl p-[10px]">
                    <MDTypography width="60%" color="white" fontSize="14px">
                      Physio Approval
                    </MDTypography>
                  </div>
                  <div className="w-full bg-green-500 rounded-xl p-[10px]">
                    <MDTypography width="60%" color="white" fontSize="14px">
                      Waiting the Appointment time
                    </MDTypography>
                  </div>
                  <div className="w-full bg-blue-500 animate-pulse rounded-xl p-[10px]">
                    <MDTypography width="60%" color="white" fontSize="14px">
                      In Treatment
                    </MDTypography>
                  </div>
                  <div className="w-full bg-gray-500 opacity-50 rounded-xl p-[10px]">
                    <MDTypography width="60%" color="white" fontSize="14px">
                      Finish Treatment
                    </MDTypography>
                  </div>
                  <div className="w-full bg-gray-500 opacity-50 rounded-xl p-[10px]">
                    <MDTypography width="60%" color="white" fontSize="14px">
                      Feedback
                    </MDTypography>
                  </div>
                </div>
              </div>

              <div className="w-full p-[20px] flex flex-col justify-center">
                <MDTypography color="gray" fontSize="20px" fontWeight="bold">
                  Action
                </MDTypography>
                <div className="w-full flex gap-[10px]">
                  <MDButton variant="gradient" color="info">
                    To Next Step
                  </MDButton>
                  <MDButton variant="gradient" color="primary">
                    Cancel
                  </MDButton>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AppointmentDetail;
