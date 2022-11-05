import React, { useEffect, useMemo } from "react";
import DataTable from "components/extend/Tables/DataTable";
import medicalRecordTableData from "./data/medicalRecordTableData";
import { dataTableMedicalRecord } from "layouts/medicalRecord/medicalRecordAction";
import { useDispatch, useSelector } from "react-redux";
import { useMedicalRecordUIContext } from "layouts/medicalRecord/medicalRecordUIContext";
import MDAvatar from "components/MDAvatar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";

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
    dispatch(dataTableMedicalRecord(medicalRecordUIProps.queryParams));
  }, [medicalRecordUIProps.queryParams]);

  const { columns, rows } = medicalRecordTableData(entities);

  return (
    <>
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
        <MDTypography variant="h6" color="white">
          Medical Record
        </MDTypography>
        <Link to="/medical-record/create">
          <MDTypography variant="caption" color="text" fontWeight="medium">
            <MDButton variant="gradient" color="success">
              Create New
            </MDButton>
          </MDTypography>
        </Link>
      </MDBox>
      <MDBox p={2}>
        <DataTable
          params={medicalRecordUIProps.queryParams}
          setParams={medicalRecordUIProps.setQueryParams}
          table={{ columns, rows }}
        />
      </MDBox>
    </>
  );
}
