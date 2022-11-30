import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { dateFormater } from "helpers/DateHelpers";

export const OrderDateColumnFormatter = ({ date_order }) => (
  <MDBox lineHeight={1} textAlign="left">
    <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
      {dateFormater(date_order)}
    </MDTypography>
    {/* <MDTypography variant="caption">{description}</MDTypography> */}
  </MDBox>
);
