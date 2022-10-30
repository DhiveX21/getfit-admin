import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export const StatusColumnFormatter = ({ status, homeCare, inClinic, teleFisio, webinars, tools }) => (
  <MDBox lineHeight={1} textAlign="left">
    <MDBox width="100%" display="flex" mb="10px" justifyContent="center">
      {status}
    </MDBox>
    <MDBox display="flex" gap="22px">
      <MDBox ml={-1} textAlign="center">
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          HomeCare
        </MDTypography>
        <MDTypography variant="caption">{homeCare}</MDTypography>
      </MDBox>
      <MDBox ml={-1} textAlign="center">
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          InClinic
        </MDTypography>
        <MDTypography variant="caption">{inClinic}</MDTypography>
      </MDBox>
      <MDBox ml={-1} textAlign="center">
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          TeleFisio
        </MDTypography>
        <MDTypography variant="caption">{teleFisio}</MDTypography>
      </MDBox>
      <MDBox ml={-1} textAlign="center">
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          Webinars
        </MDTypography>
        <MDTypography variant="caption">{webinars}</MDTypography>
      </MDBox>
      <MDBox ml={-1} textAlign="center">
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          InClinic
        </MDTypography>
        <MDTypography variant="caption">{tools}</MDTypography>
      </MDBox>
    </MDBox>
  </MDBox>
);
