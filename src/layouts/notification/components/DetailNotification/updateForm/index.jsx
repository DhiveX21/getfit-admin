import { updateNotificationAction } from "layouts/notification/notificationAction";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import makeAnimated from "react-select/animated";
import { getAllPatient } from "_api/patientApi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { categoryNotificationAction } from "layouts/notification/notificationAction";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Select from "react-select";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { detailNotification } from "layouts/notification/notificationAction";

export default function UpdateForm({ notification }) {
  // define patient  to select to field
  let defaultPatientOption = [];
  let defaultPatientValue = [];
  if (notification.user_id === -2) {
    notification?.patient.map((item) => {
      let tempObjectPatient = { label: item.name, value: item.user_id };
      defaultPatientOption = [...defaultPatientOption, tempObjectPatient];
      defaultPatientValue = [...defaultPatientValue, item.user_id];
    });
  }
  // if (notification.user_id === -1) {
  //   defaultPatientOption = [];
  //   defaultPatientValue = [];
  // }

  // define Priority  to select to field
  let defaultPriorityOption;
  let defaultPriorityValue;
  if (notification?.is_important) {
    defaultPriorityOption = { value: true, label: "Important" };
    defaultPriorityValue = true;
  } else {
    defaultPriorityOption = { value: false, label: "Regular" };
    defaultPriorityValue = false;
  }

  // define Category  to select to field
  let defaultCategoryOption;
  let defaultCategoryValue;

  defaultCategoryOption = { value: notification.category.id, label: notification.category.title };
  defaultCategoryValue = notification.category.id;

  const dispatch = useDispatch();
  const [patientData, setPatientData] = useState();
  const [patientOptions, setPatientOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(defaultPatientValue);
  const [selectedPriority, setSelectedPriority] = useState(defaultPriorityValue);
  const [selectedCategory, setSelectedCategory] = useState(defaultCategoryValue);
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
      patientData.forEach((item, index) => {
        tempOptions = [...tempOptions, { value: item.user_id, label: item.user.name }];
      });
      setPatientOptions(tempOptions);
    }
  }, [patientData]); // eslint-disable-line react-hooks/exhaustive-deps

  // if redux category is not define , re fetch from action
  useEffect(() => {
    dispatch(categoryNotificationAction());
    setInputTitle(notification?.title);
    setInputMessage(notification?.description);
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
        updateNotificationAction(
          selectedPatient,
          selectedPriority,
          selectedCategory,
          inputTitle,
          inputMessage,
          notification.id
        )
      ).then(() => {
        dispatch(detailNotification(notification.id));
      });
    } else {
      dispatch(
        updateNotificationAction(
          null,
          selectedPriority,
          selectedCategory,
          inputTitle,
          inputMessage,
          notification.id
        )
      ).then(() => {
        dispatch(detailNotification(notification.id));
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
          UPDATE NOTIFICATION
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
          defaultValue={defaultPatientOption || "Select"}
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
          defaultValue={defaultPriorityOption}
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
          defaultValue={defaultCategoryOption}
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
          defaultValue={inputTitle}
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
          defaultValue={inputMessage}
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
