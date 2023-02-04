import React, { useEffect } from "react";
import { useState } from "react";
import DynamicForm from "./DynamicForm";
import { getAllAppointment } from "_api/appointmentApi";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { dateFormater } from "helpers/DateHelpers";
import MDInput from "components/MDInput";
import { createMedicalRecordAction } from "layouts/medicalRecord/medicalRecordAction";
import MDBox from "components/MDBox";
import BackButton from "components/extend/Button/BackButton";
import MDTypography from "components/MDTypography";
import { Link, useNavigate } from "react-router-dom";
import MDButton from "components/MDButton";

export default function CreateMedicalRecord() {
  const navigate = useNavigate()
  const [fieldMedicalRecord, setFieldMedicalRecord] = useState([{ key: "", value: "" }]);
  const [appointmentData, setAppointmentData] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    if (appointmentData === null) {
      // getAllAppointment()
      //   .then((response) => {
      //     setAppointmentData(response.data.data);
      //   })
      //   .catch((err) => {
      //     err.clientMessage = "Something went wrong";
      //     MySwal.fire({
      //       title: "Can't show Appointment",
      //       icon: "error",
      //     });
      //   });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function addFieldHandle(index) {
    setFieldMedicalRecord([...fieldMedicalRecord, { key: index, value: " " }]);
  }

  function removeFieldHandle(index) {
    let tempField = [...fieldMedicalRecord];
    tempField.splice(index, 1);
    setFieldMedicalRecord(tempField);
  }

  function editFieldHandle(index, keyInput, valueInput) {
    let tempField = [...fieldMedicalRecord];
    if (keyInput || valueInput) {
      let tempValue = {
        key: keyInput ? keyInput : fieldMedicalRecord[index].key,
        value: valueInput ? valueInput : fieldMedicalRecord[index].value,
      };

      tempField[index] = tempValue;
    }
    setFieldMedicalRecord(tempField);
  }

  function submitFieldHandle() {
    if (
      fieldMedicalRecord.length === 0 ||
      !fieldMedicalRecord[0].key ||
      !fieldMedicalRecord[0].value
    ) {
      MySwal.fire({
        title: "Medical Record Can't be Empty",
        icon: "error",
      });
    } else if (!selectedAppointment) {
      MySwal.fire({
        title: "Select Appointment First",
        icon: "error",
      });
    } else {
      dispatch(createMedicalRecordAction(appointmentData[selectedAppointment], fieldMedicalRecord)).then((result) => {
        navigate("/medical-record/list-medical-record");
      });
    }
  }

  return (
    <>
      <MDBox
        mx={2}
        mt={-3}
        py={3}
        px={2}
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="info"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <MDBox display="flex" alignItems="center" gap="20px">
          <BackButton to="/medical-record/list-medical-record" />
          <MDTypography variant="h6" color="white">
            Detail Medical Record
          </MDTypography>
        </MDBox>
        <Link to="/medical-record/create">
          <MDTypography variant="caption" color="text" fontWeight="medium">
            <MDButton variant="gradient" color="success">
              Create New
            </MDButton>
          </MDTypography>
        </Link>
      </MDBox>
      <div className="w-full flex flex-col justify-center items-center gap-[20px] px-[20px] my-[40px]">
        <div className="w-2/3  p-2 rounded-xl flex flex-col gap-[10px] relative">
          <MDInput
            id="appointment"
            select
            label="Select Appointment"
            onChange={(e) => setSelectedAppointment(e.target.value)}
            SelectProps={{
              native: true,
            }}
            fullWidth
            helperText="Please Select the Appointment first..."
          >
            <option value="" selected></option>
            {appointmentData?.map((option, index) => (
              <option key={option._id} value={index}>
                {`${option.appointment_type} ____ ${option.patient_detail.name} ____ ${dateFormater(
                  option.date_appointment
                )} ____ ${option.time_appointment} WIB`}
              </option>
            ))}
          </MDInput>
          <DynamicForm
            removeHandle={(index) => removeFieldHandle(index)}
            fieldList={fieldMedicalRecord}
            addHandle={(index) => addFieldHandle(index)}
            editHandle={(index, key, value) => editFieldHandle(index, key, value)}
            submitHandle={() => submitFieldHandle()}
          />
        </div>
      </div>
    </>
  );
}
