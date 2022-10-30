import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export const OrderDateColumnFormatter = ({ title, description }) => (
  <MDBox lineHeight={1} textAlign="left">
    <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
      {title}
    </MDTypography>
    <MDTypography variant="caption">{description}</MDTypography>
  </MDBox>
);
