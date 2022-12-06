import React, { useEffect, useState } from "react";
import {
  categoryNotificationAction,
  createNotificationCategoryAction,
} from "layouts/notification/notificationAction";
import { useDispatch } from "react-redux";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

export default function CategoryForm() {
  const [inputTitle, setInputTitle] = useState();
  const [inputDescription, setInputDescription] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryNotificationAction());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleSubmit() {
    dispatch(createNotificationCategoryAction(inputTitle, inputDescription));
  }
  return (
    <div className="animation-popup flex flex-col gap-[20px] mt-[20px]">
      <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
        <MDTypography variant="h6" color="text">
          CREATE CATEGORY NOTIFICATION
        </MDTypography>
      </MDBox>

      <MDBox display="flex-column" alignItems="center" gap="20px">
        <MDTypography variant="h6" color="text">
          Input Title Category
        </MDTypography>
        <MDInput
          fullWidth
          required
          label="Title"
          onChange={(e) => setInputTitle(e.target.value)}
          multiline
          rows={1}
        />
      </MDBox>
      <MDBox display="flex-column" alignItems="center" gap="20px">
        <MDTypography variant="h6" color="text">
          Input Description Category
        </MDTypography>
        <MDInput
          fullWidth
          required
          label="Description"
          onChange={(e) => setInputDescription(e.target.value)}
          multiline
          rows={5}
        />
      </MDBox>

      <MDButton variant="gradient" color="success" onClick={() => handleSubmit()}>
        Send
      </MDButton>
    </div>
  );
}
