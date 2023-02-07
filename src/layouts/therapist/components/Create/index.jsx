import React from "react";

import MDBox from "components/MDBox";
import BackButton from "components/extend/Button/BackButton";
import MDTypography from "components/MDTypography";
import CreateForm from "./Form";
import { Card, Grid } from "@mui/material";

export default function MainCreate() {
  return (
    <MDBox pt={6} pb={3}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
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
              gap="20px"
              alignItems="center"
            >
              <BackButton to="/therapist/list-therapist" />
              <MDTypography variant="h6" color="white">
                Create Therapist
              </MDTypography>
            </MDBox>
            <div className="w-full flex flex-col justify-center items-center gap-[20px] px-[20px] my-[40px]">
              <div className="w-2/3  p-2 rounded-xl flex flex-col gap-[10px] relative ">
                <CreateForm />
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}
