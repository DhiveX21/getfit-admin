import MDBadge from "components/MDBadge";
import React from "react";
import { appointmentStatusStep } from "_shareVar";

export const StatusColumnFormatter = ({ status }) => {
  const { value } = appointmentStatusStep.find((item,index) => item.key === status)
  return (
    <MDBadge
      badgeContent={value ? value : ""}
      color={status === "cancel" ? "primary" : status === "finding" ? "info" : "success"}
      variant="gradient"
      size="sm"
    />
  );
};
