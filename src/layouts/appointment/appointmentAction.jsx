import { getAllAppointmentDatatable } from "_api/appointmentApi";
import { callTypes } from "_slices/appointmentSlice";
import { startCall } from "_slices/appointmentSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { catchError } from "_slices/appointmentSlice";
import { appointmentDatatable } from "_slices/appointmentSlice";
import { appointmentDetail } from "_slices/appointmentSlice";
import { getOneAppointment } from "_api/appointmentApi";
import { cancelAppointment } from "_api/appointmentApi";
import { updateStatusAppointment } from "_api/appointmentApi";
import { addMeetingLinkAppointment } from "_api/appointmentApi";
const MySwal = withReactContent(Swal);

export const datatable = (payload) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.list }));
  return getAllAppointmentDatatable(payload)
    .then((response) => {
      const { entities, totalCount } = response.data.data;
      dispatch(appointmentDatatable({ entities: entities, totalCount: totalCount }));
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show appointment",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.list }));
    });
};
export const detailAppointment = (appointmentId) => (dispatch) => {
  if (!appointmentId) {
    return dispatch(appointmentDetail({ appointment: undefined }));
  }
  dispatch(startCall({ callType: callTypes.action }));
  return getOneAppointment(appointmentId)
    .then((response) => {
      const data = response.data.data;
      dispatch(appointmentDetail({ appointment: data }));
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show appointment",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.action }));
    });
};

export const cancelAppointmentAction = (appointmentId) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.action }));
  return cancelAppointment(appointmentId)
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
        title: "Can't cancel appointment",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.action }));
    });
};

export const updateAppointmentAction = (appointmentId, req) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.action }));
  return updateStatusAppointment(appointmentId, req)
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
        title: "Can't update appointment",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.action }));
    });
};

export const addMeetingLinkAppointmentAction = (appointmentId, meetingLink) => (dispatch) => {
  const body = {
    link_meeting: meetingLink,
  };
  dispatch(startCall({ callType: callTypes.action }));
  return addMeetingLinkAppointment(appointmentId, body)
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
        title: "Can't update appointment",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.action }));
    });
};
