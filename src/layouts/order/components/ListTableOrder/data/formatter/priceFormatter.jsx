import MDTypography from "components/MDTypography";
import { PriceFormat } from "helpers/PriceHelpers";

export const PriceColumnFormatter = ({ price }) => (
  <MDTypography variant="caption" color="info" fontWeight="medium">
    Rp. {PriceFormat(price)}
  </MDTypography>
);
