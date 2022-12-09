import React, { useState } from "react";
import MDBox from "components/MDBox";
import BackButton from "components/extend/Button/BackButton";
import MDTypography from "components/MDTypography";
import AppointmentForm from "./appointmentForm";

export default function CreateAppointment() {
  return (
    <>
      <MDBox
        mx={2}
        mt={3}
        py={3}
        px={2}
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="info"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <MDBox display="flex" alignItems="center" gap="20px">
          <BackButton to="/appointment/list-appointment" />
          <MDTypography variant="h6" color="white">
            Create Appointment
          </MDTypography>
        </MDBox>
      </MDBox>

      <div className="w-full flex flex-col justify-center items-center gap-[20px] px-[20px] my-[40px]">
        <div className="w-2/3  p-2 rounded-xl flex flex-col gap-[10px] relative ">
          <AppointmentForm />
        </div>
      </div>
    </>
  );
}
