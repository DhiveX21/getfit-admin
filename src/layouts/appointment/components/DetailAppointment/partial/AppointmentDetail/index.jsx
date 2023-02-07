import React from "react";
import PropTypes from "prop-types";
import MDTypography from "components/MDTypography";
import { formatDateRawToYMD, dateFormater } from "helpers/DateHelpers";

export default function AppointmentDetail({ appointment_date, appointment_time, physiotherapy, complaint }) {
  return (
    <div className="w-1/2 p-[20px]">
      <MDTypography fontSize="20px" fontWeight="bold">
        Appointment Detail
      </MDTypography>

      <div className=" flex gap-[10px] ">
        <MDTypography width="40%" color="text" fontSize="14px">
          Appointment Date
        </MDTypography>
        <MDTypography width="10%" color="text" fontSize="14px">
          :
        </MDTypography>
        <MDTypography width="50%" color="text" fontSize="14px">
          {dateFormater(formatDateRawToYMD(appointment_date))}
        </MDTypography>
      </div>
      <div className=" flex gap-[10px] ">
        <MDTypography width="40%" color="text" fontSize="14px">
          Appointment Hours
        </MDTypography>
        <MDTypography width="10%" color="text" fontSize="14px">
          :
        </MDTypography>
        <MDTypography width="50%" color="text" fontSize="14px">
          {appointment_time}
        </MDTypography>
      </div>
      <div className=" flex gap-[10px] ">
        <MDTypography width="40%" color="text" fontSize="14px">
          Physiotherapy
        </MDTypography>
        <MDTypography width="10%" color="text" fontSize="14px">
          :
        </MDTypography>
        <MDTypography width="50%" color="text" fontSize="14px">
          {physiotherapy}
        </MDTypography>
      </div>
      <div className=" flex gap-[10px] ">
        <MDTypography width="40%" color="text" fontSize="14px">
          Complaint Patient
        </MDTypography>
        <MDTypography width="10%" color="text" fontSize="14px">
          :
        </MDTypography>
        <MDTypography width="50%" color="text" fontSize="14px">
          {complaint}
        </MDTypography>
      </div>
    </div>
  );
}

AppointmentDetail.defaultProps = {
  appointment_date: "2022-08-11T00:00:00.000Z",
  appointment_time: "19.00",
  physiotherapy: "test",
  complaint: "Sakit",
};

AppointmentDetail.propTypes = {
  appointment_date: PropTypes.string,
  appointment_time: PropTypes.string,
  physiotherapy: PropTypes.string,
  complaint: PropTypes.string,
};
