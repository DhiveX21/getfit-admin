import React, { useMemo } from "react";
import DataTable from "components/extend/Tables/DataTable";
import notificationTableData from "./data/MainTableData";
import { useSelector } from "react-redux";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import { useMainUIContext } from "layouts/notification/MainUIContext";
import { Card, Grid } from "@mui/material";

export default function ListTableNotification() {
  const { currentState } = useSelector((state) => ({ currentState: state.notification }));
  const { totalCount, entities } = currentState;

  const mainUIContext = useMainUIContext();
  const mainUIProps = useMemo(() => {
    return {
      queryParams: mainUIContext.queryParams,
      setQueryParams: mainUIContext.setQueryParams,
    };
  }, [mainUIContext]);

  const { columns, rows } = notificationTableData(entities);

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
                  List Notification
                </MDTypography>
              </MDBox>
              <Link to="/notification/create">
                <MDTypography variant="caption" color="text" fontWeight="medium">
                  <MDButton variant="gradient" color="success">
                    Create New
                  </MDButton>
                </MDTypography>
              </Link>
            </MDBox>
            <MDBox p={2}>
              <DataTable
                totalCount={totalCount}
                params={mainUIProps.queryParams}
                setParams={mainUIProps.setQueryParams}
                table={{ columns, rows }}
              />
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}
