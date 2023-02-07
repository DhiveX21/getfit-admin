import React from "react";
import { useDispatch } from "react-redux";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { Controller, useForm } from "react-hook-form";
import DefaultSwitch from "components/extend/Switch/DefaultSwitch";
import slug from "slug";
import * as actions from "layouts/product/MainAction";
import { FormHelperText } from "@mui/material";

export default function FacilityProductForm() {
  const {
    handleSubmit,
    getValues,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const dispatch = useDispatch();

  function autoConvertSlug(val) {
    setValue("slug", slug(val), { shouldDirty: true });
  }
  const onSubmit = (data) => {
    dispatch(
      actions.createFacilityAction({
        name: data.name,
        slug: data.slug,
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
            CREATE FACILITY PRODUCT
          </MDTypography>
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
              <MDInput
                {...field}
                fullWidth
                required
                label="Name"
                onChange={(e) => {
                  autoConvertSlug(e.target.value);
                  setValue("name", e.target.value, { shouldDirty: true });
                }}
                multiline
                rows={1}
              />
            )}
          />
        </MDBox>
        {/* Slug Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Slug
          </MDTypography>
          {errors.slug && (
            <FormHelperText>
              {errors.slug.type === "required" && "Field is required"}
            </FormHelperText>
          )}
          <Controller
            name="slug"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <MDInput {...field} fullWidth required multiline rows={1} />}
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
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Status
          </MDTypography>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <DefaultSwitch {...field} label={getValues("status") ? "Active" : "Non-Active"} />
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
