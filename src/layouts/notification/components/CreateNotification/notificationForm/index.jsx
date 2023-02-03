import React, { useEffect, useState } from "react";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { patientAPI } from "../../../../../_api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useSelector, useDispatch } from "react-redux";
import { categoryNotificationAction } from "layouts/notification/notificationAction";
import { createNotificationAction } from "layouts/notification/notificationAction";
import { useNavigate } from "react-router-dom";

export default function NotificationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState();
  const [patientOptions, setPatientOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState();
  const [selectedPriority, setSelectedPriority] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [inputMessage, setInputMessage] = useState();
  const [inputTitle, setInputTitle] = useState();
  const animatedComponents = makeAnimated();
  const MySwal = withReactContent(Swal);
  const priorityOptions = [
    { value: true, label: "Important" },
    { value: false, label: "Regular" },
  ];
  const { category } = useSelector((state) => ({ category: state.notification.category }));

  useEffect(() => {
    if (!patientData) {
      patientAPI.getAll()
        .then((response) => {
          setPatientData(response.data.data);
        })
        .catch((error) => {
          MySwal.fire({
            title: "Error Get Patient Data",
            icon: "error",
          });
        });
    } else {
      let tempOptions = [];
      patientData.forEach((item, index) => {
        tempOptions = [...tempOptions, { value: item.user_id, label: item.user.name }];
      });
      setPatientOptions(tempOptions);
    }
  }, [patientData]); // eslint-disable-line react-hooks/exhaustive-deps

  // if redux category is not define , re fetch from action
  useEffect(() => {
    dispatch(categoryNotificationAction());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //filling the options for category
  useEffect(() => {
    let tempOptions = [];
    category?.forEach((item, index) => {
      tempOptions = [...tempOptions, { value: item.id, label: item.title }];
    });
    setCategoryOptions(tempOptions);
  }, [category]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleSubmit() {
    if (selectedPatient?.length > 0) {
      dispatch(
        createNotificationAction(
          selectedPatient,
          selectedPriority,
          selectedCategory,
          inputTitle,
          inputMessage
        )
      ).then(() => {
        navigate("/notification/list-notification");
      });
    } else {
      dispatch(
        createNotificationAction(null, selectedPriority, selectedCategory, inputTitle, inputMessage)
      ).then(() => {
        navigate("/notification/list-notification");
      });
    }
  }

  function handleSelectedPatient(e) {
    let tempPatient = [];
    e.forEach((item) => {
      tempPatient = [...tempPatient, item.value];
    });
    setSelectedPatient(tempPatient);
  }
  return (
    <div className="animation-popup flex flex-col gap-[20px] mt-[20px]">
      <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
        <MDTypography variant="h6" color="text">
          CREATE NOTIFICATION
        </MDTypography>
      </MDBox>
      <MDBox display="flex-column" alignItems="center" gap="20px">
        <MDTypography variant="h6" color="text">
          Select Patient
        </MDTypography>
        <Select
          className="basic-single text-[14px] z-12"
          closeMenuOnSelect={false}
          components={animatedComponents}
          onChange={(e) => handleSelectedPatient(e)}
          isMulti
          options={patientOptions}
        />
      </MDBox>
      <MDBox display="flex-column" alignItems="center" gap="20px">
        <MDTypography variant="h6" color="text">
          Select Level
        </MDTypography>
        <Select
          className="basic-single text-[14px] z-11"
          classNamePrefix="select"
          isSearchable={true}
          name="color"
          options={priorityOptions}
          onChange={(e) => setSelectedPriority(e.value)}
        />
      </MDBox>
      <MDBox display="flex-column" alignItems="center" gap="20px">
        <MDTypography variant="h6" color="text">
          Select Category
        </MDTypography>
        <Select
          className="basic-single text-[14px] z-9"
          classNamePrefix="select"
          isSearchable={true}
          name="color"
          options={categoryOptions}
          onChange={(e) => setSelectedCategory(e.value)}
        />
      </MDBox>
      <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
        <MDTypography variant="h6" color="text">
          Input Title
        </MDTypography>
        <MDInput
          className=" z-8"
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
          Input Message
        </MDTypography>
        <MDInput
          fullWidth
          required
          label="Message"
          onChange={(e) => setInputMessage(e.target.value)}
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
