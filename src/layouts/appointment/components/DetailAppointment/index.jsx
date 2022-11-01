import { Card, Grid } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AppointmentDetail from "./partial/AppointmentDetail";
import Header from "./partial/Header";
import PatientDetail from "./partial/PatientDetail";
import * as actions from "../../appointmentAction";
import ProgressStatus from "./partial/ProgressStatus";
import { appointmentStatusStep } from "_shareVar";

export default function DetailAppointment() {
  // Get Params
  const params = useParams();

  // Redux
  const dispatch = useDispatch();
  const { appointment } = useSelector(
    (state) => ({
      appointment: state.appointment.appointment,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.detailAppointment(params?.id));

    return () => {
      dispatch(actions.detailAppointment(undefined));
    };
  }, [params.id, dispatch]);

  const cancelAppointment = () => {
    dispatch(actions.cancelAppointmentAction(params?.id)).then((response) => {
      dispatch(actions.detailAppointment(params?.id));
    });
  };
  const updateAppointment = () => {
    const currentStepIndex = appointmentStatusStep.findIndex((item, index) => {
      if (appointment?.status == item.key) {
        return true;
      }
    });
    const nextStep = appointmentStatusStep[currentStepIndex + 1];
    dispatch(actions.updateAppointmentAction(params?.id, { status: nextStep.key })).then(
      (response) => {
        dispatch(actions.detailAppointment(params?.id));
      }
    );
  };

  return (
    <MDBox pt={6} pb={3}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <Header title="Appointment Detail" />
            <div className="flex">
              <PatientDetail
                name={appointment?.patient_detail?.name}
                address={appointment?.address}
                phone_number={appointment?.patient_detail?.phone_number}
              />

              <AppointmentDetail
                appointment_date={appointment?.date_appointment}
                appointment_time={appointment?.time_appointment}
                physiotherapy={appointment?.therapist_detail?.name}
              />
            </div>

            <ProgressStatus status={appointment?.status} />
            {appointment?.status != "cancel" ? (
              <div className="w-full p-[20px] flex flex-col justify-center">
                <MDTypography fontSize="20px" fontWeight="bold">
                  Action
                </MDTypography>
                <div className="w-full flex gap-[10px]">
                  <MDButton variant="gradient" color="info" onClick={updateAppointment}>
                    To Next Step
                  </MDButton>
                  <MDButton variant="gradient" color="primary" onClick={cancelAppointment}>
                    Cancel
                  </MDButton>
                </div>
              </div>
            ) : (
              ""
            )}
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}
