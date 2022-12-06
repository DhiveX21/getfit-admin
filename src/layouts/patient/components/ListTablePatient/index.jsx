import React, { useEffect, useMemo } from "react";
import DataTable from "components/extend/Tables/DataTable";
import patientTableData from "./data/patientTableData";
import { usePatientUIContext } from "layouts/patient/patientUIContext";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../patientAction";
import MDBox from "components/MDBox";
import { Card, Grid } from "@mui/material";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { Link } from "react-router-dom";

export default function ListTablePatient() {
  // Patient UI Context
  const patientUIContext = usePatientUIContext();

  const patientUIProps = useMemo(() => {
    return {
      queryParams: patientUIContext.queryParams,
      setQueryParams: patientUIContext.setQueryParams,
    };
  }, [patientUIContext]);

  // Get Redux
  const { currentState } = useSelector((state) => ({ currentState: state.patient }));
  const { totalCount, entities } = currentState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.datatablePatient(patientUIProps.queryParams));
  }, [patientUIProps.queryParams]); // eslint-disable-line react-hooks/exhaustive-deps

  const { columns, rows } = patientTableData(entities);

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
              <MDTypography variant="h6" color="white">
                Patient Table
              </MDTypography>
              <Link to="/patient/create">
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
                params={patientUIProps.queryParams}
                setParams={patientUIProps.setQueryParams}
              />
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}
