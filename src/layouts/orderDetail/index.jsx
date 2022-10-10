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
import { Card, SvgIcon } from "@mui/material";
import MDButton from "components/MDButton";
import BackButton from "components/extend/Button/BackButton";
import MDBadge from "components/MDBadge";

function OrderDetail() {
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
                  Order Detail
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
                    Product Detail
                  </MDTypography>

                  <div className=" flex gap-[10px] ">
                    <MDTypography width="40%" color="text" fontSize="14px">
                      Product Name
                    </MDTypography>
                    <MDTypography width="10%" color="text" fontSize="14px">
                      :
                    </MDTypography>
                    <MDTypography width="50%" color="text" fontSize="14px">
                      Paket Fisioterapi kemerdekaan
                    </MDTypography>
                  </div>
                  <div className=" flex gap-[10px] ">
                    <MDTypography width="40%" color="text" fontSize="14px">
                      Price
                    </MDTypography>
                    <MDTypography width="10%" color="text" fontSize="14px">
                      :
                    </MDTypography>
                    <MDTypography width="50%" color="text" fontSize="14px">
                      <b>Rp. 2.500.000</b>
                    </MDTypography>
                  </div>
                  <div className=" flex gap-[10px] ">
                    <MDTypography width="40%" color="text" fontSize="14px">
                      Description
                    </MDTypography>
                    <MDTypography width="10%" color="text" fontSize="14px">
                      :
                    </MDTypography>
                    <MDTypography width="50%" color="text" fontSize="14px">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, animi.
                    </MDTypography>
                  </div>
                  <div className=" flex flex-col gap-[10px] ">
                    <MDTypography color="text" fontSize="16px" fontWeight="bold">
                      Fasilitas
                    </MDTypography>
                    <div className=" flex flex-wrap gap-[10px] ">
                      <MDTypography display="flex" color="text" fontSize="14px">
                        TelePhysio
                        <MDBadge badgeContent="1X" color="success" variant="gradient" size="sm" />
                      </MDTypography>
                      <MDTypography display="flex" color="text" fontSize="14px">
                        In Clinic
                        <MDBadge badgeContent="2X" color="success" variant="gradient" size="sm" />
                      </MDTypography>
                      <MDTypography display="flex" color="text" fontSize="14px">
                        Homecare
                        <MDBadge badgeContent="4X" color="success" variant="gradient" size="sm" />
                      </MDTypography>
                      <MDTypography display="flex" color="text" fontSize="14px">
                        Webinars
                        <MDBadge badgeContent="2X" color="success" variant="gradient" size="sm" />
                      </MDTypography>
                      <MDTypography display="flex" color="text" fontSize="14px">
                        Medical Tools
                        <MDBadge badgeContent="3X" color="success" variant="gradient" size="sm" />
                      </MDTypography>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full p-[20px] flex flex-col justify-center">
                <MDTypography color="gray" fontSize="20px" fontWeight="bold">
                  Progress Status
                </MDTypography>
                <div className="w-full flex gap-[10px] items-center">
                  <div className="w-full min-h-[100px] bg-green-500 rounded-xl p-[10px]">
                    <MDTypography width="60%" color="white" fontSize="14px">
                      Ordered via Websites.
                    </MDTypography>
                  </div>
                  <SvgIcon color="primary">
                    <path
                      fill="currentColor"
                      d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z"
                    />
                  </SvgIcon>
                  <div className="w-full min-h-[100px] bg-green-500 rounded-xl p-[10px]">
                    <MDTypography width="60%" color="white" fontSize="14px">
                      Generate VA Number.
                    </MDTypography>
                  </div>
                  <SvgIcon color="primary">
                    <path
                      fill="currentColor"
                      d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z"
                    />
                  </SvgIcon>
                  <div className="w-full min-h-[100px] bg-blue-500 rounded-xl p-[10px] animate-pulse">
                    <MDTypography width="60%" color="white" fontSize="14px">
                      Waiting for Payment
                    </MDTypography>
                  </div>
                  <SvgIcon color="primary">
                    <path
                      fill="currentColor"
                      d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z"
                    />
                  </SvgIcon>
                  <div className="w-full min-h-[100px] bg-gray-500 rounded-xl p-[10px]">
                    <MDTypography width="60%" color="white" fontSize="14px">
                      Settlement
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
                    Set To Paid
                  </MDButton>
                  <MDButton variant="gradient" color="primary">
                    Cancel Transaction
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

export default OrderDetail;
