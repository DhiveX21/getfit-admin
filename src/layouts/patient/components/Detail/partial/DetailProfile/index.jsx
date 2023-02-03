import React from "react";
import { Card, CardContent } from "@mui/material";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import PropTypes from "prop-types";

export default function DetailProfile({
  title,
  address,
  fullName,
  phoneNumber,
  email,
  birth_date,
  age,
}) {
  return (
    <Card sx={{ boxShadow: "none" }}>
      <CardContent sx={{ p: 0 }}>
        <MDBox p={2}>
          <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            {title}
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
        <MDBox px="20px" py="5px" display="flex" flexDirection="column" gap="5px">
          <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
            Birth Date &nbsp;
          </MDTypography>
          <MDTypography variant="button" fontWeight="regular" color="text">
            {birth_date}
          </MDTypography>
        </MDBox>
        <MDBox px="20px" py="5px" display="flex" flexDirection="column" gap="5px">
          <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
            Age &nbsp;
          </MDTypography>
          <MDTypography variant="button" fontWeight="regular" color="text">
            {age}
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
      </CardContent>
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
  birth_date: "1997-06-12",
  age: "20",
};

// Typechecking props for the ProfileInfoCard
DetailProfile.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  fullName: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string,
  birth_date: PropTypes.string,
  age: PropTypes.number,
};
