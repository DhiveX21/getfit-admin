// import { useForm } from "react-hook-form";
// import MDTypography from "components/MDTypography";
// import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
// import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

export default function MedicalRecordCreateForm() {
  const patientList = [
    {
      value: "ardhi",
      label: "ardhi",
    },
    {
      value: "ardhi1",
      label: "ardhi1",
    },
    {
      value: "ardhi2",
      label: "ardhi2",
    },
    {
      value: "ardhi3",
      label: "ardhi4",
    },
  ];

  const typeAppointmentList = [
    {
      value: "TelePhysio",
      label: "TelePhysio",
    },
    {
      value: "InClinic",
      label: "InClinic",
    },
    {
      value: "HomeCare",
      label: "HomeCare",
    },
    {
      value: "Webinars",
      label: "Webinars",
    },
  ];

  const appointmentList = [
    {
      value: "22 Desember 2022 : 16:00 WIB",
      label: "22 Desember 2022 : 16:00 WIB",
    },
    {
      value: "12 Desember 2022 : 16:00 WIB",
      label: "12 Desember 2022 : 16:00 WIB",
    },
    {
      value: "11 Desember 2022 : 16:00 WIB",
      label: "11 Desember 2022 : 16:00 WIB",
    },
    {
      value: "09 Desember 2022 : 16:00 WIB",
      label: "09 Desember 2022 : 16:00 WIB",
    },
  ];

  const [patient, setPatient] = useState();
  const [typeAppointment, setTypeAppointment] = useState();
  const [appointment, setAppointment] = useState();
  const [medicalComplaint, setMedicalComplaint] = useState();
  const [RPS, setRPS] = useState();
  const [RPD, setRPD] = useState();
  const [RPK, setRPK] = useState();

  useEffect(() => {
    console.log(patient);
    console.log(typeAppointment);
    console.log(appointment);
    console.log(medicalComplaint);
    console.log(RPS);
    console.log(RPD);
    console.log(RPK);
  }, [patient, typeAppointment, appointment, medicalComplaint, RPS, RPD, RPK]);

  return (
    <MDBox pt={3} pb={3} display="flex" justifyContent="center">
      <div className="flex flex-col gap-[20px] w-1/2">
        <MDInput
          id="typeAppointmentSelect"
          select
          label="Select Patient"
          value={typeAppointment}
          onChange={(e) => setTypeAppointment(e.target.value)}
          SelectProps={{
            native: true,
          }}
          fullWidth
          helperText="Please Select the patient first..."
        >
          {typeAppointmentList.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </MDInput>
        <MDInput
          id="patientSelect"
          select
          label="Select Patient"
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
          SelectProps={{
            native: true,
          }}
          fullWidth
          helperText="Please Select the patient first..."
        >
          {patientList.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </MDInput>
        <MDInput
          id="appointmentSelect"
          select
          label="Select Appointment"
          value={appointment}
          onChange={(e) => setAppointment(e.target.value)}
          SelectProps={{
            native: true,
          }}
          fullWidth
          helperText="Please Select the patient first..."
        >
          {appointmentList.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </MDInput>
        <MDInput
          fullWidth
          required
          id="medicalComplaint"
          label="Medical Complaint"
          helperText="Tuliskan Keluhan Pasien"
          onChange={(e) => {
            setMedicalComplaint(e.target.value);
          }}
          multiline
          rows={5}
        />
        <MDInput
          fullWidth
          required
          id="RPS"
          label="RPS"
          helperText="RPS"
          onChange={(e) => {
            setRPS(e.target.value);
          }}
          multiline
          rows={5}
        />
        <MDInput
          fullWidth
          required
          id="RPD"
          label="RPD"
          helperText="RPD"
          onChange={(e) => {
            setRPD(e.target.value);
          }}
          multiline
          rows={5}
        />
        <MDInput
          fullWidth
          required
          id="RPK"
          label="RPK"
          helperText="RPK"
          onChange={(e) => {
            setRPK(e.target.value);
          }}
          multiline
          rows={5}
        />

        <MDButton variant="gradient" color="info">
          Submit
        </MDButton>
      </div>
    </MDBox>
  );
}
