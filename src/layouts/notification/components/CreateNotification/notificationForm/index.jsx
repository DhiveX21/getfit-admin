import React, { useEffect, useMemo, useState } from "react";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMainUIContext } from "layouts/notification/MainUIContext";
import { Controller, useForm } from "react-hook-form";
import { FormHelperText } from "@mui/material";
import * as actions from "layouts/notification/MainAction";
import { RequestFormat } from "layouts/notification/MainUIHelper";

export default function NotificationForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [patientOptions, setPatientOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const priorityOptions = [
    { value: true, label: "Important" },
    { value: false, label: "Regular" },
  ];

  const animatedComponents = makeAnimated();
  const MySwal = withReactContent(Swal);

  const mainUIContext = useMainUIContext();
  const { patientData } = useMemo(() => {
    return {
      patientData: mainUIContext.patientData,
    };
  }, [mainUIContext]);

  const { category } = useSelector((state) => ({ category: state.notification.category }));

  useEffect(() => {
    let tempOptions = [];
    tempOptions = [...tempOptions, { value: -1, label: "All User" }];
    patientData?.forEach((item, index) => {
      tempOptions = [...tempOptions, { value: item.user_id, label: item.user.name }];
    });
    setPatientOptions(tempOptions);
  }, [patientData]);

  //filling the options for category
  useEffect(() => {
    let tempOptions = [];
    category?.forEach((item, index) => {
      tempOptions = [...tempOptions, { value: item.id, label: item.title }];
    });
    setCategoryOptions(tempOptions);
  }, [category]);

  function onSubmit(data) {
    if (
      window.confirm(
        "Are you sure, will send notification to users selected ?, once you send user, you can't edit user receiver"
      )
    ) {
      if (data.patient.find((item, index) => item.value === -1)) {
        // Create All User
        dispatch(
          actions.createAction(
            RequestFormat(
              null,
              data.priority.value,
              data.category_id.value,
              data.title,
              data.message
            )
          )
        ).then(() => {
          navigate("/notification/list-notification");
        });
      } else {
        // Specific All User
        dispatch(
          actions.createAction(
            RequestFormat(
              data.patient,
              data.priority.value,
              data.category_id.value,
              data.title,
              data.message
            )
          )
        ).then(() => {
          navigate("/notification/list-notification");
        });
      }
    }
  }

  return (
    <div className="animation-popup flex flex-col gap-[20px] mt-[20px]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-[20px] flex-col">
        <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            CREATE NOTIFICATION
          </MDTypography>
        </MDBox>
        {/* Patient Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Select Patient
          </MDTypography>
          {errors.patient && (
            <FormHelperText>
              {errors.patient.type === "required" && "Field is required"}
            </FormHelperText>
          )}
          <Controller
            name="patient"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                className="basic-single text-[14px] z-12"
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={patientOptions}
              />
            )}
          />
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
                isSearchable={true}
                name="color"
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
                name="color"
                options={categoryOptions}
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
