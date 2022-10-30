import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import React from "react";
import { Link } from "react-router-dom";

export const ActionColumnFormatter = ({id}) => {
  return (
    <Link to={`/appointment/${id}`}>
      <MDTypography variant="caption" color="text" fontWeight="medium">
        <MDButton variant="gradient" color="info">
          Detail
        </MDButton>
      </MDTypography>
    </Link>
  );
}
