import React, { useMemo } from "react";
import DataTable from "components/extend/Tables/DataTable";
import MainTableData from "./data/MainTableData";
import MDBox from "components/MDBox";
import { Card, Grid } from "@mui/material";
import MDTypography from "components/MDTypography";
import { useMainUIContext } from "layouts/order/MainUIContext";
import { useSelector } from "react-redux";

export default function ListTableOrder() {
  // Main UI Context
  const orderUIContext = useMainUIContext();
  const orderUIProps = useMemo(() => {
    return {
      queryParams: orderUIContext.queryParams,
      setQueryParams: orderUIContext.setQueryParams,
    };
  }, [orderUIContext]);

  // Get Redux
  const { currentState } = useSelector((state) => ({ currentState: state.order }));
  const { totalCount, entities } = currentState;
  const { columns, rows } = MainTableData(entities);
  
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
                Order Table
              </MDTypography>
            </MDBox>
            <MDBox p={2}>
              <DataTable
                table={{ columns, rows }}
                totalCount={totalCount}
                params={orderUIProps.queryParams}
                setParams={orderUIProps.setQueryParams}
              />
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}
