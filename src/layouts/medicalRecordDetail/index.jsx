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

function MedicalRecordDetail() {
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
                  Medical Record
                </MDTypography>
                <div className="w-full flex flex-col justify-center gap-[20px] px-[20px] border-blue-500 border-solid border-l-4">
                  <div className="w-full flex flex-col gap-[5px] py-[20px]">
                    <MDTypography color="gray" fontSize="14px" fontWeight="bold">
                      Medical Complaint
                    </MDTypography>
                    <div className="w-full bg-gray-100 p-2 rounded-xl">
                      <MDTypography color="gray" fontSize="14px" fontWeight="normal">
                        Saya mengalami Neckpain yang cukup mengganggu, terutama pada saat malam
                        hari.
                      </MDTypography>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-[5px] py-[20px]">
                    <MDTypography color="gray" fontSize="14px" fontWeight="bold">
                      RPS
                    </MDTypography>
                    <div className="w-full bg-gray-100 p-2 rounded-xl">
                      <MDTypography color="gray" fontSize="14px" fontWeight="normal">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quos iure ut
                        alias. Aspernatur, incidunt? Ad dignissimos natus exercitationem facere?
                      </MDTypography>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-[5px] py-[20px]">
                    <MDTypography color="gray" fontSize="14px" fontWeight="bold">
                      RPK
                    </MDTypography>
                    <div className="w-full bg-gray-100 p-2 rounded-xl">
                      <MDTypography color="gray" fontSize="14px" fontWeight="normal">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iure expedita
                        voluptas accusantium. Minus sint quo architecto illo saepe quaerat
                        dignissimos deserunt ea odio, tempore ipsum necessitatibus assumenda.
                        Possimus, ratione.
                      </MDTypography>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-[5px] py-[20px]">
                    <MDTypography color="gray" fontSize="14px" fontWeight="bold">
                      RPD
                    </MDTypography>
                    <div className="w-full bg-gray-100 p-2 rounded-xl">
                      <MDTypography color="gray" fontSize="14px" fontWeight="normal">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, quibusdam!
                      </MDTypography>
                    </div>
                  </div>
                  <div className="w-full flex justify-end gap-[5px] py-[20px]">
                    <div className="w-1/4">
                      <MDTypography color="gray" fontSize="14px" fontWeight="bold">
                        Writer
                      </MDTypography>
                      <MDTypography color="text" fontSize="13px" fontWeight="regular">
                        Rifa Rahmalia. S. Kes
                      </MDTypography>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full p-[20px] flex flex-col justify-center">
                <MDTypography color="gray" fontSize="20px" fontWeight="bold">
                  Action
                </MDTypography>
                <div className="w-full flex gap-[10px]">
                  <MDButton variant="gradient" color="warning">
                    Edit
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

export default MedicalRecordDetail;
