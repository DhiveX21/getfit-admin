import React, { useMemo } from "react";
import DataTable from "components/extend/Tables/DataTable";
import videoTableData from "./data/videoTableData";
import { useSelector } from "react-redux";
import { useMainUIContext } from "layouts/video/MainUIContext";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import { Card, Grid } from "@mui/material";

export default function ListTableVideo() {
  const { currentState } = useSelector((state) => ({ currentState: state.exercise }));
  const { totalCount, entities } = currentState;

  const mainUIContext = useMainUIContext();
  const mainUIProps = useMemo(() => {
    return {
      queryParams: mainUIContext.queryParams,
      setQueryParams: mainUIContext.setQueryParams,
    };
  }, [mainUIContext]);

  const { columns, rows } = videoTableData(entities);

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
                  Video Lesson
                </MDTypography>
              </MDBox>
              <Link to="/video/create">
                <MDTypography variant="caption" color="text" fontWeight="medium">
                  <MDButton variant="gradient" color="success">
                    Create New
                  </MDButton>
                </MDTypography>
              </Link>
            </MDBox>
            <MDBox p={2}>
              <DataTable
                params={mainUIProps.queryParams}
                totalCount={totalCount}
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
