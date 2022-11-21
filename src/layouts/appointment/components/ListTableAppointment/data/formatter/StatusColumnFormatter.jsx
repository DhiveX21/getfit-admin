import MDBadge from "components/MDBadge";
import React from "react";

export const StatusColumnFormatter = ({ status }) => {
  return (
    <MDBadge
      badgeContent={status ? status : ""}
      color={status === "cancel" ? "primary" : status === "finding" ? "info" : "success"}
      variant="gradient"
      size="sm"
    />
  );
};
