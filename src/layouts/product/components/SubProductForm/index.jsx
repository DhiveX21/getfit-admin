import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

export default function SubProductForm({
  masterData,
  item,
  editMasterHandle,
  editQuotaHandle,
  editAmountHandle,
}) {
  let defaultMasterOption = { value: item.id, label: item.label };
  return (
    <>
      <MDBox display="flex-column" alignItems="center" className="z-10" gap="20px">
        <MDTypography variant="h6" color="text">
          Select Master Product
        </MDTypography>
        <Select
          placeholder="Select Base Product"
          className="basic-single text-[14px]"
          classNamePrefix="select"
          defaultValue={defaultMasterOption}
          options={masterData}
          onChange={(e) => editMasterHandle(e.value)}
        />
      </MDBox>
      <MDBox display="flex-column" alignItems="center" gap="20px">
        <MDTypography variant="h6" color="text">
          Input Quota
        </MDTypography>
        <MDInput
          type="number"
          fullWidth
          required
          label={item?.quota ? "" : "Quota"}
          value={item?.quota}
          onChange={(e) => editQuotaHandle(e.target.value)}
          multiline
          rows={1}
        />
      </MDBox>
      <MDBox display="flex-column" alignItems="center" gap="20px">
        <MDTypography variant="h6" color="text">
          Input Price
        </MDTypography>
        <MDInput
          type="number"
          fullWidth
          required
          label={item?.amount ? "" : "Price"}
          value={item?.amount}
          onChange={(e) => editAmountHandle(e.target.value)}
          multiline
          rows={1}
        />
      </MDBox>
    </>
  );
}

// Setting default props for the ProfileInfoCard
SubProductForm.defaultProps = {
  item: {
    id: 0,
    label: "",
  },
};

// Typechecking props for the ProfileInfoCard
SubProductForm.propTypes = {
  item: PropTypes.object,
};
