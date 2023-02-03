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
import { createAppointmentAction } from "layouts/appointment/appointmentAction";
import { useNavigate } from "react-router-dom";

export default function AppointmentForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState();
  const [patientOptions, setPatientOptions] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState();
  const [inputDate, setInputDate] = useState();
  const [inputTime, setInputTime] = useState();
  const [inputAppointmentType, setInputAppointmentType] = useState();
  const [inputAddress, setInputAddress] = useState();
  const [inputComplaint, setInputComplaint] = useState();
  const animatedComponents = makeAnimated();
  const MySwal = withReactContent(Swal);
  const appointmentTypeOptions = [{ value: "tele_physio", label: "Tele Physio" }];

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
        tempOptions = [...tempOptions, { value: item.id, label: item.user.name }];
      });
      setPatientOptions(tempOptions);
    }
  }, [patientData]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleSubmit() {
    if (selectedPatient.length > 0) {
      selectedPatient.map((patientId) => {
        dispatch(
          createAppointmentAction(
            patientId,
            1,
            inputDate,
            inputTime,
            inputAppointmentType,
            inputAddress,
            inputComplaint
          )
        ).then(() => {
          navigate("/appointment/list-appointment");
        });
      });
    } else {
      MySwal.fire({
        title: "Patient Not Found",
        icon: "error",
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
          CREATE Appointment
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
      <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
        <MDTypography variant="h6" color="text">
          Input Date
        </MDTypography>
        <MDInput
          className=" z-8"
          fullWidth
          required
          onChange={(e) => setInputDate(e.target.value)}
          type="date"
        />
      </MDBox>
      <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
        <MDTypography variant="h6" color="text">
          Input Time
        </MDTypography>
        <MDInput
          className=" z-8"
          fullWidth
          required
          onChange={(e) => setInputTime(e.target.value)}
          type="time"
        />
      </MDBox>
      <MDBox display="flex-column" alignItems="center" gap="20px">
        <MDTypography variant="h6" color="text">
          Select Type Appointment
        </MDTypography>
        <Select
          className="basic-single text-[14px] z-11"
          classNamePrefix="select"
          isSearchable={true}
          name="appointmentType"
          options={appointmentTypeOptions}
          onChange={(e) => setInputAppointmentType(e.value)}
        />
      </MDBox>
      <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
        <MDTypography variant="h6" color="text">
          Input Address
        </MDTypography>
        <MDInput
          className=" z-8"
          fullWidth
          required
          label="Title"
          onChange={(e) => setInputAddress(e.target.value)}
          multiline
          rows={4}
        />
      </MDBox>
      <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
        <MDTypography variant="h6" color="text">
          Input Medical Complaints
        </MDTypography>
        <MDInput
          className=" z-8"
          fullWidth
          required
          label="Medical Complaints"
          onChange={(e) => setInputComplaint(e.target.value)}
          multiline
          rows={4}
        />
      </MDBox>

      <MDButton variant="gradient" color="success" onClick={() => handleSubmit()}>
        Send
      </MDButton>
    </div>
  );
}
