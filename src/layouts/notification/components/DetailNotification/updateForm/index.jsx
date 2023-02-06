import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Select from "react-select";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { Controller, useForm } from "react-hook-form";
import { FormHelperText } from "@mui/material";
import { RequestFormatUpdate } from "layouts/notification/MainUIHelper";
import * as actions from "layouts/notification/MainAction";

export default function UpdateForm({ obj }) {
  // define react hook form
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // define Priority  to select to field
  let defaultPriorityOption;
  if (obj.is_important) {
    defaultPriorityOption = { value: true, label: "Important" };
  } else {
    defaultPriorityOption = { value: false, label: "Regular" };
  }

  // define Category  to select to field
  let defaultCategoryOption;
  defaultCategoryOption = { value: obj.category.id, label: obj.category.title };

  const dispatch = useDispatch();

  const [categoryOptions, setCategoryOptions] = useState([]);

  const priorityOptions = [
    { value: true, label: "Important" },
    { value: false, label: "Regular" },
  ];

  const { category } = useSelector((state) => ({ category: state.notification.category }));

  //filling the options for category
  useEffect(() => {
    let tempOptions = [];
    category?.forEach((item, index) => {
      tempOptions = [...tempOptions, { value: item.id, label: item.title }];
    });
    setCategoryOptions(tempOptions);
  }, [category]); // eslint-disable-line react-hooks/exhaustive-deps

  // filling the form with current patient Data
  useEffect(() => {
    setValue("title", obj.title, { shouldDirty: true });
    setValue("message", obj.description, { shouldDirty: true });
    setValue("priority", defaultPriorityOption, { shouldDirty: true });
    setValue("category_id", defaultCategoryOption, { shouldDirty: true });
  }, []);

  function onSubmit(data) {
    dispatch(
      actions.updateAction(
        RequestFormatUpdate(data.priority.value, data.category_id.value, data.title, data.message),
        obj.id
      )
    ).then(() => {
      dispatch(actions.detailAction(obj.id));
    });
  }

  return (
    <div className="animation-popup flex flex-col gap-[20px] mt-[20px]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-[20px] flex-col">
        <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            UPDATE NOTIFICATION
          </MDTypography>
        </MDBox>
        {/* Level Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Select Level
          </MDTypography>
          {errors.priority && (
            <FormHelperText>
              {errors.priority.type === "required" && "Field is required"}
            </FormHelperText>
          )}

          <Controller
            name="priority"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                className="basic-single text-[14px] z-11"
                classNamePrefix="select"
                // defaultValue={defaultPriorityOption}
                options={priorityOptions}
              />
            )}
          />
        </MDBox>
        {/* Category Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
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
                className="basic-single text-[14px] z-9"
                classNamePrefix="select"
                isSearchable={true}
                options={categoryOptions}
                // defaultValue={defaultCategoryOption}
              />
            )}
          />
        </MDBox>
        {/* Title Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
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
              <MDInput
                {...field}
                className=" z-8"
                fullWidth
                required
                label="Title"
                multiline
                rows={1}
              />
            )}
          />
        </MDBox>
        {/* Message Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Message
          </MDTypography>
          {errors.message && (
            <FormHelperText>
              {errors.message.type === "required" && "Field is required"}
            </FormHelperText>
          )}
          <Controller
            name="message"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MDInput {...field} fullWidth required label="Message" multiline rows={5} />
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
