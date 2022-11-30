import { Icon } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export const NameColumnFormatter = ({ image, name, email }) => (
  <MDBox display="flex" alignItems="center" lineHeight={1}>
    <Icon fontSize="medium">account_circle</Icon>
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {name}
      </MDTypography>
      <MDTypography variant="caption">{email}</MDTypography>
    </MDBox>
  </MDBox>
);
