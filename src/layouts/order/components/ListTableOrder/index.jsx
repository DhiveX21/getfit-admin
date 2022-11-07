import React, { useEffect, useMemo } from "react";
import DataTable from "components/extend/Tables/DataTable";
import orderTableData from "./data/orderTableData";
import MDBox from "components/MDBox";
import { Card, Grid } from "@mui/material";
import MDTypography from "components/MDTypography";
import { useOrderUIContext } from "layouts/order/orderUIContext";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../orderAction";

export default function ListTableOrder() {
  // Order UI Context
  const orderUIContext = useOrderUIContext();
  const orderUIProps = useMemo(() => {
    return {
      queryParams: orderUIContext.queryParams,
      setQueryParams: orderUIContext.setQueryParams,
    };
  }, [orderUIContext]);

  // Get Redux
  const { currentState } = useSelector((state) => ({ currentState: state.order }));
  const { totalCount, entities, listLoading } = currentState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.datatable(orderUIProps.queryParams));
  }, [orderUIProps.queryParams]);

  const { columns, rows } = orderTableData(entities);
  
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
