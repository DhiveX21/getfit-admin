import React from "react";
import MDBox from "components/MDBox";
import AppointmentForm from "./appointmentForm";
import Header from "../DetailAppointment/partial/Header";
import { Card, Grid } from "@mui/material";

export default function CreateAppointment() {
  return (
    <>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <Header title="Create Apppointment" />
              <div className="w-full flex flex-col justify-center items-center gap-[20px] px-[20px] my-[40px]">
                <div className="w-2/3  p-2 rounded-xl flex flex-col gap-[10px] relative ">
                  <AppointmentForm />
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </>
  );
}
