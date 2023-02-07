import React from "react";
import * as actions from "layouts/notification/MainAction";
import { useDispatch } from "react-redux";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { RequestFormatCategory } from "layouts/notification/MainUIHelper";
import { Controller, useForm } from "react-hook-form";
import { FormHelperText } from "@mui/material";

export default function CategoryForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  function onSubmit(data) {
    dispatch(actions.createCategory(RequestFormatCategory(data.title, data.description)));
  }
  return (
    <div className="animation-popup flex flex-col gap-[20px] mt-[20px]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-[20px] flex-col">
        <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            CREATE CATEGORY NOTIFICATION
          </MDTypography>
        </MDBox>

        {/* Title Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Title Category
          </MDTypography>
          {errors.title && (
            <FormHelperText>
              {errors.title.type === "required" && "Field is required"}
            </FormHelperText>
          )}
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MDInput {...field} fullWidth required label="Title" multiline rows={1} />
            )}
          />
        </MDBox>

        {/* Description Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Description Category
          </MDTypography>
          {errors.description && (
            <FormHelperText>
              {errors.description.type === "required" && "Field is required"}
            </FormHelperText>
          )}
          <Controller
            name="description"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MDInput {...field} fullWidth required label="Description" multiline rows={5} />
            )}
          />
        </MDBox>

        <MDButton variant="gradient" color="success" type="submit">
          Send
        </MDButton>
      </form>
    </div>
  );
}
