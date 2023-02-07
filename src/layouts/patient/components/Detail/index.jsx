import MDBox from "components/MDBox";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailProfile from "./partial/DetailProfile";
import * as actions from "../../MainAction";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import { useNavigate } from "react-router-dom";
import RelatedMenu from "./partial/RelatedMenu";
import EditForm from "./partial/editForm";
import BackButton from "components/extend/Button/BackButton";

export default function MainDetail() {
  let navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);

  // Get Params
  const params = useParams();
  
  const dispatch = useDispatch();
  const { obj, appointments, records } = useSelector(
    (state) => ({
      obj: state.patient.obj,
      appointments: state.patient.appointment.some,
      records: state.patient.record.some,
    }),
    shallowEqual
  );

  const handleDelete = () => {
    if (window.confirm("Are you sure Delete this patient")) {
      dispatch(actions.deleteAction(params.id));
      navigate("/patient/list-patient");
    }
  };

  useEffect(() => {
    dispatch(actions.getOneAction(params.id)).then((result) => {
      dispatch(actions.getAllAppointmentByIdUserAction(result?.user_id));
      dispatch(actions.getAllMedicalRecordByIdUserAction(result?.user_id));
    });

    return () => {
      dispatch(actions.getOneAction(undefined));
    };
  }, [params.id, dispatch]);
  
  return (
    <>
      {obj && (
        <>
          <MDBox
            mx={2}
            mt={3}
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
              <BackButton to="/patient/list-patient" />
              <MDTypography variant="h6" color="white">
                Detail {obj.name}
              </MDTypography>
            </MDBox>

            <MDTypography
              variant="caption"
              color="text"
              fontWeight="medium"
              display="flex"
              gap="20px"
            >
              <MDButton variant="gradient" color="warning" onClick={() => setEditMode(!editMode)}>
                {editMode ? "Cancel Edit" : "EDIT"}
              </MDButton>
              {!editMode ? (
                <MDButton variant="gradient" color="primary" onClick={() => handleDelete()}>
                  delete
                </MDButton>
              ) : null}
            </MDTypography>
          </MDBox>
          <MDBox p={2} display="flex" gap="20px">
            <MDBox width="30%" height="100%">
              <DetailProfile
                address={obj.address}
                fullName={obj.name}
                phoneNumber={obj.user.phone_number}
                email={obj.user.email}
                birth_date={obj.birth_date}
                age={obj.age}
              />
            </MDBox>
            {editMode ? (
              <EditForm patientData={obj} />
            ) : (
              <RelatedMenu appointments={appointments} records={records} />
            )}
          </MDBox>
        </>
      )}
    </>
  );
}
