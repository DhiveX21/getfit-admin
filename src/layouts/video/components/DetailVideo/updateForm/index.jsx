import React, { useEffect, useState } from "react";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { categoryVideoAction } from "layouts/video/videoAction";
import DefaultSwitch from "components/extend/Switch/DefaultSwitch";
import { updateVideoAction } from "layouts/video/videoAction";

export default function UpdateForm({ video }) {
  // define Category  to select to field
  let defaultCategoryOption;
  let defaultCategoryValue;

  defaultCategoryOption = { value: video.category.id, label: video.category.title };
  defaultCategoryValue = video.category.id;

  const dispatch = useDispatch();
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(defaultCategoryValue);
  const [inputDescription, setInputDescription] = useState();
  const [videoLink, setVideoLink] = useState();
  const [inputTitle, setInputTitle] = useState();
  const [inputStatus, setInputStatus] = useState(false);
  const { category } = useSelector((state) => ({ category: state.exercise.video.category }));

  // if redux category is not define , re fetch from action
  useEffect(() => {
    dispatch(categoryVideoAction());
    setSelectedCategory(video?.category_id);
    setInputDescription(video?.description);
    setVideoLink(video?.video_url);
    setInputTitle(video?.title);
    setInputStatus(video?.is_active);
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
    dispatch(
      updateVideoAction(
        video?.id,
        selectedCategory,
        inputTitle,
        inputDescription,
        videoLink,
        inputStatus
      )
    );
  }
  function handleChangeStatus(e) {
    setInputStatus(e.target.checked);
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-[20px] px-[20px] my-[40px]">
      <div className="w-2/3  p-2 rounded-xl flex flex-col gap-[10px] relative ">
        <div className="animation-popup flex flex-col gap-[20px] mt-[20px]">
          <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
            <MDTypography variant="h6" color="text">
              UPDATE VIDEO
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
              defaultValue={defaultCategoryOption}
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
              defaultValue={inputTitle}
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
              defaultValue={inputDescription}
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
              defaultValue={videoLink}
              placeholder="Example: https://www.youtube.com/watch?v="
              onChange={(e) => setVideoLink(e.target.value)}
              multiline
              rows={1}
            />
          </MDBox>
          <MDBox display="flex-column" alignItems="center" gap="20px">
            <MDTypography variant="h6" color="text">
              Status Video
            </MDTypography>
            <DefaultSwitch
              name="status"
              label={inputStatus ? "Active" : "Non-Active"}
              onchange={handleChangeStatus}
              value={inputStatus}
            />
          </MDBox>
          <MDButton variant="gradient" color="success" onClick={() => handleSubmit()}>
            Send
          </MDButton>
        </div>
      </div>
    </div>
  );
}
