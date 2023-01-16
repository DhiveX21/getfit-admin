import MDTypography from "components/MDTypography";
import React from "react";
import MDBadge from "components/MDBadge";
import { Card } from "@mui/material";
import MDBox from "components/MDBox";

export default function ProductProfile({ product }) {
  return (
    <Card sx={{ boxShadow: "none" }}>
      <MDBox p={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Detail Product
        </MDTypography>
      </MDBox>
      <MDBox px="20px" py="5px" display="flex" flexDirection="column" gap="5px">
        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
          Product Code &nbsp;
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="text">
          {product?.code}
        </MDTypography>
      </MDBox>
      <MDBox px="20px" py="5px" display="flex" flexDirection="column" gap="5px">
        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
          Product Name &nbsp;
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="text">
          {product?.name}
        </MDTypography>
      </MDBox>
      <MDBox px="20px" py="5px" display="flex" flexDirection="column" gap="5px">
        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
          Product Quota &nbsp;
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="text">
          {product?.quota}
        </MDTypography>
      </MDBox>
      <MDBox px="20px" py="5px" display="flex" flexDirection="column" gap="5px">
        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
          Product Amount &nbsp;
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="text">
          {product?.amount}
        </MDTypography>
      </MDBox>
      <MDBox px="20px" py="5px" display="flex" flexDirection="column" gap="5px">
        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
          Product Price Paid &nbsp;
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="text">
          {product?.price_paid}
        </MDTypography>
      </MDBox>
      <MDBox px="20px" py="5px" display="flex" flexDirection="column" gap="5px">
        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
          Product Description &nbsp;
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="text">
          {product?.description}
        </MDTypography>
      </MDBox>
      <MDBox px="20px" py="5px" display="flex" flexDirection="column" gap="5px">
        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
          Product Status &nbsp;
        </MDTypography>
        {product?.status ? (
          <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />
        ) : (
          <MDBadge badgeContent="inactive" color="error" variant="gradient" size="sm" />
        )}
      </MDBox>
    </Card>
  );
}
