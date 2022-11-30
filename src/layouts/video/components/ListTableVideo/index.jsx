import React, { useEffect, useMemo } from "react";
import DataTable from "components/extend/Tables/DataTable";
import videoTableData from "./data/videoTableData";
import { dataTableVideo } from "layouts/video/videoAction";
import { useDispatch, useSelector } from "react-redux";
import { useVideoUIContext } from "layouts/video/videoUIContext";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";

export default function ListTableVideo() {
  const { currentState } = useSelector((state) => ({ currentState: state.exercise.video }));
  const { totalCount, entities } = currentState;
  const dispatch = useDispatch();
  const videoUIContext = useVideoUIContext();
  const videoUIProps = useMemo(() => {
    return {
      queryParams: videoUIContext.queryParams,
      setQueryParams: videoUIContext.setQueryParams,
    };
  }, [videoUIContext]);

  useEffect(() => {
    dispatch(dataTableVideo(videoUIProps.queryParams));
  }, [videoUIProps.queryParams]); // eslint-disable-line react-hooks/exhaustive-deps

  const { columns, rows } = videoTableData(entities);

  return (
    <>
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
          Medical Record
        </MDTypography>
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
          params={videoUIProps.queryParams}
          totalCount={totalCount}
          setParams={videoUIProps.setQueryParams}
          table={{ columns, rows }}
        />
      </MDBox>
    </>
  );
}
