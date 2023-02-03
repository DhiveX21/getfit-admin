import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { dateFormater } from "helpers/DateHelpers";

export const BirthDateColumnFormatter = ({ birth_date, age }) => (
  <MDBox lineHeight={1} textAlign="left">
    <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
      {dateFormater(birth_date)}
    </MDTypography>
    <MDTypography variant="caption">{age}</MDTypography>
  </MDBox>
);
