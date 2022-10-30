import MDTypography from "components/MDTypography";
import React from "react";

export const AddressColumnFormatter = ({ address }) => {
  return (
    <MDTypography display="block" variant="caption" color="text" fontWeight="light">
      {address}
    </MDTypography>
  );
}
