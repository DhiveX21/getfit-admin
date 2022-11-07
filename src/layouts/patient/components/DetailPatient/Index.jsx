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

export default function DetailPatient() {
  // Get Params
  const params = useParams();

  const dispatch = useDispatch();
  const { patient } = useSelector(
    (state) => ({
      patient: state.patient.patient,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.detailPatient(params.id));

    return () => {
      dispatch(actions.detailPatient(undefined));
    };
  }, [params.id, dispatch]);

  return (
    <>
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4}>
              {/* <PlatformSettings /> */}
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <DetailProfile
                address={patient?.address}
                fullName={patient?.name}
                phoneNumber={patient?.user.phone_number}
                email={patient?.user.email}
              />

              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} xl={4}>
              <DetailAccount />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
    </>
  );
}
