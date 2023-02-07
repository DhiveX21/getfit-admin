import React, { useEffect } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { useDispatch } from "react-redux";
import * as actions from "layouts/therapist/MainAction";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormHelperText } from "@mui/material";
import { requestFormat, requestFormatUpdate } from "layouts/therapist/MainUIHelper";

export default function EditSection({ obj, setEditMode, editMode }) {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("fullname", obj.name, { shouldDirty: true });
    setValue("gender", obj.gender, { shouldDirty: true });
    setValue("position", obj.position, { shouldDirty: true });
    setValue("phoneNumber", obj.user.phone_number, { shouldDirty: true });
    setValue("email", obj.user.email, { shouldDirty: true });
  }, []);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(actions.updateAction(obj.id, requestFormatUpdate(data))).then((result) => {
      setEditMode(!editMode)
    });
  };

  return (
    <div className="animation-popup flex flex-col gap-[20px] w-full bg-white p-[10px] rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-[20px] flex-col">
        <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            CREATE THERAPIST
          </MDTypography>
        </MDBox>
        {/* Fullname Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Fullname
          </MDTypography>
          {errors.fullname && (
            <FormHelperText>
              {errors.fullname.type === "required" && "Field is required"}
            </FormHelperText>
          )}
          <Controller
            name="fullname"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MDInput {...field} className=" z-8" fullWidth required label="Fullname" />
            )}
          />
        </MDBox>
        {/* Phone Number Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Phone Number
          </MDTypography>
          {errors.phoneNumber && (
            <FormHelperText>
              {errors.phoneNumber.type === "required" && "Field is required"}
              {errors.phoneNumber.type === "pattern" && "Phone Number must be formatted by +62"}
              {errors.phoneNumber.type === "maxLength" && "Phone Number Max 20 Digit"}
            </FormHelperText>
          )}

          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: true, maxLength: 20, pattern: /^(\+62)8[1-9][0-9]{6,11}$/ }}
            render={({ field }) => (
              <MDInput
                {...field}
                className=" z-8"
                fullWidth
                required
                label="Phone Number"
                type="tel"
              />
            )}
          />
        </MDBox>
        {/* Gender Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Gender
          </MDTypography>
          {errors.gender && (
            <FormHelperText>
              {errors.gender.type === "required" && "Field is required"}
            </FormHelperText>
          )}

          <Controller
            name="gender"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  checked={getValues("gender") === "female"}
                  type="radio"
                  id="female"
                  value="female"
                />
                <label htmlFor="female" className="text-[16px] ml-[3px] mr-[20px]">
                  Female
                </label>
                <input
                  {...field}
                  checked={getValues("gender") === "male"}
                  type="radio"
                  id="male"
                  value="male"
                />
                <label htmlFor="male" className="text-[16px] ml-[3px]">
                  Male
                </label>
              </>
            )}
          />
        </MDBox>
        {/* Email Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Email
          </MDTypography>
          {errors.email && (
            <FormHelperText>
              {errors.email.type === "required" && "Field is required"}
              {errors.email.type === "pattern" && "Wrong Email Format"}
            </FormHelperText>
          )}

          <Controller
            name="email"
            control={control}
            rules={{ required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ }}
            render={({ field }) => (
              <MDInput {...field} className=" z-8" fullWidth required label="Email" type="email" />
            )}
          />
        </MDBox>
        {/* Position Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Position
          </MDTypography>
          {errors.position && (
            <FormHelperText>
              {errors.position.type === "required" && "Field is required"}
            </FormHelperText>
          )}
          <Controller
            name="position"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MDInput {...field} className=" z-8" fullWidth required label="Position" />
            )}
          />
        </MDBox>

        <MDButton className="w-full" variant="gradient" color="success" type="submit">
          Submit
        </MDButton>
      </form>
    </div>
  );
}
