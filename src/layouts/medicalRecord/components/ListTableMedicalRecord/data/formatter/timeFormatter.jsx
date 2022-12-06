import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { dateFormater } from "helpers/DateHelpers";

export const TimeColumnFormatter = ({ from, to }) => {
  if (from && to) {
    const dateSplice = from.split(" ");
    return (
      <MDBox lineHeight={1} textAlign="center">
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {dateFormater(dateSplice[0])}
        </MDTypography>
        <MDBox display="flex" gap="20px" lineHeight={1} textAlign="left">
          <MDTypography variant="caption">{`${dateSplice[1]} WIB`}</MDTypography>
        </MDBox>
      </MDBox>
    );
  }
};
