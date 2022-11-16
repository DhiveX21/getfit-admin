import React, { useEffect, useState } from "react";

import MDBox from "components/MDBox";
import BackButton from "components/extend/Button/BackButton";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import { getAllPatient } from "_api/patientApi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useSelector, useDispatch } from "react-redux";
import { categoryNotificationAction } from "layouts/notification/notificationAction";
import { createNotificationAction } from "layouts/notification/notificationAction";

export default function NotificationForm() {
  const dispatch = useDispatch();
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
    { value: true, label: "important" },
    { value: false, label: "Regular" },
  ];
  const { category } = useSelector((state) => ({ category: state.notification.category }));

  useEffect(() => {
    if (!patientData) {
      getAllPatient()
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
      patientData.map((item, index) => {
        tempOptions = [...tempOptions, { value: item.user_id, label: item.user.name }];
      });
      setPatientOptions(tempOptions);
    }
  }, [patientData]);

  // if redux category is not define , re fetch from action
  useEffect(() => {
    dispatch(categoryNotificationAction());
  }, []);

  //filling the options for category
  useEffect(() => {
    let tempOptions = [];
    category?.map((item, index) => {
      tempOptions = [...tempOptions, { value: item.id, label: item.title }];
    });
    setCategoryOptions(tempOptions);
  }, [category]);

  function handleSubmit() {
    if (selectedPatient.length > 0) {
      selectedPatient.map((patientId) => {
        dispatch(
          createNotificationAction(
            patientId,
            selectedPriority,
            selectedCategory,
            inputTitle,
            inputMessage
          )
        );
      });
    } else {
      dispatch(
        createNotificationAction(null, selectedPriority, selectedCategory, inputTitle, inputMessage)
      );
    }
  }

  function handleSelectedPatient(e) {
    let tempPatient = [];
    e.map((item) => {
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
          label="Message"
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
