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
import * as actions from "layouts/appointment/MainAction";
import ProgressStatus from "./partial/ProgressStatus";
import { appointmentStatusStep } from "_shareVar";
import { useNavigate } from "react-router-dom";

export default function DetailAppointment() {
  const navigate = useNavigate();
  // Get Params
  const params = useParams();

  // Redux
  const dispatch = useDispatch();
  const { obj } = useSelector(
    (state) => ({
      obj: state.appointment.obj,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.detailAction(params?.id));

    return () => {
      dispatch(actions.detailAction(undefined));
    };
  }, [params.id, dispatch]);

  const cancelAppointment = () => {
    if (window.confirm("are you sure to CANCEL this appointment?")) {
      dispatch(actions.cancelAction(params?.id)).then((response) => {
        dispatch(actions.detailAction(params?.id));
      });
    }
  };

  const updateAppointment = () => {
    if (window.confirm("are you sure to UPDATE this appointment?")) {
      const currentStepIndex = appointmentStatusStep.findIndex((item, index) => {
        if (obj?.status === item.key) {
          return true;
        }
        return false;
      });
      const nextStep = appointmentStatusStep[currentStepIndex + 1];
      dispatch(actions.updateAction(params?.id, { status: nextStep.key })).then((response) => {
        dispatch(actions.detailAction(params?.id));
      });
    }
  };
  const deleteAppointment = () => {
    if (window.confirm("are you sure to DELETE this appointment?")) {
      dispatch(actions.deleteAction(params?.id));
      navigate("/appointment/list-appointment");
    }
  };
  
  return (
    <>
      {obj && (
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <Header title="Appointment Detail" />
                <div className="flex">
                  <PatientDetail
                    name={obj?.patient_detail?.name}
                    address={obj?.address}
                    phone_number={obj?.patient_detail?.phone_number}
                  />

                  <AppointmentDetail
                    appointment_date={obj?.date_appointment}
                    appointment_time={obj?.time_appointment}
                    physiotherapy={obj?.therapist_detail?.name}
                    complaint={obj?.complaint}
                  />
                </div>

                <ProgressStatus
                  type={obj?.appointment_type}
                  linkMeeting={obj?.link_meeting}
                  status={obj?.status}
                />
                <div className="w-full p-[20px] flex flex-col justify-center">
                  <MDTypography fontSize="20px" fontWeight="bold">
                    Action
                  </MDTypography>
                  <div className="w-full flex gap-[10px]">
                    {obj?.status !== "cancel" && obj?.status !== "complete" ? (
                      <>
                        <MDButton variant="gradient" color="info" onClick={updateAppointment}>
                          To Next Step
                        </MDButton>
                        <MDButton variant="gradient" color="primary" onClick={cancelAppointment}>
                          Cancel
                        </MDButton>
                      </>
                    ) : (
                      ""
                    )}
                    <MDButton variant="outlined" color="primary" onClick={deleteAppointment}>
                      Delete
                    </MDButton>
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      )}
    </>
  );
}
