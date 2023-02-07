import React, { useState } from "react";
import MDBox from "components/MDBox";
import BackButton from "components/extend/Button/BackButton";
import MDTypography from "components/MDTypography";
import NotificationForm from "./notificationForm";
import CategoryForm from "./categoryForm";
import WhatsappForm from "./whatsAppForm";

import MDButton from "components/MDButton";
import { Card, Grid } from "@mui/material";

export default function CreateNotification() {
  const [mode, setMode] = useState("notification");
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
              justifyContent="space-between"
              alignItems="center"
            >
              <MDBox display="flex" alignItems="center" gap="20px">
                <BackButton to="/notification/list-notification" />
                <MDTypography variant="h6" color="white">
                  Create Notification
                </MDTypography>
              </MDBox>
              <div className="flex gap-[10px]">
                <MDButton
                  variant="gradient"
                  onClick={() => setMode("category")}
                  color={mode === "category" ? "success" : "secondary"}
                >
                  Create Category
                </MDButton>
                <MDButton
                  variant="gradient"
                  onClick={() => setMode("notification")}
                  color={mode === "notification" ? "success" : "secondary"}
                >
                  Create Notification
                </MDButton>
                <MDButton
                  variant="gradient"
                  onClick={() => setMode("whatsapp")}
                  color={mode === "whatsapp" ? "success" : "secondary"}
                >
                  Whatsapp Message
                </MDButton>
              </div>
            </MDBox>

            <div className="w-full flex flex-col justify-center items-center gap-[20px] px-[20px] my-[40px]">
              <div className="w-2/3  p-2 rounded-xl flex flex-col gap-[10px] relative ">
                {mode === "notification" ? <NotificationForm /> : null}
                {mode === "category" ? <CategoryForm /> : null}
                {mode === "whatsapp" ? <WhatsappForm /> : null}
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}
