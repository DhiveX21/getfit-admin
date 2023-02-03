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
import { patientAPI } from "../../../../../_api";
import Swal from "sweetalert2";
import makeAnimated from "react-select/animated";
import withReactContent from "sweetalert2-react-content";
import CreatableSelect from "react-select/creatable";
import { createNotificationWhatsappAction } from "layouts/notification/notificationAction";

export default function WhatsappForm() {
  const [inputMessage, setInputMessage] = useState();
  const [patientData, setPatientData] = useState();
  const [patientOptions, setPatientOptions] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState();
  const animatedComponents = makeAnimated();

  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryNotificationAction());
  }, []);

  useEffect(() => {
    if (!patientData) {
      patientAPI.getAllPatient()
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
        tempOptions = [
          ...tempOptions,
          {
            value: item.user.phone_number,
            label: item.user.name + " >>> " + item.user.phone_number,
          },
        ];
      });
      setPatientOptions(tempOptions);
    }
  }, [patientData]);

  function handleSelectedPatient(e) {
    let tempPatient = [];
    e.map((item) => {
      tempPatient = [...tempPatient, item.value];
    });
    setSelectedPatient(tempPatient);
  }

  function handleSubmit() {
    if (selectedPatient.length > 0) {
      let flag = true;
      for (let i = 0; i < selectedPatient.length; i++) {
        if (selectedPatient[i].charAt(0) !== "+") {
          MySwal.fire({
            title: `Please Change the first character on Phone Number with +62`,
            icon: "error",
          });
          flag = false;
          break;
        }
      }

      if (flag) {
        selectedPatient.map((item) => {
          dispatch(createNotificationWhatsappAction(item.substring(1), inputMessage));
        });
      }
    } else {
      MySwal.fire({
        title: "Please Select Patient/Input Phone Number First",
        icon: "error",
      });
    }
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
          Select Patient
        </MDTypography>
        <CreatableSelect
          className="basic-single text-[14px] z-10"
          closeMenuOnSelect={false}
          components={animatedComponents}
          onChange={(e) => handleSelectedPatient(e)}
          isMulti
          options={patientOptions}
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
