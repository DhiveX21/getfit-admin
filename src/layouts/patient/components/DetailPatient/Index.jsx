import { Divider, Grid } from "@mui/material";
import MDBox from "components/MDBox";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailAccount from "./partial/DetailAccount";
import DetailProfile from "./partial/DetailProfile";
import Header from "./partial/Header";
import PlatformSettings from "./partial/PlatformSettings";
import * as actions from "../../patientAction";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function DetailPatient() {
  let navigate = useNavigate();
  const [patientAppointment, setPatientAppointment] = useState();

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

        <MDTypography variant="caption" color="text" fontWeight="medium">
          <MDButton variant="gradient" color="primary" onClick={() => handleDeletePatient()}>
            delete
          </MDButton>
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
        <MDBox width="70%">
          <div className="flex bg-white rounded-lg p-[15px] opacity-30">
            <div className="w-full flex flex-col gap-[30px]">
              <div className="w-full">
                <MDTypography variant="h6" color="dark">
                  Related Menu
                </MDTypography>
              </div>
              <div className="w-full flex flex-col bg-slate-200 p-3 rounded-lg">
                <div className="w-full">
                  <MDTypography variant="h6" color="dark">
                    Appointment
                  </MDTypography>
                </div>
                <div className="flex flex-col gap-[10px] max-h-[200px] overflow-y-scroll">
                  <div className="bg-slate-100 w-full rounded-lg p-1 flex gap-[20px] justify-between items-center">
                    <h4 className="text-[18px]">appointment 1</h4>
                    <div className="flex gap-[10px]">
                      <MDButton variant="gradient" color="info">
                        Detail
                      </MDButton>
                    </div>
                  </div>
                  <div className="bg-slate-100 w-full rounded-lg p-1 flex gap-[20px] justify-between items-center">
                    <h4 className="text-[18px]">appointment 1</h4>
                    <div className="flex gap-[10px]">
                      <MDButton variant="gradient" color="info">
                        Detail
                      </MDButton>
                    </div>
                  </div>
                  <div className="bg-slate-100 w-full rounded-lg p-1 flex gap-[20px] justify-between items-center">
                    <h4 className="text-[18px]">appointment 1</h4>
                    <div className="flex gap-[10px]">
                      <MDButton variant="gradient" color="info">
                        Detail
                      </MDButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col bg-slate-200 p-3 rounded-lg">
                <div className="w-full">
                  <MDTypography variant="h6" color="dark">
                    Medical Record
                  </MDTypography>
                </div>
                <div className="flex flex-col gap-[10px] max-h-[200px] overflow-y-scroll">
                  <div className="bg-slate-100 w-full rounded-lg p-1 flex gap-[20px] justify-between items-center">
                    <h4 className="text-[18px]">Record1</h4>
                    <div className="flex gap-[10px]">
                      <MDButton variant="gradient" color="info">
                        Detail
                      </MDButton>
                    </div>
                  </div>
                  <div className="bg-slate-100 w-full rounded-lg p-1 flex gap-[20px] justify-between items-center">
                    <h4 className="text-[18px]">Record1</h4>
                    <div className="flex gap-[10px]">
                      <MDButton variant="gradient" color="info">
                        Detail
                      </MDButton>
                    </div>
                  </div>
                  <div className="bg-slate-100 w-full rounded-lg p-1 flex gap-[20px] justify-between items-center">
                    <h4 className="text-[18px]">Record1</h4>
                    <div className="flex gap-[10px]">
                      <MDButton variant="gradient" color="info">
                        Detail
                      </MDButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MDBox>
      </MDBox>
    </>
  );
}
