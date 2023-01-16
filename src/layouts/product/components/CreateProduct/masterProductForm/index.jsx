import React from "react";
import { useDispatch } from "react-redux";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { useForm } from "react-hook-form";
import { createMasterProductAction } from "layouts/product/productAction";

export default function MasterProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(categoryVideoAction());
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = (data) => {
    dispatch(
      createMasterProductAction({
        code: data.code,
        name: data.name,
        description: data.description,
        status: data.status,
      })
    );
  };
  return (
    <div className="animation-popup flex flex-col gap-[20px] w-full bg-white p-[10px] rounded-lg">
      <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
        <MDTypography variant="h6" color="text">
          CREATE MASTER PRODUCT
        </MDTypography>
      </MDBox>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-[20px] flex-col">
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Code{" "}
            {errors.code?.type === "required" ? (
              <span className="error-hint" role="alert">
                Code is required
              </span>
            ) : (
              ""
            )}
          </MDTypography>
          <MDInput
            fullWidth
            required
            label="Code"
            {...register("code", {
              required: true,
            })}
            multiline
            rows={1}
          />
        </MDBox>
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
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Status{" "}
            {errors.status?.type === "required" ? (
              <span className="error-hint" role="alert">
                Status is required
              </span>
            ) : (
              ""
            )}
          </MDTypography>
          <input
            type="radio"
            id="active"
            value="active"
            {...register("status", {
              required: true,
            })}
          />
          <label htmlFor="active" className="text-[16px] ml-[3px] mr-[20px]">
            Active
          </label>
          <input
            type="radio"
            id="non_active"
            value="non-active"
            {...register("status", {
              required: true,
            })}
          />
          <label htmlFor="non_active" className="text-[16px] ml-[3px]">
            Non Active
          </label>
        </MDBox>

        <MDButton variant="gradient" color="success" type="submit">
          Submit
        </MDButton>
      </form>
    </div>
  );
}
