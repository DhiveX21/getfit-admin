import React, { useMemo } from "react";
import { useState } from "react";
import DynamicForm from "./DynamicForm";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { dateFormater } from "helpers/DateHelpers";
import MDInput from "components/MDInput";
import MDBox from "components/MDBox";
import { useNavigate } from "react-router-dom";
import { useMainUIContext } from "layouts/medicalRecord/MainUIContext";
import * as actions from "layouts/medicalRecord/MainAction";
import { requestFormat } from "layouts/medicalRecord/MainUIHelper";
import { Card, Grid } from "@mui/material";
import Header from "../DetailMedicalRecord/partial/Header";

export default function CreateMedicalRecord() {
  const navigate = useNavigate();
  const [fieldMedicalRecord, setFieldMedicalRecord] = useState([{ key: "", value: "" }]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);

  const mainUIContext = useMainUIContext();
  const { appointmentData } = useMemo(() => {
    return {
      appointmentData: mainUIContext.appointmentData,
    };
  }, [mainUIContext]);

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
      dispatch(
        actions.createAction(
          requestFormat(appointmentData[selectedAppointment], fieldMedicalRecord)
        )
      ).then((result) => {
        navigate("/medical-record/list-medical-record");
      });
    }
  }

  return (
    <>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <Header title="Create Medical Record" />
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
                        {`${option.appointment_type} ____ ${
                          option.patient_detail.name
                        } ____ ${dateFormater(option.date_appointment)} ____ ${
                          option.time_appointment
                        } WIB`}
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
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </>
  );
}
