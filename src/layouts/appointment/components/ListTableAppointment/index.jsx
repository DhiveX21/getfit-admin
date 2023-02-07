import React, { useMemo } from "react";
import DataTable from "components/extend/Tables/DataTable";
import appointmentTableData from "./data/appointmentTableData";
import MDBox from "components/MDBox";
import { Card, Grid } from "@mui/material";
import MDTypography from "components/MDTypography";
import { useMainUIContext } from "layouts/appointment/MainUIContext";
import { useSelector } from "react-redux";
import BackButton from "components/extend/Button/BackButton";
import MDButton from "components/MDButton";
import { Link } from "react-router-dom";

export default function ListTable() {
  // Main UI Context
  const mainUIContext = useMainUIContext();
  const mainUIProps = useMemo(() => {
    return {
      queryParams: mainUIContext.queryParams,
      setQueryParams: mainUIContext.setQueryParams,
    };
  }, [mainUIContext]);

  // Get Redux
  const { currentState } = useSelector((state) => ({ currentState: state.appointment }));
  const { totalCount, entities } = currentState;

  const { columns, rows } = appointmentTableData(entities);

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
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <MDBox display="flex" alignItems="center" gap="20px">
                <MDTypography variant="h6" color="white">
                  List Appointment
                </MDTypography>
              </MDBox>
              <Link to="/appointment/create">
                <MDTypography variant="caption" color="text" fontWeight="medium">
                  <MDButton variant="gradient" color="success">
                    Create New
                  </MDButton>
                </MDTypography>
              </Link>
            </MDBox>

            <MDBox p={2}>
              <DataTable
                table={{ columns, rows }}
                totalCount={totalCount}
                params={mainUIProps.queryParams}
                setParams={mainUIProps.setQueryParams}
              />
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}
