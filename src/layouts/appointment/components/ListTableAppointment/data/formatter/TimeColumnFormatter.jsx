import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import React from "react";

export const TimeColumnFormatter = ({ from, to }) => {
  return (
    <MDBox lineHeight={1} textAlign="center">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {`${new Date(from).getDate()} ${new Date(from).getMonth()} ${new Date(from).getFullYear()}`}
      </MDTypography>
      <MDBox display="flex" gap="20px" lineHeight={1} textAlign="left">
        <MDTypography variant="caption">{`${new Date(to).getHours()}:${new Date(
          to
        ).getMinutes()}:${new Date(to).getSeconds()}`}</MDTypography>
        <MDTypography variant="caption">{`${new Date(to).getHours()}:${new Date(
          to
        ).getMinutes()}:${new Date(to).getSeconds()}`}</MDTypography>
      </MDBox>
    </MDBox>
  );
};
