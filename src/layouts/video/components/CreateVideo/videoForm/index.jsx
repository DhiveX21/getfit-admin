import React, { useEffect, useState } from "react";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { categoryVideoAction } from "layouts/video/videoAction";
import { createVideoAction } from "layouts/video/videoAction";

export default function VideoForm() {
  const dispatch = useDispatch();
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [inputDescription, setInputDescription] = useState();
  const [videoLink, setVideoLink] = useState();
  const [inputTitle, setInputTitle] = useState();
  const { category } = useSelector((state) => ({ category: state.exercise.video.category }));

  // if redux category is not define , re fetch from action
  useEffect(() => {
    dispatch(categoryVideoAction());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //filling the options for category
  useEffect(() => {
    let tempOptions = [];
    category?.forEach((item, index) => {
      tempOptions = [...tempOptions, { value: item.id, label: item.title }];
    });
    setCategoryOptions(tempOptions);
  }, [category]);

  function handleSubmit() {
    dispatch(createVideoAction(selectedCategory, inputTitle, inputDescription, videoLink));
  }

  return (
    <div className="animation-popup flex flex-col gap-[20px] mt-[20px]">
      <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
        <MDTypography variant="h6" color="text">
          CREATE VIDEO
        </MDTypography>
      </MDBox>

      <MDBox display="flex-column" alignItems="center" className="z-10" gap="20px">
        <MDTypography variant="h6" color="text">
          Select Category
        </MDTypography>
        <Select
          className="basic-single text-[14px]"
          classNamePrefix="select"
          isSearchable={true}
          name="color"
          options={categoryOptions}
          onChange={(e) => setSelectedCategory(e.value)}
        />
      </MDBox>
      <MDBox display="flex-column" alignItems="center" gap="20px">
        <MDTypography variant="h6" color="text">
          Input Title
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
          Input Description
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
      <MDBox display="flex-column" alignItems="center" gap="20px">
        <MDTypography variant="h6" color="text">
          Input Link Video
        </MDTypography>
        <MDInput
          fullWidth
          required
          label="Link Video"
          placeholder="Example: https://www.youtube.com/watch?v="
          onChange={(e) => setVideoLink(e.target.value)}
          multiline
          rows={1}
        />
      </MDBox>

      <MDButton variant="gradient" color="success" onClick={() => handleSubmit()}>
        Send
      </MDButton>
    </div>
  );
}
