import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MDTypography from "components/MDTypography";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { dateFormater } from "helpers/DateHelpers";
import MDButton from "components/MDButton";
import EditMedicalRecordForm from "./EditMedicalRecordForm";
import MDBox from "components/MDBox";
import { Link } from "react-router-dom";
import BackButton from "components/extend/Button/BackButton";
import * as actions from "layouts/medicalRecord/MainAction";
import { useNavigate } from "react-router-dom";
import { Card, Grid } from "@mui/material";

export default function DetailMedicalRecord() {
  const [editMode, setEditMode] = useState(false);
  // Get Params

  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { obj } = useSelector(
    (state) => ({
      obj: state.medicalRecord.obj,
      actionLoading: state.medicalRecord.actionLoading,
    }),
    shallowEqual
  );

  const handleDelete = () => {
    if (window.confirm("are you sure to DELETE this Medical Record")) {
      dispatch(actions.deleteAction(params.id));
      navigate("/medical-record/list-medical-record");
    }
  };

  useEffect(() => {
    dispatch(actions.detailAction(params.id));

    return () => {
      dispatch(actions.detailAction(undefined));
    };
  }, [params.id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {obj && (
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
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
                  gap="20px"
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
                        {dateFormater(obj?.date)}
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
                        {`${obj?.time} WIB`}
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
                        {`${obj?.therapist_detail.name}`}
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
                        {obj?.patient_detail.name}
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
                        {obj?.patient_detail.phone_number}
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
                        {obj?.patient_detail.email}
                      </MDTypography>
                    </div>
                  </div>
                </div>
                <div className="w-full p-[20px] flex flex-col justify-center">
                  <MDTypography color="dark" fontSize="20px" fontWeight="bold">
                    Medical Record
                  </MDTypography>
                  {obj ? (
                    <EditMedicalRecordForm
                      editMode={editMode}
                      setEditMode={(value) => setEditMode(value)}
                      medicalRecord={obj ? obj : null}
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
                      <MDButton variant="outlined" onClick={() => handleDelete()} color="primary">
                        Delete
                      </MDButton>
                    ) : null}
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      )}
    </>
    // </div>
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
