import React from "react";
import DataTable from "components/extend/Tables/DataTable";
import medicalRecordTableData from "./data/medicalRecordTableData";

export default function ListTableMedicalRecord() {
  const { columns, rows } = medicalRecordTableData();
  return <DataTable table={{ columns, rows }} />;
}
