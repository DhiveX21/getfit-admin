import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export const StatusColumnFormatter = ({ status, quotas }) => (
  <MDBox lineHeight={1} textAlign="left">
    <MDBox width="100%" display="flex" mb="10px" justifyContent="center">
      {status}
    </MDBox>
    <MDBox display="flex" gap="22px">
      {quotas?.map((item, index) => (
        <MDBox key={index} ml={-1} textAlign="center">
          <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
            {item.name}
          </MDTypography>
          <MDTypography variant="caption">{item.quota}</MDTypography>
        </MDBox>
      ))}
    </MDBox>
  </MDBox>
);
