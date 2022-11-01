import React, { useEffect, useMemo } from "react";
import DataTable from "components/extend/Tables/DataTable";
import medicalRecordTableData from "./data/medicalRecordTableData";
import { dataTableMedicalRecord } from "layouts/medicalRecord/medicalRecordAction";
import { useDispatch, useSelector } from "react-redux";
import { useMedicalRecordUIContext } from "layouts/medicalRecord/medicalRecordUIContext";
import MDAvatar from "components/MDAvatar";

export default function ListTableMedicalRecord() {
  const { currentState } = useSelector((state) => ({ currentState: state.medicalRecord }));
  const { totalCount, entities, listLoading } = currentState;
  const dispatch = useDispatch();
  const medicalRecordUIContext = useMedicalRecordUIContext();
  const medicalRecordUIProps = useMemo(() => {
    return {
      queryParams: medicalRecordUIContext.queryParams,
      setQueryParams: medicalRecordUIContext.setQueryParams,
    };
  }, [medicalRecordUIContext]);

  useEffect(() => {
    console.log("masuk");
    dispatch(dataTableMedicalRecord(medicalRecordUIProps.queryParams));
  }, [medicalRecordUIProps.queryParams]);

  const { columns, rows } = medicalRecordTableData(entities);

  return (
    <DataTable
      params={medicalRecordUIProps.queryParams}
      setParams={medicalRecordUIProps.setQueryParams}
      table={{ columns, rows }}
    />
  );
}
