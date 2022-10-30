import React from "react";
import DataTable from "components/extend/Tables/DataTable";
import appointmentTableData from "./data/appointmentTableData";
import MDBox from "components/MDBox";
import { Card, Grid } from "@mui/material";
import MDTypography from "components/MDTypography";

export default function ListTableAppointment() {
  const { columns, rows } = appointmentTableData();
  return (
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
            >
              <MDTypography variant="h6" color="white">
                Appointment Table
              </MDTypography>
            </MDBox>
            <MDBox p={2}>
              <DataTable table={{ columns, rows }} />
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}
