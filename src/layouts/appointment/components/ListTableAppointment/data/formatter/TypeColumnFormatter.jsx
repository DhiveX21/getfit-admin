import MDBadge from "components/MDBadge";
import React from "react";

export const TypeColumnFormatter = ({ title }) => {
  return <MDBadge badgeContent={title} color="primary" variant="gradient" size="sm" />;
};
