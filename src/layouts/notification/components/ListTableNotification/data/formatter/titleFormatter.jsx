import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export const TitleColumnFormatter = ({ title }) => (
  <MDBox
    display="flex"
    alignItems="center"
    className="max-w-[150px] overflow-hidden"
    lineHeight={1}
  >
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {title}
      </MDTypography>
    </MDBox>
  </MDBox>
);
