import React from "react";
import DataTable from "components/extend/Tables/DataTable";
import patientTableData from "./data/patientTableData";

export default function ListTablePatient() {
  const { columns, rows } = patientTableData();
  return <DataTable table={{ columns, rows }} />;
}
