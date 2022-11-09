import React, { useEffect, useMemo } from "react";
import DataTable from "components/extend/Tables/DataTable";
import notificationTableData from "./data/notificationTableData";
import { dataTableNotification } from "layouts/notification/notificationAction";
import { useDispatch, useSelector } from "react-redux";
import { useNotificationUIContext } from "layouts/notification/notificationUIContext";
import MDAvatar from "components/MDAvatar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";

export default function ListTableNotification() {
  const { currentState } = useSelector((state) => ({ currentState: state.notification }));
  const { entities } = currentState;
  const dispatch = useDispatch();
  const notificationUIContext = useNotificationUIContext();
  const notificationUIProps = useMemo(() => {
    return {
      queryParams: notificationUIContext.queryParams,
      setQueryParams: notificationUIContext.setQueryParams,
    };
  }, [notificationUIContext]);

  useEffect(() => {
    dispatch(dataTableNotification(notificationUIProps.queryParams));
  }, [notificationUIProps.queryParams]);

  const { columns, rows } = notificationTableData(entities);

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
          Notification
        </MDTypography>
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
          params={notificationUIProps.queryParams}
          setParams={notificationUIProps.setQueryParams}
          table={{ columns, rows }}
        />
      </MDBox>
    </>
  );
}
