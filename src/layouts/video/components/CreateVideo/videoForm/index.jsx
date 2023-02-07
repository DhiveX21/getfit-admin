import React, { useEffect, useState } from "react";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import * as actions from "layouts/video/MainAction";
import { requestFormat } from "layouts/video/MainUIHelper";
import { FormHelperText } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function VideoForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [categoryOptions, setCategoryOptions] = useState([]);

  const { category } = useSelector((state) => ({ category: state.exercise.category }));

  //filling the options for category
  useEffect(() => {
    let tempOptions = [];
    category?.forEach((item, index) => {
      tempOptions = [...tempOptions, { value: item.id, label: item.title }];
    });
    setCategoryOptions(tempOptions);
  }, [category]);

  function onSubmit(data) {
    dispatch(
      actions.createAction(
        requestFormat(data.category_id.value, data.title, data.description, data.link_url)
      )
    ).then(() => {
      navigate("/video/list-video");
    });
  }

  return (
    <div className="animation-popup flex flex-col gap-[20px] mt-[20px]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-[20px] flex-col">
        <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            CREATE VIDEO
          </MDTypography>
        </MDBox>

        {/* Category Field */}
        <MDBox display="flex-column" alignItems="center" className="z-10" gap="20px">
          <MDTypography variant="h6" color="text">
            Select Category
          </MDTypography>
          {errors.category_id && (
            <FormHelperText>
              {errors.category_id.type === "required" && "Field is required"}
            </FormHelperText>
          )}

          <Controller
            name="category_id"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                className="basic-single text-[14px]"
                classNamePrefix="select"
                isSearchable={true}
                options={categoryOptions}
              />
            )}
          />
        </MDBox>

        {/* Title Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Title
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
            Input Description
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

        {/* Link URL Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Link Video
          </MDTypography>
          {errors.link_url && (
            <FormHelperText>
              {errors.link_url.type === "required" && "Field is required"}
            </FormHelperText>
          )}

          <Controller
            name="link_url"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MDInput
                {...field}
                fullWidth
                required
                label="Link Video"
                placeholder="Example: https://www.youtube.com/watch?v="
                multiline
                rows={1}
              />
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
