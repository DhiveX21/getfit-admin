import React from "react";
import { Card } from "@mui/material";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import PropTypes from "prop-types";

export default function DetailProfile({ title, address, fullName, phoneNumber, email }) {
  return (
    <Card sx={{ boxShadow: "none" }}>
      <MDBox p={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </MDTypography>
      </MDBox>
      <MDBox px="20px" py="5px" display="flex" flexDirection="column" gap="5px">
        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
          Address &nbsp;
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="text">
          {address}
        </MDTypography>
      </MDBox>
      <MDBox px="20px" py="5px" display="flex" flexDirection="column" gap="5px">
        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
          Fullname &nbsp;
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="text">
          {fullName}
        </MDTypography>
      </MDBox>
      <MDBox px="20px" py="5px" display="flex" flexDirection="column" gap="5px">
        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
          Mobile &nbsp;
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="text">
          {phoneNumber}
        </MDTypography>
      </MDBox>
      <MDBox px="20px" py="5px" display="flex" flexDirection="column" gap="5px">
        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
          Email &nbsp;
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="text">
          {email}
        </MDTypography>
      </MDBox>
    </Card>
  );
}
// Setting default props for the ProfileInfoCard
DetailProfile.defaultProps = {
  title: "Detail Profile",
  address:
    "Jl. Johar No.1A, RT.5/RW.3, Gondangdia, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350",
  fullName: "Patient 1",
  phoneNumber: "0895619258715",
  email: "patient@gmail.com",
};

// Typechecking props for the ProfileInfoCard
DetailProfile.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  fullName: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string,
};
