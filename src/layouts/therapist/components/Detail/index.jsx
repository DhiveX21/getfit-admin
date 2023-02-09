import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MDTypography from "components/MDTypography";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
// import { dateFormater } from "helpers/DateHelpers";
import MDButton from "components/MDButton";
// import EditMedicalRecordForm from "./EditMedicalRecordForm";
import MDBox from "components/MDBox";
import { Link } from "react-router-dom";
import BackButton from "components/extend/Button/BackButton";
import * as actions from "layouts/therapist/MainAction";
import { useNavigate } from "react-router-dom";
import { Card, Grid } from "@mui/material";
import { therapistAPI } from "_api";
import DetailSection from "./DetailSection";
import EditSection from "./EditSection";

export default function MainDetail() {
  const [editMode, setEditMode] = useState(false);
  const [evaluations, setEvaluations] = useState(undefined);
  // Get Params

  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { obj } = useSelector(
    (state) => ({
      obj: state.therapist.obj,
      actionLoading: state.therapist.actionLoading,
    }),
    shallowEqual
  );

  const handleDelete = () => {
    if (window.confirm("are you sure to DELETE this Therapist")) {
      dispatch(actions.deleteAction(params.id));
      navigate("/therapist/list-therapist");
    }
  };

  useEffect(() => {
    dispatch(actions.detailAction(params.id)).then((result) => {
      therapistAPI.getAllEvaluationByUserId(result.user.id).then((response) => {
        const data = response.data.data;
        setEvaluations(data);
      });
    });

    return () => {
      dispatch(actions.detailAction(undefined));
    };
  }, [params.id]);

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
                      Detail Therapist
                    </MDTypography>
                  </MDBox>
                  <Link to="/therapist/create">
                    <MDTypography variant="caption" color="text" fontWeight="medium">
                      <MDButton variant="gradient" color="success">
                        Create New
                      </MDButton>
                    </MDTypography>
                  </Link>
                </MDBox>
                {!editMode && obj && <DetailSection obj={obj} evaluations={evaluations} />}
                {editMode && obj && (
                  <div className="w-full flex flex-col justify-center items-center gap-[20px] px-[20px] my-[40px]">
                    <div className="w-2/3  p-2 rounded-xl flex flex-col gap-[10px] relative ">
                      <EditSection obj={obj} setEditMode={setEditMode} editMode={editMode} />
                    </div>
                  </div>
                )}

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

MainDetail.defaultProps = {
  appointment_date: "2022-08-11T00:00:00.000Z",
  appointment_time: "19.00",
  physiotherapy: "test",
};

MainDetail.propTypes = {
  appointment_date: PropTypes.string,
  appointment_time: PropTypes.string,
  physiotherapy: PropTypes.string,
};
