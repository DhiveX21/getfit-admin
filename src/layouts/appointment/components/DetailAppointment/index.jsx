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

            <div className="w-full p-[20px] flex flex-col justify-center">
              <MDTypography fontSize="20px" fontWeight="bold">
                Progress Status
              </MDTypography>
              <div className="w-full flex gap-[10px]">
                <div className="w-full bg-green-500 rounded-xl p-[10px]">
                  <MDTypography width="60%" color="white" fontSize="14px">
                    Looking For Physio
                  </MDTypography>
                </div>
                <div className="w-full bg-green-500 rounded-xl p-[10px]">
                  <MDTypography width="60%" color="white" fontSize="14px">
                    Physio Approval
                  </MDTypography>
                </div>
                <div className="w-full bg-green-500 rounded-xl p-[10px]">
                  <MDTypography width="60%" color="white" fontSize="14px">
                    Waiting the Appointment time
                  </MDTypography>
                </div>
                <div className="w-full bg-blue-500 animate-pulse rounded-xl p-[10px]">
                  <MDTypography width="60%" color="white" fontSize="14px">
                    In Treatment
                  </MDTypography>
                </div>
                <div className="w-full bg-gray-500 opacity-50 rounded-xl p-[10px]">
                  <MDTypography width="60%" color="white" fontSize="14px">
                    Finish Treatment
                  </MDTypography>
                </div>
                <div className="w-full bg-gray-500 opacity-50 rounded-xl p-[10px]">
                  <MDTypography width="60%" color="white" fontSize="14px">
                    Feedback
                  </MDTypography>
                </div>
              </div>
            </div>

            <div className="w-full p-[20px] flex flex-col justify-center">
              <MDTypography fontSize="20px" fontWeight="bold">
                Action
              </MDTypography>
              <div className="w-full flex gap-[10px]">
                <MDButton variant="gradient" color="info">
                  To Next Step
                </MDButton>
                <MDButton variant="gradient" color="primary">
                  Cancel
                </MDButton>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}
