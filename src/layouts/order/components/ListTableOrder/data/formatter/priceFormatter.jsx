import MDTypography from "components/MDTypography";

export const PriceColumnFormatter = ({ price }) => (
  <MDTypography variant="caption" color="info" fontWeight="medium">
    {price}
  </MDTypography>
);
