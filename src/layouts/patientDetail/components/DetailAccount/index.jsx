import React from "react";
import { Card } from "@mui/material";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import PropTypes from "prop-types";
import MDBadge from "components/MDBadge";

export default function DetailAccount({ title, telePhysio, homeCare, inClinic, webinars }) {
  return (
    <Card sx={{ boxShadow: "none" }}>
      <MDBox p={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </MDTypography>
      </MDBox>
      <MDBox px="20px" py="5px" display="flex" alignItems="center" gap="5px">
        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
          TelePhysio &nbsp;
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="text">
          <MDBadge badgeContent={`${telePhysio}x`} container />
        </MDTypography>
      </MDBox>
      <MDBox px="20px" py="5px" display="flex" alignItems="center" gap="5px">
        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
          HomeCare &nbsp;
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="text">
          <MDBadge badgeContent={`${homeCare}x`} container />
        </MDTypography>
      </MDBox>
      <MDBox px="20px" py="5px" display="flex" alignItems="center" gap="5px">
        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
          inClinic &nbsp;
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="text">
          <MDBadge badgeContent={`${inClinic}x`} container />
        </MDTypography>
      </MDBox>
      <MDBox px="20px" py="5px" display="flex" alignItems="center" gap="5px">
        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
          Webinars &nbsp;
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="text">
          <MDBadge badgeContent={`${webinars}x`} container />
        </MDTypography>
      </MDBox>
    </Card>
  );
}
// Setting default props for the ProfileInfoCard
DetailAccount.defaultProps = {
  title: "Detail Profile",
  telePhysio: 1,
  homeCare: 2,
  inClinic: 3,
  webinars: 3,
};

// Typechecking props for the ProfileInfoCard
DetailAccount.propTypes = {
  title: PropTypes.number,
  telePhysio: PropTypes.number,
  homeCare: PropTypes.number,
  inClinic: PropTypes.number,
  webinars: PropTypes.number,
};
