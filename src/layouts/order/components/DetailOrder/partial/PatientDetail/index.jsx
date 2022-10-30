import React from "react";
import PropTypes from 'prop-types'
import MDTypography from "components/MDTypography";

export const PatientDetail = ({name, address, birth_date})  => {
  return (
    <div className="w-1/2 p-[20px]">
      <MDTypography fontSize="20px" fontWeight="bold">
        Patient Detail
      </MDTypography>
      <div className=" flex gap-[10px] ">
        <MDTypography width="40%" color="text" fontSize="14px">
          Patient Name
        </MDTypography>
        <MDTypography width="10%" color="text" fontSize="14px">
          :
        </MDTypography>
        <MDTypography width="50%" color="text" fontSize="14px">
          {name}
        </MDTypography>
      </div>
      <div className=" flex gap-[10px] ">
        <MDTypography width="40%" color="text" fontSize="14px">
          Patient Address
        </MDTypography>
        <MDTypography width="10%" color="text" fontSize="14px">
          :
        </MDTypography>
        <MDTypography width="50%" color="text" fontSize="14px">
          {address}
        </MDTypography>
      </div>
      <div className=" flex gap-[10px] ">
        <MDTypography width="40%" color="text" fontSize="14px">
          Birthdate
        </MDTypography>
        <MDTypography width="10%" color="text" fontSize="14px">
          :
        </MDTypography>
        <MDTypography width="50%" color="text" fontSize="14px">
          {birth_date}
        </MDTypography>
      </div>
    </div>
  );
}

PatientDetail.defaultProps = {
    name: "name",
    address: "Jl. Test",
    birth_date: ""
}

PatientDetail.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string,
    birth_date: PropTypes.string
}