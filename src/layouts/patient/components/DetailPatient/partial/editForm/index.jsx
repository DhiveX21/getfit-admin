import React, { useEffect } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { updatePatientAction } from "layouts/patient/patientAction";
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";

export default function EditForm({ patientData }) {
  // define react hook form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  // handle submit for react hook form
  const onSubmit = (data) => {
    // dispatching to update patient action

    dispatch(
      updatePatientAction({
        patientId: patientData.id,
        userId: patientData.user_id,
        name: data.fullname,
        phone_number: data.phoneNumber,
        email: data.email,
        birth_date: data.birthdate,
        address: data.address,
        gender: data.gender,
      })
    );
  };

  // filling the form with current patient Data
  useEffect(() => {
    setValue("fullname", patientData.name, { shouldDirty: true });
    setValue("phoneNumber", patientData.user.phone_number, { shouldDirty: true });
    setValue("email", patientData.user.email, { shouldDirty: true });
    setValue("birthdate", patientData.birth_date, { shouldDirty: true });
    setValue("address", patientData.address, { shouldDirty: true });
    setValue("gender", patientData.gender, { shouldDirty: true });
  }, []);

  return (
    <div className="animation-popup flex flex-col gap-[20px] w-full bg-white p-[10px] rounded-lg">
      <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
        <MDTypography variant="h6" color="text">
          EDIT PATIENT
        </MDTypography>
      </MDBox>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-[20px] flex-col">
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Fullname
          </MDTypography>
          <MDInput className=" z-8" fullWidth required {...register("fullname")} />
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Phone Number{" "}
            {errors.phoneNumber?.type === "required" ? (
              <span className="error-hint" role="alert">
                Phone Number is required
              </span>
            ) : errors.phoneNumber?.type === "pattern" ? (
              <span className="error-hint" role="alert">
                Phone Number must be formatted by +62
              </span>
            ) : errors.phoneNumber?.type === "maxLength" ? (
              <span className="error-hint" role="alert">
                Phone Number Max 20 Digit
              </span>
            ) : (
              ""
            )}
          </MDTypography>
          <MDInput
            className=" z-8"
            fullWidth
            required
            type="tel"
            {...register("phoneNumber", {
              required: true,
              maxLength: 20,
              pattern: /^(\+62)8[1-9][0-9]{6,11}$/,
            })}
          />
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Email{" "}
            {errors.email?.type === "required" ? (
              <span className="error-hint" role="alert">
                Email is required
              </span>
            ) : errors.email?.type === "pattern" ? (
              <span className="error-hint" role="alert">
                Wrong Email Format
              </span>
            ) : (
              ""
            )}
          </MDTypography>
          <MDInput
            className=" z-8"
            fullWidth
            required
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            })}
          />
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Gender{" "}
            {errors.gender?.type === "required" ? (
              <span className="error-hint" role="alert">
                Gender is required
              </span>
            ) : (
              ""
            )}
          </MDTypography>

          <input
            type="radio"
            id="female"
            value="female"
            {...register("gender", {
              required: true,
            })}
          />
          <label htmlFor="female" className="text-[16px] ml-[3px] mr-[20px]">
            Female
          </label>
          <input
            type="radio"
            id="male"
            value="male"
            {...register("gender", {
              required: true,
            })}
          />
          <label htmlFor="male" className="text-[16px] ml-[3px]">
            Male
          </label>
        </MDBox>
        {/* <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Password
          </MDTypography>
          <MDInput className=" z-8" fullWidth required type="password" {...register("password")} />
        </MDBox> */}
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input birthdate
          </MDTypography>
          <MDInput className=" z-8" fullWidth required type="date" {...register("birthdate")} />
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Address
          </MDTypography>
          <MDInput
            className=" z-8"
            fullWidth
            required
            type="text"
            {...register("address")}
            multiline
            rows={3}
          />
        </MDBox>

        <MDButton className="w-full" variant="gradient" color="success" type="submit">
          Submit
        </MDButton>
      </form>
    </div>
  );
}
