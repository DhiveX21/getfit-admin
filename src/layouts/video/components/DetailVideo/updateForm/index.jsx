import React, { useEffect, useState } from "react";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "layouts/video/MainAction";
import DefaultSwitch from "components/extend/Switch/DefaultSwitch";
import { Controller, useForm } from "react-hook-form";
import { requestFormatUpdate } from "layouts/video/MainUIHelper";
import { FormHelperText } from "@mui/material";

export default function UpdateForm({ obj }) {
  // define react hook form
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // define Category  to select to field
  let defaultCategoryOption;
  defaultCategoryOption = { value: obj.category.id, label: obj.category.title };

  const dispatch = useDispatch();
  const [categoryOptions, setCategoryOptions] = useState([]);
  const { category } = useSelector((state) => ({ category: state.exercise.category }));

  // if redux category is not define , re fetch from action
  useEffect(() => {
    setValue("title", obj.title, { shouldDirty: true });
    setValue("description", obj.description, { shouldDirty: true });
    setValue("link_url", obj.video_url, { shouldDirty: true });
    setValue("category_id", defaultCategoryOption, { shouldDirty: true });
    setValue("status", obj.is_active, { shouldDirty: true });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
      actions.updateAction(
        requestFormatUpdate(
          data.category_id.value,
          data.title,
          data.description,
          data.link_url,
          data.status
        ),
        obj.id
      )
    ).then(() => {
      dispatch(actions.detailAction(obj.id));
    });
  }
  // function handleChangeStatus(e) {
  //   setInputStatus(e.target.checked);
  // }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-[20px] px-[20px] my-[40px]">
      <div className="w-2/3  p-2 rounded-xl flex flex-col gap-[10px] relative ">
        <div className="animation-popup flex flex-col gap-[20px] mt-[20px]">
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-[20px] flex-col">
            <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
              <MDTypography variant="h6" color="text">
                UPDATE VIDEO
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
            <MDBox display="flex-column" alignItems="center" gap="20px">
              <MDTypography variant="h6" color="text">
                Status Video
              </MDTypography>

              <Controller
                name="status"
                control={control}
                render={({ field }) => <DefaultSwitch {...field} />}
              />
            </MDBox>
            <MDButton variant="gradient" color="success" type="submit">
              Send
            </MDButton>
          </form>
        </div>
      </div>
    </div>
  );
}
