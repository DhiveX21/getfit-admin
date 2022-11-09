import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

export const NameColumnFormatter = ({ image, name, phoneNumber }) => (
  <MDBox display="flex" alignItems="center" lineHeight={1}>
    <MDAvatar src={image} name={name} size="sm" />
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {name}
      </MDTypography>
      <MDTypography variant="caption">{phoneNumber}</MDTypography>
    </MDBox>
  </MDBox>
);
