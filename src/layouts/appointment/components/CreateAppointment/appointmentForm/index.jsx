import React, { useEffect, useState } from "react";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useDispatch } from "react-redux";
import * as actions from "layouts/appointment/MainAction";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { FormHelperText } from "@mui/material";
import { useMainUIContext } from "layouts/appointment/MainUIContext";
import { useMemo } from "react";
import { createReqFormat } from "layouts/appointment/MainUIHelper";

export default function AppointmentForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Main UI Context
  const mainUIContext = useMainUIContext();
  const { patientData, baseProductData, therapistData } = useMemo(() => {
    return {
      patientData: mainUIContext.patientData,
      baseProductData: mainUIContext.baseProductData,
      therapistData: mainUIContext.therapistData,
    };
  }, [mainUIContext]);

  const [patientOptions, setPatientOptions] = useState([]);
  const [appointmentTypeOptions, setAppointmentTypeOptions] = useState([]);
  const [therapistOptions, setTherapistOptions] = useState([]);
  const animatedComponents = makeAnimated();

  useEffect(() => {
    let tempOptions = [];
    patientData?.forEach((item, index) => {
      tempOptions = [...tempOptions, { value: item.id, label: item.user.name }];
    });
    setPatientOptions(tempOptions);
  }, [patientData]);

  useEffect(() => {
    let tempOptions = [];
    baseProductData?.forEach((item, index) => {
      tempOptions = [...tempOptions, { value: item.id, label: item.name }];
    });
    setAppointmentTypeOptions(tempOptions);
  }, [baseProductData]);

  useEffect(() => {
    let tempOptions = [];
    therapistData?.forEach((item, index) => {
      tempOptions = [...tempOptions, { value: item.id, label: item.name }];
    });
    setTherapistOptions(tempOptions);
  }, [therapistData]);

  const onSubmit = (data) => {
    dispatch(actions.createAction(createReqFormat(data)))
      .then((res) => {
        navigate("/appointment/list-appointment");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="animation-popup flex flex-col gap-[20px] w-full bg-white p-[10px] rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-[20px] flex-col">
        <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Create Appointment
          </MDTypography>
        </MDBox>
        {/* Patient Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Select Patient
          </MDTypography>
          {errors.patient && (
            <FormHelperText>
              {errors.patient.type === "required" && "Field is required"}
            </FormHelperText>
          )}
          <Controller
            name="patient"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Select Patient"
                className="basic-single text-[14px] z-12"
                components={animatedComponents}
                options={patientOptions}
              />
            )}
          />
        </MDBox>
        {/* Therapist Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Select Therapist
          </MDTypography>
          {errors.therapist && (
            <FormHelperText>
              {errors.therapist.type === "required" && "Field is required"}
            </FormHelperText>
          )}
          <Controller
            name="therapist"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Select Therapist"
                className="basic-single text-[14px] z-12"
                components={animatedComponents}
                options={therapistOptions}
              />
            )}
          />
        </MDBox>
        {/* Date Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Date
          </MDTypography>
          {errors.date && (
            <FormHelperText>
              {errors.date.type === "required" && "Field is required"}
            </FormHelperText>
          )}
          <Controller
            name="date"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <MDInput {...field} className=" z-8" fullWidth required type="date" />
            )}
          />
        </MDBox>
        {/* Time Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Time
          </MDTypography>
          {errors.time && (
            <FormHelperText>
              {errors.time.type === "required" && "Field is required"}
            </FormHelperText>
          )}
          <Controller
            name="time"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <MDInput {...field} className=" z-8" fullWidth required type="time" />
            )}
          />
        </MDBox>
        {/* Type Appointment Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Select Type Appointment
          </MDTypography>
          {errors.appointmentType && (
            <FormHelperText>
              {errors.appointmentType.type === "required" && "Field is required"}
            </FormHelperText>
          )}
          <Controller
            name="appointmentType"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                className="basic-single text-[14px] z-11"
                placeholder="Select Appointment Type"
                classNamePrefix="select"
                isSearchable={true}
                options={appointmentTypeOptions}
              />
            )}
          />
        </MDBox>
        {/* Address Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Address
          </MDTypography>
          {errors.address && (
            <FormHelperText>
              {errors.address.type === "required" && "Field is required"}
            </FormHelperText>
          )}
          <Controller
            name="address"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <MDInput
                {...field}
                className=" z-8"
                fullWidth
                required
                label="Address"
                multiline
                rows={4}
              />
            )}
          />
        </MDBox>
        {/* Medical Complaint Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Medical Complaints
          </MDTypography>
          <Controller
            name="complaint"
            control={control}
            render={({ field }) => (
              <MDInput
                {...field}
                className=" z-8"
                fullWidth
                required
                label="Medical Complaints"
                multiline
                rows={4}
              />
            )}
          />
        </MDBox>

        <MDButton type="submit" variant="gradient" color="success">
          Send
        </MDButton>
      </form>
    </div>
  );
}
