import React from "react";
import DataTable from "components/extend/Tables/DataTable";
import orderTableData from "./data/orderTableData";

export default function ListTableOrder() {
  const { columns, rows } = orderTableData();
  return <DataTable table={{ columns, rows }} />;
}
