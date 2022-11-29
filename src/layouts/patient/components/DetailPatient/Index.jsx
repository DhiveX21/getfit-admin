import MDBox from "components/MDBox";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailProfile from "./partial/DetailProfile";
import * as actions from "../../patientAction";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import { useNavigate } from "react-router-dom";
import RelatedMenu from "./partial/RelatedMenu";
import EditForm from "./partial/editForm";

export default function DetailPatient() {
  let navigate = useNavigate();
  const [patientAppointment, setPatientAppointment] = useState();
  const [editMode, setEditMode] = useState(false);

  // Get Params
  const params = useParams();

  const dispatch = useDispatch();
  const { patient } = useSelector(
    (state) => ({
      patient: state.patient.patient,
    }),
    shallowEqual
  );

  const handleDeletePatient = () => {
    if (window.confirm("Are you sure Delete this patient?")) {
      dispatch(actions.deletePatientAction(params.id));
      navigate("/patient/list-patient");
    }
  };

  useEffect(() => {
    dispatch(actions.detailPatient(params.id));

    return () => {
      dispatch(actions.detailPatient(undefined));
    };
  }, [params.id, dispatch]);

  // useEffect(() => {
  //   if (patient?.user_id) {
  //     const appointmentData = dispatch(actions.getAllAppointmentByIdUserAction(patient?.user_id));
  //     setPatientAppointment(appointmentData);
  //   }
  // }, [patient]);
  // console.log(patientAppointment);
  return (
    <>
      <MDBox
        mx={2}
        mt={3}
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
        <MDTypography variant="h6" color="white">
          Detail {patient?.name}
        </MDTypography>

        <MDTypography variant="caption" color="text" fontWeight="medium" display="flex" gap="20px">
          <MDButton variant="gradient" color="warning" onClick={() => setEditMode(!editMode)}>
            {editMode ? "Cancel Edit" : "EDIT"}
          </MDButton>
          {!editMode ? (
            <MDButton variant="gradient" color="primary" onClick={() => handleDeletePatient()}>
              delete
            </MDButton>
          ) : null}
        </MDTypography>
      </MDBox>
      <MDBox p={2} display="flex" gap="20px">
        <MDBox width="30%" height="100%">
          <DetailProfile
            address={patient?.address}
            fullName={patient?.name}
            phoneNumber={patient?.user.phone_number}
            email={patient?.user.email}
          />
        </MDBox>
        {editMode ? <EditForm patientData={patient} /> : <RelatedMenu />}
      </MDBox>
    </>
  );
}
