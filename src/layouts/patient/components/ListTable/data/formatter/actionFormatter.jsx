import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import { Link } from "react-router-dom";

export const ActionColumnFormatter = ({ id }) => (
  <Link to={`/patient/${id}`}>
    <MDTypography variant="caption" color="text" fontWeight="medium">
      <MDButton variant="gradient" color="info">
        Detail
      </MDButton>
    </MDTypography>
  </Link>
);
