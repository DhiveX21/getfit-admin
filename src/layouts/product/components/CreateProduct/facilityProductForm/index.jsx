import React, { useState } from "react";
import { useDispatch } from "react-redux";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { useForm } from "react-hook-form";
import DefaultSwitch from "components/extend/Switch/DefaultSwitch";
import slug from "slug";
import { createFacilityProductAction } from "layouts/product/productAction";

export default function FacilityProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const dispatch = useDispatch();
  const [inputStatus, setInputStatus] = useState(false);
  // useEffect(() => {
  //   dispatch(categoryVideoAction());
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleChangeStatus(e) {
    setValue("status", e.target.checked ? "active" : "non-active", { shouldDirty: true });
    setInputStatus(e.target.checked);
  }
  function autoConvertSlug(val) {
    setValue("slug", slug(val), { shouldDirty: true });
  }
  const onSubmit = (data) => {
    dispatch(
      createFacilityProductAction({
        name: data.name,
        slug: data.slug,
        description: data.description,
        status: data.status,
      })
    );
  };
  return (
    <div className="animation-popup flex flex-col gap-[20px] w-full bg-white p-[10px] rounded-lg">
      <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
        <MDTypography variant="h6" color="text">
          CREATE FACILITY PRODUCT
        </MDTypography>
      </MDBox>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-[20px] flex-col">
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Name{" "}
            {errors.name?.type === "required" ? (
              <span className="error-hint" role="alert">
                Name is required
              </span>
            ) : (
              ""
            )}
          </MDTypography>
          <MDInput
            fullWidth
            required
            label="Name"
            {...register("name", {
              required: true,
            })}
            onChange={(e) => autoConvertSlug(e.target.value)}
            multiline
            rows={1}
          />
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Slug{" "}
            {errors.name?.type === "required" ? (
              <span className="error-hint" role="alert">
                Slug is required
              </span>
            ) : (
              ""
            )}
          </MDTypography>
          <MDInput
            fullWidth
            required
            {...register("slug", {
              required: true,
            })}
            multiline
            rows={1}
          />
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Description
          </MDTypography>
          <MDInput fullWidth label="Description" {...register("description")} multiline rows={5} />
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Status
          </MDTypography>
          <DefaultSwitch
            name="status"
            label={inputStatus ? "Active" : "Non-Active"}
            onchange={handleChangeStatus}
            value={inputStatus}
          />
        </MDBox>

        <MDButton variant="gradient" color="success" type="submit">
          Submit
        </MDButton>
      </form>
    </div>
  );
}
