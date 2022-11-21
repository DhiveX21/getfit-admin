import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import React from "react";
import { getMonthName } from "helpers/DateHelpers";

export const TimeColumnFormatter = ({ from, to, time }) => {
  return (
    <MDBox lineHeight={1} textAlign="center">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {`${new Date(from).getDate()} ${getMonthName(new Date(from).getMonth())} ${new Date(
          from
        ).getFullYear()}`}
      </MDTypography>
      <MDBox display="flex" gap="20px" lineHeight={1} textAlign="left">
        <MDTypography variant="caption">{`${time} WIB`}</MDTypography>
      </MDBox>
    </MDBox>
  );
};
