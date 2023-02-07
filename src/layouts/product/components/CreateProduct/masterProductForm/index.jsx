import React from "react";
import { useDispatch } from "react-redux";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { Controller, useForm } from "react-hook-form";
import * as actions from "layouts/product/MainAction";
import { FormHelperText } from "@mui/material";

export default function MasterProductForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(
      actions.createMasterAction({
        code: data.code,
        name: data.name,
        description: data.description,
        status: data.status,
      })
    );
  };
  return (
    <div className="animation-popup flex flex-col gap-[20px] w-full bg-white p-[10px] rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-[20px] flex-col">
        <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            CREATE MASTER PRODUCT
          </MDTypography>
        </MDBox>
        {/* Code Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Code
          </MDTypography>
          {errors.code && (
            <FormHelperText>
              {errors.code.type === "required" && "Field is required"}
            </FormHelperText>
          )}

          <Controller
            name="code"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MDInput {...field} fullWidth required label="Code" multiline rows={1} />
            )}
          />
        </MDBox>
        {/* Name Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Name
          </MDTypography>
          {errors.name && (
            <FormHelperText>
              {errors.name.type === "required" && "Field is required"}
            </FormHelperText>
          )}

          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MDInput {...field} fullWidth required label="Name" multiline rows={1} />
            )}
          />
        </MDBox>
        {/* Description Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Description
          </MDTypography>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <MDInput {...field} fullWidth label="Description" multiline rows={5} />
            )}
          />
        </MDBox>
        {/* Status Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Status
          </MDTypography>
          {errors.status && (
            <FormHelperText>
              {errors.status.type === "required" && "Field is required"}
            </FormHelperText>
          )}

          <Controller
            name="status"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <input {...field} type="radio" id="active" value="active" />
                <label htmlFor="active" className="text-[16px] ml-[3px] mr-[20px]">
                  Active
                </label>
                <input {...field} type="radio" id="non_active" value="non-active" />
                <label htmlFor="non_active" className="text-[16px] ml-[3px]">
                  Non Active
                </label>
              </>
            )}
          />
        </MDBox>

        <MDButton variant="gradient" color="success" type="submit">
          Submit
        </MDButton>
      </form>
    </div>
  );
}
