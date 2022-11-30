import { getAllPatientDatatable } from "_api/patientApi";
import { callTypes } from "_slices/patientSlice";
import { startCall } from "_slices/patientSlice";
import { catchError } from "_slices/patientSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { patientDatatable } from "_slices/patientSlice";
import { patientDetail } from "_slices/patientSlice";
import { getOnePatient } from "_api/patientApi";
import { getAllAppointmentByIdUser } from "_api/appointmentApi";
import { deletePatient } from "_api/patientApi";
const MySwal = withReactContent(Swal);

export const datatablePatient = (payload) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.list }));
  return getAllPatientDatatable(payload)
    .then((response) => {
      const data = response.data.data;
      dispatch(patientDatatable({ entities: data.entities, totalCount: data.totalCount }));
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

export const detailPatient = (patientId) => (dispatch) => {
  if (!patientId) {
    return dispatch(patientDetail({ patient: undefined }));
  }
  dispatch(startCall({ callType: callTypes.action }));
  return getOnePatient(patientId)
    .then((response) => {
      const data = response.data.data;
      dispatch(patientDetail({ patient: data }));
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show detail patient",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.action }));
    });
};

export const deletePatientAction = (patientId) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.action }));
  return deletePatient(patientId)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success",
        text: data.message,
        icon: "success",
      });
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show detail patient",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.action }));
    });
};

export const getAllAppointmentByIdUserAction = (idUser) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.action }));
  return getAllAppointmentByIdUser(idUser)
    .then((response) => {
      const data = response.data.data;
      console.log(data);
      return data;
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show detail Appointment patient",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.action }));
    });
};
