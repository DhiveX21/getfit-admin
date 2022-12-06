import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MDTypography from "components/MDTypography";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import * as actions from "../../medicalRecordAction";
import { dateFormater } from "helpers/DateHelpers";
import MDButton from "components/MDButton";
import EditMedicalRecordForm from "./EditMedicalRecordForm";
import MDBox from "components/MDBox";
import { Link } from "react-router-dom";
import BackButton from "components/extend/Button/BackButton";
import { deleteMedicalRecordAction } from "../../medicalRecordAction";
import { useNavigate } from "react-router-dom";

export default function DetailMedicalRecord() {
  const [editMode, setEditMode] = useState(false);
  // Get Params

  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { medicalRecord } = useSelector(
    (state) => ({
      medicalRecord: state.medicalRecord.medicalRecord,
      medicalRecordActionLoading: state.medicalRecord.actionLoading,
    }),
    shallowEqual
  );

  const handleDeleteMedicalRecord = () => {
    if (window.confirm("are you sure to DELETE this Medical Record")) {
      dispatch(deleteMedicalRecordAction(params.id));
      navigate("/medical-record/list-medical-record");
    }
  };

  useEffect(() => {
    dispatch(actions.detailMedicalRecord(params.id));

    return () => {
      dispatch(actions.detailMedicalRecord(undefined));
    };
  }, [params.id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col">
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
          <BackButton to="/medical-record/list-medical-record" />
          <MDTypography variant="h6" color="white">
            Detail Medical Record
          </MDTypography>
        </MDBox>
        <Link to="/medical-record/create">
          <MDTypography variant="caption" color="text" fontWeight="medium">
            <MDButton variant="gradient" color="success">
              Create New
            </MDButton>
          </MDTypography>
        </Link>
      </MDBox>
      <div className="flex">
        <div className="w-1/2 p-[20px]">
          <MDTypography fontSize="20px" fontWeight="bold">
            Appointment Detail
          </MDTypography>

          <div className=" flex gap-[10px] ">
            <MDTypography width="40%" color="text" fontSize="14px">
              Appointment Date
            </MDTypography>
            <MDTypography width="10%" color="text" fontSize="14px">
              :
            </MDTypography>
            <MDTypography width="50%" color="text" fontSize="14px">
              {dateFormater(medicalRecord?.date)}
            </MDTypography>
          </div>
          <div className=" flex gap-[10px] ">
            <MDTypography width="40%" color="text" fontSize="14px">
              Appointment Hours
            </MDTypography>
            <MDTypography width="10%" color="text" fontSize="14px">
              :
            </MDTypography>
            <MDTypography width="50%" color="text" fontSize="14px">
              {`${medicalRecord?.time} WIB`}
            </MDTypography>
          </div>
          <div className=" flex gap-[10px] ">
            <MDTypography width="40%" color="text" fontSize="14px">
              Physiotherapy
            </MDTypography>
            <MDTypography width="10%" color="text" fontSize="14px">
              :
            </MDTypography>
            <MDTypography width="50%" color="text" fontSize="14px">
              {`${medicalRecord?.therapist_detail.name}`}
            </MDTypography>
          </div>
        </div>
        <div className="w-1/2 p-[20px]">
          <MDTypography fontSize="20px" fontWeight="bold">
            Patient Detail
          </MDTypography>

          <div className=" flex gap-[10px] ">
            <MDTypography width="40%" color="text" fontSize="14px">
              Name
            </MDTypography>
            <MDTypography width="10%" color="text" fontSize="14px">
              :
            </MDTypography>
            <MDTypography width="50%" color="text" fontSize="14px">
              {medicalRecord?.patient_detail.name}
            </MDTypography>
          </div>
          <div className=" flex gap-[10px] ">
            <MDTypography width="40%" color="text" fontSize="14px">
              Phone Number
            </MDTypography>
            <MDTypography width="10%" color="text" fontSize="14px">
              :
            </MDTypography>
            <MDTypography width="50%" color="text" fontSize="14px">
              {medicalRecord?.patient_detail.phone_number}
            </MDTypography>
          </div>
          <div className=" flex gap-[10px] ">
            <MDTypography width="40%" color="text" fontSize="14px">
              Email
            </MDTypography>
            <MDTypography width="10%" color="text" fontSize="14px">
              :
            </MDTypography>
            <MDTypography width="50%" color="text" fontSize="14px">
              {medicalRecord?.patient_detail.email}
            </MDTypography>
          </div>
        </div>
      </div>
      <div className="w-full p-[20px] flex flex-col justify-center">
        <MDTypography color="dark" fontSize="20px" fontWeight="bold">
          Medical Record
        </MDTypography>
        {medicalRecord ? (
          <EditMedicalRecordForm
            editMode={editMode}
            setEditMode={(value) => setEditMode(value)}
            medicalRecord={medicalRecord ? medicalRecord : null}
          />
        ) : null}
      </div>

      <div className="w-full p-[20px] flex flex-col justify-center">
        <MDTypography color="dark" fontSize="20px" fontWeight="bold">
          Action
        </MDTypography>
        <div className="w-full flex gap-[10px]">
          <MDButton
            variant="gradient"
            onClick={() => setEditMode(!editMode)}
            color={editMode ? "primary" : "warning"}
          >
            {editMode ? "Cancel Edit" : "Edit"}
          </MDButton>
          {!editMode ? (
            <MDButton
              variant="outlined"
              onClick={() => handleDeleteMedicalRecord()}
              color="primary"
            >
              Delete
            </MDButton>
          ) : null}
        </div>
      </div>
    </div>
  );
}

DetailMedicalRecord.defaultProps = {
  appointment_date: "2022-08-11T00:00:00.000Z",
  appointment_time: "19.00",
  physiotherapy: "test",
};

DetailMedicalRecord.propTypes = {
  appointment_date: PropTypes.string,
  appointment_time: PropTypes.string,
  physiotherapy: PropTypes.string,
};
