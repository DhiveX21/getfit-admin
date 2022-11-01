import { getAllPatientDatatable } from "_api/patientApi";
import { callTypes } from "_slices/patientSlice";
import { startCall } from "_slices/patientSlice";
import { catchError } from "_slices/patientSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { medicalRecordDataTable } from "_slices/medicalRecordSlice";
import { getAllMedicalRecordsDatatable } from "_api/medicalRecordApi";
const MySwal = withReactContent(Swal);

export const dataTableMedicalRecord = (payload) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.list }));
  return getAllMedicalRecordsDatatable(payload)
    .then((response) => {
      const data = response.data.data;
      dispatch(medicalRecordDataTable({ entities: data.entities, totalCount: data.totalCount }));
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show patient",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.list }));
    });
};
