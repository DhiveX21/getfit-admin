import React from "react";
import DataTable from "components/extend/Tables/DataTable";
import appointmentTableData from "./data/appointmentTableData";

export default function ListTableAppointment() {
  const { columns, rows } = appointmentTableData();
  return <DataTable table={{ columns, rows }} />;
}
